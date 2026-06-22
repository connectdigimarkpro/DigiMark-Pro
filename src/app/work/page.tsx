import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NoiseBackground from "@/components/NoiseBackground";
import FeaturedWork from "@/components/FeaturedWork";

const statsData = [
  { value: "99.8%", label: "Platform Uptime" },
  { value: "0.4s", label: "Average Load Time" },
  { value: "38%", label: "Conversion Lift" },
  { value: "2.4x", label: "Pipeline Scaling" }
];

export default function WorkPage() {
  return (
    <>
      <NoiseBackground />
      <Navbar />

      <main className="min-h-screen pt-28 sm:pt-32 bg-[#FAF8F5]">
        
        {/* Intro Hero */}
        <section className="py-12 px-4 max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">✦ Visual Case Studies</span>
          <h1 className="font-sans text-4xl sm:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
            Our Digital Showcase
          </h1>
          <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            A meticulous collection of luxury branding assets, high-speed corporate code setups, and scaled conversion funnels.
          </p>
        </section>

        {/* Portfolio List */}
        <FeaturedWork />

        {/* Statistics Cards */}
        <section className="py-16 sm:py-24 px-4 bg-white border-y border-black/[0.03]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-lg mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Proven Milestones</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-2">Measurable Performance Metrics</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {statsData.map((stat, idx) => (
                <div key={idx} className="bg-[#FAF8F5] border border-black/[0.04] p-6 sm:p-8 rounded-2xl text-center space-y-2 hover:border-[var(--color-accent)] transition-all duration-300">
                  <span className="block text-3xl md:text-5xl font-bold tracking-tight text-[#111111]">
                    {stat.value}
                  </span>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center">
          <div className="max-w-xl mx-auto space-y-6 px-4">
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#111111]">Ready to achieve similar growth?</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              We help companies map their digital assets, launch campaigns, and engineering platforms. Get in touch to schedule a direct review.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#111111] text-[#FAF8F4] text-xs font-bold uppercase tracking-wider hover:bg-[#C9A66B] hover:text-[#111111] transition-all duration-300">
                Contact Our Strategists &nbsp; <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
