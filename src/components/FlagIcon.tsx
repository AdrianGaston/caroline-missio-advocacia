type FlagCode = "pt" | "en" | "es";

interface FlagIconProps {
  code: FlagCode;
  className?: string;
}

/**
 * SVG flags instead of emoji flags: emoji rendering differs per OS/browser
 * (Windows Chrome/Edge show letter pairs, Firefox uses Twemoji, Apple uses its own set).
 * These render identically everywhere.
 */
const FlagIcon = ({ code, className = "h-5 w-7" }: FlagIconProps) => {
  const common = {
    viewBox: "0 0 640 480",
    xmlns: "http://www.w3.org/2000/svg",
    className: `${className} rounded-[2px] shadow-soft object-cover`,
    role: "img" as const,
    "aria-hidden": true,
  };

  if (code === "pt") {
    return (
      <svg {...common}>
        <rect width="640" height="480" fill="#009b3a" />
        <path d="M320 60 600 240 320 420 40 240z" fill="#fedf00" />
        <circle cx="320" cy="240" r="105" fill="#002776" />
        <path
          d="M228 210a300 300 0 0 1 184 42 105 105 0 0 1-3 22 275 275 0 0 0-184-42 105 105 0 0 1 3-22z"
          fill="#fff"
        />
      </svg>
    );
  }

  if (code === "es") {
    return (
      <svg {...common}>
        <rect width="640" height="480" fill="#aa151b" />
        <rect y="120" width="640" height="240" fill="#f1bf00" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect width="640" height="480" fill="#fff" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} y={i * 73.85} width="640" height="36.92" fill="#b22234" />
      ))}
      <rect width="270" height="258" fill="#3c3b6e" />
      {Array.from({ length: 9 }).map((_, row) =>
        Array.from({ length: row % 2 === 0 ? 6 : 5 }).map((__, col) => (
          <circle
            key={`${row}-${col}`}
            cx={(row % 2 === 0 ? 24 : 47) + col * 45}
            cy={20 + row * 27}
            r="8"
            fill="#fff"
          />
        ))
      )}
    </svg>
  );
};

export default FlagIcon;
