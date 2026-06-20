import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle, Award, Target, Lightbulb, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NoiseBackground from "@/components/NoiseBackground";

interface ProjectData {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  results: string[];
  statNumber: string;
  statLabel: string;
  nextSlug: string;
  nextTitle: string;
  logoSrc?: string | null;
  logoWidth?: number;
  logoHeight?: number;
  socialLink?: string | null;
  showcaseImg1?: string;
  showcaseImg2?: string;
}

const projects: Record<string, ProjectData> = {
  "seren-education": {
    slug: "seren-education",
    title: "Seren Education Consultants",
    tagline: "Empowering the Next Generation of Global Leaders",
    category: "Branding • Flex Design • Marketing Materials",
    overview: "A prestigious education advisory agency requested a complete visual brand reconstruction to appeal to international students seeking admission to elite global universities.",
    challenge: "The existing visual identity was outdated, fragmented, and failed to communicate the prestige, rigorous guidance, and academic distinction expected by high-income families.",
    solution: "We crafted an editorial, premium brand system featuring a refined typographic monogram logo, luxury gold-foiled print collaterals, and a minimal high-end landing page template that projects academic excellence.",
    deliverables: [
      "Bespoke Brand Mark & Crest Design",
      "Corporate Stationery & Premium Print Brochures",
      "Digital Presentation Decks",
      "Web Layout System & Brand Styleguide"
    ],
    results: [
      "140% Increase in qualified premium student inquiries",
      "100% Brand consistency achieved across offices in London and Delhi",
      "Established brand partnership with top-tier prep schools"
    ],
    statNumber: "+140%",
    statLabel: "Inquiry Growth",
    nextSlug: "digimark-pro",
    nextTitle: "DigiMark Pro Brand Identity",
    logoSrc: "/seren-logo.webp",
    logoWidth: 260,
    logoHeight: 106,
    socialLink: "https://www.instagram.com/sereneducation/",
    showcaseImg1: "/showcase_seren_1.webp",
    showcaseImg2: "/showcase_seren_2.webp"
  },
  "digimark-pro": {
    slug: "digimark-pro",
    title: "DigiMark Pro Brand Identity",
    tagline: "Luxury Design for a High-Growth Growth Agency",
    category: "Logo Design • LinkedIn & Social Branding • Collaterals",
    overview: "Our own visual identity was forged to disrupt the standard digital marketing industry, transitioning away from loud agency colors to a quiet, confident luxury minimalist aesthetic.",
    challenge: "Traditional digital marketing firms rely on bright, flashing neon colors and hyper-aggressive sales pitches. We needed to communicate strategic depth, premium service, and engineering-level website builds.",
    solution: "Designed a geometric wordmark with custom typeface tweaks, adopted a sophisticated color palette (warm cream, charcoal, gold), and built a cohesive social media framework optimized for authority and trust.",
    deliverables: [
      "Responsive Vector Logo Suite",
      "Harmonious Color Palette & Typography Tokens",
      "LinkedIn & Instagram Visual Architecture",
      "Corporate Pitch Presentation & Digital Assets"
    ],
    results: [
      "Accelerated pipeline growth with luxury & SaaS clients within 30 days",
      "Over 20k organic social impressions in the launch month",
      "Recognized by CSS design showcases for minimal aesthetic"
    ],
    statNumber: "+20K",
    statLabel: "Monthly Reach",
    nextSlug: "web-development",
    nextTitle: "Website Development Projects",
    logoSrc: "/logo.webp",
    logoWidth: 837,
    logoHeight: 583,
    socialLink: "https://www.instagram.com/digimark.pro_/",
    showcaseImg1: "/showcase_digimark_1.webp",
    showcaseImg2: "/showcase_digimark_2.webp"
  },
  "web-development": {
    slug: "web-development",
    title: "Website Development Projects",
    tagline: "High-Performance Digital Products & Platforms",
    category: "Next.js Apps • Landing Pages • Headless Architecture",
    overview: "A curated collection of bespoke corporate platforms and high-converting marketing landers hand-coded for peak responsiveness, page speed, and interactive detail.",
    challenge: "Most agency templates are bloated with unnecessary JavaScript, resulting in slow load times (2.5s+), high mobile bounce rates, and compromised conversion ratios.",
    solution: "Built clean Next.js 15 architectures utilizing Tailwind CSS, Lenis, and Framer Motion. Kept bundle sizes tiny, assets pre-optimized, and layouts strictly structured for accessibility and modern SEO standards.",
    deliverables: [
      "Scalable Next.js App Router Structure",
      "Framer Motion Page Transitions",
      "Custom headless CMS integrations",
      "Vercel Edge Deployment setup"
    ],
    results: [
      "Achieved average load times of less than 0.4 seconds",
      "Google PageSpeed performance scores of 99-100",
      "Average conversion rate improvement of 38% for marketing landers"
    ],
    statNumber: "<0.4s",
    statLabel: "Load Duration",
    nextSlug: "seren-education",
    nextTitle: "Seren Education Consultants",
    logoSrc: null,
    logoWidth: undefined,
    logoHeight: undefined,
    socialLink: null,
    showcaseImg1: "/showcase_web_1.webp",
    showcaseImg2: "/showcase_web_2.webp"
  }
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function CaseStudy({ params }: Props) {
  const resolvedParams = await params;
  const project = projects[resolvedParams.slug];

  if (!project) {
    notFound();
  }

  return (
    <>
      <NoiseBackground />
      <Navbar />

      <main className="min-h-screen pt-28 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-6 md:px-12 bg-[var(--color-background)]">
        <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
          {/* Header Link */}
          <Link
            href="/#work"
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#6B7280] hover:text-[#111111] transition-colors group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>

          {/* Project Header */}
          <div className="space-y-5 sm:space-y-6">
            {project.logoSrc && (
              <div className="mb-3 sm:mb-4">
                <Image
                  src={project.logoSrc}
                  alt={`${project.title} Logo`}
                  width={project.logoWidth}
                  height={project.logoHeight}
                  priority
                  className="h-14 sm:h-16 w-auto object-contain select-none pointer-events-none mix-blend-multiply"
                />
              </div>
            )}
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
              {project.category}
            </span>
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
              {project.title}
            </h1>
            <p className="font-sans text-base sm:text-lg md:text-2xl font-medium text-[#6B7280] leading-relaxed max-w-3xl">
              {project.tagline}
            </p>
          </div>

          {/* Large Abstract Key Metric Card */}
          <div className="bg-white border border-black/[0.04] rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.01)]">
            <div className="space-y-2 max-w-md">
              <span className="text-xs font-bold uppercase tracking-widest text-[#6B7280]">Key Milestone</span>
              <p className="text-sm text-[#111111] leading-relaxed">
                This project represents a benchmark in our ability to merge high-end visual design with rigorous business growth goals.
              </p>
            </div>
            <div className="border-l-0 md:border-l border-t md:border-t-0 border-black/[0.08] pl-0 md:pl-16 pt-6 md:pt-0 py-2 md:py-2 w-full md:w-auto">
              <span className="block text-5xl md:text-7xl font-bold tracking-tight text-[var(--color-accent)]">
                {project.statNumber}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mt-1 block">
                {project.statLabel}
              </span>
            </div>
          </div>

          {/* Body Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 pt-6 sm:pt-8">
            <div className="md:col-span-2 space-y-10 sm:space-y-12">
              {/* Overview */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#111111] flex items-center">
                  <Award className="w-4 h-4 mr-2 text-[var(--color-accent)]" />
                  Project Overview
                </h3>
                <p className="text-[#6B7280] leading-relaxed text-base">
                  {project.overview}
                </p>
              </div>

              {/* Challenge */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#111111] flex items-center">
                  <Target className="w-4 h-4 mr-2 text-[var(--color-accent)]" />
                  The Challenge
                </h3>
                <p className="text-[#6B7280] leading-relaxed text-base">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#111111] flex items-center">
                  <Lightbulb className="w-4 h-4 mr-2 text-[var(--color-accent)]" />
                  Our Solution
                </h3>
                <p className="text-[#6B7280] leading-relaxed text-base">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Sidebar info */}
            <div className="space-y-10 sm:space-y-12">
              {project.socialLink && (
                <div className="space-y-4 bg-white border border-black/[0.04] p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-[var(--color-accent)] transition-all duration-300">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#111111]">
                    Project Presence
                  </h3>
                  <a
                    href={project.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-[var(--color-accent)] hover:text-[#111111] transition-colors group"
                  >
                    View Instagram
                    <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              )}
              {/* Deliverables */}
              <div className="space-y-6 bg-white border border-black/[0.04] p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#111111] flex items-center">
                  <Package className="w-4 h-4 mr-2 text-[var(--color-accent)]" />
                  Deliverables
                </h3>
                <ul className="space-y-3">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className="text-sm text-[#6B7280] flex items-start">
                      <span className="text-[var(--color-accent)] mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="space-y-6 bg-white border border-black/[0.04] p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#111111] flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-[var(--color-accent)]" />
                  Key Results
                </h3>
                <ul className="space-y-4">
                  {project.results.map((item, idx) => (
                    <li key={idx} className="text-sm text-[#6B7280] flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-1.5 mr-2.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Premium Abstract Mockup Showcase Gallery */}
          <div className="space-y-4 pt-10 sm:pt-12">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#111111]">
              Visual Showcase
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {/* Card 1 */}
              <div className="h-72 sm:h-80 md:h-[400px] rounded-2xl border border-black/[0.04] flex items-end p-6 sm:p-8 relative overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.01)] bg-white">
                {project.showcaseImg1 && (
                  <Image
                    src={project.showcaseImg1}
                    alt={`${project.title} Showcase 1`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none pointer-events-none"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 z-10" />
                <div className="space-y-1 z-20 text-white relative">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)]">
                    Showcase 01
                  </span>
                  <h4 className="font-bold text-lg leading-tight">{project.title}</h4>
                  <p className="text-xs text-white/80">Design Architecture & Grid Details</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="h-72 sm:h-80 md:h-[400px] rounded-2xl border border-black/[0.04] flex items-end p-6 sm:p-8 relative overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.01)] bg-white">
                {project.showcaseImg2 && (
                  <Image
                    src={project.showcaseImg2}
                    alt={`${project.title} Showcase 2`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none pointer-events-none"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 z-10" />
                <div className="space-y-1 z-20 text-white relative">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)]">
                    Showcase 02
                  </span>
                  <h4 className="font-bold text-lg leading-tight">{project.title}</h4>
                  <p className="text-xs text-white/80">Brand Layout Presentation & Deliverables</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Footer Navigation */}
          <div className="border-t border-black/[0.08] pt-10 sm:pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link
              href="/#work"
              className="text-sm font-semibold text-[#6B7280] hover:text-[#111111] transition-colors"
            >
              All Projects
            </Link>

            <Link
              href={`/work/${project.nextSlug}`}
              className="inline-flex items-center text-sm font-semibold text-[#111111] hover:text-[var(--color-accent)] transition-colors group"
            >
              Next Case Study
              <span className="font-normal text-xs text-[#6B7280] mx-2">({project.nextTitle})</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
