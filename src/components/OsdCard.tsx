import React from "react";
import { motion } from "motion/react";
import { Globe2, RefreshCw, Cpu, Trees, Landmark } from "lucide-react";

interface OsdItem {
  number: string;
  title: string;
  subtitle: string;
  color: string;
  shadowColor: string;
  icon: React.ComponentType<any>;
  details: string;
}

export default function OsdCard() {
  const osdItems: OsdItem[] = [
    {
      number: "13",
      title: "Lutte contre les",
      subtitle: "changements climatiques",
      color: "bg-[#2D6A4F] text-white border-[#A7C957]/30",
      shadowColor: "shadow-[#2D6A4F]/5",
      icon: Globe2,
      details: "Mesure directe de l'impact carbone annuel de l'entreprise pour guider la réduction efficace de ses émissions de GES."
    },
    {
      number: "12",
      title: "Consommation &",
      subtitle: "production responsables",
      color: "bg-[#D8E2DC]/80 text-[#1B4332] border-[#E0E7DE]",
      shadowColor: "shadow-slate-200/5",
      icon: RefreshCw,
      details: "Audit des approvisionnements (informatique, électricité, papier) favorisant un approvisionnement durable."
    },
    {
      number: "9",
      title: "Industrie, innovation",
      subtitle: "& infrastructure",
      color: "bg-[#386641] text-white border-[#E0E7DE]",
      shadowColor: "shadow-[#386641]/5",
      icon: Cpu,
      details: "Rationalisation et virtualisation des serveurs et infrastructures cloud menant à un Green IT innovant."
    },
    {
      number: "15",
      title: "Vie",
      subtitle: "terrestre",
      color: "bg-[#A7C957] text-[#1B4332] border-[#E0E7DE]",
      shadowColor: "shadow-[#A7C957]/5",
      icon: Trees,
      details: "Réduction des déchets matériels et optimisation de la filière d'amortissement écologique pour limiter l'empreinte sol."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="glass-card glass-card-hover rounded-3xl p-6 relative overflow-hidden h-full flex flex-col justify-between"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#A7C957]/5 rounded-bl-full pointer-events-none" />

      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-[#386641]/10 text-[#2D6A4F] rounded-2xl border border-[#E0E7DE] shadow-inner font-bold">
          <Landmark className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#1B4332] tracking-tight font-display uppercase">
            ODD Concernés
          </h2>
          <p className="text-[10px] text-[#386641] font-mono tracking-widest uppercase mt-0.5 font-bold">
            Objectifs de Développement Durable ONU
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {osdItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className={`flex flex-col justify-between p-4 rounded-2xl border ${item.color} ${item.shadowColor} shadow-md relative overflow-hidden group hover:scale-[1.03] transition-all duration-300`}
            >
              {/* Corner Watermark Number */}
              <div className="absolute -right-3 -top-5 text-7xl font-extrabold font-display opacity-15 pointer-events-none select-none tracking-tight">
                {item.number}
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-display tracking-tight bg-white/20 px-3 py-0.5 rounded-xl border border-white/10 shrink-0">
                    {item.number}
                  </span>
                  <div className="p-1.5 bg-white/15 rounded-lg border border-white/10 group-hover:rotate-12 transition-transform duration-300">
                    <Icon className="w-4 h-4 text-inherit" />
                  </div>
                </div>

                <h3 className="text-xs sm:text-sm font-bold min-h-[32px] leading-snug font-display">
                  {item.title} <br />
                  <span className="opacity-95">{item.subtitle}</span>
                </h3>
              </div>

              {/* Explanatory description revealing on hover */}
              <p className="text-[9px] leading-relaxed mt-3 pt-3 border-t border-white/15 opacity-75 font-sans font-medium">
                {item.details}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
