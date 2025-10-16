
import React, { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import "./StickyChatBotModal.css";

export function StickyChatbotModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sticky Button */}
      <button
        className="sticky-chatbot-btn"
        onClick={() => setOpen(true)}
      >
        <MessageCircle size={20} style={{ marginRight: 8, verticalAlign: "middle" }} />
        Ask
      </button>

      <div className="sticky-chatbot-modal" style={{display: open ? '' : 'none'}}>
        <div className="sticky-chatbot-modal-content">
          <button
            className="sticky-chatbot-close-btn"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <iframe
            src="https://cogentiq-demo.fractal.ai/tenants/154bc61abe224e5fa8c9fb54cb4b228e/apps/89772e6b71e64fec92d765fa85bd4cd8/chat?embedApp=true"
            className="sticky-chatbot-iframe"
            title="ChatBot"
          ></iframe>
        </div>
      </div>
    </>
  );
}