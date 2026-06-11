export default function GridPattern() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
      {/* Animated Subtle Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.03] animate-grid-fade"
        style={{
          backgroundImage: `
            linear-gradient(to right, #111 1px, transparent 1px),
            linear-gradient(to bottom, #111 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 50%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 50%, transparent 100%)"
        }}
      />
      
      {/* Soft Blurred Luxury Shapes */}
      <div className="absolute top-[10%] left-[-15%] w-[60vw] h-[60vw] max-w-[800px] rounded-full bg-[var(--color-accent)]/5 blur-[140px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[20%] right-[-15%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-[var(--color-accent)]/8 blur-[120px] pointer-events-none animate-float-medium" />
    </div>
  );
}
