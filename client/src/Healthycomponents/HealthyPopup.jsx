import React from "react";
import "../healthyStyles/healthyPopup.css";
import { FaTimes } from "react-icons/fa"; // ✅ Import the X icon

function HealthyPopup({ onClose, children }) {
  return (
    <div className="popup-menu-overlay" onClick={onClose}>
      <div className="popup-menu-content" onClick={(e) => e.stopPropagation()}>
        {/* ✅ Close X icon */}
        <button className="close-popup-btn" onClick={onClose}>
          <FaTimes />
        </button>

        {/* ✅ Popup content */}
        {children}
      </div>
    </div>
  );
}

export default HealthyPopup;
