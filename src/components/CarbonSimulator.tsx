import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  Leaf, 
  HelpCircle, 
  RotateCcw, 
  Car, 
  Cpu, 
  Monitor, 
  Layers,
  Check,
  Building,
  Plane,
  Heart
} from "lucide-react";

interface Tactic {
  id: string;
  name: string;
  category: "sites" | "operations" | "deplacements" | "autres";
  metric: string;
  maxReduction: number; // in tCO2eq
  description: string;
  icon: React.ComponentType<any>;
  tips: string[];
}

export default function CarbonSimulator() {
  const [teleworkLevel, setTeleworkLevel] = useState<number>(0); // 0 to 100
  const [greenItLevel, setGreenItLevel] = useState<number>(0);
  const [energyLevel, setEnergyLevel] = useState<number>(0);
  const [circularLevel, setCircularLevel] = useState<number>(0);
  const [showHelp, setShowHelp] = useState<boolean>(false);
  const [showReport, setShowReport] = useState<boolean>(false);

  const tactics: Tactic[] = [
    {
      id: "telework",
      name: "Télétravail & Mobilité Douce",
      category: "deplacements",
      metric: "Déplacements domicile-travail & transports",
      maxReduction: 15.1, // ~40% max reduction of 37.8 tCO2eq
      description: "Mettre en place 2 à 3 jours de télétravail par semaine, encourager le covoiturage et subventionner les abonnements de transports collectifs.",
      icon: Car,
      tips: [
        "Un salarié faisant 2 jours de télétravail réduit son empreinte trajets de 40%.",
        "L'indemnité forfaitaire de covoiturage motive jusqu'à 25% des équipes."
      ]
    },
    {
      id: "greenit",
      name: "Infrastructures Cloud & Green IT",
      category: "operations",
      metric: "Virtualisation, serveurs & cycle de vie matériel",
      maxReduction: 10.6, // ~40% max reduction of 26.6 tCO2eq
      description: "Prolonger la vie des ordinateurs de 3 à 5 ans, virtualiser les serveurs locaux de Viaxoft et privilégier des hébergeurs cloud certifiés neutres en carbone.",
      icon: Cpu,
      tips: [
        "La phase de fabrication d'un PC représente 80% de son impact écologique total.",
        "Passer chez un hébergeur éco-certifié éradique jusqu'à 90% des émissions de serveurs."
      ]
    },
    {
      id: "energy",
      name: "Énergie Verte & Éco-gérance",
      category: "sites",
      metric: "Consommation électrique & thermique des locaux",
      maxReduction: 12.2, // ~35% max reduction of 34.9 tCO2eq
      description: "Basculer vers un contrat d'électricité 100% verte (origine hydraulique/solaire), automatiser la baisse nocturne du chauffage de 2°C.",
      icon: Monitor,
      tips: [
        "Réduire le chauffage de 1°C fait économiser environ 7% de consommation énergétique.",
        "Un contrat vert labellisé Garanties d'Origine décarbonise activement le réseau."
      ]
    },
    {
      id: "circular",
      name: "Économie Circulaire & Zéro Papier",
      category: "autres",
      metric: "Consommation papier, fournitures & fin de vie",
      maxReduction: 8.3, // ~30% max reduction of 27.8 tCO2eq
      description: "Transition totale vers le zéro papier (signature électronique, facturation Viaxoft dématérialisée), recyclage optimal et reconditionnement des PC usagés.",
      icon: Layers,
      tips: [
        "Chaque tonne de papier recyclé épargne environ 17 arbres et 20 000 litres d'eau.",
        "Revendre le matériel informatique à des fins de reconditionnement évite l'extraction de métaux rares."
      ]
    }
  ];

  // Base state emissions (from ProjectFlowCard details)
  const initialEmissions = {
    sites: 34.9,
    operations: 26.6,
    deplacements: 37.8,
    autres: 27.8
  };

  const initialTotal = 127.1;

  // Compute live reductions based on percentage level selected (slider 0-100)
  const redTelework = (teleworkLevel / 100) * 15.1;
  const redGreenIt = (greenItLevel / 100) * 10.6;
  const redEnergy = (energyLevel / 100) * 12.2;
  const redCircular = (circularLevel / 100) * 8.3;

  const totalReduction = redTelework + redGreenIt + redEnergy + redCircular;
  const currentTotal = initialTotal - totalReduction;
  const reductionPercentage = (totalReduction / initialTotal) * 100;

  // Dynamic Rating logic
  let grade = "E";
  let gradeColor = "text-red-500 bg-red-500/10 border-red-200";
  let gradeDescription = "Statut Quo. Des actions urgentes de transition sont nécessaires.";
  
  if (reductionPercentage > 0 && reductionPercentage <= 10) {
    grade = "D";
    gradeColor = "text-amber-600 bg-amber-500/10 border-amber-200";
    gradeDescription = "Transition Amorcés. Premiers efforts vers une contribution écologique.";
  } else if (reductionPercentage > 10 && reductionPercentage <= 25) {
    grade = "C";
    gradeColor = "text-emerald-700 bg-emerald-500/10 border-emerald-200";
    gradeDescription = "Transition Satisfaisante. Viaxoft est sur la bonne voie de sa RSE.";
  } else if (reductionPercentage > 25 && reductionPercentage <= 35) {
    grade = "B";
    gradeColor = "text-emerald-800 bg-emerald-600/15 border-emerald-300";
    gradeDescription = "Transition Ambitieuse. Objectifs d'alignement avec les accords climatiques.";
  } else if (reductionPercentage > 35) {
    grade = "A+";
    gradeColor = "text-[#1B4332] bg-[#A7C957]/30 border-[#A7C957]";
    gradeDescription = "Leader RSE d'Excellence. Émissions réduites au plancher incompressible.";
  }

  // Ecological Equivalences computations
  const carKmSaved = totalReduction * 5200; // Average 1 ton CO2 = 5200 km in standard car
  const treeYearsAbsorbed = totalReduction * 40; // 1 ton CO2 = 40 trees absorbing for 1 year
  const flightsSaved = totalReduction * 2.1; // 1 ton CO2 = ~2 flight trips Marseille-Paris avoided

  const resetSimulator = () => {
    setTeleworkLevel(0);
    setGreenItLevel(0);
    setEnergyLevel(0);
    setCircularLevel(0);
  };

  const setIdealTransition = () => {
    setTeleworkLevel(80);
    setGreenItLevel(90);
    setEnergyLevel(100);
    setCircularLevel(75);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card rounded-3xl p-6 relative overflow-hidden h-full flex flex-col justify-between"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#A7C957]/5 rounded-bl-full pointer-events-none" />

      {/* Header with Title and Reset */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E0E7DE]">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-[#386641]/10 text-[#2D6A4F] rounded-2xl border border-[#E0E7DE] shadow-inner font-bold">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#1B4332] tracking-tight font-display uppercase">
              Simulateur d'Éco-Actions 2025
            </h2>
            <p className="text-[10px] text-[#386641] font-mono tracking-widest uppercase mt-0.5 font-bold">
              Planification Éco-Responsable Interactive
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowHelp(!showHelp)}
            className="p-2 transition-all rounded-lg bg-[#F4F7F2] border border-[#E0E7DE] text-[#2D3A2D] hover:bg-[#D8E2DC]/50 cursor-pointer"
            title="Aide sur les estimations"
          >
            <HelpCircle className="w-4 h-4" />
          </button>
          
          <button
            onClick={resetSimulator}
            className="flex items-center gap-1.5 px-3 py-1.5 transition-all text-xs font-semibold rounded-lg bg-[#F4F7F2] border border-[#E0E7DE] text-[#2D3A2D] hover:bg-white hover:border-[#386641] cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Recommencer
          </button>
        </div>
      </div>

      {showHelp && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mb-4 p-4 text-xs bg-[#D8E2DC]/40 border border-[#E0E7DE] rounded-2xl text-[#2D3A2D] leading-relaxed"
        >
          <strong className="text-[#1B4332]">Comment fonctionne ce simulateur ?</strong><br />
          Ce module d'intelligence modélise les plus grands gisements de réduction des gaz à effet de serre (GES) identifiés lors de l'audit de Viaxoft. Ajustez les curseurs d'engagement de 0% (statut actuel) à 100% (politique d'excellence maximale) pour simuler la réduction directe de l'empreinte carbone et voir l'évaluation de performance en temps réel.
        </motion.div>
      )}

      {/* Main Grid: Control sliders on left, dynamic grade and equivalents on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN (Control Sliders): span 7 */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Tactic 1: Telework */}
          <div className="p-4 rounded-2xl bg-[#F4F7F2]/60 border border-[#E0E7DE] hover:bg-[#FAFCFA] transition-all duration-200">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-[#A7C957]/15 rounded-lg border border-[#E0E7DE] text-[#2D6A4F] shrink-0">
                  <Car className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#1B4332]">Télétravail & Transports Doux</span>
              </div>
              <span className="text-xs font-mono font-bold text-[#386641] bg-[#386641]/10 px-2 py-0.5 rounded-full">
                {teleworkLevel}%
              </span>
            </div>
            <p className="text-[11px] text-[#52796F] mb-3 leading-tight">
              Réduit de max -15.1 tCO₂eq ({tactics[0].metric})
            </p>
            <input
              type="range"
              min="0"
              max="100"
              value={teleworkLevel}
              onChange={(e) => setTeleworkLevel(Number(e.target.value))}
              className="w-full accent-[#386641] bg-[#E0E7DE] h-2 rounded-lg cursor-pointer transition-all"
            />
            <div className="mt-2.5 flex items-start gap-1 text-[10px] text-[#2D3A2D] italic bg-[#FAFCFA]/90 p-1.5 rounded-lg border border-[#E0E7DE]/50">
              <span className="text-[#386641] font-bold">Option efficace :</span>
              <span>{teleworkLevel > 50 ? tactics[0].tips[1] : tactics[0].tips[0]}</span>
            </div>
          </div>

          {/* Tactic 2: Green IT */}
          <div className="p-4 rounded-2xl bg-[#F4F7F2]/60 border border-[#E0E7DE] hover:bg-[#FAFCFA] transition-all duration-200">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-[#2D6A4F]/10 rounded-lg border border-[#E0E7DE] text-[#2D6A4F] shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#1B4332]">Cloud Vert & Durabilité Matériel</span>
              </div>
              <span className="text-xs font-mono font-bold text-[#386641] bg-[#386641]/10 px-2 py-0.5 rounded-full">
                {greenItLevel}%
              </span>
            </div>
            <p className="text-[11px] text-[#52796F] mb-3 leading-tight">
              Réduit de max -10.6 tCO₂eq ({tactics[1].metric})
            </p>
            <input
              type="range"
              min="0"
              max="100"
              value={greenItLevel}
              onChange={(e) => setGreenItLevel(Number(e.target.value))}
              className="w-full accent-[#386641] bg-[#E0E7DE] h-2 rounded-lg cursor-pointer transition-all"
            />
            <div className="mt-2.5 flex items-start gap-1 text-[10px] text-[#2D3A2D] italic bg-[#FAFCFA]/90 p-1.5 rounded-lg border border-[#E0E7DE]/50">
              <span className="text-[#386641] font-bold">Option efficace :</span>
              <span>{greenItLevel > 50 ? tactics[1].tips[1] : tactics[1].tips[0]}</span>
            </div>
          </div>

          {/* Tactic 3: Energy */}
          <div className="p-4 rounded-2xl bg-[#F4F7F2]/60 border border-[#E0E7DE] hover:bg-[#FAFCFA] transition-all duration-200">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-[#52796F]/10 rounded-lg border border-[#E0E7DE] text-[#52796F] shrink-0">
                  <Building className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#1B4332]">Contrat Énergétique & Éco-thermique</span>
              </div>
              <span className="text-xs font-mono font-bold text-[#386641] bg-[#386641]/10 px-2 py-0.5 rounded-full">
                {energyLevel}%
              </span>
            </div>
            <p className="text-[11px] text-[#52796F] mb-3 leading-tight">
              Réduit de max -12.2 tCO₂eq ({tactics[2].metric})
            </p>
            <input
              type="range"
              min="0"
              max="100"
              value={energyLevel}
              onChange={(e) => setEnergyLevel(Number(e.target.value))}
              className="w-full accent-[#386641] bg-[#E0E7DE] h-2 rounded-lg cursor-pointer transition-all"
            />
            <div className="mt-2.5 flex items-start gap-1 text-[10px] text-[#2D3A2D] italic bg-[#FAFCFA]/90 p-1.5 rounded-lg border border-[#E0E7DE]/50">
              <span className="text-[#386641] font-bold">Option efficace :</span>
              <span>{energyLevel > 50 ? tactics[2].tips[1] : tactics[2].tips[0]}</span>
            </div>
          </div>

          {/* Tactic 4: Circular Economy */}
          <div className="p-4 rounded-2xl bg-[#F4F7F2]/60 border border-[#E0E7DE] hover:bg-[#FAFCFA] transition-all duration-200">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-[#2D6A4F]/10 rounded-lg border border-[#E0E7DE] text-[#2D6A4F] shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#1B4332]">Éco-circulaire & Zéro Papier</span>
              </div>
              <span className="text-xs font-mono font-bold text-[#386641] bg-[#386641]/10 px-2 py-0.5 rounded-full">
                {circularLevel}%
              </span>
            </div>
            <p className="text-[11px] text-[#52796F] mb-3 leading-tight">
              Réduit de max -8.3 tCO₂eq ({tactics[3].metric})
            </p>
            <input
              type="range"
              min="0"
              max="100"
              value={circularLevel}
              onChange={(e) => setCircularLevel(Number(e.target.value))}
              className="w-full accent-[#386641] bg-[#E0E7DE] h-2 rounded-lg cursor-pointer transition-all"
            />
            <div className="mt-2.5 flex items-start gap-1 text-[10px] text-[#2D3A2D] italic bg-[#FAFCFA]/90 p-1.5 rounded-lg border border-[#E0E7DE]/50">
              <span className="text-[#386641] font-bold">Option efficace :</span>
              <span>{circularLevel > 50 ? tactics[3].tips[1] : tactics[3].tips[0]}</span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN (Live Stats Board & Equivalents): span 5 */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Live Carbon Grade Card */}
          <div className="p-5 rounded-3xl border border-[#E0E7DE] bg-[#FAFCFA] flex flex-col items-center text-center relative overflow-hidden shadow-sm">
            <div className="absolute top-2 left-2 flex items-center gap-1 scale-90 px-2 py-0.5 bg-[#386641]/5 text-[#386641] rounded-full border border-[#E0E7DE] text-[9px] font-mono font-bold">
              <Sparkles className="w-2.5 h-2.5 animate-pulse" /> SIMULATION DE PERFORMANCE
            </div>
            
            {/* Big Grade Emblem */}
            <div className="mt-4 flex items-center gap-4 justify-center">
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-black font-display shadow-inner border border-[#E0E7DE] transition-all duration-500 ${gradeColor}`}>
                {grade}
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-mono tracking-wider text-[#52796F] font-bold">
                  Bilan Réduit à
                </p>
                <p className="text-3xl font-black font-mono text-[#1B4332] mt-0.5">
                  {currentTotal.toFixed(1)} <span className="text-xs font-semibold">tCO₂eq</span>
                </p>
                <p className="text-xs font-bold text-[#2D6A4F] mt-0.5 font-sans">
                  -{totalReduction.toFixed(1)} tCO₂eq (-{reductionPercentage.toFixed(1)}%)
                </p>
              </div>
            </div>

            {/* Progress bar overlay indicator */}
            <div className="w-full bg-[#E0E7DE]/80 rounded-full h-2 mt-5 overflow-hidden">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-[#A7C957] to-[#2D6A4F] transition-all duration-500"
                style={{ width: `${Math.min(reductionPercentage * 2.5, 100)}%` }} // Scaled up to visual fit
              />
            </div>

            <p className="text-xs text-[#2D3A2D] font-medium leading-relaxed mt-4 italic">
              {gradeDescription}
            </p>

            {/* Interactive Visual Comparative Chart */}
            <div className="w-full mt-5 bg-[#386641]/5 rounded-2xl p-4 border border-[#E0E7DE] flex flex-col items-center">
              <span className="text-[9px] font-mono tracking-widest text-[#386641] uppercase font-bold mb-3">CONFRONTATION DE TRAJECTOIRE</span>
              <div className="flex items-end justify-center gap-12 w-full h-20 px-4">
                {/* Initial Emissions Bar */}
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-mono font-bold text-gray-400">127,1</span>
                  <div className="w-8 bg-gray-300 rounded-t-md transition-all duration-500" style={{ height: '50px' }} />
                  <span className="text-[9px] font-sans font-semibold text-gray-500 mt-1">Initiale</span>
                </div>
                
                {/* Simulated Emissions Bar */}
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-mono font-bold text-[#1B4332]">{currentTotal.toFixed(1)}</span>
                  <div 
                    className="w-8 bg-gradient-to-t from-[#2D6A4F] to-[#A7C957] rounded-t-md transition-all duration-500 shadow-md shadow-[#2D6A4F]/10" 
                    style={{ height: `${Math.max(10, Math.round((currentTotal / 127.1) * 50))}px` }} 
                  />
                  <span className="text-[9px] font-sans font-bold text-[#1B4332] mt-1">Simulée</span>
                </div>
              </div>
            </div>

            {/* Quick buttons to auto-config action-plans */}
            <div className="w-full mt-4 flex flex-col sm:flex-row items-center gap-2">
              <button
                onClick={setIdealTransition}
                className="w-full py-1.5 px-3 rounded-xl bg-gradient-to-r from-[#1B4332] to-[#386641] text-white hover:opacity-90 font-bold transition-all text-[11px] cursor-pointer shadow-sm"
              >
                Appliquer le Plan Climat RSE
              </button>
              <button
                onClick={() => setShowReport(!showReport)}
                className="w-full py-1.5 px-3 rounded-xl bg-white border border-[#E0E7DE] text-[#1B4332] hover:bg-gray-55 font-bold transition-all text-[11px] cursor-pointer shadow-sm"
              >
                {showReport ? "Masquer la Synthèse" : "Générer la Synthèse"}
              </button>
            </div>

            {/* Show Action Plan Details if toggled */}
            <AnimatePresence>
              {showReport && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="w-full mt-4 bg-white border border-[#E0E7DE] rounded-2xl p-4 text-left shadow-inner overflow-hidden"
                >
                  <h4 className="text-[10px] font-mono font-bold uppercase text-[#1B4332] border-b pb-1.5 mb-2.5 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#386641] bg-[#386641]/10 rounded-full p-0.5" /> PLAN D'ENGAGEMENT SÉLECTIONNÉ
                  </h4>
                  <ul className="space-y-2 text-xs text-[#2D3A2D] font-sans">
                    <li className="flex items-start gap-2 p-1.5 rounded-lg bg-[#386641]/5">
                      <span className="font-extrabold text-[#386641]">1. Télétravail :</span>
                      <span>{teleworkLevel}% d'application (Cible tCO₂eq décarboné : {redTelework.toFixed(1)} t)</span>
                    </li>
                    <li className="flex items-start gap-2 p-1.5 rounded-lg bg-[#386641]/5">
                      <span className="font-extrabold text-[#386641]">2. Infrastructures :</span>
                      <span>{greenItLevel}% d'application (Cible tCO₂eq décarboné : {redGreenIt.toFixed(1)} t)</span>
                    </li>
                    <li className="flex items-start gap-2 p-1.5 rounded-lg bg-[#386641]/5">
                      <span className="font-extrabold text-[#386641]">3. Éco-Gérance :</span>
                      <span>{energyLevel}% d'application (Cible tCO₂eq décarboné : {redEnergy.toFixed(1)} t)</span>
                    </li>
                    <li className="flex items-start gap-2 p-1.5 rounded-lg bg-[#386641]/5">
                      <span className="font-extrabold text-[#386641]">4. Éco-Circulaire :</span>
                      <span>{circularLevel}% d'application (Cible tCO₂eq décarboné : {redCircular.toFixed(1)} t)</span>
                    </li>
                  </ul>
                  <div className="mt-3.5 pt-2.5 border-t border-[#E0E7DE] text-[10px] font-mono font-medium text-emerald-800 text-center uppercase tracking-widest bg-emerald-500/5 py-2 rounded-xl">
                    ★ Statut : Plan {grade} Validé par Viaxoft
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Social / Environmental Equivalences avoided */}
          <div className="p-4 rounded-3xl border border-[#E0E7DE] bg-white space-y-3.5 shadow-sm">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1B4332] border-b border-[#E0E7DE] pb-2 flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-[#386641]" /> ÉQUIVALENCE ÉCOLOGIQUE DES ÉMISSIONS ÉVITÉES
            </h3>
            
            {totalReduction === 0 ? (
              <p className="text-xs text-[#52796F] italic text-center py-4">
                Ajustez les curseurs à gauche pour voir l'impact environnemental concret de vos décisions.
              </p>
            ) : (
              <div className="space-y-4">
                
                {/* Clean representation of Trees saved */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-50 text-[#2D6A4F] border border-[#E0E7DE] rounded-xl shrink-0">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Capture Carbone Équivalente</p>
                    <p className="text-sm font-bold text-[#1B4332] font-display">
                      ~ {Math.round(treeYearsAbsorbed).toLocaleString()} arbres
                    </p>
                    <p className="text-[10px] text-[#52796F] font-medium mt-0.5 leading-none">
                      Arbres en pleine croissance captant le CO₂ pendant 1 an.
                    </p>
                  </div>
                </div>

                {/* Clean representation of Car distances */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-amber-50 text-[#386641] border border-[#E0E7DE] rounded-xl shrink-0">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Distance en Voiture Évitée</p>
                    <p className="text-sm font-bold text-[#1B4332] font-display">
                      ~ {Math.round(carKmSaved).toLocaleString()} km
                    </p>
                    <p className="text-[10px] text-[#52796F] font-medium mt-0.5 leading-none">
                      Voyages équivalents en berline essence classique.
                    </p>
                  </div>
                </div>

                {/* Clean representation of flight avoided */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-sky-50 text-sky-800 border border-[#E0E7DE] rounded-xl shrink-0">
                    <Plane className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Vols Marseille-Paris Alternatives</p>
                    <p className="text-sm font-bold text-[#1B4332] font-display">
                      ~ {flightsSaved.toFixed(1)} allers-retours
                    </p>
                    <p className="text-[10px] text-[#52796F] font-medium mt-0.5 leading-none">
                      Trajets aériens individuels évités ou substitués.
                    </p>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Core presentation quote from Mayara Fezai */}
          <div className="p-4 rounded-2xl bg-[#386641]/5 border border-[#386641]/15 text-xs italic text-[#2D3A2D] leading-relaxed flex gap-2">
            <Heart className="w-4 h-4 fill-[#A7C957] text-[#386641] shrink-0 mt-0.5" />
            <div>
              <strong>Note de Fezai Mayara :</strong> "La transition n'est pas qu'une formule mathématique. L'action conjointe sur le télétravail partiel et l'allongement matériel chez Viaxoft représente notre premier levier d'action vers l'éco-citoyenneté d'entreprise."
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
