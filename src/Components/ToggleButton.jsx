import React, { useState } from "react";

function ToggleButton() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex items-center space-x-2">
      <span>Light</span>
      <button
        onClick={() => setIsDark(!isDark)}
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
          isDark ? "bg-blue-700" : "bg-blue-500"
        }`}
      >
        <span
          className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 transform ${
            isDark ? "translate-x-6" : "translate-x-0"
          }`}
        ></span>
      </button>
      <span>Dark</span>
    </div>
  );
}

export default ToggleButton;
