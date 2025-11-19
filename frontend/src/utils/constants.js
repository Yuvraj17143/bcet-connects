export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export const COLORS = {
  PRIMARY: "#5865F2",
  SECONDARY: "#9333EA",
  BACKGROUND: "#F9FAFB",
  CARD: "#FFFFFF",
  TEXT_PRIMARY: "#1F2937",
  TEXT_SECONDARY: "#6B7280",
  SUCCESS: "#10B981",
  ERROR: "#EF4444",
};

export const STORAGE_KEYS = {
  TOKEN: "token",
};

export const FEATURE_FLAGS = {
  ENABLE_AI_WIDGETS: true,
  ENABLE_RESUME_PARSER: true,
  ENABLE_JOB_RECOMMENDER: true,
};
