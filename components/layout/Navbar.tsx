"use client";

import { useState } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useLanguage } from "@/lib/LanguageContext";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { X } from "lucide-react";
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

  // Visibility Logic
  const isAtTop = !isScrolled;
  const isHeroDark = true; // Hero is always dark on homepage

  const linkColor = (isActive: boolean) => {
    if (isAtTop && isHeroDark) return isActive ? "text-white" : "text-white/80 hover:text-white";
    if (isActive) return "text-[#2563EB] dark:text-[#60A5FA]";
    return "text-[#6B6B6B] dark:text-[#A1A1A6] hover:text-[#1d1d1f] dark:hover:text-white";
  };



  const ctaStyle = (isAtTop && isHeroDark)
    ? "bg-white text-[#1B3A6B] hover:bg-[#F5F5F7]"
    : "bg-[#1d1d1f] text-white dark:bg-white dark:text-[#1B3A6B] dark:hover:bg-[#F5F5F7]";

  const menuVariants = {
    closed: { opacity: 0, x: isRTL ? "-100%" : "100%" },
    open: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: isRTL ? -20 : 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] h-[130px] transition-all duration-500 flex items-center justify-center",
        isScrolled 
          ? "bg-white/88 dark:bg-[#0B1221]/90 backdrop-blur-[24px] border-b-[0.5px] border-[#E5E5EA] dark:border-[#1E3150] h-[100px]" 
          : "bg-transparent dark:bg-transparent"
      )}
    >
      <div className="container max-w-7xl px-6 flex items-center justify-between h-full">
        <Link href="/" className="flex items-center">
          {isAtTop ? (
            <div className="flex items-center gap-2">
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

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 rtl:gap-reverse">
          <div className="flex items-center gap-6">
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
          
          <div className="flex items-center gap-4 ml-4 rtl:ml-0 rtl:mr-4">
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

        {/* Mobile Toggle Group */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            className={cn(
              "p-2 transition-colors duration-500",
              (isAtTop && isHeroDark) ? "text-white" : "text-[#1d1d1f] dark:text-white"
            )}
            onClick={() => setMobileMenuOpen(true)}
          >
            <div className="flex flex-col gap-1.5 w-5">
              <div className={cn("h-0.5 w-full transition-colors", (isAtTop && isHeroDark) ? "bg-white" : "bg-[#1d1d1f] dark:bg-white")} />
              <div className={cn("h-0.5 w-full transition-colors", (isAtTop && isHeroDark) ? "bg-white" : "bg-[#1d1d1f] dark:bg-white")} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-white dark:bg-[#0B1221] z-[120] md:hidden flex flex-col p-8 transition-colors duration-500 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-16">
              <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <div className="relative w-[180px] h-[60px]">
                  <img
                    src="/images/Masarat Logo.png"
                    alt="Masarat Technologies"
                    className="w-full h-full object-contain object-left dark:invert dark:brightness-200"
                  />
                </div>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={24} className="text-[#1d1d1f] dark:text-white" />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-5xl font-bold font-outfit transition-colors",
                      pathname === link.href ? "text-[#2563EB] dark:text-[#60A5FA]" : "text-[#1d1d1f] dark:text-white",
                      "hover:text-[#2563EB]"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <div className="h-[1px] w-full bg-[#E5E5EA] dark:border-[#1E3150] mt-4" />

              <motion.div variants={linkVariants} className="mt-4 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium dark:text-white/60">Language</span>
                  <LanguageToggle />
                </div>
                <Link
                  href="/contact"
                  className="inline-block bg-[#1d1d1f] text-white dark:bg-white dark:text-[#1B3A6B] px-8 py-4 rounded-full text-xl font-bold shadow-lg text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav.cta")}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
