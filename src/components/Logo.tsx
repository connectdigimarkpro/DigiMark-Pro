import Image from "next/image";

interface LogoProps {
  className?: string;
  heightClassName?: string;
}

export default function Logo({ className = "", heightClassName = "h-9" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.webp"
        alt="DigiMark Pro Logo"
        width={180}
        height={50}
        priority
        style={{ width: "auto", aspectRatio: "180/50" }}
        className={`${heightClassName} object-contain mix-blend-multiply select-none pointer-events-none`}
      />
    </div>
  );
}
