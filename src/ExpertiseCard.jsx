// components/ExpertiseCard.jsx
import React from "react";
// import "ExpertiseCard.css";
import LinkText from "./LinkText";

export default function ExpertiseCard({ title, description }) {
  return (
    <div className="expertise-card">
      <LinkText title={title} />
      <p>{description}</p>
    </div>
  );
}
