export default function GridPattern() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
<<<<<<< HEAD
      {/* Soft Ambient Radial Light Behind the Content */}
      <div 
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: "radial-gradient(ellipse 65% 55% at 50% 45%, rgba(201, 166, 107, 0.12) 0%, transparent 100%)",
        }}
      />
      
      {/* Premium Blurred Gradient Blobs */}
      {/* Gold/Warm Blob Left Top */}
      <div className="absolute top-[5%] left-[-15%] w-[60vw] h-[60vw] max-w-[800px] rounded-full bg-[#C9A66B]/5 blur-[140px] pointer-events-none animate-float-slow" />
      
      {/* Cream/Soft Beige Blob Right Center */}
      <div className="absolute top-[20%] right-[-15%] w-[50vw] h-[50vw] max-w-[700px] rounded-full bg-[#AA771C]/4 blur-[130px] pointer-events-none animate-float-medium" />
      
      {/* Subtle Light Accent Center Bottom */}
      <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] max-w-[600px] rounded-full bg-[#FAF8F4]/40 blur-[110px] pointer-events-none" />
=======
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
>>>>>>> ad4664a9251c0a2b414fbe46b7d81e5cfaa740b8
    </div>
  );
}
