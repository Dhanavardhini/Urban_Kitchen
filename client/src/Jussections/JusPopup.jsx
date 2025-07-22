import React from "react";
import "../jusstyles/juspopup.css";
import { FaTimes } from "react-icons/fa";

function JusPopup({ onClose, children }) {
  return (
    <div className="jus-popup-overlay" onClick={onClose}>
      <div className="jus-popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="jus-popup-close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        {children}
      </div>
    </div>
  );
}

export default JusPopup;
