import mapleLeaf from "@/assets/maple-leaf.png";

const LEAVES = [
  { top: "8%", left: "4%", size: 56, rotate: -18, opacity: 0.85 },
  { top: "22%", right: "6%", size: 44, rotate: 24, opacity: 0.75 },
  { bottom: "12%", left: "8%", size: 70, rotate: 12, opacity: 0.8 },
  { bottom: "28%", right: "12%", size: 38, rotate: -28, opacity: 0.7 },
  { top: "55%", left: "48%", size: 32, rotate: 40, opacity: 0.6 },
];

const ScatteredStars = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {LEAVES.map((l, i) => (
        <img
          key={i}
          src={mapleLeaf}
          alt=""
          aria-hidden="true"
          className="absolute drop-shadow-lg animate-float"
          style={{
            top: l.top,
            left: l.left,
            right: l.right,
            bottom: l.bottom,
            width: `${l.size}px`,
            height: "auto",
            transform: `rotate(${l.rotate}deg)`,
            opacity: l.opacity,
            animationDelay: `${i * 0.6}s`,
            ["--float-rotate" as never]: `${l.rotate}deg`,
          }}
        />
      ))}
    </div>
  );
};

export default ScatteredStars;
