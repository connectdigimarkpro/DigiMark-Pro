import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  Code, 
  TrendingUp, 
  MessageSquare, 
  Search, 
  Cpu, 
  ArrowUpRight,
  Globe,
  CheckCircle,
  ShieldCheck,
  Zap,
  UserCheck,
  QrCode,
  Phone,
  Mail,
  Target,
  Megaphone,
  Share2,
  LineChart,
  Palette,
  FileText
} from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import NoiseBackground from "@/components/NoiseBackground";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

const FeaturedWork = dynamic(() => import("@/components/FeaturedWork"));
const TickerMarquee = dynamic(() => import("@/components/TickerMarquee"));
const ContactForm = dynamic(() => import("@/components/ContactForm"));
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
      <Hero />

      {/* Selected Work Showcase */}
      <div className="relative">
        <FeaturedWork />
        <div className="bg-[#FAF8F4] pb-16 text-center border-b border-black/[0.02]">
          <Link 
            href="/work" 
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[var(--color-accent)] transition-colors group"
          >
            Explore Case Studies
            <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Services Bento Grid Section */}
      <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-white relative">
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

          <div className="text-center pt-8">
            <Link 
              href="/services" 
              className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[var(--color-accent)] transition-colors group"
            >
              Explore Full Capabilities &nbsp; <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

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

      {/* Technology Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#FAF8F5] border-t border-black/[0.02] relative">
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
                className="bg-white border border-black/[0.04] p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 hover:border-[var(--color-accent)] transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.01)] group"
              >
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center border border-black/[0.03] transition-transform duration-300 group-hover:scale-105 shadow-sm">
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

      {/* Global Reach Preview Section with 3D Globe picture */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-white border-t border-black/[0.02] relative">
        <div className="max-w-5xl mx-auto bg-[#FAF8F5] border border-black/[0.04] rounded-3xl p-6 sm:p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 shadow-[0_8px_40px_-10px_rgba(17,17,17,0.02)]">
          <div className="space-y-6 max-w-lg">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Global Presence</span>
            <h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-[#111111]">
              Open for International Clients
            </h2>
            <p className="text-sm text-[#6B7280] leading-relaxed font-medium">
              We sync seamlessly across primary global timezones—operating in US (EST/PST), UK, EU, UAE, Singapore, and Australia. Explore our interactive delivery map.
            </p>
            <div className="pt-2">
              <Link 
                href="/global" 
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[var(--color-accent)] transition-colors group"
              >
                View Connections Map
                <ArrowUpRight className="ml-1 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          <div className="w-52 h-52 bg-white border border-black/[0.04] rounded-3xl flex items-center justify-center relative group overflow-hidden shadow-sm flex-shrink-0">
            <div className="absolute inset-0 bg-radial from-[var(--color-accent)]/5 to-transparent pointer-events-none" />
            <Image 
              src="/global_reach_globe.png" 
              alt="Global Client Operations Globe Graphic"
              fill
              sizes="208px"
              className="object-cover transition-transform duration-[8s] group-hover:scale-105 ease-out select-none pointer-events-none"
            />
          </div>
        </div>
      </section>

      {/* Grid Features (About & Industries) */}
      <section className="py-16 sm:py-24 px-4 bg-[#FAF8F5] relative border-t border-black/[0.02]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* About us tile */}
          <div className="bg-white border border-black/[0.04] p-8 rounded-3xl space-y-6 flex flex-col justify-between hover:border-[var(--color-accent)]/30 transition-all duration-300">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)]">Our Identity</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">Where strategy meets code.</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed font-medium">
                DigiMark Pro operates at the intersection of luxury brand aesthetics, modern React engineering, and scalable growth pipelines. Learn about our mission and workflow.
              </p>
            </div>
            <div className="pt-4">
              <Link href="/about" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[var(--color-accent)] transition-colors group">
                Read About Us &nbsp; <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Industries tile */}
          <div className="bg-white border border-black/[0.04] p-8 rounded-3xl space-y-6 flex flex-col justify-between hover:border-[var(--color-accent)]/30 transition-all duration-300">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)]">Target Sectors</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">Niche Client Solutions</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed font-medium">
                We craft specialized client capture systems and web platforms for Real Estate, SaaS, Health/Medical, FinTech, and luxury brands. Explore our custom industry structures.
              </p>
            </div>
            <div className="pt-4">
              <Link href="/industries" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[var(--color-accent)] transition-colors group">
                View Served Industries &nbsp; <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Insights teaser */}
      <section className="py-16 bg-white border-t border-black/[0.02]">
        <div className="max-w-5xl mx-auto text-center space-y-6 px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Insights & Strategy</span>
          <h2 className="text-3xl font-bold text-[#111111]">Agency Thought Leadership</h2>
          <p className="text-sm text-[#6B7280] leading-relaxed max-w-xl mx-auto font-medium">
            Read our analysis of AI Search Optimization (GEO), conversion marketing tactics, and Next.js engineering page-speed performance indicators.
          </p>
          <div className="pt-2">
            <Link href="/blog" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#111111] text-[#FAF8F4] text-xs font-bold uppercase tracking-wider hover:bg-[#C9A66B] hover:text-[#111111] transition-all duration-300">
              Read Our Blog &nbsp; <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#FAF8F5] relative border-t border-black/[0.02]">
        <div className="max-w-5xl mx-auto bg-white border border-black/[0.04] rounded-3xl p-6 sm:p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 shadow-[0_8px_40px_-10px_rgba(17,17,17,0.02)]">
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

      {/* Direct Contact Section with Lead Onboarding Form */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-white relative border-t border-black/[0.02]">
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
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-black/[0.04] flex items-center justify-center flex-shrink-0 text-[#111111] shadow-sm">
                  <Phone className="w-4 h-4 text-[var(--color-accent)]" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-1">Call Us Directly</span>
                  <a href="tel:+919646900628" className="text-lg font-bold text-[#111111] hover:text-[var(--color-accent)] transition-colors">
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
                  <a href="mailto:connect.digimarkpro@gmail.com" className="text-lg font-bold text-[#111111] hover:text-[var(--color-accent)] transition-colors">
                    connect.digimarkpro@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-black/[0.04] flex items-center justify-center flex-shrink-0 text-[#111111] shadow-sm">
                  <svg className="w-4.5 h-4.5 text-[#25D366] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.004 2c-5.518 0-9.996 4.477-9.996 9.995 0 1.763.459 3.486 1.332 5.006L2 22l5.127-1.344a9.94 9.94 0 004.877 1.28c5.519 0 10-4.478 10-9.996 0-5.518-4.481-9.995-10-9.995zm4.846 14.195c-.272.766-1.353 1.39-1.859 1.488-.5.1-1.161.166-1.867-.061a9.924 9.924 0 0 1-3.774-2.189 11.233 11.233 0 0 1-2.585-3.324c-.453-.78-.716-1.583-.716-2.42 0-1.637.844-2.443 1.258-2.866.27-.276.536-.341.765-.341.229 0 .458.005.656.015.207.01.486-.079.76.577.283.676.969 2.365 1.054 2.535.085.17.142.368.028.594-.113.226-.17.368-.34.566-.17.198-.357.443-.51.594-.17.17-.348.354-.15.697.198.34.879 1.445 1.884 2.343.834.745 1.537.976 1.932 1.146.395.17.621.142.853-.113.23-.255.99-1.15 1.259-1.547.269-.396.538-.34.905-.203.368.137 2.336 1.103 2.733 1.302.396.198.66.297.755.462.095.165.095.957-.177 1.724z"/>
                  </svg>
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-1">WhatsApp Quickchat</span>
                  <a href="https://wa.me/919646900628" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#FAF8F5] border border-black/[0.04] text-xs font-bold uppercase tracking-wider text-[#111111] hover:bg-black/[0.02] transition-colors shadow-sm">
                    Start Chat <ArrowRight className="ml-2 w-3.5 h-3.5" />
                  </a>
                </div>
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
