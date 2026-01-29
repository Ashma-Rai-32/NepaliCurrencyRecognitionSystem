import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isVisible ? "visible" : ""}`}
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5 3.21V20.8C5.5 21.39 6.21 21.72 6.67 21.33L10.83 17.75C11.07 17.54 11.38 17.43 11.7 17.43H18.3C18.89 17.43 19.22 16.72 18.83 16.26L6.17 3.17C5.78 2.72 5.5 2.62 5.5 3.21Z"
          fill="#000000"
        />
        <path
          d="M5.5 3.21V20.8C5.5 21.39 6.21 21.72 6.67 21.33L10.83 17.75C11.07 17.54 11.38 17.43 11.7 17.43H18.3C18.89 17.43 19.22 16.72 18.83 16.26L6.17 3.17C5.78 2.72 5.5 2.62 5.5 3.21Z"
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};

export default Cursor;
