import React from "react";
import { motion } from "motion/react";
import { Building, Map, Compass, Info } from "lucide-react";

export default function ContexteCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="bg-gradient-to-br from-[#1B4332] via-[#224f3b] to-[#2D6A4F] rounded-3xl p-6 md:p-8 border border-[#E0E7DE] shadow-sm relative overflow-hidden h-full flex flex-col justify-between"
    >
      {/* Dynamic Glowing Accents */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-[#A7C957]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Earth Map Vector Wireframe design element */}
      <div className="absolute inset-0 opacity-[0.08] flex items-center justify-center pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full max-h-52 stroke-[#A7C957] stroke-[0.5] fill-none">
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="30" />
          <line x1="10" y1="50" x2="90" y2="50" />
          <line x1="50" y1="10" x2="50" y2="90" />
          <path d="M20,30 Q50,45 80,30" />
          <path d="M20,70 Q50,55 80,70" />
          <path d="M30,20 Q45,50 30,80" />
          <path d="M70,20 Q55,50 70,80" />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/10 text-[#A7C957] rounded-2xl border border-white/10">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white tracking-tight font-display uppercase">
                Contexte
              </h2>
              <p className="text-[10px] text-[#A7C957] font-mono tracking-widest uppercase mt-0.5">
                Bilan Annuel d'Émissions
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 px-3 py-1 bg-white/10 text-[#A7C957] rounded-full text-xs font-mono border border-white/15">
            <Compass className="w-3.5 h-3.5 animate-spin-slow" />
            Impact Global
          </div>
        </div>

        <div className="space-y-4 text-center sm:text-left">
          <p className="text-base sm:text-lg text-white font-medium font-sans leading-relaxed">
            <span className="text-[#A7C957] font-extrabold border-r pr-2 border-white/10 mr-1 select-none">“</span>
            Viaxoft réalise un bilan carbone annuel afin de mesurer son impact environnemental.
          </p>
          
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-sm italic text-[#F4F7F2]/90 leading-relaxed font-light">
            <span className="font-semibold text-[#A7C957] not-italic">Ma mission consiste à </span> collecter, structurer et fiabiliser les données nécessaires à ce bilan carbone
          </div>

          {/* New Concrete Context Metrics Bar */}
          <div className="pt-4 grid grid-cols-3 gap-2 border-t border-white/10 mt-4">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
              <span className="block text-[#A7C957] text-xs font-mono font-bold leading-none">Marseille</span>
              <span className="block text-[9px] text-white/60 font-medium mt-1 font-sans">Siège Social</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
              <span className="block text-[#A7C957] text-xs font-mono font-bold leading-none">72 ETPS</span>
              <span className="block text-[9px] text-white/60 font-medium mt-1 font-sans">Effectifs</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
              <span className="block text-[#A7C957] text-xs font-mono font-bold leading-none">SaaS Tech</span>
              <span className="block text-[9px] text-white/60 font-medium mt-1 font-sans">Secteur</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
