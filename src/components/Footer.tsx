import React from "react";
import { logoAixMarseille, logoAmidex, logoFormasup } from "../assets/images";

export default function Footer() {
  return (
    <footer className="mt-12 w-full pb-8">
      {/* Title indicating partner relationships */}
      <div className="flex flex-col items-center justify-center mb-5">
        <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-[#1B5E20]/40 to-transparent mb-3" />
        <span className="text-[10px] font-mono font-extrabold tracking-widest uppercase text-[#2E7D32] text-center">
          Soutiens & Partenaires Institutionnels
        </span>
      </div>

      {/* Partner Logos Bar (recreation of white rounded bar from poster) */}
      <div className="w-full bg-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24 shadow-xs border border-[#C8E6C9]/80">
        
        {/* AMU Logo Container */}
        <div 
          className="group flex items-center justify-center min-w-[160px] max-w-[200px] h-14 md:h-16 transition-all duration-300 hover:scale-[1.04]"
          title="Aix-Marseille Université"
        >
          <img 
            src={logoAixMarseille}
            alt="Aix-Marseille Université" 
            className="h-full w-auto max-h-12 md:max-h-14 object-contain transition-all duration-350 select-none"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Elegant divider */}
        <div className="hidden md:block h-10 w-px bg-[#C8E6C9]" />

        {/* AMIDEX Initative d'excellence Container */}
        <div 
          className="group flex items-center justify-center min-w-[160px] max-w-[200px] h-14 md:h-16 transition-all duration-300 hover:scale-[1.04]"
          title="AmiDEX - Initiative d'Excellence"
        >
          <img 
            src={logoAmidex}
            alt="AmiDEX - Initiative d'Excellence" 
            className="h-full w-auto max-h-12 md:max-h-14 object-contain transition-all duration-350 select-none"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Elegant divider */}
        <div className="hidden md:block h-10 w-px bg-[#C8E6C9]" />

        {/* FORMA'SUP Méditerranée Container */}
        <div 
          className="group flex items-center justify-center min-w-[160px] max-w-[200px] h-14 md:h-16 transition-all duration-300 hover:scale-[1.04]"
          title="FORMA'SUP Méditerranée"
        >
          <img 
            src={logoFormasup}
            alt="FORMA'SUP Méditerranée" 
            className="h-full w-auto max-h-11 md:max-h-13 object-contain transition-all duration-350 select-none"
            referrerPolicy="no-referrer"
          />
        </div>

      </div>
    </footer>
  );
}

