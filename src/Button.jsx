// src/components/Button.jsx
import "./Button.css";

export default function Button({ text, filled, onClick }) {
  return (
    <button
      className={`custom-button ${filled ? "filled" : "outlined"}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
