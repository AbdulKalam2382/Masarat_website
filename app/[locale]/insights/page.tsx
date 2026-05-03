"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Shield, Cloud, Brain } from "lucide-react";
import { insights, getInsightLocale, getCategoryLabel } from "@/lib/insights";
import { formatDate } from "@/lib/formatDate";

export default function InsightsPage() {
  const { t, isRTL, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    { id: "All", label: isRTL ? "الكل" : "All" },
    { id: "Cybersecurity", label: getCategoryLabel("Cybersecurity", language) },
    { id: "AI", label: getCategoryLabel("AI", language) },
    { id: "Cloud", label: getCategoryLabel("Cloud", language) },
  ];

  const filteredArticles = insights.filter((article) =>
    activeFilter === "All" || article.category === activeFilter
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Cybersecurity":
        return <Shield size={28} className="text-[#2563EB]" />;
      case "Cloud":
        return <Cloud size={28} className="text-[#0EA5E9]" />;
      case "AI":
        return <Brain size={28} className="text-[#C8963E]" />;
      default:
        return <BookOpen size={28} className="text-[#2563EB]" />;
    }
  };

  return (
    <div className={cn(isRTL ? "font-cairo text-right" : "font-inter")} dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 bg-[#0B1221] relative overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,1) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB] mb-6">
              <span className="w-4 h-[1.5px] bg-[#2563EB] rounded-full" />
              {t("insights_page.kicker")}
            </span>

            <h1 className="text-5xl md:text-7xl font-bold tracking-[-3px] leading-[0.98] text-white mb-6 max-w-3xl">
              {t("insights_page.title")}
            </h1>

            <p className="text-[16px] text-white/45 max-w-xl leading-relaxed">
              {t("insights_page.body")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter Tabs ─────────────────────────────────────────────────── */}
      <div className="sticky top-[56px] z-40 bg-white/90 dark:bg-[#0B1221]/90 backdrop-blur-xl border-b border-[#E5E5EA] dark:border-[#1E3150]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide py-0">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  "px-5 py-4 text-[12px] font-semibold",
                  "tracking-tight whitespace-nowrap",
                  "border-b-2 transition-all duration-200",
                  activeFilter === filter.id
                    ? "border-[#2563EB] text-[#2563EB]"
                    : "border-transparent text-[#6B6B6B]",
                  "hover:text-[#1d1d1f] dark:hover:text-white"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Article Grid ──────────────────────────────────────────────────── */}
      <section className="bg-white dark:bg-[#0B1221] transition-colors duration-500 min-h-screen">
        <div className="max-w-5xl mx-auto px-6 py-16">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-14 h-14 rounded-2xl bg-[#F8FAFC] dark:bg-[#111] border border-[#E5E5EA] dark:border-[#1E3150] flex items-center justify-center mx-auto mb-5">
                <BookOpen size={22} className="text-[#A0A0A0]" />
              </div>
              <p className="text-[15px] text-[#6B6B6B] font-medium">
                {isRTL ? "لا توجد مقالات في هذه الفئة" : "No articles in this category yet"}
              </p>
            </div>
          ) : (
            <motion.div
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Featured article (first card — full width) */}
              {filteredArticles[0] && (() => {
                const article = filteredArticles[0];
                const locale = getInsightLocale(article, language);
                const categoryIcon = getCategoryIcon(article.category);
                const categoryLabel = getCategoryLabel(article.category, language);

                return (
                  <div className="md:col-span-2">
                    <motion.article
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[#E5E5EA] dark:border-[#1E3150] hover:border-[#2563EB]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#2563EB]/5">
                        {/* Left: image placeholder with gradient */}
                        <div className="relative h-64 md:h-auto bg-gradient-to-br from-[#0F1C2E] to-[#1a1a2e] flex items-center justify-center overflow-hidden">
                          <div
                            className="absolute inset-0 opacity-20"
                            style={{
                              backgroundImage: `
                                linear-gradient(rgba(37,99,235,1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(37,99,235,1) 1px, transparent 1px)`,
                              backgroundSize: "40px 40px",
                            }}
                          />
                          <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center">
                            {categoryIcon}
                          </div>
                        </div>

                        {/* Right: content */}
                        <div className="p-8 bg-white dark:bg-[#10192C] flex flex-col justify-between">
                          <div>
                            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 bg-[#EFF6FF] dark:bg-[#2563EB]/10 text-[#2563EB]">
                              {categoryLabel}
                            </span>
                            <Link href={`/insights/${article.slug}`}>
                              <h2 className={cn(
                                "text-2xl font-bold tracking-tight",
                                "text-[#1d1d1f] dark:text-white",
                                "mb-3 leading-tight",
                                "hover:text-[#2563EB]",
                                "hover:underline underline-offset-4",
                                "decoration-[#2563EB] decoration-[1.5px]",
                                "transition-colors duration-200",
                                "cursor-pointer"
                              )}>
                                {locale.title}
                              </h2>
                            </Link>
                            <p className="text-[14px] text-[#6B6B6B] leading-relaxed">
                              {locale.excerpt}
                            </p>
                          </div>
                          <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#E5E5EA] dark:border-[#1E3150]">
                            <span className="text-[12px] text-[#A0A0A0]">
                              {formatDate(article.date, language)} · {article.readTime}
                            </span>
                            <Link href={`/insights/${article.slug}`} className={cn("text-[12px] font-semibold text-[#2563EB] flex items-center gap-1 group-hover:gap-2 transition-all duration-200 cursor-pointer", isRTL ? "flex-row-reverse" : "")}>
                              {t("insights_page.read_article")}
                              <ArrowRight size={12} className={cn(isRTL ? "rotate-180" : "")} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  </div>
                );
              })()}

              {/* Remaining articles — 2 col */}
              {filteredArticles.slice(1).map((article, i) => {
                const locale = getInsightLocale(article, language);
                const categoryLabel = getCategoryLabel(article.category, language);

                return (
                  <div key={i}>
                    <motion.article
                      variants={{
                        hidden: { opacity: 0, y: 24 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      className="group h-full"
                    >
                      <div className="h-full rounded-2xl border border-[#E5E5EA] dark:border-[#1E3150] overflow-hidden hover:border-[#2563EB]/40 hover:shadow-lg hover:shadow-[#2563EB]/5 transition-all duration-300 bg-white dark:bg-[#10192C] flex flex-col">
                        {/* Colored top accent */}
                        <div
                          className="h-1 w-full"
                          style={{
                            background:
                              article.category === "AI"
                                ? "#C8963E"
                                : article.category === "Cloud"
                                ? "#0EA5E9"
                                : "#2563EB",
                          }}
                        />

                        <div className="p-7 flex flex-col flex-1">
                          {/* Category + read time */}
                          <div className={cn("flex items-center justify-between mb-5", isRTL ? "flex-row-reverse" : "")}>
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB]">
                              {categoryLabel}
                            </span>
                            <span className="text-[11px] text-[#A0A0A0]">
                              {article.readTime}
                            </span>
                          </div>

                          {/* Title */}
                          <Link 
                            href={`/insights/${article.slug}`}
                            className="group/link"
                          >
                            <h3 className={cn(
                              "text-[18px] font-bold tracking-tight",
                              "leading-snug text-[#1d1d1f]",
                              "dark:text-white mb-3",
                              "group-hover/link:text-[#2563EB]",
                              "transition-colors duration-200",
                              "underline-offset-4",
                              "hover:underline decoration-[#2563EB]",
                              "decoration-[1.5px]",
                              "cursor-pointer"
                            )}>
                              {locale.title}
                            </h3>
                          </Link>

                          {/* Excerpt */}
                          <p className="text-[13px] text-[#6B6B6B] leading-relaxed line-clamp-3 mb-6 flex-1">
                            {locale.excerpt}
                          </p>

                          {/* Footer */}
                          <div className={cn("flex items-center justify-between pt-5 border-t border-[#E5E5EA] dark:border-[#1E3150]", isRTL ? "flex-row-reverse" : "")}>
                            <span className="text-[11px] text-[#A0A0A0]">
                              {formatDate(article.date, language)}
                            </span>
                            <Link href={`/insights/${article.slug}`} className={cn("flex items-center gap-1 text-[12px] font-semibold text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer", isRTL ? "flex-row-reverse" : "")}>
                              {isRTL ? "اقرأ ←" : "Read →"}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  </div>
                );
              })}
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
