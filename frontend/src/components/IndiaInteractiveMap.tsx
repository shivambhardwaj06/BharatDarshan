'use client';

import React, { useState } from 'react';
import rawIndia from '@svg-maps/india';
import { DestinationMeta } from '@/lib/types';
import { MapPin, Sparkles, Compass, Mountain, Thermometer, ArrowRight, CheckCircle2 } from 'lucide-react';

interface IndiaMapProps {
  destinations: DestinationMeta[];
  selectedDest: DestinationMeta | null;
  onSelectDest: (dest: DestinationMeta) => void;
  onOpenPlanner: (dest: DestinationMeta) => void;
}

interface MapLocation {
  id: string;
  name: string;
  path: string;
}

interface MapData {
  label: string;
  viewBox: string;
  locations: MapLocation[];
}

const IndiaMapData: MapData = (rawIndia as any).default || rawIndia;

// Accurate geographic pin coordinates projected on @svg-maps/india viewBox="0 0 612 696"
interface PinConfig {
  x: number;
  y: number;
  stateId: string;
  elevation: string;
  color: string;
  bg: string;
  labelPosition?: 'top' | 'right' | 'left' | 'bottom';
  annotationText?: string;
}

const PIN_CONFIGS: Record<string, PinConfig> = {
  kedarnath: {
    x: 232,
    y: 168,
    stateId: 'ut',
    elevation: '3,583m',
    color: '#E2746C',
    bg: '#FFB7B2',
    labelPosition: 'right',
    annotationText: 'Kedarnath Dham (3,583m) ↗',
  },
  ladakh: {
    x: 202,
    y: 64,
    stateId: 'jk',
    elevation: '3,500m',
    color: '#3B6B3E',
    bg: '#CDE4CD',
    labelPosition: 'right',
    annotationText: 'Leh-Ladakh (3,500m) ↗',
  },
  spiti: {
    x: 204,
    y: 130,
    stateId: 'hp',
    elevation: '3,800m',
    color: '#5E5177',
    bg: '#DDD6ED',
    labelPosition: 'left',
    annotationText: 'Spiti Valley (3,800m) ↖',
  },
  varanasi: {
    x: 324,
    y: 275,
    stateId: 'up',
    elevation: '80m',
    color: '#A06122',
    bg: '#FFE2B8',
    labelPosition: 'right',
    annotationText: 'Varanasi Ghats (80m) ↗',
  },
  jaisalmer: {
    x: 65,
    y: 236,
    stateId: 'rj',
    elevation: '225m',
    color: '#B45309',
    bg: '#FDE68A',
    labelPosition: 'left',
    annotationText: '↖ Jaisalmer Dunes (225m)',
  },
  munnar: {
    x: 175,
    y: 605,
    stateId: 'kl',
    elevation: '1,600m',
    color: '#2E7D32',
    bg: '#C8E6C9',
    labelPosition: 'right',
    annotationText: 'Munnar Tea Hills ↘',
  },
};

// State ID to Destination ID mapping for two-way map clicks
const STATE_TO_DEST: Record<string, string> = {
  ut: 'kedarnath',
  jk: 'ladakh',
  hp: 'spiti',
  up: 'varanasi',
  rj: 'jaisalmer',
  kl: 'munnar',
};

