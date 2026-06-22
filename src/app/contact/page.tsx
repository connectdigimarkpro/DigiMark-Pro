import { ArrowRight, Mail, Phone, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NoiseBackground from "@/components/NoiseBackground";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <NoiseBackground />
      <Navbar />

      <main className="min-h-screen pt-28 sm:pt-32 bg-[#FAF8F5]">
        
        {/* Intro */}
        <section className="py-12 px-4 max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">✦ Start Collaboration</span>
          <h1 className="font-sans text-4xl sm:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
            Let&apos;s Build Something Great.
          </h1>
          <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Schedule a session to outline your creative styling, React platform builds, and campaign operations.
          </p>
        </section>

        {/* Form and info split */}
        <section className="py-8 sm:py-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Info Grid */}
            <div className="lg:col-span-5 space-y-8 bg-white border border-black/[0.04] p-6 sm:p-8 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:border-[var(--color-accent)]/50 transition-all duration-300">
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)]">Direct Contacts</span>
                <h3 className="text-lg font-bold text-[#111111]">Strategic Collaboration</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed font-medium">
                  We reply to inquiries within 12 business hours. All onboarding sessions are conducted via secure Google Meet or Zoom connections.
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-black/[0.04]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-black/[0.04] flex items-center justify-center flex-shrink-0 text-[#111111] shadow-sm">
                    <Phone className="w-4 h-4 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-1">Call Us Directly</span>
                    <a href="tel:+919646900628" className="text-sm font-bold text-[#111111] hover:text-[var(--color-accent)] transition-colors">
                      +91 96469-00628
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-black/[0.04] flex items-center justify-center flex-shrink-0 text-[#111111] shadow-sm">
                    <Mail className="w-4 h-4 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-1">Send An Email</span>
                    <a href="mailto:connect.digimarkpro@gmail.com" className="text-sm font-bold text-[#111111] hover:text-[var(--color-accent)] transition-colors">
                      connect.digimarkpro@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-black/[0.04] flex items-center justify-center flex-shrink-0 text-[#111111] shadow-sm">
                    <svg className="w-4 h-4 text-[#25D366] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.004 2c-5.518 0-9.996 4.477-9.996 9.995 0 1.763.459 3.486 1.332 5.006L2 22l5.127-1.344a9.94 9.94 0 004.877 1.28c5.519 0 10-4.478 10-9.996 0-5.518-4.481-9.995-10-9.995zm4.846 14.195c-.272.766-1.353 1.39-1.859 1.488-.5.1-1.161.166-1.867-.061a9.924 9.924 0 0 1-3.774-2.189 11.233 11.233 0 0 1-2.585-3.324c-.453-.78-.716-1.583-.716-2.42 0-1.637.844-2.443 1.258-2.866.27-.276.536-.341.765-.341.229 0 .458.005.656.015.207.01.486-.079.76.577.283.676.969 2.365 1.054 2.535.085.17.142.368.028.594-.113.226-.17.368-.34.566-.17.198-.357.443-.51.594-.17.17-.348.354-.15.697.198.34.879 1.445 1.884 2.343.834.745 1.537.976 1.932 1.146.395.17.621.142.853-.113.23-.255.99-1.15 1.259-1.547.269-.396.538-.34.905-.203.368.137 2.336 1.103 2.733 1.302.396.198.66.297.755.462.095.165.095.957-.177 1.724z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-1">WhatsApp Quickchat</span>
                    <a href="https://wa.me/919646900628" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#FAF8F5] border border-black/[0.04] text-[10px] font-bold uppercase tracking-wider text-[#111111] hover:bg-black/[0.02] transition-colors shadow-sm">
                      Start Quick Chat &nbsp; <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-black/[0.04] flex items-center justify-center flex-shrink-0 text-[#111111] shadow-sm">
                    <svg className="w-4.5 h-4.5 fill-[#0077B5]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-1">LinkedIn Authority</span>
                    <a href="https://www.linkedin.com/company/digimark-pro25/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#111111] hover:text-[var(--color-accent)] transition-colors flex items-center mt-1">
                      Connect on LinkedIn &nbsp; <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 bg-white border border-black/[0.04] p-6 sm:p-8 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:border-[var(--color-accent)]/50 transition-all duration-300">
              <ContactForm />
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
