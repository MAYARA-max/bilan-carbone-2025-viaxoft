import React from "react";
import { motion } from "motion/react";
import { Target, CheckCircle2 } from "lucide-react";

export default function ObjectifsCard() {
  const objectives = [
    { label: "Données", text: "Fiabiliser les données environnementales." },
    { label: "Synergie", text: "Centraliser les informations issues de plusieurs services." },
    { label: "Analyse", text: "Faciliter l'analyse des émissions de CO2." },
    { label: "RSE", text: "Améliorer la qualité du reporting RSE." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="glass-card glass-card-hover rounded-3xl p-6 relative overflow-hidden h-full flex flex-col justify-between"
    >
      {/* Absolute decorative accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#A7C957]/5 rounded-bl-full pointer-events-none" />

      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-[#386641]/10 text-[#2D6A4F] rounded-2xl border border-[#E0E7DE] shadow-inner">
          <Target className="w-6 h-6 animate-pulse" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#1B4332] tracking-tight font-display uppercase">
            Objectifs
          </h2>
          <p className="text-[10px] text-[#386641] font-mono tracking-widest uppercase mt-0.5 font-bold">
            Piliers Stratégiques RSE
          </p>
        </div>
      </div>

      <ul className="space-y-3.5">
        {objectives.map((obj, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="flex items-start gap-3.5 text-[#2D3A2D] text-sm leading-relaxed p-2.5 rounded-2xl bg-[#F4F7F2]/50 border border-[#E0E7DE]/40 hover:bg-[#FAFCFA] transition-colors"
          >
            <div className="mt-1 shrink-0 bg-[#386641]/10 text-[#2D6A4F] p-0.5 rounded-full border border-[#E0E7DE]">
              <CheckCircle2 className="w-4 h-4 text-[#2D6A4F]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#386641] mb-0.5">
                {obj.label}
              </span>
              <span className="font-sans font-medium text-[#1B4332]">{obj.text}</span>
            </div>
          </motion.li>
        ))}
      </ul>

      {/* Corporate Strategy Target Badge */}
      <div className="mt-4 p-3 rounded-2xl bg-gradient-to-r from-[#1B4332]/5 to-[#386641]/10 border border-[#E0E7DE] flex items-center justify-between gap-3 shadow-2xs">
        <div>
          <span className="block text-[9px] font-mono font-extrabold uppercase text-[#2D6A4F]">Cible Nationale RSE</span>
          <span className="block text-xs font-bold text-[#1B4332] font-display mt-0.5">Réduction Bas Carbone</span>
        </div>
        <div className="px-3 py-1 bg-gradient-to-r from-[#1B4332] to-[#386641] rounded-xl text-white font-mono font-black text-xs leading-none">
          -30% d'ici 2030
        </div>
      </div>
    </motion.div>
  );
}
