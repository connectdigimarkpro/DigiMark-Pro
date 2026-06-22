import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  Code, 
  TrendingUp, 
  MessageSquare, 
  Search, 
  Cpu, 
  Target, 
  Megaphone, 
  Share2, 
  LineChart, 
  Mail, 
  Palette, 
  FileText, 
  Zap,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NoiseBackground from "@/components/NoiseBackground";

const servicesData = [
  {
    icon: <Sparkles className="w-8 h-8 text-[var(--color-accent)]" />,
    title: "Branding & Identity",
    description: "Building sleek, premium brand identities that create market authority and deep strategic positioning.",
    tags: ["Logo Design", "Brand Strategy", "Visual Identity", "Social Media Branding"],
    serviceImg: "/service_branding.webp"
  },
  {
    icon: <Code className="w-8 h-8 text-[var(--color-accent)]" />,
    title: "Website Development",
    description: "Developing responsive, high-performance digital platforms optimized for speed, scalability, and usability.",
    tags: ["Business Websites", "Landing Pages", "Portfolio Websites", "UI/UX Design"],
    serviceImg: "/service_development.webp"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[var(--color-accent)]" />,
    title: "Digital Marketing",
    description: "Data-driven advertising campaigns built for measurable reach, high engagement, and client acquisition.",
    tags: ["Meta Ads", "Google Ads", "Lead Generation", "Campaign Strategy"],
    serviceImg: "/service_marketing.webp"
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-[var(--color-accent)]" />,
    title: "Social Media Management",
    description: "Sustained audience engagement and growth strategies across major platforms to amplify authority.",
    tags: ["Content Planning", "Instagram Growth", "Reels Strategy", "Audience Engagement"],
    serviceImg: "/service_social.webp"
  },
  {
    icon: <Search className="w-8 h-8 text-[var(--color-accent)]" />,
    title: "SEO & GEO",
    description: "Search engine optimization and AI Search Engine Optimization (GEO) to dominate organic visibility.",
    tags: ["Search Optimization", "AI SEO (GEO)", "Keyword Research", "Local SEO"],
    serviceImg: "/service-seo.png"
  },
  {
    icon: <Cpu className="w-8 h-8 text-[var(--color-accent)]" />,
    title: "AI-Enhanced Solutions",
    description: "Automating customer touchpoints and workflows with state-of-the-art intelligent tools and logic.",
    tags: ["AI Chatbots", "Marketing Automation", "AI Content Systems", "Smart Analytics"],
    serviceImg: "/service:AI-Automation.png"
  }
];

const techStack = [
  { name: "Meta Ads", icon: <Target className="w-5 h-5 text-[#6B7280]" /> },
  { name: "Google Ads", icon: <Megaphone className="w-5 h-5 text-[#6B7280]" /> },
  { name: "SEO & GEO", icon: <Search className="w-5 h-5 text-[#6B7280]" /> },
  { name: "Social Media", icon: <Share2 className="w-5 h-5 text-[#6B7280]" /> },
  { name: "Growth Analytics", icon: <LineChart className="w-5 h-5 text-[#6B7280]" /> },
  { name: "Email Marketing", icon: <Mail className="w-5 h-5 text-[#6B7280]" /> },
  { name: "CRO & Funnels", icon: <Zap className="w-5 h-5 text-[#6B7280]" /> },
  { name: "Brand Design", icon: <Palette className="w-5 h-5 text-[#6B7280]" /> },
  { name: "AI Automation", icon: <Sparkles className="w-5 h-5 text-[#6B7280]" /> },
  { name: "Content Strategy", icon: <FileText className="w-5 h-5 text-[#6B7280]" /> }
];

export default function ServicesPage() {
  return (
    <>
      <NoiseBackground />
      <Navbar />

      <main className="min-h-screen pt-28 sm:pt-32 bg-[#FAF8F5]">
        
        {/* Header Hero */}
        <section className="py-12 sm:py-16 px-4 max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">✦ Comprehensive Services</span>
          <h1 className="font-sans text-4xl sm:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
            Growth-Focused Capabilities
          </h1>
          <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            We engineer high-converting digital architectures, launch hyper-targeted acquisition funnels, and write clean, blazing-fast code to scale your global business.
          </p>
        </section>

        {/* Bento Grid */}
        <section className="py-8 sm:py-16 px-4 sm:px-6 md:px-12 relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {servicesData.map((service, idx) => {
              const isLarge = idx === 0 || idx === 3 || idx === 4;
              return (
                <div
                  key={idx}
                  className={`bg-white border border-black/[0.04] rounded-2xl p-6 sm:p-8 hover:border-[var(--color-accent)] transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.01)] group relative overflow-hidden flex flex-col justify-between ${
                    isLarge ? "md:col-span-2 md:p-10" : "col-span-1"
                  }`}
                >
                  <div className="absolute inset-0 opacity-[0.02] group-hover:scale-105 transition-transform duration-700"
                    style={{
                      backgroundImage: "radial-gradient(#111 1.5px, transparent 1.5px)",
                      backgroundSize: "24px 24px"
                    }}
                  />
                  {isLarge ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center z-10 w-full h-full">
                      <div className="space-y-6 flex flex-col justify-between h-full">
                        <div className="space-y-4">
                          <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] flex items-center justify-center">
                            {service.icon}
                          </div>
                          <h3 className="font-sans font-bold tracking-tight text-[#111111] text-2xl">
                            {service.title}
                          </h3>
                          <p className="text-[#6B7280] text-sm leading-relaxed max-w-sm">
                            {service.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-6 border-t border-black/[0.04] mt-auto">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-sans font-semibold text-[#6B7280] bg-[#FAF8F5] text-[10px] uppercase tracking-wider border border-black/[0.03] px-3 py-1.5 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="relative w-full aspect-[4/3] md:h-full rounded-xl overflow-hidden border border-black/[0.04] bg-white group-hover:scale-[1.01] transition-transform duration-500 shadow-sm order-first md:order-none">
                        <Image
                          src={service.serviceImg}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col justify-between h-full z-10">
                      <div className="space-y-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] flex items-center justify-center">
                          {service.icon}
                        </div>
                        <h3 className="font-sans font-bold tracking-tight text-[#111111] text-xl">
                          {service.title}
                        </h3>
                        <p className="text-[#6B7280] text-xs leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-black/[0.04] bg-white mb-6 group-hover:scale-[1.01] transition-transform duration-500 shadow-sm">
                        <Image
                          src={service.serviceImg}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-black/[0.04] mt-auto">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-sans font-semibold text-[#6B7280] bg-[#FAF8F5] text-[9px] px-2.5 py-1 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Technology Ecosystem Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-white relative border-t border-black/[0.02]">
          <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
            <div className="text-center max-w-xl mx-auto space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Growth Stack</span>
              <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#111111]">
                Our Marketing Ecosystem
              </h2>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                We leverage premium marketing platforms, advertising channels, and data analytics engines to maximize your brand reach.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-6 max-w-5xl mx-auto">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF8F5] border border-black/[0.04] p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 hover:border-[var(--color-accent)] transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.01)] group"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-black/[0.03] transition-transform duration-300 group-hover:scale-105 shadow-sm">
                    {tech.icon}
                  </div>
                  <span className="text-xs font-bold tracking-wider text-[#111111] uppercase font-sans">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic CTA */}
        <section className="py-16 px-4 sm:px-6 md:px-12 bg-[#FAF8F5] text-center">
          <div className="max-w-xl mx-auto space-y-6">
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#111111]">Ready to launch a high-impact campaign?</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              Schedule a technical strategy mapping session to evaluate your current setup and find immediate growth gains.
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
