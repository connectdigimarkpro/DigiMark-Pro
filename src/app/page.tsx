import Link from "next/link";
import { 
  ArrowUpRight, 
  Code, 
  TrendingUp, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Cpu,
  CheckCircle,
  UserCheck,
  QrCode,
  Search,
  MessageSquare,
  Target,
  Megaphone,
  Share2,
  LineChart,
  Mail,
  Palette,
  FileText
} from "lucide-react";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import NoiseBackground from "@/components/NoiseBackground";
import GridPattern from "@/components/GridPattern";
import dynamic from "next/dynamic";

const FeaturedWork = dynamic(() => import("@/components/FeaturedWork"));
const ProcessTimeline = dynamic(() => import("@/components/ProcessTimeline"));
const ContactForm = dynamic(() => import("@/components/ContactForm"));
const TickerMarquee = dynamic(() => import("@/components/TickerMarquee"));
const IndustriesSection = dynamic(() => import("@/components/IndustriesSection"));
const Footer = dynamic(() => import("@/components/Footer"));

// Services data
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
    serviceImg: "/service_seo.webp"
  },
  {
    icon: <Cpu className="w-8 h-8 text-[var(--color-accent)]" />,
    title: "AI-Enhanced Solutions",
    description: "Automating customer touchpoints and workflows with state-of-the-art intelligent tools and logic.",
    tags: ["AI Chatbots", "Marketing Automation", "AI Content Systems", "Smart Analytics"],
    serviceImg: "/service_ai.webp"
  }
];

// Why Us Statistics
const statsData = [
  { value: "99.8%", label: "Platform Uptime" },
  { value: "0.4s", label: "Average Load Time" },
  { value: "38%", label: "Conversion Lift" },
  { value: "2.4x", label: "Pipeline Scaling" }
];

// Tech Stack List
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

