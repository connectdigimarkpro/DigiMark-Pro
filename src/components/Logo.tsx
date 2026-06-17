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
        width={837}
        height={583}
        priority
        className={`${heightClassName} w-auto object-contain mix-blend-multiply select-none pointer-events-none`}
      />
    </div>
  );
}
