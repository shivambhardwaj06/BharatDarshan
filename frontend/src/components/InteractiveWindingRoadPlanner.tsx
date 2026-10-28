'use client';

import React, { useState, useEffect, useRef } from 'react';
import { JourneyStop } from '@/lib/types';
import {
  MapPin,
  Mountain,
  Navigation,
  Sparkles,
  ShoppingBag,
  Clock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Eye,
  Sliders,
  ChevronRight,
  ChevronLeft,
  Compass,
  Award,
  ShieldCheck,
  Footprints,
  Car,
} from 'lucide-react';

interface InteractiveWindingRoadPlannerProps {
  stops: JourneyStop[];
  destinationName: string;
}

// 12 vibrant distinct pin colors inspired by the user's reference slide
const PIN_COLORS = [
  { bg: 'bg-emerald-500', text: 'text-emerald-500', border: 'border-emerald-500', hex: '#10B981', ring: 'ring-emerald-400' },
  { bg: 'bg-amber-500', text: 'text-amber-500', border: 'border-amber-500', hex: '#F59E0B', ring: 'ring-amber-400' },
  { bg: 'bg-sky-500', text: 'text-sky-500', border: 'border-sky-500', hex: '#0EA5E9', ring: 'ring-sky-400' },
  { bg: 'bg-rose-500', text: 'text-rose-500', border: 'border-rose-500', hex: '#F43F5E', ring: 'ring-rose-400' },
  { bg: 'bg-cyan-500', text: 'text-cyan-500', border: 'border-cyan-500', hex: '#06B6D4', ring: 'ring-cyan-400' },
  { bg: 'bg-indigo-500', text: 'text-indigo-500', border: 'border-indigo-500', hex: '#6366F1', ring: 'ring-indigo-400' },
  { bg: 'bg-orange-500', text: 'text-orange-500', border: 'border-orange-500', hex: '#F97316', ring: 'ring-orange-400' },
  { bg: 'bg-purple-500', text: 'text-purple-500', border: 'border-purple-500', hex: '#A855F7', ring: 'ring-purple-400' },
  { bg: 'bg-teal-500', text: 'text-teal-500', border: 'border-teal-500', hex: '#14B8A6', ring: 'ring-teal-400' },
  { bg: 'bg-pink-500', text: 'text-pink-500', border: 'border-pink-500', hex: '#EC4899', ring: 'ring-pink-400' },
  { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-600', hex: '#2563EB', ring: 'ring-blue-400' },
  { bg: 'bg-red-600', text: 'text-red-600', border: 'border-red-600', hex: '#DC2626', ring: 'ring-red-400' },
];

export const InteractiveWindingRoadPlanner: React.FC<InteractiveWindingRoadPlannerProps> = ({
  stops,
  destinationName,
}) => {
  const [activeStopIndex, setActiveStopIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'single_focus' | 'all_stops'>('single_focus');
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const totalStops = stops.length;
  const activeStop = stops[activeStopIndex] || stops[0];
  const activeColor = PIN_COLORS[activeStopIndex % PIN_COLORS.length];

  // Keyboard navigation (Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        setActiveStopIndex((prev) => Math.min(prev + 1, totalStops - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setActiveStopIndex((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalStops]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0 && activeStopIndex < totalStops - 1) {
        // Swipe left -> Next Stop
        setActiveStopIndex((prev) => prev + 1);
      } else if (diffX < 0 && activeStopIndex > 0) {
        // Swipe right -> Prev Stop
        setActiveStopIndex((prev) => prev - 1);
      }
    }
    setTouchStartX(null);
  };

  // Generate Winding Road Coordinates along a serpentine S-curve
  // 12 pins alternating left and right along the curves
  const roadPoints = stops.map((_, idx) => {
    const progress = idx / Math.max(totalStops - 1, 1);
    const y = 80 + progress * 680; // Total height 840
    // Alternating S-curve amplitude
    const wave = Math.sin(idx * 0.95);
    const x = 500 + wave * 320;
    return { x, y, idx };
  });

  // Smooth SVG path through all points
  const generateRoadPath = () => {
    if (roadPoints.length === 0) return '';
    let d = `M ${roadPoints[0].x} ${roadPoints[0].y}`;
    for (let i = 0; i < roadPoints.length - 1; i++) {
      const p0 = roadPoints[i];
      const p1 = roadPoints[i + 1];
      const cx1 = p0.x;
      const cy1 = (p0.y + p1.y) / 2;
      const cx2 = p1.x;
      const cy2 = (p0.y + p1.y) / 2;
      d += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${p1.x} ${p1.y}`;
    }
    return d;
  };

  const roadD = generateRoadPath();

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Top Controller Header */}
      <div className="p-4 sm:p-6 rounded-3xl sm:rounded-4xl bg-gradient-to-r from-ink-900 via-ink-950 to-ink-900 text-white shadow-card border-2 border-ink-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-coral-500 text-white font-mono text-[11px] sm:text-xs font-black uppercase tracking-wider">
              Serpentine Highway Route
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 font-mono text-[11px] sm:text-xs font-bold">
              {totalStops} Geographic Stops
            </span>
          </div>
          <h2 className="text-xl sm:text-3xl font-serif font-bold mt-2">
            Winding Road Waypoint Navigator
          </h2>
          <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
            Experience this expedition stop-by-stop along the mountain road. Each waypoint contains crucial landmarks and mandatory artisan workshops.
          </p>
        </div>

        {/* View Mode Toggle: Single Stop vs All Stops */}
        <div className="flex items-center gap-2 bg-white/10 p-1.5 rounded-2xl border border-white/20 self-start md:self-auto">
          <button
            onClick={() => setViewMode('single_focus')}
            className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              viewMode === 'single_focus'
                ? 'bg-coral-500 text-white shadow-md'
                : 'text-white/80 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>1 Stop at a Time (Interactive)</span>
          </button>
          <button
            onClick={() => setViewMode('all_stops')}
            className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              viewMode === 'all_stops'
                ? 'bg-white text-ink-950 shadow-md'
                : 'text-white/80 hover:text-white'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>All {totalStops} Stops</span>
          </button>
        </div>
      </div>

      {/* Waypoint Scrubber Ribbon (Quick Jump Pills) */}
      <div className="bg-white p-3 rounded-2xl border-2 border-ink-900/10 shadow-sm overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-2 min-w-max">
          <span className="text-[11px] font-mono font-black uppercase tracking-wider text-ink-500 px-2">
            Route Stops:
          </span>
          {stops.map((stop, idx) => {
            const isCurrent = idx === activeStopIndex;
            const color = PIN_COLORS[idx % PIN_COLORS.length];
            return (
              <button
                key={stop.stop_number}
                onClick={() => setActiveStopIndex(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border-2 ${
                  isCurrent
                    ? `${color.bg} text-white border-ink-900 shadow-[2px_2px_0px_0px_#1C1B18] scale-105`
                    : 'bg-canvas hover:bg-sage-100 text-ink-700 border-ink-200'
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-black">
                  {stop.stop_number}
                </span>
                <span className="truncate max-w-[120px]">{stop.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Display: Interactive Serpentine Road (Left) + Single-Stop Showcase (Right) */}
      {viewMode === 'single_focus' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* ========================================================
              LEFT COLUMN: THE SERPENTINE WINDING ROAD SVG CANVAS
              (Modeled after the user's uploaded Journey Slide)
              ======================================================== */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#F5F3EF] via-[#EAE6DF] to-[#DFD9CE] p-4 sm:p-6 rounded-4xl border-3 border-ink-900 shadow-card sticky top-24">
            <div className="flex items-center justify-between pb-3 border-b border-ink-900/10 mb-2">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-coral-600 animate-spin-slow" />
                <span className="text-xs font-mono font-black uppercase tracking-wider text-ink-900">
                  Elevation Highway Track
                </span>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white text-ink-800 border border-ink-300">
                Stop {activeStopIndex + 1} of {totalStops}
              </span>
            </div>

            {/* Serpentine Winding Road SVG Map */}
            <div className="relative w-full aspect-[1/1.05] sm:aspect-[1/1.1] overflow-hidden rounded-3xl bg-[#ECE7DC]/60 border border-ink-900/10">
              <svg
                viewBox="100 40 800 760"
                className="w-full h-full select-none"
                style={{ filter: 'drop-shadow(0 6px 8px rgba(0,0,0,0.06))' }}
              >
                {/* Background Terrain contours */}
                <path
                  d="M 120 180 Q 500 240 880 180"
                  fill="none"
                  stroke="#D3CBBB"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                />
                <path
                  d="M 120 400 Q 500 460 880 400"
                  fill="none"
                  stroke="#D3CBBB"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                />
                <path
                  d="M 120 620 Q 500 680 880 620"
                  fill="none"
                  stroke="#D3CBBB"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                />

                {/* 1. Road Under-Shadow */}
                <path
                  d={roadD}
                  fill="none"
                  stroke="#1C1B18"
                  strokeWidth="56"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.15"
                  transform="translate(4, 8)"
                />

                {/* 2. Main Asphalt Highway Surface */}
                <path
                  d={roadD}
                  fill="none"
                  stroke="#374151"
                  strokeWidth="50"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* 3. Road Shoulder Borders */}
                <path
                  d={roadD}
                  fill="none"
                  stroke="#6B7280"
                  strokeWidth="48"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d={roadD}
                  fill="none"
                  stroke="#1F2937"
                  strokeWidth="42"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* 4. Active Traveled Highway Glow */}
                {activeStopIndex > 0 && (
                  <path
                    d={(() => {
                      const activePoints = roadPoints.slice(0, activeStopIndex + 1);
                      let d = `M ${activePoints[0].x} ${activePoints[0].y}`;
                      for (let i = 0; i < activePoints.length - 1; i++) {
                        const p0 = activePoints[i];
                        const p1 = activePoints[i + 1];
                        const cx1 = p0.x;
                        const cy1 = (p0.y + p1.y) / 2;
                        const cx2 = p1.x;
                        const cy2 = (p0.y + p1.y) / 2;
                        d += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${p1.x} ${p1.y}`;
                      }
                      return d;
                    })()}
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.9"
                  />
                )}

                {/* 5. Dashed White Center Line */}
                <path
                  d={roadD}
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="3.5"
                  strokeDasharray="14 12"
                  strokeLinecap="round"
                  opacity="0.95"
                />

                {/* 6. Waypoint Pins on the Road */}
                {roadPoints.map((pt) => {
                  const isCurrent = pt.idx === activeStopIndex;
                  const isPast = pt.idx < activeStopIndex;
                  const pinColor = PIN_COLORS[pt.idx % PIN_COLORS.length];
                  const stopItem = stops[pt.idx];

                  return (
                    <g
                      key={pt.idx}
                      className="cursor-pointer transition-transform duration-300 hover:scale-115"
                      onClick={() => setActiveStopIndex(pt.idx)}
                    >
                      {/* Pulsing ring for active pin */}
                      {isCurrent && (
                        <circle
                          cx={pt.x}
                          cy={pt.y - 24}
                          r="32"
                          fill={pinColor.hex}
                          opacity="0.25"
                          className="animate-ping"
                        />
                      )}

                      {/* Pin Drop Shadow */}
                      <ellipse
                        cx={pt.x}
                        cy={pt.y}
                        rx="12"
                        ry="5"
                        fill="#000000"
                        opacity="0.35"
                      />

                      {/* Teardrop Location Pin Stem */}
                      <path
                        d={`M ${pt.x} ${pt.y} L ${pt.x - 14} ${pt.y - 24} A 16 16 0 1 1 ${pt.x + 14} ${pt.y - 24} Z`}
                        fill={isCurrent ? pinColor.hex : isPast ? '#4B5563' : pinColor.hex}
                        stroke="#1C1B18"
                        strokeWidth="3"
                      />

                      {/* Pin Inner Circle */}
                      <circle
                        cx={pt.x}
                        cy={pt.y - 24}
                        r="11"
                        fill="#FFFFFF"
                        stroke="#1C1B18"
                        strokeWidth="2"
                      />

                      {/* Pin Number */}
                      <text
                        x={pt.x}
                        y={pt.y - 20}
                        textAnchor="middle"
                        fontSize="11"
                        fontWeight="900"
                        fontFamily="monospace"
                        fill="#1C1B18"
                      >
                        {pt.idx + 1}
                      </text>

                      {/* Stop Label callout */}
                      <rect
                        x={pt.x > 500 ? pt.x + 22 : pt.x - 132}
                        y={pt.y - 36}
                        width="110"
                        height="26"
                        rx="8"
                        fill={isCurrent ? '#1C1B18' : '#FFFFFF'}
                        stroke="#1C1B18"
                        strokeWidth="2"
                        opacity={isCurrent ? '1' : '0.92'}
                      />
                      <text
                        x={pt.x > 500 ? pt.x + 28 : pt.x - 126}
                        y={pt.y - 19}
                        fontSize="10"
                        fontWeight="800"
                        fill={isCurrent ? '#FFFFFF' : '#1C1B18'}
                      >
                        {stopItem.name.length > 14
                          ? stopItem.name.slice(0, 13) + '…'
                          : stopItem.name}
                      </text>
                    </g>
                  );
                })}

                {/* Animated Vehicle / Walker Token on Active Pin */}
                {(() => {
                  const currPt = roadPoints[activeStopIndex];
                  if (!currPt) return null;
                  return (
                    <g transform={`translate(${currPt.x - 18}, ${currPt.y - 66})`}>
                      <rect
                        x="0"
                        y="0"
                        width="36"
                        height="24"
                        rx="12"
                        fill="#F97316"
                        stroke="#1C1B18"
                        strokeWidth="2.5"
                        filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))"
                      />
                      <text
                        x="18"
                        y="16"
                        textAnchor="middle"
                        fontSize="12"
                      >
                        🚗
                      </text>
                    </g>
                  );
                })()}
              </svg>
            </div>

            {/* Interactive Bottom Control Toolbar */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-ink-900/10">
              <button
                disabled={activeStopIndex === 0}
                onClick={() => setActiveStopIndex((prev) => Math.max(prev - 1, 0))}
                className="px-3.5 py-2 rounded-2xl bg-white border-2 border-ink-900 text-xs font-bold text-ink-900 disabled:opacity-30 disabled:pointer-events-none hover:bg-sage-100 flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#1C1B18] active:translate-x-0.5 active:translate-y-0.5"
              >
                <ChevronLeft className="w-4 h-4 text-coral-600" />
                <span>Prev Stop</span>
              </button>

              <span className="font-mono text-xs font-black text-ink-800">
                Stop {activeStop.stop_number} / {totalStops}
              </span>

              <button
                disabled={activeStopIndex === totalStops - 1}
                onClick={() => setActiveStopIndex((prev) => Math.min(prev + 1, totalStops - 1))}
                className="px-3.5 py-2 rounded-2xl bg-coral-500 border-2 border-ink-900 text-xs font-bold text-white disabled:opacity-30 disabled:pointer-events-none hover:bg-coral-600 flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#1C1B18] active:translate-x-0.5 active:translate-y-0.5"
              >
                <span>Next Stop</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: SINGLE-STOP SHOWCASE CARD
              ("ek stop dekhe ek time mai or uski saari information")
              ======================================================== */}
          <div
            ref={cardContainerRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="lg:col-span-7 space-y-6 animate-in fade-in slide-in-from-right-4 duration-300"
          >
            {/* Top Main Waypoint Card */}
            <div className="p-5 sm:p-8 rounded-4xl bg-white border-3 border-ink-900 shadow-card space-y-5">
              {/* Stop Number Badge & Header */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-2xl ${activeColor.bg} text-white border-2 border-ink-900 flex items-center justify-center font-mono font-black text-base sm:text-lg shadow-[2px_2px_0px_0px_#1C1B18]`}
                  >
                    {activeStop.stop_number}
                  </span>
                  <div>
                    <span className="text-[11px] sm:text-xs font-mono font-black uppercase tracking-wider text-coral-600 block">
                      {activeStop.route_leg_name}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-serif font-bold text-ink-900 leading-tight">
                      {activeStop.name}
                    </h3>
                  </div>
                </div>

                {activeStop.hindi_name && (
                  <span className="font-handwriting text-2xl sm:text-3xl text-coral-500 rotate-[-1.5deg]">
                    {activeStop.hindi_name}
                  </span>
                )}
              </div>

              {/* Waypoint Quick Stats Pill Bar */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-ink-800">
                <span className="px-3.5 py-1.5 rounded-full bg-sage-50 border border-sage-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sage-600" />
                  <span>{activeStop.distance_from_start}</span>
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-coral-50 border border-coral-300 flex items-center gap-1.5">
                  <Mountain className="w-3.5 h-3.5 text-coral-600" />
                  <span>Altitude: {activeStop.altitude}</span>
                </span>
                {activeStop.estimated_time && (
                  <span className="px-3.5 py-1.5 rounded-full bg-lavender-50 border border-lavender-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-lavender-600" />
                    <span>{activeStop.estimated_time}</span>
                  </span>
                )}
              </div>

              {/* Tagline & Summary */}
              <div className="p-4 rounded-2xl bg-canvas border border-ink-200 space-y-1.5">
                <p className="font-bold text-ink-900 text-sm sm:text-base leading-snug">
                  "{activeStop.tagline}"
                </p>
                <p className="text-xs sm:text-sm text-ink-700 leading-relaxed">
                  {activeStop.quick_summary}
                </p>
              </div>

              {/* ========================================================
                  SECTION 1: BEST THINGS TO VISIT AT THIS STOP
                  ======================================================== */}
              <div className="space-y-3 pt-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-coral-500" />
                  <h4 className="font-serif font-bold text-lg sm:text-xl text-ink-900">
                    Best Things to Experience at Stop {activeStop.stop_number}
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {activeStop.best_things_to_visit.map((thing, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-sage-50/60 border-2 border-sage-200 hover:border-sage-400 transition-all space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h5 className="font-bold text-ink-900 text-sm sm:text-base flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{thing.title}</span>
                        </h5>
                        {thing.tag && (
                          <span className="text-[10px] sm:text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-sage-200 text-sage-900 border border-sage-300 shrink-0">
                            {thing.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-ink-700 pl-6 leading-relaxed">
                        {thing.description}
                      </p>
                      {thing.timing_or_highlight && (
                        <div className="pl-6 pt-1">
                          <span className="text-[11px] font-mono text-ink-500 flex items-center gap-1 font-bold">
                            <Clock className="w-3 h-3 text-coral-500" />
                            <span>Optimal Visit Timing: {thing.timing_or_highlight}</span>
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* ========================================================
                  SECTION 2: MANDATORY LOCAL SHOPS & ARTISANS AT THIS STOP
                  (High-conviction influenced stops, mandatory cultural anchor)
                  ======================================================== */}
              <div className="space-y-4 pt-4 border-t-2 border-dashed border-ink-900/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-coral-600" />
                    <div>
                      <h4 className="font-serif font-bold text-lg sm:text-xl text-ink-900">
                        Mandatory Local Shops & Artisans at this Waypoint
                      </h4>
                      <p className="text-xs text-ink-600">
                        Physically stationed along this leg. You must visit these authentic makers directly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {activeStop.local_shops.map((shop) => (
                    <div
                      key={shop.id}
                      className="rounded-3xl bg-gradient-to-br from-amber-50/80 via-white to-coral-50/50 border-2 border-coral-400 p-4 sm:p-6 shadow-md space-y-3.5"
                    >
                      {/* Urgent Influence Banner */}
                      <div className="p-3 rounded-2xl bg-coral-100 border border-coral-300">
                        <p className="text-xs sm:text-sm font-black text-coral-950 leading-snug flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-coral-600 shrink-0 mt-0.5" />
                          <span>{shop.why_must_visit}</span>
                        </p>
                      </div>

                      {/* Shop Name & Master Maker */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-coral-200 pb-3">
                        <div>
                          <h5 className="font-serif font-bold text-lg sm:text-xl text-ink-950">
                            {shop.name}
                          </h5>
                          <p className="text-xs sm:text-sm text-ink-700 font-semibold flex items-center gap-1.5 mt-0.5">
                            <Award className="w-3.5 h-3.5 text-coral-600" />
                            <span>Led by: <strong>{shop.artisan_or_owner}</strong></span>
                          </p>
                        </div>
                        {shop.badge && (
                          <span className="self-start sm:self-auto text-[11px] font-mono font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white text-coral-700 border border-coral-300 shadow-2xs">
                            {shop.badge}
                          </span>
                        )}
                      </div>

                      {/* Location & Specialty */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                        <div className="p-3 rounded-xl bg-white border border-coral-200">
                          <span className="text-[10px] font-mono font-bold uppercase text-coral-700 block">
                            Exact Waypoint Marker
                          </span>
                          <span className="font-bold text-ink-900 flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3.5 h-3.5 text-coral-500 shrink-0" />
                            <span>{shop.exact_location}</span>
                          </span>
                        </div>
                        <div className="p-3 rounded-xl bg-white border border-coral-200">
                          <span className="text-[10px] font-mono font-bold uppercase text-coral-700 block">
                            Authentic Craft / Products
                          </span>
                          <span className="font-bold text-ink-900 block mt-0.5">
                            {shop.craft_or_items}
                          </span>
                        </div>
                      </div>

                      {/* Living Story */}
                      <p className="text-xs sm:text-sm text-ink-700 italic border-l-3 border-coral-400 pl-3 leading-relaxed">
                        "{shop.story}"
                      </p>

                      {/* Special Immersion / Treat */}
                      {shop.special_treat_or_demo && (
                        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-950 flex items-center gap-2 font-bold">
                          <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Special In-Shop Experience: {shop.special_treat_or_demo}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Waypoint Advance Button */}
              <div className="pt-4 border-t border-ink-900/10 flex items-center justify-between gap-3">
                <button
                  disabled={activeStopIndex === 0}
                  onClick={() => {
                    setActiveStopIndex((prev) => Math.max(prev - 1, 0));
                    cardContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="px-4 py-2.5 rounded-2xl bg-white border-2 border-ink-900 text-xs sm:text-sm font-bold text-ink-900 disabled:opacity-30 disabled:pointer-events-none hover:bg-sage-100 flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#1C1B18]"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous Waypoint</span>
                </button>

                {activeStopIndex < totalStops - 1 ? (
                  <button
                    onClick={() => {
                      setActiveStopIndex((prev) => Math.min(prev + 1, totalStops - 1));
                      cardContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="px-5 py-2.5 rounded-2xl bg-coral-500 border-2 border-ink-900 text-xs sm:text-sm font-black text-white hover:bg-coral-600 flex items-center gap-2 shadow-[3px_3px_0px_0px_#1C1B18] active:translate-x-0.5 active:translate-y-0.5 transition-all"
                  >
                    <span>Advance to Stop {activeStopIndex + 2}: {stops[activeStopIndex + 1]?.name.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <span className="px-4 py-2 rounded-2xl bg-emerald-100 text-emerald-800 border-2 border-emerald-500 font-mono font-bold text-xs">
                    Journey Destination Reached!
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ========================================================
            VIEW MODE: ALL STOPS IN SEQUENCE (Continuous Route)
            ======================================================== */
        <div className="space-y-6">
          {stops.map((stop, idx) => {
            const color = PIN_COLORS[idx % PIN_COLORS.length];
            return (
              <div
                key={stop.stop_number}
                className="p-5 sm:p-8 rounded-4xl bg-white border-3 border-ink-900 shadow-card space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-10 h-10 rounded-2xl ${color.bg} text-white border-2 border-ink-900 flex items-center justify-center font-mono font-black text-base shadow-[2px_2px_0px_0px_#1C1B18]`}
                    >
                      {stop.stop_number}
                    </span>
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase text-coral-600 block">
                        {stop.route_leg_name}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-serif font-bold text-ink-900">
                        {stop.name}
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-ink-700">
                    <span className="px-3 py-1 rounded-full bg-sage-50 border border-sage-300">
                      {stop.distance_from_start}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-coral-50 border border-coral-300">
                      {stop.altitude}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-ink-700 italic border-l-3 border-coral-400 pl-3">
                  "{stop.tagline}"
                </p>

                {/* Best Things to Visit summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-2xl bg-sage-50 border border-sage-200 space-y-2">
                    <h5 className="font-bold text-xs uppercase tracking-wider text-sage-900 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-sage-600" />
                      <span>Best Things to Visit</span>
                    </h5>
                    <ul className="space-y-1.5 text-xs text-ink-800">
                      {stop.best_things_to_visit.map((v, vIdx) => (
                        <li key={vIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>{v.title}</strong> — {v.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mandatory Local Shops */}
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 space-y-2">
                    <h5 className="font-bold text-xs uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
                      <ShoppingBag className="w-3.5 h-3.5 text-amber-700" />
                      <span>Mandatory Artisan Shops at this Stop</span>
                    </h5>
                    <div className="space-y-2 text-xs text-ink-800">
                      {stop.local_shops.map((s) => (
                        <div key={s.id} className="p-2.5 rounded-xl bg-white border border-amber-200">
                          <p className="font-bold text-ink-900">{s.name} ({s.artisan_or_owner})</p>
                          <p className="text-ink-600 text-[11px]">{s.exact_location}</p>
                          <p className="text-coral-800 font-bold mt-1 text-[11px]">{s.why_must_visit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
