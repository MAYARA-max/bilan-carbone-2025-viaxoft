import React, { useState } from "react";

interface ViaxoftLogoProps {
  className?: string;
  iconSize?: string;
  textSize?: string;
  textColor?: string;
  accentColor?: string;
  showText?: boolean;
}

export function ViaxoftIcon({ 
  className = "w-10 h-10", 
  accentColor = "#4D49FF" 
}: { 
  className?: string; 
  accentColor?: string;
}) {
  return (
    <svg
      viewBox="0 0 140 140"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Background soft glow or shadow if needed (keep modern & clean) */}
      
      {/* The crossroads / double chevron intertwined symbol of Viaxoft */}
      {/* Left upper branch pointing up-right/crossroads */}
      <path
        d="M52 32 L78 58 L52 84"
        stroke={accentColor}
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* S-curve ribbon that threads through the crossroads */}
      <path
        d="M88 32 C62 32 52 54 78 80 C104 106 94 128 68 128"
        stroke={accentColor}
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right lower branch pointing down-left/crossroads */}
      <path
        d="M88 56 L62 82 L88 108"
        stroke={accentColor}
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ViaxoftLogo({
  className = "flex items-center gap-2.5",
  iconSize = "w-9 h-9",
  textSize = "text-xl",
  textColor = "text-[#061841]",
  accentColor = "#4D49FF",
  showText = true,
}: ViaxoftLogoProps) {
  const [useFallback, setUseFallback] = useState(false);

  // Search results showed worldvectorlogo cdn is very stable for high-res SVG.
  // We use the official Viaxoft brand SVG from public trusted repository.
  const onlineLogoUrl = "https://cdn.worldvectorlogo.com/logos/viaxoft.svg";

  if (!useFallback) {
    return (
      <div className={`${className} select-none`}>
        <img
          src={onlineLogoUrl}
          alt="Viaxoft Brand Logo"
          referrerPolicy="no-referrer"
          className={`${showText ? "h-8" : iconSize} w-auto object-contain`}
          onError={() => setUseFallback(true)}
        />
      </div>
    );
  }

  // Graceful high-fidelity SVG fallback if the client is offline or hotlink is blocked
  return (
    <div className={className}>
      <ViaxoftIcon className={`${iconSize} shrink-0`} accentColor={accentColor} />
      {showText && (
        <span className={`font-sans font-black tracking-tight ${textColor} ${textSize} select-none flex items-center`}>
          Via
          <span className="relative inline-flex items-center mx-px">
            {/* Custom stylized X matching Viaxoft brand identity */}
            <span style={{ color: accentColor }}>x</span>
          </span>
          oft
        </span>
      )}
    </div>
  );
}

