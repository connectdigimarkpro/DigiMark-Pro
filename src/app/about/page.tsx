import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Zap, UserCheck, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NoiseBackground from "@/components/NoiseBackground";
import ProcessTimeline from "@/components/ProcessTimeline";

export default function AboutPage() {
  return (
    <>
      <NoiseBackground />
      <Navbar />

      <main className="min-h-screen pt-28 sm:pt-32 bg-[#FAF8F5]">
        
        {/* Intro */}
        <section className="py-12 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">About DigiMark Pro</span>
            <h1 className="font-sans text-4xl sm:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
              Where growth meets elite engineering.
            </h1>
            <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
              Founded on the belief that premium design and robust coding are the greatest amplifiers of business growth, DigiMark Pro is a boutique agency built to bridge the gap between creative studios and engineering houses. We avoid boilerplate answers to focus on metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" />,
                title: "Our Mission",
                desc: "To empower ambitious businesses with high-performance digital architectures and elite brand design to scale their global impact."
              },
              {
                icon: <Zap className="w-5 h-5 text-[var(--color-accent)]" />,
                title: "Our Vision",
                desc: "To define the future of digital marketing through structural precision, extreme engineering, and luxury minimalist aesthetic."
              },
              {
                icon: <UserCheck className="w-5 h-5 text-[var(--color-accent)]" />,
                title: "Our Core Values",
                desc: "Trust, continuous technical edge, strategic depth, and high-fidelity output on every single pixel and code block."
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-white border border-black/[0.04] p-6 rounded-2xl flex items-start space-x-4 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-[var(--color-accent)]/50 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] flex items-center justify-center flex-shrink-0">
                  {card.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="font-sans font-bold text-sm text-[#111111]">{card.title}</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership & Team Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-white relative border-t border-black/[0.02]">
          <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
            <div className="text-center max-w-xl mx-auto space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">✦ The Team</span>
              <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#111111]">
                Our Leadership
              </h2>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                The strategic minds, creative leaders, and engineers directing growth at DigiMark Pro.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Mrs. Deep",
                  role: "Founder & CEO",
                  image: "/Founder Background Removed.png",
                  desc: "Steering the creative direction, branding, and strategic marketing vision of DigiMark Pro.",
                  imgClass: "scale-[1.55] object-[center_30%]"
                },
                {
                  name: "Mr. Baldish Singh",
                  role: "Managing Director",
                  image: "/MD.jpg",
                  desc: "Directing operational scaling, corporate alliances, and international expansion frameworks.",
                  imgClass: "scale-[1.12] object-top"
                },
                {
                  name: "Krishna Sharma",
                  role: "Growth & Technology Associate",
                  image: "/Growth&TechnologyAssociate.jpg",
                  desc: "Architecting high-performance React applications, Next.js code stacks, and marketing automation systems.",
                  imgClass: "scale-[1.05] object-[center_10%]"
                }
              ].map((member, idx) => (
                <div key={idx} className="bg-[#FAF8F5] border border-black/[0.04] p-6 rounded-3xl flex flex-col justify-between hover:border-[var(--color-accent)] transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.01)] group text-center relative overflow-hidden">
                  <div className="space-y-6">
                    {/* Member image container with gold-gradient background */}
                    <div className="relative w-44 h-44 mx-auto rounded-full overflow-hidden border border-black/[0.05] shadow-inner bg-gradient-to-tr from-[#C9A66B]/15 via-[#FAF8F5] to-white">
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className={`w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out ${member.imgClass}`}
                      />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-sans font-bold text-lg text-[#111111]">{member.name}</h3>
                      <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] px-3 py-1 rounded-full bg-white border border-black/[0.03] shadow-sm">
                        {member.role}
                      </span>
                      <p className="text-xs text-[#6B7280] leading-relaxed pt-2 px-1 font-medium">
                        {member.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-white relative border-t border-black/[0.02]">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C9A66B]">✦ OUR PROCESS</span>
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#111111] leading-tight">
                From Strategy to Success.<br />
                Every Step Designed for Growth.
              </h2>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Our workflow combines research, aesthetic direction, and clean Next.js engineering to guarantee speed, utility, and scalability.
              </p>
            </div>

            <ProcessTimeline />
          </div>
        </section>

        {/* Advantages Checklist */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#FAF8F5] relative border-t border-black/[0.02]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Unfair Advantages</span>
              <h2 className="text-3xl font-bold text-[#111111] mt-2">Why Partner With Us</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: "CREATIVE STRATEGY", desc: "Data-driven campaigns designed to maximize engagement and brand visibility." },
                { title: "MODERN BRANDING", desc: "Building sleek, premium brand identities that create market authority." },
                { title: "TECH-ENABLED EXECUTION", desc: "Advanced digital systems engineered for speed, scalability, and performance." },
                { title: "FAST EXECUTION", desc: "Rapid deployment workflows focused on efficiency and business growth." },
                { title: "GROWTH-FOCUSED", desc: "Every strategy is optimized for measurable reach, leads, and conversions." },
                { title: "PERSONAL SUPPORT", desc: "Transparent communication with continuous strategic collaboration." },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white border border-black/[0.03] p-5 rounded-2xl hover:border-[var(--color-accent)] transition-colors duration-300">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#111111] uppercase tracking-wider">{item.title}</h4>
                    <p className="text-xs text-[#6B7280] mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center bg-white">
          <div className="max-w-xl mx-auto space-y-6 px-4">
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#111111]">Want to align on a roadmap?</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              Schedule a 30-minute introductory call to explore how our design systems and performance framework fit your expansion goals.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#111111] text-[#FAF8F4] text-xs font-bold uppercase tracking-wider hover:bg-[#C9A66B] hover:text-[#111111] transition-all duration-300">
                Book Consultation &nbsp; <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
