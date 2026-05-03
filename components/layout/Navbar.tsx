"use client";

import { useState } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useLanguage } from "@/lib/LanguageContext";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { X, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "../ui/ThemeToggle";
import LanguageToggle from "../ui/LanguageToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const { t, isRTL } = useLanguage();

  const navLinks = [
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.career"), href: "/career" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const isAtTop = !isScrolled;
  const isHeroDark = true;

  const linkColor = (isActive: boolean) => {
    if (isAtTop && isHeroDark) return isActive ? "text-white" : "text-white/80 hover:text-white";
    if (isActive) return "text-[#2563EB] dark:text-[#60A5FA]";
    return "text-[#6B6B6B] dark:text-[#A1A1A6] hover:text-[#1d1d1f] dark:hover:text-white";
  };

  const ctaStyle = (isAtTop && isHeroDark)
    ? "bg-white text-[#1B3A6B] hover:bg-[#F5F5F7]"
    : "bg-[#1d1d1f] text-white dark:bg-white dark:text-[#1B3A6B] dark:hover:bg-[#F5F5F7]";

  return (
    <>
      <nav
        dir={isRTL ? "rtl" : "ltr"}
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex items-center justify-center w-full",
          isScrolled 
            ? "bg-white/98 dark:bg-[#0B1221]/98 backdrop-blur-[24px] border-b-[0.5px] border-[#E5E5EA] dark:border-[#1E3150] h-[70px] md:h-[100px]" 
            : "bg-white/10 dark:bg-black/20 backdrop-blur-md md:bg-transparent h-[80px] md:h-[130px]"
        )}
      >
        <div className={cn(
          "container max-w-7xl px-6 flex items-center justify-between h-full w-full",
          isRTL && "flex-row-reverse"
        )}>
          {/* Logo — always on correct side */}
          <Link 
            href="/" 
            className="flex items-center flex-shrink-0 z-10"
            onClick={() => setMobileMenuOpen(false)}
          >
            {isAtTop ? (
              <div className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-transparent">
                  <img
                    src="/images/Masarat Logo.png"
                    alt="Masarat"
                    className="w-full h-full object-cover scale-[2.2] translate-y-[-10%]"
                  />
                </div>
                <span className="text-white font-bold text-[24px] tracking-[-0.5px]">
                  Masarat
                  <span className="text-[#2563EB]">.</span>
                </span>
              </div>
            ) : (
              <div className="relative w-[180px] h-[60px]">
                <img
                  src="/images/Masarat Logo.png"
                  alt="Masarat Technologies"
                  className="w-full h-full object-contain object-left mix-blend-multiply dark:mix-blend-normal"
                />
              </div>
            )}
          </Link>

          {/* Desktop Links — Hidden on Mobile */}
          <div className={cn(
            "hidden md:flex items-center gap-8",
            isRTL && "flex-row-reverse"
          )}>
            <div className={cn("flex items-center gap-8", isRTL && "flex-row-reverse")}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors duration-500",
                      linkColor(isActive)
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            
            <div className={cn("flex items-center gap-4", isRTL && "flex-row-reverse")}>
              <LanguageToggle />
              <ThemeToggle />
              
              <Link
                href="/contact"
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-md shadow-brand-blue/20",
                  ctaStyle
                )}
              >
                {t("nav.cta")}
              </Link>
            </div>
          </div>

          {/* Mobile Right Controls — Includes Theme/Lang and Hamburger */}
          <div className={cn(
            "flex md:hidden items-center gap-2 flex-shrink-0",
            isRTL && "flex-row-reverse"
          )}>
            <ThemeToggle />
            <LanguageToggle />
            
            <button
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 relative",
                (isAtTop && isHeroDark) ? "text-white" : "text-[#1d1d1f] dark:text-white",
                "hover:bg-black/5 dark:hover:bg-white/5"
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay — Optimized for RTL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "fixed inset-0 z-[999] md:hidden flex flex-col bg-white dark:bg-[#0B1221] px-6 pb-8 shadow-2xl h-[100dvh] w-full",
              isRTL && "text-right"
            )}
            style={{ touchAction: "none" }}
            dir={isRTL ? "rtl" : "ltr"}
          >
            {/* Header in Overlay */}
            <div className={cn(
              "flex items-center justify-between h-[80px] w-full mb-8",
              isRTL && "flex-row-reverse"
            )}>
              <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <div className="relative w-[150px] h-[50px]">
                  <img
                    src="/images/Masarat Logo.png"
                    alt="Masarat Technologies"
                    className="w-full h-full object-contain object-left dark:invert dark:brightness-200"
                  />
                </div>
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-black/5 dark:bg-white/5"
              >
                <X size={24} className="text-[#1d1d1f] dark:text-white" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className={cn(
              "flex flex-col gap-2 mt-4",
              isRTL && "items-end"
            )}>
              {navLinks.map((link, i) => (
                <motion.div 
                  key={link.name} 
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.2 }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-4 px-4 text-4xl font-bold font-outfit transition-all rounded-2xl",
                      pathname === link.href ? "text-[#2563EB] dark:text-[#60A5FA] bg-blue-50 dark:bg-blue-600/10" : "text-[#1d1d1f] dark:text-white hover:bg-black/5 dark:hover:bg-white/5",
                      isRTL ? "text-right" : "text-left"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <div className="my-8 border-t border-[#E5E5EA] dark:border-[#1E3150]" />

            {/* Bottom Row */}
            <div className={cn(
              "flex items-center gap-4 mb-8",
              isRTL ? "flex-row-reverse justify-end" : "flex-row justify-start"
            )}>
              <ThemeToggle />
              <LanguageToggle />
              <span className="text-sm font-medium text-brand-muted dark:text-white/40 px-2">
                {isRTL ? "الإعدادات" : "Settings"}
              </span>
            </div>

            {/* Full Width CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="block w-full bg-[#2563EB] text-white py-5 rounded-3xl text-xl font-bold shadow-xl shadow-blue-600/20 text-center active:scale-[0.98] transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.cta")}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
