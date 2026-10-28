'use client';

import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showStickers?: boolean;
}

export const CrazyBharatDarshanLogo: React.FC<LogoProps> = ({
  size = 'md',
  showStickers = false,
}) => {
  if (size === 'sm') {
    return (
      <div className="relative inline-flex items-center group select-none">
        <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-2xl bg-ink-900 text-canvas border border-ink-800 shadow-soft transform group-hover:-rotate-1 group-hover:scale-105 transition-all">
          <span className="text-coral-300 font-mono text-xs">✦</span>
          <span className="font-sans font-black tracking-[0.18em] sm:tracking-[0.25em] text-[11px] sm:text-xs uppercase bg-clip-text text-transparent bg-gradient-to-r from-canvas via-coral-200 to-canvas">
            BHARATDARSHAN
          </span>
          <span className="text-[8px] sm:text-[9px] font-mono font-black bg-coral-400 text-ink-950 px-1.5 py-0.2 rounded-full uppercase tracking-wider">
            RAW
          </span>
        </div>
      </div>
    );
  }

  if (size === 'md') {
    return (
      <div className="relative inline-flex items-center group select-none">
        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-2xl bg-[#1C1B18] text-[#FDFCF8] border border-ink-800 shadow-card transform group-hover:rotate-1 group-hover:scale-105 transition-all">
          <span className="text-coral-300 font-mono text-xs sm:text-sm animate-pulse-subtle">✦</span>
          <span className="font-sans font-black tracking-[0.16em] sm:tracking-[0.3em] text-xs sm:text-sm uppercase bg-clip-text text-transparent bg-gradient-to-r from-canvas via-coral-200 to-sage-200">
            BHARATDARSHAN
          </span>
          <span className="text-[9px] sm:text-[10px] font-mono font-black bg-sage-300 text-ink-950 px-1.5 sm:px-2 py-0.5 rounded-full uppercase tracking-wider sm:tracking-widest shadow-xs">
            ORIGINAL
          </span>
        </div>
      </div>
    );
  }

  if (size === 'hero') {
    return (
      <div className="relative inline-block my-2 py-2 select-none group w-full max-w-full">
        {/* Layer 1: Ambient Pastel Glow Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-coral-300/30 via-sage-300/30 to-lavender-300/30 blur-2xl rounded-3xl -z-10 transform scale-105 sm:scale-110 group-hover:scale-115 transition-transform duration-700" />

        {/* Floating Quirky Gen-Z Stickers (Responsive placement so no horizontal scroll) */}
        {showStickers && (
          <>
            <div className="absolute -top-4 -left-1 sm:-top-5 sm:-left-6 px-2.5 sm:px-3 py-1 rounded-full bg-coral-200 text-ink-900 border border-coral-300 text-[9px] sm:text-[10px] font-mono font-black uppercase tracking-wider sm:tracking-widest rotate-[-6deg] sm:rotate-[-8deg] shadow-soft animate-float-gentle z-20">
              ★ UNFILTERED INDIA
            </div>
            <div className="absolute -top-4 -right-1 sm:-top-6 sm:-right-6 px-2.5 sm:px-3 py-1 rounded-full bg-sage-200 text-ink-900 border border-sage-300 text-[9px] sm:text-[10px] font-mono font-black uppercase tracking-wider sm:tracking-widest rotate-[5deg] sm:rotate-[7deg] shadow-soft z-20">
              0% TOURIST TRAPS ✦
            </div>
            <div className="absolute -bottom-3 right-4 sm:-bottom-4 sm:right-10 px-2.5 py-0.5 rounded-md bg-lavender-200 text-ink-900 border border-lavender-300 text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-wider rotate-[-3deg] shadow-xs hidden xs:block z-20">
              EST. 2026 // EXPEDITIONS
            </div>
          </>
        )}

        {/* Layer 2: The Monumental Typography Structure */}
        <div className="relative border-3 sm:border-4 border-ink-900 bg-canvas rounded-2xl sm:rounded-4xl p-3.5 sm:p-7 shadow-[5px_5px_0px_0px_#1C1B18] sm:shadow-[8px_8px_0px_0px_#1C1B18] transform group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-[10px_10px_0px_0px_#1C1B18] transition-all duration-300 overflow-hidden">
          {/* Top Ticker */}
          <div className="flex items-center justify-between border-b-2 border-ink-900 pb-2 mb-2 text-[9px] sm:text-xs font-mono font-bold tracking-wider sm:tracking-widest text-ink-700 uppercase">
            <span>[ SYSTEM ID // 01 ]</span>
            <span className="flex items-center gap-1.5 text-coral-600 font-black">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-coral-400 animate-ping" />
              LIVING SOUL OF INDIA
            </span>
            <span className="hidden sm:inline">[ ARCHIVE ]</span>
          </div>

          {/* Monumental Headline */}
          <div className="flex items-center justify-center py-1 sm:py-2">
            <h1 className="text-2xl min-[360px]:text-3xl min-[440px]:text-4xl min-[540px]:text-5xl sm:text-7xl md:text-8xl font-black font-sans tracking-[-0.03em] sm:tracking-[-0.04em] uppercase text-ink-900 leading-none break-all sm:break-normal">
              <span className="hover:text-coral-500 transition-colors">B</span>
              <span className="hover:text-sage-600 transition-colors">H</span>
              <span className="hover:text-lavender-600 transition-colors">A</span>
              <span className="hover:text-coral-500 transition-colors">R</span>
              <span className="hover:text-sage-600 transition-colors">A</span>
              <span className="hover:text-lavender-600 transition-colors">T</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-500 via-sage-600 to-lavender-600 hover:opacity-80 transition-opacity">
                DARSHAN
              </span>
            </h1>
          </div>

          {/* Bottom Ticker */}
          <div className="flex items-center justify-between border-t-2 border-ink-900 pt-2 mt-2 text-[9px] sm:text-xs font-mono font-bold tracking-wider sm:tracking-widest text-ink-700 uppercase overflow-x-auto scrollbar-none whitespace-nowrap gap-2 sm:gap-4">
            <span className="shrink-0">✦ 28 STATES</span>
            <span className="shrink-0">✦ 8 UTs</span>
            <span className="shrink-0">✦ VARANASI</span>
            <span className="shrink-0 hidden xs:inline">✦ LADAKH</span>
            <span className="shrink-0 hidden sm:inline">✦ RAJASTHAN</span>
            <span className="shrink-0 hidden md:inline">✦ KERALA</span>
          </div>
        </div>
      </div>
    );
  }

  // Large default
  return (
    <div className="relative inline-flex items-center select-none group">
      <div className="border-2 sm:border-3 border-ink-900 bg-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-2xl shadow-[3px_3px_0px_0px_#1C1B18] sm:shadow-[5px_5px_0px_0px_#1C1B18] transform group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] transition-all">
        <span className="font-black text-base sm:text-2xl font-sans tracking-[0.15em] sm:tracking-[0.2em] text-ink-900 uppercase">
          BHARATDARSHAN
        </span>
      </div>
    </div>
  );
};
