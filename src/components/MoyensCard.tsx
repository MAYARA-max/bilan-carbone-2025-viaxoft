import React from "react";
import { motion } from "motion/react";
import { Briefcase, Building2, Users2, Database, GraduationCap, CheckCircle2 } from "lucide-react";

export default function MoyensCard() {
  const items = [
    { text: "Plateforme Carbo", detail: "Comptabilité et reporting des émissions de GES.", icon: Database, bg: "bg-[#2D6A4F]/10 text-[#2D6A4F]" },
    { text: "Équipes Viaxoft", detail: "Soutien et collaboration avec tout le personnel.", icon: Users2, bg: "bg-[#386641]/10 text-[#386641]" },
    { text: "Données RH & Finance", detail: "Analyses de frais et factures d'activité RSE.", icon: Building2, bg: "bg-[#52796F]/10 text-[#52796F]" },
    { text: "Méthode ADEME", detail: "Pratiques fondées sur les guides officiels Carbone.", icon: GraduationCap, bg: "bg-[#A7C957]/15 text-[#1B4332]" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="glass-card glass-card-hover rounded-3xl p-5 sm:p-6 relative overflow-hidden flex-none"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#A7C957]/5 rounded-bl-full pointer-events-none" />

      <div className="flex items-center gap-2.5 mb-5">
        <div className="p-2.5 bg-[#386641]/10 text-[#2D6A4F] rounded-xl border border-[#E0E7DE] shadow-inner font-bold">
          <Briefcase className="w-5 h-5" />
        </div>
        <h2 className="text-base sm:text-lg font-bold text-[#1B4332] tracking-tight font-display uppercase leading-tight">
          Moyens
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="flex items-start gap-3 p-3 rounded-xl bg-[#F4F7F2]/60 border border-[#E0E7DE] hover:bg-white hover:border-[#A7C957]/45 transition-all duration-300"
            >
              <div className={`p-2 rounded-lg shrink-0 ${item.bg} border border-[#E0E7DE]`}>
                <Icon className="w-4 h-4" />
              </div>
              
              <div className="flex-1 min-w-0 font-sans">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs sm:text-xs md:text-[13px] font-bold text-[#1B4332] font-display">
                    {item.text}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0" />
                </div>
                <p className="text-[10.5px] md:text-[11px] text-[#52796F] mt-1 font-sans font-medium leading-normal">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
