import React, { useState } from "react";
import Header from "./components/Header";
import ObjectifsCard from "./components/ObjectifsCard";
import DonneesCard from "./components/DonneesCard";
import MoyensCard from "./components/MoyensCard";
import ContexteCard from "./components/ContexteCard";
import ProjectFlowCard from "./components/ProjectFlowCard";
import CarbonSimulator from "./components/CarbonSimulator";
import OsdCard from "./components/OsdCard";
import PerspectivesCard from "./components/PerspectivesCard";
import EvaluationCard from "./components/EvaluationCard";
import Footer from "./components/Footer";
import { ChevronLeft, ChevronRight, Award, Sparkles, Target, FileText, Activity, Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [timerProgress, setTimerProgress] = useState<number>(0);

  // Automatically cycle through tabs when isPlaying is active
  React.useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      setTimerProgress(0);
      const stepTime = 100; // Refresh every 100ms
      const totalDuration = 10000; // 10 seconds per slide
      const increment = (stepTime / totalDuration) * 100;

      interval = setInterval(() => {
        setTimerProgress((prev) => {
          if (prev >= 100) {
            setActiveTab((current) => (current + 1) % 4);
            return 0;
          }
          return prev + increment;
        });
      }, stepTime);
    } else {
      setTimerProgress(0);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeTab]);

  const stepsInfo = [
    {
      title: "1. Cadrage & Enjeux",
      short: "Cadrage",
      sub: "Contexte, objectifs et ODD de l'ONU",
      icon: Target,
      percentage: "25%"
    },
    {
      title: "2. Audit & Analyse",
      short: "Audit",
      sub: "Moyens, flux de données et processus",
      icon: FileText,
      percentage: "50%"
    },
    {
      title: "3. Simulateur Climat",
      short: "Simulateur",
      sub: "Calculateur de décarbonation interactif",
      icon: Activity,
      percentage: "75%"
    },
    {
      title: "4. Perspectives & Bilan",
      short: "Perspectives",
      sub: "Feuille de route et évaluation du projet de publication",
      icon: Award,
      percentage: "100%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F5E9] via-white to-[#E8F5E9]/50 font-sans text-gray-800 relative overflow-hidden select-none pb-12">
      
      {/* Immersive Green Tech Organic Background Art */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft, modern glowing spots using the premium sustainability palette */}
        <div className="absolute top-0 right-0 w-[55rem] h-[55rem] bg-gradient-to-b from-[#7CB342]/15 to-transparent rounded-full blur-[140px] opacity-60 -z-10" />
        <div className="absolute bottom-0 left-0 w-[60rem] h-[60rem] bg-gradient-to-t from-[#C8E6C9]/25 to-transparent rounded-full blur-[160px] opacity-50 -z-10" />
        <div className="absolute top-[35%] left-[20%] w-[35rem] h-[35rem] bg-[#E8F5E9]/85 rounded-full blur-[120px] opacity-35 -z-10" />
        
        {/* Soft elegant wavy separator lines dividing top and bottom sections */}
        <div className="absolute top-[28%] left-0 right-0 w-full overflow-hidden leading-none text-[#C8E6C9]/25 opacity-70">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[320px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor" />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none text-[#7CB342]/5 opacity-30">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[280px] transform rotate-180">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.83C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor" />
          </svg>
        </div>

        {/* Decorative Delicate Leaf Silhouettes */}
        <div className="absolute top-24 left-4 opacity-[0.09] transform -rotate-12 animate-pulse pr-4">
          <svg width="250" height="250" viewBox="0 0 100 100" fill="currentColor" className="text-[#1B5E20]">
            <path d="M50,10 C50,10 70,30 70,55 C70,80 50,90 50,90 C50,90 30,80 30,55 C30,30 50,10 50,10 Z" />
            <path d="M50,10 L50,90" stroke="currentColor" strokeWidth="2" />
            <path d="M50,30 Q65,40 70,50" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M50,50 Q65,60 68,70" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M50,40 Q35,45 30,55" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M50,60 Q35,65 32,75" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        <div className="absolute bottom-12 right-4 opacity-[0.11] transform rotate-45 select-none pl-4">
          <svg width="300" height="300" viewBox="0 0 100 100" fill="currentColor" className="text-[#1B5E20]">
            <path d="M50,5 C50,5 82,30 82,60 C82,85 50,95 50,95 C50,95 18,85 18,60 C18,30 50,5 50,5 Z" />
            <path d="M50,5 L50,95" stroke="currentColor" strokeWidth="2" />
            <path d="M50,25 Q75,35 80,50" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M50,45 Q75,55 78,70" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M50,35 Q25,40 20,55" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M50,55 Q25,60 22,75" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      </div>

      {/* Main Container */}
      <main id="poster-root" className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Banner with general accessibility instructions and Slideshow player */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-2.5 bg-[#386641]/10 border border-[#E0E7DE] rounded-2xl mb-4 text-xs text-[#386641] font-mono font-bold relative overflow-hidden shadow-xs">
          {isPlaying && (
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#A7C957] to-[#386641]"
              style={{ width: `${timerProgress}%` }}
              transition={{ ease: "linear" }}
            />
          )}
          <span className="flex items-center gap-1.5 shrink-0 select-none">
            <span className="w-2 h-2 rounded-full bg-[#A7C957] animate-ping" />
            PLATEFORME INTERACTIVE RSE VIAXOFT 2025
          </span>
          
          <div className="flex items-center gap-3">
            <span className="hidden lg:inline-block text-[11px] text-[#52796F] font-semibold">Format adaptatif & optimisations visuelles</span>
            <div className="h-4 w-[1px] bg-[#E0E7DE] hidden lg:block" />
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E0E7DE] text-[#1B4332] hover:bg-[#FAFCFA] hover:text-[#386641] active:scale-95 transition-all shadow-2xs cursor-pointer text-[10px] font-black tracking-wider uppercase font-sans shrink-0"
              title={isPlaying ? "Mettre en pause le diaporama automatique" : "Lancer la lecture automatique"}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3 h-3 fill-[#386641] text-[#386641]" />
                  <span>Pause Diaporama</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 fill-[#386641] text-[#386641]" />
                  <span>Lecture Auto</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 1. Page Header with Title, Logos, and student details */}
        <Header onNavigate={setActiveTab} />

        {/* Premium Horizontal Tabs Navigation Menu */}
        <div className="w-full bg-white/95 backdrop-blur-md border border-[#E0E7DE] rounded-3xl p-2.5 mb-8 shadow-sm">
          {/* Desktop View Menu: Grid structure with cards */}
          <div className="hidden md:grid grid-cols-4 gap-2">
            {stepsInfo.map((tab, idx) => {
              const Icon = tab.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => { setActiveTab(idx); setIsPlaying(false); }}
                  className={`relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left cursor-pointer group ${
                    isActive
                      ? "bg-gradient-to-r from-[#1B4332] to-[#386641] text-white shadow-[#1B4332]/10 shadow"
                      : "hover:bg-[#F4F7F2]/60 text-[#2D3A2D]"
                  }`}
                >
                  <div className={`p-3 rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                    isActive 
                      ? "bg-white/10 text-[#A7C957]" 
                      : "bg-[#386641]/10 text-[#2D6A4F] group-hover:bg-[#386641]/20"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className={`block font-display text-sm font-black tracking-tight leading-none ${
                      isActive ? "text-white" : "text-[#1B4332]"
                    }`}>
                      {tab.title}
                    </span>
                    <span className={`block text-[11px] font-semibold leading-tight mt-1 truncate ${
                      isActive ? "text-[#E0E7DE]" : "text-[#52796F]"
                    }`}>
                      {tab.sub}
                    </span>
                  </div>
                  
                  {/* Bottom Active Pill indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-1.5 left-4 right-4 h-1 bg-[#A7C957] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile View Menu: Compact Scrollable Nav Bar */}
          <div className="md:hidden flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none scroll-smooth">
            {stepsInfo.map((tab, idx) => {
              const Icon = tab.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => { setActiveTab(idx); setIsPlaying(false); }}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#1B4332] text-white shadow-sm"
                      : "bg-[#F4F7F2]/80 text-[#52796F]"
                  }`}
                >
                  <Icon className="w-4 h-4 text-[#A7C957]" />
                  <span>{tab.short}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Interactive Presentation Content View */}
        <div className="transition-all duration-300 min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === 0 && (
              <motion.div
                key="tab0"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
              >
                <ContexteCard />
                <ObjectifsCard />
                <OsdCard />
              </motion.div>
            )}
            {activeTab === 1 && (
              <motion.div
                key="tab1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
              >
                <div className="lg:col-span-4 flex flex-col gap-6 h-full">
                  <MoyensCard />
                  <DonneesCard />
                </div>
                <div className="lg:col-span-8 flex flex-col">
                  <ProjectFlowCard />
                </div>
              </motion.div>
            )}
            {activeTab === 2 && (
              <motion.div
                key="tab2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 gap-6 items-stretch"
              >
                <CarbonSimulator />
              </motion.div>
            )}
            {activeTab === 3 && (
              <motion.div
                key="tab3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
              >
                <PerspectivesCard />
                <EvaluationCard />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Quick Bottom Horizontal Action Stepper Bar */}
        <div className="mt-8 flex items-center justify-between p-4 bg-white/80 backdrop-blur-md border border-[#E0E7DE] rounded-2xl shadow-xs">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#52796F] uppercase tracking-wider">Avancement :</span>
            <div className="w-24 sm:w-36 bg-[#E0E7DE]/60 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#A7C957] to-[#386641] rounded-full transition-all duration-500"
                style={{ width: stepsInfo[activeTab].percentage }}
              />
            </div>
            <span className="text-[10px] font-mono font-extrabold text-[#1B4332] ml-1">{stepsInfo[activeTab].percentage}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => { setActiveTab(prev => Math.max(0, prev - 1)); setIsPlaying(false); }}
              disabled={activeTab === 0}
              className="px-4 py-2 rounded-xl border border-[#E0E7DE] bg-[#F4F7F2] text-[#1B4332] font-black text-xs flex items-center gap-1.5 hover:bg-white transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Précédent
            </button>
            <button
              onClick={() => { setActiveTab(prev => Math.min(3, prev + 1)); setIsPlaying(false); }}
              disabled={activeTab === 3}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#1B4332] to-[#386641] text-white font-black text-xs flex items-center gap-1.5 hover:opacity-95 transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              Suivant <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3. Page Footer: Partner logos, student contact, original QR access */}
        <Footer />
        
      </main>
    </div>
  );
}
