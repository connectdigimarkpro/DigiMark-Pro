import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NoiseBackground from "@/components/NoiseBackground";

const articles = [
  {
    title: "AI Search Engine Optimization (GEO): The Next Frontier of Organic Search",
    category: "SEO & GEO",
    date: "June 18, 2026",
    readTime: "6 min read",
    summary: "As AI engines like Perplexity, ChatGPT Search, and Gemini change search behaviors, standard SEO keyword stuffing is obsolete. Discover how Generative Engine Optimization (GEO) preserves visibility.",
    tags: ["Search AI", "GEO Strategy", "Google Gemini", "Traffic Scaling"],
    accentColor: "#C9A66B"
  },
  {
    title: "Hyper-Scale Meta Ads: Engineering Funnels for Predictable ROAS",
    category: "Paid Acquisition",
    date: "May 24, 2026",
    readTime: "8 min read",
    summary: "Relying on Meta's basic Advantage+ algorithms is no longer enough to beat rising CPCs. Learn our architectural method to structuring conversion campaigns and mapping creative assets.",
    tags: ["Meta Ads", "ROAS", "Creative Testing", "Attribution Models"],
    accentColor: "#006B44"
  },
  {
    title: "Bespoke React Engineering vs. Bloated Templates: The Cost of Page Speed",
    category: "Web Development",
    date: "April 11, 2026",
    readTime: "5 min read",
    summary: "Every millisecond of latency increases mobile bounce rates by double digits. We compare template page builders to clean Next.js architectures, auditing real-world impact on conversion margins.",
    tags: ["Next.js", "Performance Optimization", "PageSpeed Score", "Tailwind CSS"],
    accentColor: "#C41E3A"
  }
];

export default function BlogPage() {
  return (
    <>
      <NoiseBackground />
      <Navbar />

      <main className="min-h-screen pt-28 sm:pt-32 bg-[#FAF8F5]">
        
        {/* Intro */}
        <section className="py-12 px-4 max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">✦ Agency Intelligence</span>
          <h1 className="font-sans text-4xl sm:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
            Insights & Marketing Strategy
          </h1>
          <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Deep-dives into advanced conversion optimization, headless React infrastructure, and AI-era customer acquisition.
          </p>
        </section>

        {/* Blog Post List */}
        <section className="py-8 sm:py-16 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            {articles.map((article, idx) => (
              <div 
                key={idx}
                className="bg-white border border-black/[0.04] p-6 sm:p-8 rounded-3xl hover:border-[var(--color-accent)] transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.01)] group relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                  <div className="space-y-4 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#6B7280]">
                      <span className="text-[var(--color-accent)]">{article.category}</span>
                      <span className="flex items-center gap-1">
                        <Calendar size={10} />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={10} />
                        {article.readTime}
                      </span>
                    </div>

                    <h2 className="font-sans text-xl sm:text-2xl font-bold text-[#111111] group-hover:text-[var(--color-accent)] transition-colors duration-300 leading-snug">
                      {article.title}
                    </h2>
                    
                    <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-medium">
                      {article.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {article.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-[9px] font-bold uppercase tracking-wider text-gray-500 bg-[#FAF8F5] border border-black/[0.03] px-2.5 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center self-end md:self-start pt-4 md:pt-0">
                    <button className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111111] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                      Read Insight <ArrowRight size={14} className="transform transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center bg-white border-t border-black/[0.02] mt-12">
          <div className="max-w-xl mx-auto space-y-6 px-4">
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#111111]">Want tailored recommendations?</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              We provide free growth audits evaluating search visibility, site speeds, and digital conversion funnels. Reach out to schedule yours.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#111111] text-[#FAF8F4] text-xs font-bold uppercase tracking-wider hover:bg-[#C9A66B] hover:text-[#111111] transition-all duration-300">
                Claim Growth Audit &nbsp; <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
