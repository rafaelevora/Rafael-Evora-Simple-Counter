import React from "react";
import "./SecondsCounter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const SecondsCounter = ({ seconds }) => {
  // Convert seconds to HH:MM:SS
  const formatTime = (sec) => {
    const h = Math.floor(sec / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((sec % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="counter-container">
      <FontAwesomeIcon icon={faClock} className="clock-icon" />
      <div className="digital-display">{formatTime(seconds)}</div>
    </div>
  );
};

export default SecondsCounter;

