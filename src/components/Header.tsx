import React, { useState } from "react";
import { 
  Award, 
  Leaf, 
  ShieldCheck, 
  GraduationCap, 
  Mail, 
  X, 
  ZoomIn, 
  Globe, 
  Cpu, 
  Zap, 
  Recycle, 
  ArrowRight, 
  Activity, 
  Compass, 
  Building2,
  TreeDeciduous,
  CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { miageLogoCustom, viaxoftLogoCustom, fezaiMayaraImg } from "../assets/images";

interface HeaderProps {
  onNavigate?: (tab: number) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isPhotoZoomed, setIsPhotoZoomed] = useState(false);

  return (
    <header className="relative w-full overflow-hidden rounded-3xl bg-white p-6 sm:p-8 lg:p-12 border border-[#C8E6C9] shadow-md mb-8">
      {/* Decorative environment background elements */}
      <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-[#C8E6C9]/40 blur-3xl pointer-events-none" />
      <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-[#7CB342]/10 blur-3xl pointer-events-none" />
      
      {/* Wave carbon grid overlay pattern */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[radial-gradient(circle_at_1px_1px,#1B5E20_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Decorative Bottom Curved Separation Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1B5E20] via-[#7CB342] to-[#E8F5E9]" />

      <div className="relative z-10 flex flex-col">
        
        {/* Top Header: Partner & Institution Logos */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#C8E6C9]/55 pb-6 mb-8">
          {/* MIAGE Logo (Left) */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group flex items-center gap-3.5 bg-white px-5 py-3 rounded-2xl border border-[#C8E6C9] shadow-sm shrink-0 transition-all duration-350 hover:border-[#1B5E20]/45 hover:shadow-md hover:scale-[1.03]"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg transition-colors duration-300">
              <img 
                src={miageLogoCustom} 
                alt="MIAGE Logo" 
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 select-none"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="text-sm font-black text-[#1B5E20] tracking-widest font-display">MIAGE</div>
              <div className="text-[11px] text-[#2E7D32] uppercase tracking-wider font-mono font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7CB342] animate-pulse"></span>
                Aix-Marseille
              </div>
            </div>
          </motion.div>

          {/* Viaxoft Logo (Right) */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="group flex items-center gap-4 bg-white px-5 py-3 rounded-2xl border border-[#C8E6C9] shadow-sm shrink-0 transition-all duration-350 hover:border-[#1B5E20]/45 hover:shadow-md hover:scale-[1.03]"
          >
            <div className="flex flex-col items-end mr-1 hidden sm:flex">
              <span className="text-[9px] font-mono text-[#52796F] uppercase tracking-widest font-extrabold text-right">Entreprise d'Accueil</span>
              <span className="text-[10px] text-[#1B5E20] font-black tracking-tight text-right flex items-center gap-1.5 justify-end">
                Partenaire RSE
                <Leaf className="w-3.5 h-3.5 text-[#7CB342] fill-[#7CB342]/10" />
              </span>
            </div>
            <div className="h-12 px-2 flex items-center justify-center bg-white rounded-lg transition-colors duration-300">
              <img 
                src={viaxoftLogoCustom} 
                alt="Viaxoft Logo" 
                className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105 select-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Hero split layout (Left side: Content & Professional Student bio | Right side: SVG Globe & ESG Illustration) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Texts, CTAs, and redesigned Student card */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6">
            
            {/* Soft high-end consulting tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E8F5E9] text-[#1B5E20] rounded-full text-xs font-bold font-mono border border-[#C8E6C9]/80 w-fit shadow-2xs">
              <Leaf className="w-3.5 h-3.5 text-[#1B5E20] animate-pulse" />
              RAPPORT RSE & BILAN CARBONE
            </div>

            {/* Main ESG Title with high-end green typography */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1B5E20] leading-[1.125] font-display">
              CONTRIBUTION À LA RÉALISATION DU <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B5E20] via-[#2E7D32] to-[#7CB342] font-black underline decoration-[#7CB342]/30 decoration-4">
                BILAN CARBONE 2025
              </span> DE VIAXOFT <br />
              <span className="text-gray-800 text-xl sm:text-2xl font-bold block mt-2">
                &amp; Actions Clés de Décarbonation Environnementale
              </span>
            </h1>

            {/* High-quality consulting description paragraph */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl font-medium">
              Dans le cadre du cabinet de conseil académique de la MIAGE d'Aix-Marseille, découvrez la structure interactive de collecte d’informations, de calcul précis du bilan de gaz à effet de serre (GES), et la feuille de route opérationnelle pour conduire la transition agro-écologique et numérique de Viaxoft.
            </p>

            {/* Action buttons with active props */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate?.(2)}
                className="px-5 py-3 bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] hover:from-[#134417] hover:to-[#1B5E20] text-white rounded-xl font-bold text-xs flex items-center gap-2 shadow-md hover:shadow-lg transition-all scale-100 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <Activity className="w-4 h-4 text-[#C8E6C9]" />
                Simuler l'impact Climat
              </button>
              <button
                onClick={() => onNavigate?.(1)}
                className="px-5 py-3 bg-white hover:bg-[#E8F5E9]/50 text-[#1B5E20] border border-[#C8E6C9] rounded-xl font-bold text-xs flex items-center gap-2 shadow-2xs hover:shadow-xs transition-all scale-100 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                Consulter l'Audit Actuel
                <ArrowRight className="w-4 h-4 text-[#7CB342]" />
              </button>
            </div>

            {/* Transformed professional profile card */}
            <div className="pt-4 border-t border-dashed border-[#C8E6C9]/60">
              <div className="bg-gradient-to-br from-white to-[#E8F5E9]/30 rounded-2xl p-4 border border-[#C8E6C9]/60 flex flex-col sm:flex-row items-center sm:items-start gap-4 shadow-3xs max-w-xl">
                
                {/* Mayara's high resolution photo - interactive zoom */}
                <div 
                  onClick={() => setIsPhotoZoomed(true)}
                  title="Agrandir la photo de profil professionnelle de Mayara"
                  className="group relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shadow-sm shrink-0 cursor-pointer border border-[#C8E6C9] bg-white flex items-center justify-center p-0.5"
                >
                  <img
                    src={fezaiMayaraImg}
                    alt="Portrait professionnel de Fezai Mayara"
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105 bg-white"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-1">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                  {/* Subtle green marker */}
                  <div className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#7CB342] border-2 border-white" />
                </div>

                <div className="text-center sm:text-left flex-1 space-y-1">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
                    <span className="text-[10px] text-[#1B5E20] font-mono tracking-wider uppercase font-extrabold flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-[#2E7D32]" /> MIAGE M1 Aix-Marseille
                    </span>
                    <span className="text-[9px] bg-[#1B5E20]/10 text-[#1B5E20] px-2 py-0.5 rounded-full font-bold">
                      PRO 2025
                    </span>
                  </div>
                  
                  <h3 className="text-base font-extrabold text-gray-900 font-display">Fezai Mayara</h3>
                  <p className="text-xs text-[#2E7D32] font-semibold">
                    Chargée de Projet RSE &amp; Référente Audit Transition Écologique
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-1 text-xs">
                    <a 
                      href="mailto:mfezai@viaxoft.com" 
                      className="flex items-center gap-1.5 text-gray-600 hover:text-[#1B5E20] transition-colors font-medium hover:underline text-[11px]"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#7CB342]" />
                      mfezai@viaxoft.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Premium Animated Interactive ESG Illustration */}
          <div className="lg:col-span-5 flex items-center justify-center relative mt-4 lg:mt-0">
            
            {/* Visual Backlighting Aura */}
            <div className="absolute w-72 h-72 bg-gradient-to-tr from-[#7CB342]/10 to-[#E8F5E9] rounded-full blur-[64px] -z-10 pointer-events-none" />
            
            {/* Illustration Frame */}
            <div className="relative aspect-square w-full max-w-[340px] sm:max-w-[400px] bg-white/70 backdrop-blur-lg rounded-full border border-white p-4 flex items-center justify-center shadow-xl">
              
              {/* Spinning Grid Globe */}
              <motion.svg 
                className="absolute w-[85%] h-[85%] text-emerald-800/10 opacity-70"
                viewBox="0 0 100 100"
                animate={{ rotate: 360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              >
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" />
                <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
                
                {/* Lat/Long Curves */}
                <path d="M5,50 Q50,20 95,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M5,50 Q50,80 95,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M50,5 Q20,50 50,95" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M50,5 Q80,50 50,95" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 2" />
                
                {/* Tiny node stars */}
                <circle cx="50" cy="15" r="1" fill="#7CB342" />
                <circle cx="50" cy="85" r="1" fill="#7CB342" />
                <circle cx="15" cy="50" r="1" fill="#1B5E20" />
                <circle cx="85" cy="50" r="1" fill="#1B5E20" />
              </motion.svg>

              {/* Central Eco-City & Green Illustration Container */}
              <div className="relative z-20 flex flex-col items-center justify-center text-center">
                
                {/* Environmental Carbon Leaf Silhouette icon */}
                <motion.div
                  animate={{ y: [-5, 5] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="w-20 h-20 bg-gradient-to-br from-[#1B5E20] to-[#7CB342] text-white rounded-3xl flex items-center justify-center shadow-lg relative p-4 mb-3 border border-white/20"
                >
                  <Leaf className="w-10 h-10 fill-white/10" />
                  
                  {/* Subtle carbon indicator bubble */}
                  <span className="absolute -top-2 -right-2 text-[9px] bg-red-100 border border-red-200 text-red-700 font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-tight">
                    CO₂
                  </span>
                </motion.div>

                {/* City skyline wire outline underneath */}
                <div className="flex items-end justify-center space-x-1.5 h-12 text-[#2E7D32]/30">
                  <div className="w-4 h-6 bg-current rounded-t" />
                  <div className="w-5 h-8 bg-current rounded-t" />
                  <Building2 className="w-8 h-8 text-[#1B5E20]/40 shrink-0" />
                  <div className="w-6 h-10 bg-[#7CB342]/20 rounded-t" />
                  <TreeDeciduous className="w-7 h-7 text-[#7CB342]/40 shrink-0" />
                  <div className="w-4 h-5 bg-current rounded-t" />
                </div>
              </div>

              {/* Floating tech capsule details with motion */}
              {/* Indicator 1: CO2 Emission Target (Top-Left) */}
              <motion.div 
                className="absolute top-[8%] left-[10%] flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#C8E6C9] shadow-xs text-[10px] font-bold text-[#1B5E20]"
                animate={{ y: [-4, 4] }}
                transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                <Activity className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Scope 1, 2, 3</span>
              </motion.div>

              {/* Indicator 2: Renewable Energy (Top-Right) */}
              <motion.div 
                className="absolute top-[18%] right-[-5%] flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-[#C8E6C9] shadow-xs text-[10px] font-bold text-[#1B5E20]"
                animate={{ y: [4, -4] }}
                transition={{ duration: 4.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                <Zap className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500/10 shrink-0" />
                <span>Transition Énergie</span>
              </motion.div>

              {/* Indicator 3: Green IT (Bottom-Right) */}
              <motion.div 
                className="absolute bottom-[14%] right-[0%] flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-[#C8E6C9] shadow-xs text-[10px] font-bold text-[#2E7D32]"
                animate={{ y: [-3, 3] }}
                transition={{ duration: 3.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                <Cpu className="w-3.5 h-3.5 text-[#7CB342] shrink-0" />
                <span>Numérique Responsable</span>
              </motion.div>

              {/* Indicator 4: Recycling/Zero Waste (Bottom-Left) */}
              <motion.div 
                className="absolute bottom-[8%] left-[5%] flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-[#C8E6C9] shadow-xs text-[10px] font-bold text-[#2E7D32]"
                animate={{ y: [3, -3] }}
                transition={{ duration: 4.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                <Recycle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Économie Circulaire</span>
              </motion.div>

              {/* Center Floating Banner: ESG Consulting Scorecard */}
              <div className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 bg-[#1B5E20] text-white px-5 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 border border-[#7CB342]/40 min-w-[190px]">
                <Award className="w-6 h-6 text-[#7CB342] shrink-0 animate-bounce" />
                <div className="text-left">
                  <div className="text-[8px] font-mono font-extrabold uppercase tracking-widest text-[#E8F5E9]/80">Score RSE Target</div>
                  <div className="text-sm font-black font-display tracking-tight">85/100 (OR ESG)</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal for Photo zoom */}
      <AnimatePresence>
        {isPhotoZoomed && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 cursor-zoom-out"
            onClick={() => setIsPhotoZoomed(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative bg-white p-3 rounded-3xl max-w-sm sm:max-w-md w-full shadow-2xl border border-[#C8E6C9] pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button icon */}
              <button 
                onClick={() => setIsPhotoZoomed(false)}
                className="absolute -top-3 -right-3 bg-red-600 hover:bg-red-700 text-white rounded-full p-2.5 shadow-lg transition-transform hover:scale-110 z-10 cursor-pointer"
                aria-label="Fermer la vue agrandie"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-white border border-[#C8E6C9] flex items-center justify-center p-2">
                <img 
                  src={fezaiMayaraImg} 
                  alt="Fezai Mayara - Portrait Professionnel Haute Résolution" 
                  className="max-w-full max-h-full object-contain rounded-xl bg-white"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-4 px-2 pb-2 text-center space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8F5E9] text-[#1B5E20] text-[10px] font-bold uppercase tracking-wider">
                  Promotion MIAGE 2025
                </div>
                <h3 className="text-xl font-bold text-[#1B5E20] font-display">Fezai Mayara</h3>
                <p className="text-xs text-gray-500 font-medium">
                  Chargée de projet RSE &amp; transition écologique pour Viaxoft
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
