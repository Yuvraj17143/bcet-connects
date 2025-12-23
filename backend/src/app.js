// backend/src/app.js
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const routes = require("./routes");
const errorHandler = require("./middleware/errorHandler");
const { generalLimiter } = require("./middleware/rateLimiter");
const sanitizeInputs = require("./middleware/sanitizeInputs");
const ApiError = require("./utils/ApiError");
const logger = require("./utils/logger");
const { PORT } = require("./config/env");

const app = express();

/* ---------------------------- Security headers --------------------------- */
app.use(helmet());

/* ---------------------------- CORS (FIXED) ------------------------------- */
/**
 * Normalize allowed origins:
 * - remove trailing slash
 * - allow comma-separated CLIENT_URL
 */
const ALLOWED_ORIGINS = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",")
  .map((url) => url.trim().replace(/\/$/, "")) // remove trailing slash
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // allow server-to-server / curl / mobile apps
      if (!origin) return callback(null, true);

      const normalizedOrigin = origin.replace(/\/$/, "");

      if (ALLOWED_ORIGINS.includes(normalizedOrigin)) {
        return callback(null, true);
      }

      // IMPORTANT:
      // Do NOT throw error → browser will handle CORS cleanly
      return callback(null, false);
    },
    credentials: true,
  })
);

/* -------------------------- Global rate limiter ------------------------- */
if (generalLimiter) {
  app.use(generalLimiter);
}

/* --------------------------- Request parsers ---------------------------- */
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use(sanitizeInputs);

/* ------------------------------ Logging --------------------------------- */
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

/* ------------------------------- Health --------------------------------- */
app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "bcet-connect-api",
    port: PORT || process.env.PORT || 5000,
  });
});

/* ------------------------------- Routes --------------------------------- */
app.use("/api", routes);

/* ------------------------------ 404 handler ----------------------------- */
app.use((req, res, next) => {
  next(new ApiError(404, `Route not found → ${req.originalUrl}`));
});

/* --------------------------- Global error handler ----------------------- */
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== "production") {
    logger?.error?.("Unhandled error", err);
  } else {
    logger?.error?.(err.message || "Server error");
  }
  return errorHandler(err, req, res, next);
});

module.exports = app;
