import React from 'react';
import './ProPopup.css';
import { FaTimes } from 'react-icons/fa';

function ProPopup({ onClose, children }) {
  return (
    <div className="pro-popup-overlay" onClick={onClose}>
      <div className="pro-popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="pro-popup-close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        {children}
      </div>
    </div>
  );
}

export default ProPopup;