export default function Home() {
  return (
    <>
      {/* Interactive Global Elements */}
      <NoiseBackground />
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-[100svh] relative flex items-center justify-center pt-20 sm:pt-24 overflow-hidden">
        <GridPattern />
        
        {/* Scroll Progress Bar */}
        <div id="scroll-progress" style={{ transform: "scaleX(0)" }} className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-accent)] z-50 origin-left" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center space-y-6 sm:space-y-8 relative z-10">
          <div
            className="inline-flex items-center space-x-2 bg-white border border-black/[0.04] px-4 py-1.5 rounded-full shadow-sm animate-hero-fade max-w-full"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#111111] font-sans">
              Growth meets Innovation
            </span>
          </div>

          <h1
            className="font-sans text-[clamp(2.35rem,8vw,6rem)] md:text-8xl font-black tracking-tight text-[#111111] leading-[1.02] sm:leading-[1.05] animate-hero-fade"
          >
            Building Brands.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[var(--color-accent)] to-[#111111]">
              Driving Growth.
            </span><br />
            Creating Experiences.
          </h1>

          <p
            className="font-sans text-base sm:text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed animate-hero-fade"
          >
            DigiMark Pro helps businesses scale through custom high-fidelity branding, bespoke website development, and organic growth-focused marketing.
          </p>

          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-4 animate-hero-fade"
          >
            <Link
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#111111] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider hover:bg-[var(--color-accent)] hover:text-[#111111] transition-all duration-300 shadow-md"
            >
              View Work
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-black/[0.08] bg-white/50 backdrop-blur-sm hover:bg-black/[0.02] text-[#111111] text-xs font-bold uppercase tracking-wider transition-all duration-300"
            >
              Book Consultation
            </Link>
          </div>

          {/* Trust Ticker / Capabilities */}
          <div
            className="pt-12 sm:pt-20 border-t border-black/[0.04] grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto animate-hero-fade"
          >
            {[
              { text: "Branding", count: "01", icon: <Sparkles className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" /> },
              { text: "Web Development", count: "02", icon: <Code className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" /> },
              { text: "Digital Marketing", count: "03", icon: <TrendingUp className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" /> },
              { text: "Growth Solutions", count: "04", icon: <Target className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" /> },
            ].map((cap, idx) => (
                <div key={idx} className="flex items-center justify-center space-x-2.5 py-3 sm:py-4 px-3 sm:px-5 rounded-xl bg-white/50 backdrop-blur-sm border border-black/[0.04] shadow-sm hover:border-[var(--color-accent)]/50 transition-colors duration-300">
                <span className="text-[10px] font-black text-[#6b7280]">{cap.count}</span>
                {cap.icon}
                <span className="text-xs font-black uppercase tracking-widest text-[#111111]">{cap.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedWork />

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#FAF8F5] relative">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          <div className="text-center max-w-xl mx-auto space-y-4 px-1 sm:px-0">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Our Expertise</span>
            <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#111111]">
              Growth-Focused Capabilities
            </h2>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              We design and construct premium brands, blazing-fast web infrastructure, and data-backed performance strategies.
            </p>
          </div>

          {/* Bento Grid */}
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
        </div>
      </section>

      <IndustriesSection />

      <TickerMarquee />

      {/* Why DigiMark Pro Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-5 sm:space-y-6 min-w-0">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Why Partner With Us</span>
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] break-words">
                Unfair Growth Advantages.
              </h2>
              <p className="text-[#6B7280] leading-relaxed text-sm max-w-xl">
                We avoid generic agency frameworks. DigiMark Pro operates at the intersection of luxury brand aesthetics, top-tier React engineering, and growth-focused marketing metrics.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4 min-w-0">
                {[
                  { title: "CREATIVE STRATEGY", desc: "Data-driven campaigns designed to maximize engagement and brand visibility." },
                  { title: "MODERN BRANDING", desc: "Building sleek, premium brand identities that create market authority." },
                  { title: "TECH-ENABLED EXECUTION", desc: "Advanced digital systems engineered for speed, scalability, and performance." },
                  { title: "FAST EXECUTION", desc: "Rapid deployment workflows focused on efficiency and business growth." },
                  { title: "GROWTH-FOCUSED", desc: "Every strategy is optimized for measurable reach, leads, and conversions." },
                  { title: "PERSONAL SUPPORT", desc: "Transparent communication with continuous strategic collaboration." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-[#FAF8F5] border border-black/[0.03] p-3 rounded-xl hover:border-[var(--color-accent)] transition-colors duration-300 min-w-0">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[11px] font-bold text-[#111111] uppercase tracking-wider break-words">{item.title}</h4>
                      <p className="text-[10px] text-[#6B7280] mt-0.5 leading-relaxed break-words">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth Funnel Illustration */}
            <div className="relative rounded-3xl bg-[#FAF8F5] border border-black/[0.04] p-5 sm:p-6 flex items-center justify-center overflow-hidden hover:border-[var(--color-accent)] transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.01)] group aspect-[4/3] sm:aspect-video md:aspect-auto md:h-full min-h-[240px] sm:min-h-[300px] max-w-full">
              <div className="absolute inset-0 opacity-[0.02] group-hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage: "radial-gradient(#111 1.5px, transparent 1.5px)",
                  backgroundSize: "24px 24px"
                }}
              />
              <Image
                src="/growth-path.webp"
                alt="Connect, Grow, Succeed Growth Funnel"
                width={1024}
                height={668}
                className="w-full h-auto max-w-[360px] sm:max-w-[420px] object-contain mix-blend-multiply select-none pointer-events-none group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 pt-8 sm:pt-12 border-t border-black/[0.04]">
            {statsData.map((stat, idx) => (
              <div key={idx} className="bg-[#FAF8F5] border border-black/[0.04] p-5 sm:p-6 rounded-2xl text-center space-y-2 hover:border-[var(--color-accent)] transition-all duration-300 min-w-0">
                <span className="block text-3xl md:text-4xl font-bold tracking-tight text-[#111111]">
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

      {/* Process Section */}
      <section id="process" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#FAF8F5] relative">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Our Workflow</span>
            <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#111111]">
              The Precision Engine
            </h2>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              We execute a strict five-phase growth pipeline to construct digital products that achieve scalable results.
            </p>
          </div>

          <ProcessTimeline />
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Growth Stack</span>
            <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#111111]">
              Our Marketing Ecosystem
            </h2>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              We leverage premium marketing platforms, advertising channels, and data analytics engines to maximize your brand reach and drive measurable scaling.
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

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#FAF8F5] relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">About DigiMark Pro</span>
            <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
              Where growth strategist meets React architect.
            </h2>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              Founded on the belief that premium design and robust coding are the greatest amplifiers of business growth, DigiMark Pro is a boutique agency built to bridge the gap between creative studios and engineering houses.
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
              <div key={idx} className="bg-white border border-black/[0.04] p-6 rounded-2xl flex items-start space-x-4 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
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
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-white relative">
        <div className="max-w-5xl mx-auto bg-[#FAF8F5] border border-black/[0.04] rounded-3xl p-6 sm:p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 shadow-[0_8px_40px_-10px_rgba(17,17,17,0.02)]">
          <div className="space-y-6 max-w-lg text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Digital Showcase</span>
            <h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-[#111111]">
              View Our Digital Portfolio
            </h2>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              Scan the custom QR code with your mobile device to experience our fluid digital portfolio directly on the go.
            </p>
            <div className="pt-2">
              <a
                href="https://digimarkpro.in/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[var(--color-accent)] transition-colors group"
              >
                https://digimarkpro.in/portfolio
                <ArrowUpRight className="ml-1 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* SVG QR Code */}
          <div className="bg-white border border-black/[0.05] p-5 sm:p-6 rounded-2xl shadow-md relative group flex flex-col items-center">
            <div className="w-48 h-48 flex items-center justify-center text-[#111111]">
              <QrCode size={160} strokeWidth={1.2} className="group-hover:scale-[1.02] transition-transform duration-300" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mt-3">Scan to open</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#FAF8F5] relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Start A Project</span>
              <h2 className="font-sans text-4xl md:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
                Let&apos;s Build Something Great Together.
              </h2>
              <p className="text-[#6B7280] text-sm leading-relaxed max-w-md">
                Have an ambitious vision? Schedule a free 30-minute consultation with a strategist to map your design and code requirements.
              </p>
            </div>

            {/* Direct Contact info */}
            <div className="space-y-6 pt-4 border-t border-black/[0.06]">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-1">Send An Email</span>
                <a href="mailto:connect.digimarkpro@gmail.com" className="text-lg font-bold text-[#111111] hover:text-[var(--color-accent)] transition-colors">
                  connect.digimarkpro@gmail.com
                </a>
              </div>
              
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-1">LinkedIn Authority</span>
                <a href="https://www.linkedin.com/company/digimark-pro25/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#111111] hover:text-[var(--color-accent)] transition-colors flex items-center">
                  Connect on LinkedIn <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
                </a>
              </div>

              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-1">WhatsApp Quickchat</span>
                <a href="https://wa.me/919056290628" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border border-black/[0.04] text-xs font-bold uppercase tracking-wider text-[#111111] hover:bg-black/[0.02] transition-colors shadow-sm">
                  Start Chat <ArrowRight className="ml-2 w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form wrapper */}
          <div className="relative">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
