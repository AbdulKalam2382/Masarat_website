"use client";

import { useState } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useLanguage } from "@/lib/LanguageContext";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { X, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "../ui/ThemeToggle";
import LanguageToggle from "../ui/LanguageToggle";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const { t, isRTL } = useLanguage();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const menuBg = isDark ? "#0B1221" : "#FFFFFF";

  // Only the homepage has a dark hero
  const isHomepage = pathname === "/" || pathname === "";
  const isAtTop = !isScrolled;
  // Navbar is over dark background only when on homepage AND at top
  const isOverDark = isHomepage && isAtTop;

  const navLinks = [
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.career"), href: "/career" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const linkColor = (isActive: boolean) => {
    if (isOverDark) return isActive ? "text-white" : "text-white/80 hover:text-white";
    if (isActive) return "text-[#2563EB] dark:text-[#60A5FA]";
    return "text-[#6B6B6B] dark:text-[#A1A1A6] hover:text-[#1d1d1f] dark:hover:text-white";
  };

  const ctaStyle = isOverDark
    ? "bg-white text-[#1B3A6B] hover:bg-[#F5F5F7]"
    : "bg-[#1d1d1f] text-white dark:bg-white dark:text-[#1B3A6B] dark:hover:bg-[#F5F5F7]";

  // Hamburger icon: white only when over dark hero, otherwise always dark (or white in dark mode)
  const hamburgerColor = isOverDark ? "#FFFFFF" : (isDark ? "#FFFFFF" : "#1d1d1f");

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 w-full",
          isScrolled
            ? "bg-white/95 dark:bg-[#0B1221]/95 backdrop-blur-[24px] border-b-[0.5px] border-[#E5E5EA] dark:border-[#1E3150] h-[70px] md:h-[100px]"
            // Always transparent on top, even on non-homepage
            : "bg-transparent h-[80px] md:h-[130px]"
        )}
      >
        <div className="container max-w-7xl px-5 flex items-center justify-between h-full w-full">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0"
            onClick={() => setMobileMenuOpen(false)}
          >
            {isOverDark ? (
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-transparent">
                  <img
                    src="/images/Masarat Logo.png"
                    alt="Masarat"
                    className="w-full h-full object-cover scale-[2.2] translate-y-[-10%]"
                  />
                </div>
                <span className="text-white font-bold text-[22px] tracking-[-0.5px]">
                  Masarat<span className="text-[#2563EB]">.</span>
                </span>
              </div>
            ) : (
              <div className="relative w-[160px] h-[54px]">
                <img
                  src="/images/Masarat Logo.png"
                  alt="Masarat Technologies"
                  className="w-full h-full object-contain object-left mix-blend-multiply dark:mix-blend-normal"
                />
              </div>
            )}
          </Link>

          {/* ── Desktop links (hidden on mobile) ── */}
          <div className="hidden md:flex items-center gap-8">
            <div className={cn("flex items-center gap-8", isRTL && "flex-row-reverse")}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn("text-sm font-medium transition-colors duration-500", linkColor(isActive))}
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
                className={cn("px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-md shadow-brand-blue/20", ctaStyle)}
              >
                {t("nav.cta")}
              </Link>
            </div>
          </div>

          {/* ── Mobile controls ── */}
          <div className="flex md:hidden items-center gap-1 flex-shrink-0">
            <ThemeToggle />
            <LanguageToggle />
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              style={{ color: hamburgerColor }}
              className="flex items-center justify-center w-10 h-10 rounded-xl"
            >
              <Menu size={24} />
            </button>
          </div>

        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── 
          Uses 100% inline styles to avoid iOS Safari CSS class issues.
          No x/y animation — pure opacity to prevent half-panel appearance in RTL.
      */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 9999,
              backgroundColor: menuBg,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              padding: "0 20px 32px 20px",
              direction: isRTL ? "rtl" : "ltr",
            }}
          >
            {/* Overlay Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "72px",
                width: "100%",
              }}
            >
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <img
                  src="/images/Masarat Logo.png"
                  alt="Masarat"
                  style={{
                    width: "130px",
                    height: "44px",
                    objectFit: "contain",
                    objectPosition: isRTL ? "right" : "left",
                    filter: isDark ? "invert(1) brightness(2)" : "none",
                  }}
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
                  color: isDark ? "#FFFFFF" : "#1d1d1f",
                  flexShrink: 0,
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav Links */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                marginTop: "16px",
              }}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "14px 12px",
                      fontSize: "34px",
                      fontWeight: 700,
                      lineHeight: 1.1,
                      color: pathname === link.href
                        ? "#2563EB"
                        : (isDark ? "#F5F5F7" : "#1d1d1f"),
                      textDecoration: "none",
                      textAlign: isRTL ? "right" : "left",
                      borderRadius: "16px",
                      backgroundColor: pathname === link.href
                        ? (isDark ? "rgba(37,99,235,0.12)" : "rgba(37,99,235,0.07)")
                        : "transparent",
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                backgroundColor: isDark ? "#1E3150" : "#E5E5EA",
                margin: "20px 0",
              }}
            />

            {/* Settings Row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
                justifyContent: isRTL ? "flex-end" : "flex-start",
              }}
            >
              <ThemeToggle />
              <LanguageToggle />
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "block",
                  width: "100%",
                  backgroundColor: "#2563EB",
                  color: "#FFFFFF",
                  padding: "16px",
                  borderRadius: "20px",
                  fontSize: "17px",
                  fontWeight: 700,
                  textAlign: "center",
                  textDecoration: "none",
                }}
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
