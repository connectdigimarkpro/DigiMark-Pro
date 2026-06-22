import Link from "next/link";
import { ArrowRight, Globe, Laptop, HelpCircle, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NoiseBackground from "@/components/NoiseBackground";
import GlobalPresence from "@/components/GlobalPresence";

export default function GlobalReachPage() {
  return (
    <>
      <NoiseBackground />
      <Navbar />

      <main className="min-h-screen pt-28 sm:pt-32 bg-[#FAF8F5]">
        
        {/* Intro */}
        <section className="py-12 px-4 max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">✦ Cross-Border Delivery</span>
          <h1 className="font-sans text-4xl sm:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
            International Client Operations
          </h1>
          <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Providing high-fidelity creative output and seamless digital campaign management for partners globally, synchronized in real-time.
          </p>
        </section>

        {/* Global Presence Map & Cards */}
        <GlobalPresence />

        {/* Cross Border Support Cards */}
        <section className="py-16 sm:py-24 px-4 bg-white border-t border-black/[0.02]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-lg mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Operational Guide</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-2">How We Collaborate Globally</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-[#FAF8F5] border border-black/[0.03] p-6 rounded-2xl space-y-4 hover:border-[var(--color-accent)] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.04] flex items-center justify-center text-[var(--color-accent)] shadow-sm">
                  <Laptop size={20} />
                </div>
                <h3 className="font-bold text-sm text-[#111111]">1. Timezone Synchronization</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  We schedule overlap windows during your business day for live status meetings, collaborative creative workshops, and instant Slack messaging.
                </p>
              </div>

              <div className="bg-[#FAF8F5] border border-black/[0.03] p-6 rounded-2xl space-y-4 hover:border-[var(--color-accent)] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.04] flex items-center justify-center text-[var(--color-accent)] shadow-sm">
                  <Shield size={20} />
                </div>
                <h3 className="font-bold text-sm text-[#111111]">2. Borderless Contracting</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  We leverage standardized secure master service agreements and accept global wires, Stripe payments, and primary currencies (USD, GBP, EUR, AED).
                </p>
              </div>

              <div className="bg-[#FAF8F5] border border-black/[0.03] p-6 rounded-2xl space-y-4 hover:border-[var(--color-accent)] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.04] flex items-center justify-center text-[var(--color-accent)] shadow-sm">
                  <HelpCircle size={20} />
                </div>
                <h3 className="font-bold text-sm text-[#111111]">3. Agile Project Hubs</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  All website codebases, branding mockups, and performance tracking sheets are consolidated in unified live digital hubs (Figma, Notion, GitHub).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center">
          <div className="max-w-xl mx-auto space-y-6 px-4">
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#111111]">Expand your digital footprint.</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              Find out how we support cross-border search engine positioning and localized Meta campaigns. Reach out to setup a brief sync call.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#111111] text-[#FAF8F4] text-xs font-bold uppercase tracking-wider hover:bg-[#C9A66B] hover:text-[#111111] transition-all duration-300">
                Start Global Partnership &nbsp; <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
