import React from "react";
import "../styles/SuccessPopup.css";

const SuccessPopup = ({ title, message, onConfirm }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <svg
          className="popup-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="popup-title">{title}</h3>
        <p className="popup-message">{message}</p>
        <button className="popup-button" onClick={onConfirm}>
          OK
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
