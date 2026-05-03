"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-[#F8FAFC] dark:bg-[#1A2744] border border-[#E5E5EA] dark:border-[#1E3150] rounded-full p-1 transition-colors duration-500">
      <button 
        onClick={() => setLanguage('en')}
        className={cn(
          "px-3 py-1 text-[10px] font-bold rounded-full transition-all",
          language === 'en' 
            ? "bg-white dark:bg-[#1E3150] text-[#1d1d1f] dark:text-white shadow-sm" 
            : "text-[#6B6B6B] dark:text-[#A1A1A6] hover:text-[#1d1d1f] dark:hover:text-white"
        )}
      >
        EN
      </button>
      <button 
        onClick={() => setLanguage('ar')}
        className={cn(
          "px-3 py-1 text-[10px] font-bold rounded-full transition-all",
          language === 'ar' 
            ? "bg-white dark:bg-[#1E3150] text-[#1d1d1f] dark:text-white shadow-sm" 
            : "text-[#6B6B6B] dark:text-[#A1A1A6] hover:text-[#1d1d1f] dark:hover:text-white"
        )}
      >
        AR
      </button>
    </div>
  );
}
