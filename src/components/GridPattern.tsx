export default function GridPattern() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
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
    </div>
  );
}
