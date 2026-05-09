import { useState } from "react";

interface Clover {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

const CloverSVG = ({ size, rotation }: { size: number; rotation: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    {/* Four-leaf clover */}
    <circle cx="32" cy="28" r="14" fill="hsl(100, 80%, 50%)" stroke="hsl(0,0%,20%)" strokeWidth="2" />
    <circle cx="48" cy="28" r="14" fill="hsl(100, 80%, 50%)" stroke="hsl(0,0%,20%)" strokeWidth="2" />
    <circle cx="32" cy="42" r="14" fill="hsl(100, 80%, 50%)" stroke="hsl(0,0%,20%)" strokeWidth="2" />
    <circle cx="48" cy="42" r="14" fill="hsl(100, 80%, 50%)" stroke="hsl(0,0%,20%)" strokeWidth="2" />
    {/* Stem */}
    <rect x="38" y="50" width="4" height="24" rx="2" fill="hsl(100, 50%, 30%)" stroke="hsl(0,0%,20%)" strokeWidth="1.5" />
  </svg>
);

const FallingClovers = () => {
  const [clovers] = useState<Clover[]>(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 6,
      size: 20 + Math.random() * 25,
      rotation: -30 + Math.random() * 60,
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {clovers.map((clover) => (
        <div
          key={clover.id}
          className="absolute animate-falling-heart opacity-60"
          style={{
            left: `${clover.left}%`,
            animationDelay: `${clover.delay}s`,
            animationDuration: `${clover.duration}s`,
          }}
        >
          <CloverSVG size={clover.size} rotation={clover.rotation} />
        </div>
      ))}
    </div>
  );
};

export default FallingClovers;
