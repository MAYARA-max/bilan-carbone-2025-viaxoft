import React from "react";
import { motion } from "motion/react";
import { Compass, BarChart3, Users2, Leaf, ShieldAlert } from "lucide-react";

export default function PerspectivesCard() {
  const steps = [
    {
      phase: "Phase 1 : Court Terme (2025)",
      title: "Tableau de bord",
      desc: "Développer un outil de pilotage dynamique pour suivre les KPI carbone en temps réel.",
      icon: BarChart3,
      color: "text-[#1B4332] bg-[#A7C957]/20 border-[#E0E7DE]"
    },
    {
      phase: "Phase 2 : Moyen Terme (2025-2026)",
      title: "Sensibilisation",
      desc: "Former les équipes de Viaxoft aux éco-gestes et au numérique responsable.",
      icon: Users2,
      color: "text-[#386641] bg-[#386641]/10 border-[#E0E7DE]"
    },
    {
      phase: "Phase 3 : Long Terme (2026)",
      title: "Charte Green IT",
      desc: "Instaurer des critères RSE contraignants pour le cycle de vie du parc matériel.",
      icon: ShieldAlert,
      color: "text-[#2D6A4F] bg-[#2D6A4F]/10 border-[#E0E7DE]"
    },
    {
      phase: "Phase 4 : Futur Durable",
      title: "Espace vert.",
      desc: "Aménager les espaces de travail pour stimuler la biodiversité et le bien-être.",
      icon: Leaf,
      color: "text-emerald-800 bg-emerald-500/10 border-[#E0E7DE]"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="glass-card glass-card-hover rounded-3xl p-6 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#A7C957]/5 rounded-bl-full pointer-events-none" />

      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-[#386641]/10 text-[#2D6A4F] rounded-2xl border border-[#E0E7DE] shadow-inner font-bold">
          <Compass className="w-6 h-6 animate-spin-slow" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#1B4332] tracking-tight font-display uppercase">
            Perspectives
          </h2>
          <p className="text-[10px] text-[#386641] font-mono tracking-widest uppercase mt-0.5 font-bold">
            Feuille de Route & Futur RSE
          </p>
        </div>
      </div>

      <div className="relative pl-4 border-l-2 border-[#E0E7DE] space-y-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Timeline outer connector node */}
              <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-white border-2 border-[#386641] group-hover:bg-[#A7C957] transition-all duration-300" />
              
              <div className="p-4 rounded-2xl bg-[#F4F7F2]/60 border border-[#E0E7DE] hover:border-[#A7C957]/55 hover:bg-[#FAFCFA] transition-all duration-200 shadow-2xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-1.5 rounded-lg border shrink-0 ${step.color}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#52796F]">
                    {step.phase}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[#1B4332] font-display mb-1 group-hover:text-[#386641] transition-colors duration-200">
                  {step.title}
                </h3>
                
                <p className="text-xs text-[#52796F] font-sans font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