export const IndiaInteractiveMap: React.FC<IndiaMapProps> = ({
  destinations,
  selectedDest,
  onSelectDest,
  onOpenPlanner,
}) => {
  const [hoveredDest, setHoveredDest] = useState<DestinationMeta | null>(null);
  const [hoveredStateId, setHoveredStateId] = useState<string | null>(null);

  const active = hoveredDest || selectedDest || destinations[0];
  const activePinConfig = active ? PIN_CONFIGS[active.id] : PIN_CONFIGS[destinations[0]?.id || 'varanasi'];

  // Handle clicking directly on an Indian state on the vector map
  const handleStateClick = (stateId: string) => {
    const destId = STATE_TO_DEST[stateId];
    if (destId) {
      const match = destinations.find((d) => d.id === destId);
      if (match) {
        onSelectDest(match);
      }
    }
  };

  return (
    <div className="relative rounded-5xl pastel-card p-6 sm:p-10 overflow-hidden border-2 border-ink-900/10 shadow-card">
      {/* Background ambient pastel shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-sage-100/60 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-coral-100/60 blur-[100px] pointer-events-none" />

      {/* Header section with breathing room */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 pb-6 border-b border-ink-100">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-ink-900 text-xs font-black uppercase tracking-wider border-2 border-ink-900 shadow-[2px_2px_0px_0px_#1C1B18]">
            <Compass className="w-4 h-4 text-coral-500" />
            <span>Interactive Atlas of India</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-ink-900 tracking-tight">
            Where are you next planning to visit?
          </h2>

          <p className="font-handwriting text-2xl sm:text-3xl text-coral-500">
            tap any state or mountain pin on the map to begin your journey ~
          </p>
        </div>

        {/* Soft pastel pill selectors for quick switching */}
        <div className="flex flex-wrap gap-2.5 self-start sm:self-auto">
          {destinations.map((d) => {
            const isSelected = active?.id === d.id;
            return (
              <button
                key={d.id}
                onClick={() => {
                  onSelectDest(d);
                }}
                onMouseEnter={() => setHoveredDest(d)}
                onMouseLeave={() => setHoveredDest(null)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-coral-300 text-ink-950 border-2 border-ink-900 shadow-[2px_2px_0px_0px_#1C1B18] scale-105'
                    : 'bg-white hover:bg-sage-50 text-ink-700 border-2 border-ink-200'
                }`}
              >
                <span>{d.name.split(' ')[0]}</span>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-coral-500 animate-ping" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* =========================================================
            LEFT COLUMN: AUTHENTIC, BEAUTIFUL VECTOR MAP OF INDIA
            ========================================================= */}
        <div className="lg:col-span-7 relative flex items-center justify-center p-2 sm:p-6 bg-white/60 rounded-4xl border-2 border-ink-900/10 shadow-soft">
          {/* Floating Handwritten Field Notes celebrating diverse corners of India */}
          <div className="absolute top-4 left-6 hidden sm:block pointer-events-none select-none z-10">
            <span className="font-handwriting text-2xl text-coral-500 block rotate-[-4deg]">
              Himalayan High Passes ↗
            </span>
            <span className="text-xs text-ink-500 font-medium">ancient trails & sacred peaks</span>
          </div>

          <div className="absolute bottom-6 left-6 hidden sm:block pointer-events-none select-none z-10">
            <span className="font-handwriting text-2xl text-sage-700 block rotate-[3deg]">
              Munnar tea mists ↘
            </span>
            <span className="text-xs text-ink-500 font-medium">Western Ghats aromatic hills</span>
          </div>

          <div className="absolute top-20 right-4 hidden sm:block pointer-events-none select-none z-10">
            <span className="font-handwriting text-2xl text-lavender-700 block rotate-[-2deg]">
              Subah-e-Banaras ↗
            </span>
            <span className="text-xs text-ink-500 font-medium">sunrise on holy Ganga</span>
          </div>

          <div className="relative w-full max-w-[500px] aspect-[612/696]">
            <svg
              viewBox={IndiaMapData.viewBox || '0 0 612 696'}
              className="w-full h-full filter drop-shadow-[0_12px_28px_rgba(45,43,40,0.08)]"
              aria-label="Beautiful Vector Map of India"
            >
              <defs>
                {/* Parchment Base Gradient */}
                <linearGradient id="indiaParchment" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFDF9" />
                  <stop offset="60%" stopColor="#FAF6EE" />
                  <stop offset="100%" stopColor="#F5EFE3" />
                </linearGradient>

                {/* Highlight Gradients */}
                <linearGradient id="activeStateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFE8E5" />
                  <stop offset="100%" stopColor="#FFD3CE" />
                </linearGradient>

                <linearGradient id="sageStateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F0F6F0" />
                  <stop offset="100%" stopColor="#DCE8DC" />
                </linearGradient>

                {/* Drop shadow filter for pins */}
                <filter id="pinShadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#1C1B18" floodOpacity="0.25" />
                </filter>
              </defs>

              {/* Ocean / Surrounding Region Soft Label */}
              <text x="70" y="520" fill="#B8B2A7" fontSize="11" fontFamily="Outfit, sans-serif" fontWeight="600" letterSpacing="0.2em" className="select-none opacity-40">
                ARABIAN SEA
              </text>
              <text x="430" y="520" fill="#B8B2A7" fontSize="11" fontFamily="Outfit, sans-serif" fontWeight="600" letterSpacing="0.2em" className="select-none opacity-40">
                BAY OF BENGAL
              </text>
              <text x="210" y="685" fill="#B8B2A7" fontSize="10" fontFamily="Outfit, sans-serif" fontWeight="600" letterSpacing="0.2em" className="select-none opacity-40">
                INDIAN OCEAN
              </text>

              {/* All 36 Real Indian States & Union Territories from @svg-maps/india */}
              <g id="india-states-group">
                {IndiaMapData.locations.map((loc) => {
                  const hasDestination = Boolean(STATE_TO_DEST[loc.id]);
                  const isActiveDestinationState = activePinConfig && activePinConfig.stateId === loc.id;
                  const isHoveredState = hoveredStateId === loc.id;

                  // Dynamic soft pastel fills based on region
                  let stateFill = 'url(#indiaParchment)';
                  let stateStroke = '#DCD6CB';
                  let strokeWidth = '1';

                  if (isActiveDestinationState) {
                    stateFill = 'url(#activeStateGrad)';
                    stateStroke = '#E2746C';
                    strokeWidth = '2';
                  } else if (isHoveredState) {
                    stateFill = '#FFF3EF';
                    stateStroke = '#E2746C';
                    strokeWidth = '1.8';
                  } else if (hasDestination) {
                    if (loc.id === 'ut') stateFill = '#FFF1EF';
                    else if (loc.id === 'jk') stateFill = '#F2F7F2';
                    else if (loc.id === 'hp') stateFill = '#F4F2F8';
                    else if (loc.id === 'up') stateFill = '#FFF8EE';
                    else if (loc.id === 'rj') stateFill = '#FDF9EE';
                    else if (loc.id === 'kl') stateFill = '#EFF7EF';
                    stateStroke = '#CDC6B8';
                  }

                  return (
                    <path
                      key={loc.id}
                      id={`state-${loc.id}`}
                      d={loc.path}
                      fill={stateFill}
                      stroke={stateStroke}
                      strokeWidth={strokeWidth}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      className="transition-colors duration-200 cursor-pointer"
                      onClick={() => handleStateClick(loc.id)}
                      onMouseEnter={() => {
                        setHoveredStateId(loc.id);
                        const destId = STATE_TO_DEST[loc.id];
                        if (destId) {
                          const match = destinations.find((d) => d.id === destId);
                          if (match) setHoveredDest(match);
                        }
                      }}
                      onMouseLeave={() => {
                        setHoveredStateId(null);
                        setHoveredDest(null);
                      }}
                    >
                      <title>{loc.name}</title>
                    </path>
                  );
                })}
              </g>

              {/* Gentle River Ganga Flow Line (From Himalayas across UP to Bengal) */}
              <path
                d="M 235,175 Q 280,225 324,275 Q 365,310 405,335"
                fill="none"
                stroke="#A8C0E0"
                strokeWidth="2.5"
                strokeDasharray="5 3"
                strokeOpacity="0.8"
                className="pointer-events-none"
              />

              {/* Gentle Himalayan Arc Contour (Across the North) */}
              <path
                d="M 120,40 Q 210,120 280,180 Q 420,200 580,240"
                fill="none"
                stroke="#C6D8C6"
                strokeWidth="2"
                strokeDasharray="4 4"
                strokeOpacity="0.6"
                className="pointer-events-none"
              />

              {/* =========================================================
                  ACCURATE DESTINATION PINS WITH GLOWING PASTEL HALOS
                  ========================================================= */}
              {destinations.map((d) => {
                const cfg = PIN_CONFIGS[d.id];
                if (!cfg) return null;

                const isSelected = active?.id === d.id;

                return (
                  <g
                    key={d.id}
                    className="cursor-pointer group"
                    onClick={() => {
                      onSelectDest(d);
                      onOpenPlanner(d);
                    }}
                    onMouseEnter={() => setHoveredDest(d)}
                    onMouseLeave={() => setHoveredDest(null)}
                  >
                    {/* Glowing Ping Ring for selected pin */}
                    {isSelected && (
                      <circle
                        cx={cfg.x}
                        cy={cfg.y}
                        r="24"
                        fill="none"
                        stroke={cfg.color}
                        strokeWidth="2"
                        strokeOpacity="0.6"
                        className="animate-ping opacity-35 origin-center"
                      />
                    )}

                    {/* Outer Pastel Halo */}
                    <circle
                      cx={cfg.x}
                      cy={cfg.y}
                      r={isSelected ? '16' : '12'}
                      fill={cfg.bg}
                      stroke={cfg.color}
                      strokeWidth="2"
                      className="transition-all duration-300"
                      filter="url(#pinShadow)"
                    />

                    {/* Center Point */}
                    <circle
                      cx={cfg.x}
                      cy={cfg.y}
                      r={isSelected ? '7' : '5'}
                      fill={cfg.color}
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                      className="transition-all duration-300 group-hover:scale-125"
                    />

                    {/* Pin Label Banner */}
                    <g
                      transform={`translate(${
                        cfg.labelPosition === 'left' ? cfg.x - 14 : cfg.x + 14
                      }, ${cfg.y + 4})`}
                    >
                      {/* Label Background Pill */}
                      <rect
                        x={cfg.labelPosition === 'left' ? -80 : 0}
                        y="-12"
                        width="80"
                        height="18"
                        rx="6"
                        fill={isSelected ? '#1C1B18' : '#FFFFFF'}
                        stroke="#1C1B18"
                        strokeWidth={isSelected ? '1.5' : '1'}
                        className="transition-all"
                      />
                      <text
                        x={cfg.labelPosition === 'left' ? -40 : 40}
                        y="1"
                        textAnchor="middle"
                        fill={isSelected ? '#FDFCF8' : '#1C1B18'}
                        fontSize="10"
                        fontWeight="800"
                        fontFamily="Outfit, sans-serif"
                        letterSpacing="0.04em"
                        className="select-none transition-all uppercase"
                      >
                        {d.name.split(' ')[0]}
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* =========================================================
            RIGHT COLUMN: DESTINATION POLAROID PREVIEW CARD
            ========================================================= */}
        <div className="lg:col-span-5 space-y-4">
          {active && (
            <div className="rounded-5xl bg-white p-6 sm:p-8 border-2 border-ink-900/10 shadow-card relative overflow-hidden group">
              {/* Polaroid-style hero image */}
              <div className="relative h-56 w-full rounded-3xl overflow-hidden mb-6 shadow-inner border-2 border-canvas">
                <img
                  src={active.hero_image}
                  alt={active.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />

                <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-ink-900 text-xs font-bold tracking-wide border border-ink-900/10 shadow-soft">
                  <MapPin className="w-3.5 h-3.5 text-coral-500" />
                  <span>{active.state}</span>
                </div>

                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <p className="font-handwriting text-2xl text-coral-300">
                    {active.hindi_name}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight -mt-1">
                    {active.name}
                  </h3>
                </div>
              </div>

              {/* Stats badges */}
              <div className="grid grid-cols-2 gap-3 mb-5 text-xs sm:text-sm">
                <div className="p-3.5 rounded-2xl bg-sage-50 border border-sage-200 flex items-center gap-3">
                  <Mountain className="w-5 h-5 text-sage-600 shrink-0" />
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-sage-800 font-bold">Altitude</p>
                    <p className="font-black text-ink-900 text-sm sm:text-base">{active.altitude_meters}m</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-lavender-50 border border-lavender-200 flex items-center gap-3">
                  <Thermometer className="w-5 h-5 text-lavender-600 shrink-0" />
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-lavender-700 font-bold">Best Season</p>
                    <p className="font-bold text-ink-900 line-clamp-1">{active.ideal_months.split('&')[0]}</p>
                  </div>
                </div>
              </div>

              {/* Simple, readable description */}
              <p className="text-sm sm:text-base text-ink-700 leading-relaxed mb-5 font-normal">
                {active.short_desc}
              </p>

              {/* Vibe Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {active.vibe_tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-ink-50 text-ink-800 font-semibold border border-ink-100"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Primary Action Button */}
              <button
                onClick={() => onOpenPlanner(active)}
                className="w-full py-4 px-6 rounded-2xl bg-coral-300 hover:bg-coral-400 text-ink-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 border-2 border-ink-900 shadow-[4px_4px_0px_0px_#1C1B18] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#1C1B18] transition-all"
              >
                <Sparkles className="w-5 h-5 text-ink-950" />
                <span>Plan Journey to {active.name.split(' ')[0]}</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
