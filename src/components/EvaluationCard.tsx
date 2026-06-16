import React from "react";
import { motion } from "motion/react";
import { Scale, Smile, Frown, CheckCircle2, AlertOctagon, Sparkles } from "lucide-react";

export default function EvaluationCard() {
  const positivePoints = [
    { text: "Accompagnement", detail: "Collaboration fluide de l'ensemble des services et des tuteurs (MIAGE & Viaxoft)." },
    { text: "Projet concret", detail: "Livrables directement opérationnels pour la définition du plan Climat." }
  ];

  const negativePoints = [
    { text: "Difficultes d'accès", detail: "Complexité de collecte de l'historique sur de vieilles factures serveurs physiques." },
    { text: "Coordination.", detail: "Décalages d'agendas inhérents à l'intégration d'informations multi-sites." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35 }}
      className="glass-card glass-card-hover rounded-3xl p-6 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#A7C957]/5 rounded-bl-full pointer-events-none" />

      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-[#386641]/10 text-[#2D6A4F] rounded-2xl border border-[#E0E7DE] shadow-inner font-bold">
          <Scale className="w-6 h-6 animate-pulse" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#1B4332] tracking-tight font-display uppercase">
            Évaluation
          </h2>
          <p className="text-[10px] text-[#386641] font-mono tracking-widest uppercase mt-0.5 font-bold">
            Retours d'Expérience & Challenges
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Positive Points Box */}
        <div className="p-4 rounded-2xl bg-emerald-500/[0.04] border border-emerald-550/20 hover:bg-emerald-500/[0.07] transition-all duration-200">
          <div className="flex items-center gap-2 border-b border-emerald-500/10 pb-2 mb-3">
            <Smile className="w-5 h-5 text-emerald-700" />
            <h3 className="text-xs font-black uppercase tracking-wider text-emerald-800 font-display">
              Points Forts & Leviers
            </h3>
          </div>
          
          <div className="space-y-3">
            {positivePoints.map((pt, idx) => (
              <div key={idx} className="flex gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1B4332] font-display">
                    {pt.text}
                  </h4>
                  <p className="text-[11px] text-[#52796F] font-medium mt-0.5 font-sans leading-relaxed">
                    {pt.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Negative Points Box */}
        <div className="p-4 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20 hover:bg-amber-500/[0.07] transition-all duration-200">
          <div className="flex items-center gap-2 border-b border-amber-500/10 pb-2 mb-3">
            <Frown className="w-5 h-5 text-amber-700" />
            <h3 className="text-xs font-black uppercase tracking-wider text-amber-800 font-display">
              Contraintes & Obstacles
            </h3>
          </div>

          <div className="space-y-3">
            {negativePoints.map((pt, idx) => (
              <div key={idx} className="flex gap-2.5">
                <AlertOctagon className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1B4332] font-display">
                    {pt.text}
                  </h4>
                  <p className="text-[11px] text-[#52796F] font-medium mt-0.5 font-sans leading-relaxed">
                    {pt.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publication Quality Badging */}
        <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#1B4332] to-[#386641] text-white flex items-center justify-between gap-4 shadow-sm border border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#A7C957] animate-pulse shrink-0" />
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#E0E7DE] font-bold">Statut de Publication</span>
          </div>
          <span className="text-[10px] sm:text-xs font-black uppercase font-display px-2.5 py-1 bg-white/10 rounded-lg text-[#A7C957] tracking-wider border border-white/5">
            100% Conforme RSE
          </span>
        </div>
      </div>
    </motion.div>
  );
}
