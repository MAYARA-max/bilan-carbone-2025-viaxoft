import React from "react";
import { motion } from "motion/react";
import { FolderHeart, Zap, Plane, Car, FileText, Laptop, Cloud } from "lucide-react";

export default function DonneesCard() {
  const dataItems = [
    { 
      text: "Consommation électrique", 
      icon: Zap, 
      color: "text-amber-800 bg-amber-500/10 border-amber-500/20",
      source: "Factures Enedis (kWh)",
      badge: "Infrastructures"
    },
    { 
      text: "Déplacements pro", 
      icon: Plane, 
      color: "text-[#1B4332] bg-[#A7C957]/15 border-[#E0E7DE]",
      source: "Notes de frais & SNCF",
      badge: "Voyages"
    },
    { 
      text: "Domicile-travail", 
      icon: Car, 
      color: "text-[#386641] bg-[#386641]/10 border-[#E0E7DE]",
      source: "Enquête interne (Km)",
      badge: "Collaborateurs"
    },
    { 
      text: "Consommation papier", 
      icon: FileText, 
      color: "text-emerald-800 bg-emerald-500/10 border-[#E0E7DE]",
      source: "Suivi des rames (Kg d'équiv.)",
      badge: "Bureautique"
    },
    { 
      text: "Achats informatique", 
      icon: Laptop, 
      color: "text-purple-700 bg-purple-500/10 border-purple-500/20",
      source: "Inventaire DSI & Achats",
      badge: "Green IT"
    },
    { 
      text: "Numérique et Cloud", 
      icon: Cloud, 
      color: "text-blue-700 bg-blue-500/10 border-blue-500/20",
      source: "Serveurs & Stockage (Go)",
      badge: "Numérique"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass-card glass-card-hover rounded-3xl p-5 sm:p-6 relative overflow-hidden flex-1 flex flex-col min-h-[440px]"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#A7C957]/5 rounded-bl-full pointer-events-none" />

      <div className="flex items-center gap-2.5 mb-4">
        <div className="p-2.5 bg-[#386641]/10 text-[#2D6A4F] rounded-xl border border-[#E0E7DE] shadow-inner">
          <FolderHeart className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-bold text-[#1B4332] tracking-tight font-display uppercase leading-tight">
            Données Traitées
          </h2>
          <p className="text-[9px] sm:text-[10px] text-[#386641] font-mono tracking-wider uppercase mt-0.5 font-bold">
            Sources & Facteurs de Calcul
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-2.5 justify-start mt-2">
        {dataItems.map((item, idx) => {
          const IconComponent = item.icon;
          
          // Compute a dynamic border color accent mapping
          let borderAccent = "border-l-4 border-l-[#386641]";
          if (item.badge === "Infrastructures") borderAccent = "border-l-4 border-l-amber-500";
          if (item.badge === "Green IT") borderAccent = "border-l-4 border-l-purple-500";
          if (item.badge === "Bureautique") borderAccent = "border-l-4 border-l-emerald-400";
          if (item.badge === "Voyages") borderAccent = "border-l-4 border-l-[#A7C957]";
          if (item.badge === "Numérique") borderAccent = "border-l-4 border-l-blue-500";

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`flex items-center gap-3 p-2.5 rounded-xl bg-[#F4F7F2]/60 border border-[#E0E7DE] ${borderAccent} hover:border-[#A7C957]/50 hover:bg-white hover:shadow-xs transition-all duration-200 group`}
            >
              <div className={`p-2 rounded-lg border shrink-0 transition-transform duration-300 group-hover:scale-105 ${item.color}`}>
                <IconComponent className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start sm:items-center justify-between gap-1.5 flex-wrap sm:flex-nowrap">
                  <span className="text-[#1B4332] text-xs sm:text-xs md:text-[13px] font-bold font-display leading-tight">
                    {item.text}
                  </span>
                  <span className="text-[8px] md:text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-[#386641]/10 text-[#1B4332] border border-[#E0E7DE] font-bold shrink-0">
                    {item.badge}
                  </span>
                </div>
                <p className="text-[9.5px] md:text-[10.5px] text-[#52796F] mt-1 font-mono font-semibold leading-normal">
                  Source : {item.source}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
