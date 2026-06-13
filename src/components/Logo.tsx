"use client";

interface LogoProps {
  className?: string;
  heightClassName?: string;
}

export default function Logo({ className = "", heightClassName = "h-9" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/logo.webp"
        alt="DigiMark Pro Logo"
        className={`${heightClassName} w-auto object-contain mix-blend-multiply select-none pointer-events-none`}
        onError={(e) => {
          // Fallback if image fails to load
          e.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}
