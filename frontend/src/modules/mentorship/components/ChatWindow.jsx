import React, { useState, useRef, useEffect } from "react";

// TODO: Replace with real WebSocket / Firebase chat
const dummyMessages = [
  { id: 1, sender: "MENTOR", text: "Hi! How can I help you today?" },
  { id: 2, sender: "STUDENT", text: "I need guidance on React projects." },
];

const ChatWindow = ({ mentor }) => {
  const [messages, setMessages] = useState(dummyMessages);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: "STUDENT", text: newMessage }]);
    setNewMessage("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full border border-slate-200 rounded-2xl overflow-hidden">
      <header className="p-3 bg-indigo-50 border-b border-slate-200 font-semibold text-sm">
        Chat with {mentor.name}
      </header>
      <div className="flex-1 p-3 overflow-y-auto space-y-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-xs p-2 rounded-xl text-sm ${
              msg.sender === "STUDENT"
                ? "bg-indigo-600 text-white self-end"
                : "bg-slate-200 text-slate-800 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-3 border-t border-slate-200 flex gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border border-slate-300 rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleSend}
          className="px-4 py-1 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
