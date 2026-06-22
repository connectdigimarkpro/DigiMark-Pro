import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NoiseBackground from "@/components/NoiseBackground";
import IndustriesSection from "@/components/IndustriesSection";

export default function IndustriesPage() {
  return (
    <>
      <NoiseBackground />
      <Navbar />

      <main className="min-h-screen pt-28 sm:pt-32 bg-[#FAF8F5]">
        
        {/* Intro */}
        <section className="py-12 px-4 max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">✦ Sector Capabilities</span>
          <h1 className="font-sans text-4xl sm:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
            Industries We Serve
          </h1>
          <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            We build specialized customer acquisition pipelines and custom digital platforms engineered for unique vertical requirements.
          </p>
        </section>

        {/* Dynamic Industries Bento/Grid */}
        <IndustriesSection />

        {/* CTA */}
        <section className="py-16 text-center bg-white border-t border-black/[0.02]">
          <div className="max-w-xl mx-auto space-y-6 px-4">
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#111111]">Don&apos;t see your industry?</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              We frequently apply custom cross-industry marketing and React platforms to unique B2B and consumer niches. Send us your requirements to analyze feasibility.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#111111] text-[#FAF8F4] text-xs font-bold uppercase tracking-wider hover:bg-[#C9A66B] hover:text-[#111111] transition-all duration-300">
                Discuss Your Niche &nbsp; <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
