"use client";

export default function TickerMarquee() {
  const items = [
    "Growth-Focused",
    "AI-Enhanced",
    "Performance-Driven",
    "Conversion-Oriented"
  ];

  return (
    <div className="w-full bg-[#111111] text-[#FAF8F5] py-4 overflow-hidden select-none border-y border-white/[0.05] relative z-10 flex">
      {/* Track 1 */}
      <div className="flex w-max shrink-0 animate-marquee whitespace-nowrap text-[10px] md:text-[12px] font-bold uppercase tracking-widest">
        {items.map((item, index) => (
          <div key={`track1-${index}`} className="flex items-center">
            <span className="mx-12 md:mx-20">{item}</span>
            <span className="text-[var(--color-accent)] font-medium">•</span>
          </div>
        ))}
        {items.map((item, index) => (
          <div key={`track1-dup-${index}`} className="flex items-center">
            <span className="mx-12 md:mx-20">{item}</span>
            <span className="text-[var(--color-accent)] font-medium">•</span>
          </div>
        ))}
      </div>
      
      {/* Track 2 */}
      <div className="flex w-max shrink-0 animate-marquee whitespace-nowrap text-[10px] md:text-[12px] font-bold uppercase tracking-widest">
        {items.map((item, index) => (
          <div key={`track2-${index}`} className="flex items-center">
            <span className="mx-12 md:mx-20">{item}</span>
            <span className="text-[var(--color-accent)] font-medium">•</span>
          </div>
        ))}
        {items.map((item, index) => (
          <div key={`track2-dup-${index}`} className="flex items-center">
            <span className="mx-12 md:mx-20">{item}</span>
            <span className="text-[var(--color-accent)] font-medium">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}

