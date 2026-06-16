import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Monitor, Cpu, Car, Layers, CheckCircle2, TrendingUp, AlertTriangle } from "lucide-react";

interface Category {
  id: string;
  label: string;
  value: number;
  color: string;
  borderColor: string;
  icon: React.ComponentType<any>;
  details: string[];
  percentage: string;
}

export default function ProjectFlowCard() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const categories: Category[] = [
    {
      id: "sites",
      label: "Sites",
      value: 34.9,
      color: "text-[#1B4332] bg-[#386641]/10",
      borderColor: "border-[#E0E7DE]",
      icon: Monitor,
      percentage: "27.5%",
      details: [
        "Consommation d'électricité des bureaux",
        "Chauffage et climatisation des agences",
        "Consommation papier",
        "Amortissement des infrastructures physiques"
      ]
    },
    {
      id: "operations",
      label: "Opérations",
      value: 26.6,
      color: "text-[#52796F] bg-[#D8E2DC]/50",
      borderColor: "border-[#E0E7DE]",
      icon: Cpu,
      percentage: "20.9%",
      details: [
        "Abonnements Cloud & serveurs Web",
        "Achats de matériels informatiques (PC, Écrans)",
        "Émissions liées aux services logiciels tiers"
      ]
    },
    {
      id: "deplacements",
      label: "Déplacements",
      value: 37.8,
      color: "text-[#386641] bg-[#A7C957]/15",
      borderColor: "border-[#E0E7DE]",
      icon: Car,
      percentage: "29.7%",
      details: [
        "Trajets domicile-travail des collaborateurs",
        "Voyages d'affaires et déplacements professionnels",
        "Logistique et transport liés aux événements"
      ]
    },
    {
      id: "autres",
      label: "Autres Intrants",
      value: 27.8,
      color: "text-[#2D6A4F] bg-[#2D6A4F]/10",
      borderColor: "border-[#E0E7DE]",
      icon: Layers,
      percentage: "21.9%",
      details: [
        "Amortissement des actifs RSE",
        "Gestion finale des déchets d'équipements (DEEE)",
        "Services financiers et administratifs complémentaires"
      ]
    }
  ];

  const totalCO2 = 127.1;

  // Pie segment calculations for custom SVG
  // Radius R = 50, Circumference = 314.16
  const R = 50;
  const strokeWidth = 14;
  const center = 60;
  const C = 2 * Math.PI * R;

  let accumulatedPercentage = 0;

  const segments = categories.map((cat) => {
    const valPercentage = cat.value / totalCO2;
    const strokeLength = C * valPercentage;
    const strokeOffset = C - (C * accumulatedPercentage);
    accumulatedPercentage += valPercentage;

    // Matching hex colors for SVG strokes in Natural Tones theme
    let strokeColor = "#386641"; // sites - deep accent
    if (cat.id === "operations") strokeColor = "#52796F"; // operations - sage green
    if (cat.id === "deplacements") strokeColor = "#A7C957"; // deplacements - light natural gold accent
    if (cat.id === "autres") strokeColor = "#2D6A4F"; // autres - dark secondary sage

    return {
      ...cat,
      strokeLength,
      strokeOffset,
      strokeColor,
    };
  });

  const selectedCategory = categories.find(c => c.id === (activeId || hoveredId));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass-card glass-card-hover rounded-3xl p-6 relative overflow-hidden h-full flex flex-col justify-between"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#A7C957]/5 rounded-bl-full pointer-events-none" />

      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E0E7DE]">
        <div className="p-3 bg-[#386641]/10 text-[#2D6A4F] rounded-2xl border border-[#E0E7DE] shadow-inner font-bold">
          <TrendingUp className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#1B4332] tracking-tight font-display uppercase">
            Déroulement du Projet
          </h2>
          <p className="text-[10px] text-[#386641] font-mono tracking-widest uppercase mt-0.5 font-bold">
            Audit Carbone Analytique & Progressif
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left/Main Column: State Initial Donut Interactivité */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="w-full text-center mb-4">
            <span className="text-xs uppercase tracking-widest font-mono text-[#386641] font-bold px-3 py-1 rounded-full bg-[#386641]/10 border border-[#E0E7DE]">
              État Initial des Émissions 2025
            </span>
          </div>

          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* SVG Donut */}
            <svg 
              viewBox="0 0 120 120" 
              className="w-full h-full transform -rotate-90 filter drop-shadow-sm"
            >
              {/* Background circle */}
              <circle
                cx={center}
                cy={center}
                r={R}
                fill="transparent"
                stroke="#E0E7DE"
                strokeWidth={strokeWidth}
                style={{ opacity: 0.5 }}
              />
              
              {/* Segments */}
              {segments.map((seg) => {
                const isHighlighted = hoveredId === seg.id || activeId === seg.id;
                const isAnySelected = hoveredId !== null || activeId !== null;
                const opacity = !isAnySelected ? 1 : isHighlighted ? 1 : 0.4;
                const customStrokeWidth = isHighlighted ? strokeWidth + 3 : strokeWidth;

                return (
                  <circle
                    key={seg.id}
                    cx={center}
                    cy={center}
                    r={R}
                    fill="transparent"
                    stroke={seg.strokeColor}
                    strokeWidth={customStrokeWidth}
                    strokeDasharray={`${seg.strokeLength} ${C}`}
                    strokeDashoffset={seg.strokeOffset}
                    strokeLinecap="round"
                    className="cursor-pointer transition-all duration-300"
                    style={{ opacity }}
                    onMouseEnter={() => setHoveredId(seg.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => setActiveId(activeId === seg.id ? null : seg.id)}
                  />
                );
              })}
            </svg>

            {/* Central Circle content details */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <AnimatePresence mode="wait">
                {!selectedCategory ? (
                  <motion.div
                    key="total"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center"
                  >
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#52796F] font-bold">Total</span>
                    <span className="text-3xl font-black font-mono text-[#1B4332] mt-1">127,1</span>
                    <span className="text-[11px] font-bold text-[#2D3A2D] mt-0.5">tCO₂eq</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key={selectedCategory.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center"
                  >
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#386641] font-bold flex items-center gap-1">
                      {React.createElement(selectedCategory.icon, { className: "w-3 h-3" })}
                      {selectedCategory.label}
                    </span>
                    <span className="text-3xl font-black font-sans text-[#1B4332] mt-0.5">
                      {selectedCategory.value}
                    </span>
                    <span className="text-[10px] font-mono text-[#2D3A2D] bg-[#386641]/15 px-2 py-0.5 rounded-full mt-1 border border-[#E0E7DE]">
                      {selectedCategory.percentage}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <p className="text-[11px] text-center text-[#52796F] mt-2 font-mono italic">
            Survolez ou cliquez sur un segment pour l'analyser en détail.
          </p>
        </div>

        {/* Right/Category Cards Column */}
        <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
          {segments.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeId === cat.id || hoveredId === cat.id;

            return (
              <div
                key={cat.id}
                className={`flex items-center gap-3 p-3 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-[#FAFCFA] border-[#A7C957] scale-[1.02] shadow-sm"
                    : "bg-[#F4F7F2]/40 border-[#E0E7DE] hover:border-[#386641]/55"
                }`}
                onMouseEnter={() => setHoveredId(cat.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setActiveId(activeId === cat.id ? null : cat.id)}
              >
                <div className={`p-2.5 rounded-xl ${cat.color} ${cat.borderColor} border`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 col">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#1B4332] font-display">
                      {cat.label}
                    </span>
                    <span className="text-sm font-black font-mono text-[#386641]">
                      {cat.value} tCO₂
                    </span>
                  </div>
                  <div className="w-full bg-[#E0E7DE]/80 rounded-full h-1.5 mt-1.5">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: cat.percentage,
                        backgroundColor:
                          cat.id === "sites"
                            ? "#386641"
                            : cat.id === "operations"
                            ? "#52796F"
                            : cat.id === "deplacements"
                            ? "#A7C957"
                            : "#2D6A4F",
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Selected Category Details Drawer */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 p-4 rounded-2xl bg-[#FAFCFA] border border-[#E0E7DE] overflow-hidden"
          >
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1B4332] mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#386641]" /> COMPOSITION DES ÉMISSIONS - {selectedCategory.label}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedCategory.details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#2D3A2D] font-sans py-1 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A7C957] shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Strategic Observation Alert Banner */}
      <div className="p-4 rounded-2xl bg-[#386641]/5 border border-[#386641]/10 flex items-start gap-4 mb-3">
        <span className="p-1 px-2.5 rounded-lg bg-[#386641] text-white text-[10px] font-mono font-extrabold uppercase shrink-0 mt-0.5">Constat</span>
        <p className="text-xs text-[#2D3A2D] font-sans font-medium leading-relaxed">
          <strong className="text-[#1B4332]">Observation clé :</strong> Les trajets de déplacements (29.7%) et l'énergie des infrastructures physiques (27.5%) constituent les deux plus grands centres d'émissions de l'organisation. L'action conjointe sur ces pôles permettra de réduire drastiquement l'empreinte environnementale globale de plus de 40 tCO₂eq.
        </p>
      </div>

      {/* Row: Travaux Réalisés & Avancement Actuel */}
      <div className="mt-8 pt-6 border-t border-[#E0E7DE] grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm font-bold text-[#1B4332] uppercase font-display tracking-wider mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#386641]" /> Travaux Réalisés
          </h3>
          <ul className="space-y-2">
            {[
              "Identification des sources",
              "Collecte et consolidation",
              "Contrôle de qualité"
            ].map((trav, idx) => (
              <li key={idx} className="flex items-center gap-2.5 text-xs text-[#2D3A2D] font-sans font-medium leading-relaxed">
                <span className="text-[#386641] font-semibold">•</span>
                <span>{trav}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-[#1B4332] uppercase font-display tracking-wider mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#386641]" /> Avancement Actuel
            </h3>
            <p className="text-xs text-[#52796F] font-medium leading-relaxed font-sans mb-4">
              La collecte, la structuration et la fiabilisation des flux d'émissions sont en cours de finalisation pour l'exercice.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-[#1B4332] to-[#2D6A4F] text-white p-4 rounded-2xl flex items-center gap-3.5 border border-[#E0E7DE] shadow-inner">
            <div className="p-2.5 bg-[#F4F7F2] text-[#1B4332] rounded-xl shrink-0">
              <AlertTriangle className="w-5 h-5 text-[#2D6A4F]" />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#A7C957]">Statut du Projet</div>
              <div className="text-sm font-black text-white font-display">Préparation du bilan carbone 2025</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
