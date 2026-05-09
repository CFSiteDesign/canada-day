import React from "react";

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ children, className = "", style }) => {
  return (
    <div
      className={`absolute z-30 pointer-events-none ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default FloatingElement;
