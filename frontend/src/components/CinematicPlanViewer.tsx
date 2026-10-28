'use client';

import React, { useState } from 'react';
import { TripPlan } from '@/lib/types';
import { CrazyBharatDarshanLogo } from './CrazyBharatDarshanLogo';
import {
  Mountain,
  Compass,
  Calendar,
  Sparkles,
  MapPin,
  Clock,
  Car,
  Footprints,
  Flame,
  ShieldCheck,
  Award,
  AlertTriangle,
  Utensils,
  BookOpen,
  ArrowLeft,
  CheckCircle2,
  ShoppingBag,
  Camera,
  Navigation,
  Milestone,
  Flag,
  ArrowRight,
} from 'lucide-react';

interface PlanViewerProps {
  plan: TripPlan;
  onReset: () => void;
}

export const CinematicPlanViewer: React.FC<PlanViewerProps> = ({ plan, onReset }) => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'cultural_deep_dive' | 'essentials'>('timeline');

  // Destination-specific hero and fallback images
  const heroImage = plan.destination.hero_image;
  const loreImage =
    plan.deep_cultural_guide.sacred_lore_image ||
    plan.days[0]?.day_image ||
    heroImage;
  const traditionsImage =
    plan.deep_cultural_guide.living_traditions_image ||
    plan.days[1]?.day_image ||
    heroImage;

  return (
    <div className="space-y-6 sm:space-y-10 animate-in fade-in duration-300 pb-20 md:pb-6">
      {/* Top action bar */}
      <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-3 sm:gap-4">
        <button
          onClick={onReset}
          className="inline-flex items-center justify-center gap-2 text-xs sm:text-base font-bold px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-white hover:bg-sage-50 text-ink-900 border-2 border-ink-900 shadow-[2px_2px_0px_0px_#1C1B18] sm:shadow-[3px_3px_0px_0px_#1C1B18] active:translate-x-0.5 active:translate-y-0.5 transition-all w-full xs:w-fit"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-coral-500" />
          <span>Choose Another Destination</span>
        </button>

        <div className="flex items-center justify-between xs:justify-end gap-2.5 sm:gap-3">
          <CrazyBharatDarshanLogo size="sm" />
          <span className="text-[10px] sm:text-sm px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-sage-100 text-sage-800 border-2 border-ink-900 font-mono font-black shadow-[2px_2px_0px_0px_#1C1B18]">
            ROUTE PLAN #{plan.id.slice(-6)}
          </span>
        </div>
      </div>

      {/* Hero Header Section */}
      <div className="relative rounded-3xl sm:rounded-5xl overflow-hidden bg-white border-2 border-ink-900/10 shadow-card p-4 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-coral-100 text-coral-700 text-[11px] sm:text-sm font-black uppercase tracking-wider border border-coral-300">
                {plan.destination.state}
              </span>
              <span className="px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-sage-100 text-sage-800 text-[11px] sm:text-sm font-black uppercase tracking-wider border border-sage-300">
                VERIFIED ROUTE BLUEPRINT
              </span>
            </div>

            <span className="font-handwriting text-2xl sm:text-4xl text-coral-500 block rotate-[-1.5deg]">
              {plan.destination.hindi_name}
            </span>

            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-serif font-bold text-ink-900 tracking-tight leading-tight -mt-1">
              {plan.destination.name}
            </h1>

            <p className="text-sm sm:text-lg text-ink-700 leading-relaxed max-w-2xl font-normal">
              {plan.destination.short_desc}
            </p>

            {/* Quick Meta Info */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1 sm:pt-2 text-xs sm:text-base text-ink-800 font-semibold">
              <span className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-sage-50 border border-sage-200">
                <Mountain className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sage-600" />
                <span>Altitude: {plan.destination.altitude_meters}m</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-coral-50 border border-coral-200">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-coral-500" />
                <span>Best: {plan.schedule_overview.optimal_window}</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-lavender-50 border border-lavender-200">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-lavender-600" />
                <span>{plan.schedule_overview.total_duration}</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] shadow-card group border-3 sm:border-4 border-canvas">
              <img
                src={heroImage}
                alt={plan.destination.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 sm:right-4 text-white">
                <p className="font-handwriting text-xl sm:text-2xl text-coral-200">authentic route guidance</p>
                <p className="text-xs sm:text-base font-bold">BHARATDARSHAN LIVING WAYPOINTS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs: Sticky on Mobile with Horizontal Scrolling */}
      <div className="sticky top-16 sm:top-20 z-30 bg-[#FDFCF8]/95 backdrop-blur-md border-b-2 border-ink-900/10 py-2.5 sm:py-3.5 -mx-3 px-3 sm:mx-0 sm:px-0">
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-none snap-x">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`shrink-0 snap-start py-2 sm:py-3 px-4 sm:px-6 rounded-full text-xs sm:text-base font-black tracking-wide transition-all flex items-center gap-1.5 sm:gap-2.5 whitespace-nowrap ${
              activeTab === 'timeline'
                ? 'bg-coral-300 text-ink-950 border-2 border-ink-900 shadow-[2px_2px_0px_0px_#1C1B18] sm:shadow-[3px_3px_0px_0px_#1C1B18]'
                : 'bg-white text-ink-700 hover:bg-coral-50 border-2 border-ink-200 shadow-sm'
            }`}
          >
            <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-coral-600" />
            <span>Route Blueprint ({plan.days.length} Legs)</span>
          </button>

          <button
            onClick={() => setActiveTab('cultural_deep_dive')}
            className={`shrink-0 snap-start py-2 sm:py-3 px-4 sm:px-6 rounded-full text-xs sm:text-base font-black tracking-wide transition-all flex items-center gap-1.5 sm:gap-2.5 whitespace-nowrap ${
              activeTab === 'cultural_deep_dive'
                ? 'bg-sage-200 text-ink-950 border-2 border-ink-900 shadow-[2px_2px_0px_0px_#1C1B18] sm:shadow-[3px_3px_0px_0px_#1C1B18]'
                : 'bg-white text-ink-700 hover:bg-sage-50 border-2 border-ink-200 shadow-sm'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Living Stories & Crafts</span>
          </button>

          <button
            onClick={() => setActiveTab('essentials')}
            className={`shrink-0 snap-start py-2 sm:py-3 px-4 sm:px-6 rounded-full text-xs sm:text-base font-black tracking-wide transition-all flex items-center gap-1.5 sm:gap-2.5 whitespace-nowrap ${
              activeTab === 'essentials'
                ? 'bg-lavender-200 text-ink-950 border-2 border-ink-900 shadow-[2px_2px_0px_0px_#1C1B18] sm:shadow-[3px_3px_0px_0px_#1C1B18]'
                : 'bg-white text-ink-700 hover:bg-lavender-50 border-2 border-ink-200 shadow-sm'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Transit & Safety Essentials</span>
          </button>
        </div>
      </div>

      {/* ========================================================
          TAB 1: CREATIVE ROUTE-BASED MAP BLUEPRINT & INFLUENCED ARTISANS
          ======================================================== */}
      {activeTab === 'timeline' && (
        <div className="space-y-8 sm:space-y-10">
          {/* Creative Interactive Route-Map Ribbon Banner */}
          <div className="p-4 sm:p-8 rounded-3xl sm:rounded-5xl bg-gradient-to-r from-coral-50 via-sage-50 to-lavender-50 border-2 border-ink-900/10 shadow-soft">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-ink-200/60 mb-5">
              <div>
                <span className="text-[11px] sm:text-xs font-mono font-black uppercase tracking-wider text-coral-600 bg-coral-100 px-3 py-1 rounded-full border border-coral-200">
                  Interactive Route Navigation
                </span>
                <h3 className="text-xl sm:text-3xl font-serif font-bold text-ink-900 mt-1">
                  How This Journey Unfolds: Route by Route
                </h3>
                <p className="text-xs sm:text-base text-ink-600 mt-0.5">
                  Follow this physical path from gateway origin to final destination, anchored by mandatory cultural stops along the way.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-2xl bg-white border border-ink-200 text-xs sm:text-sm font-bold text-ink-800 shadow-2xs">
                  Gateway: <strong>{plan.schedule_overview.gateway_city.split('(')[0]}</strong>
                </span>
              </div>
            </div>

            {/* Visual Route Highway Progression Ribbon */}
            <div className="overflow-x-auto pb-3 pt-2 scrollbar-none">
              <div className="flex items-center min-w-[650px] sm:min-w-0 justify-between relative px-4">
                {/* Connecting track line */}
                <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-1 bg-ink-200 rounded-full z-0" />

                {plan.days.map((day, idx) => {
                  const hasArtisan = day.verified_artisan_stops && day.verified_artisan_stops.length > 0;
                  return (
                    <div key={day.day_number} className="relative z-10 flex flex-col items-center group">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-black text-sm sm:text-base border-2 border-ink-900 shadow-[2px_2px_0px_0px_#1C1B18] transition-transform group-hover:scale-110 ${
                          hasArtisan
                            ? 'bg-coral-300 text-ink-950 ring-4 ring-coral-200/60'
                            : 'bg-white text-ink-900'
                        }`}
                      >
                        {day.day_number}
                      </div>

                      <div className="text-center mt-2 max-w-[120px]">
                        <p className="text-[11px] sm:text-xs font-black text-ink-900 line-clamp-1">
                          Leg {day.day_number}
                        </p>
                        <p className="text-[10px] text-ink-600 line-clamp-1 font-medium">
                          {day.to_where || day.title.split(':')[0]}
                        </p>
                        {hasArtisan && (
                          <span className="mt-0.5 inline-block text-[9px] font-black uppercase text-coral-700 bg-coral-100 px-1.5 py-0.5 rounded-md border border-coral-300">
                            🛑 Artisan Stop
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Gateway Transit Highlights Card */}
          <div className="p-6 sm:p-10 rounded-3xl sm:rounded-5xl bg-white border-2 border-ink-900/10 shadow-soft space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-coral-600 flex items-center gap-2">
                <Clock className="w-5 h-5 text-coral-500" />
                <span>Optimal Transit Window & How to Reach</span>
              </h3>
              <span className="font-handwriting text-2xl sm:text-3xl text-sage-600">
                travel by road, breathe the terrain ~
              </span>
            </div>

            <p className="text-base sm:text-lg text-ink-800 leading-relaxed font-normal">
              {plan.schedule_overview.when_to_reach}
            </p>

            <div className="pt-4 border-t border-ink-100 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {plan.schedule_overview.transit_highlights.map((th, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-ink-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                  <span>{th}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Route Legs List */}
          <div className="space-y-10">
            {plan.days.map((day) => (
              <div
                key={day.day_number}
                className="rounded-3xl sm:rounded-5xl bg-white p-4 sm:p-10 border-2 border-ink-900/10 shadow-card space-y-5 sm:space-y-7"
              >
                {/* Route Leg Header: Where to Where */}
                <div className="space-y-3 pb-4 sm:pb-5 border-b border-ink-100">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl sm:rounded-3xl bg-coral-300 border-2 border-ink-900 flex items-center justify-center text-ink-950 font-sans font-black text-lg sm:text-2xl shadow-[3px_3px_0px_0px_#1C1B18] shrink-0">
                        {day.day_number}
                      </div>
                      <div>
                        <span className="text-[11px] sm:text-xs font-mono text-coral-600 uppercase tracking-widest font-black block">
                          ROUTE LEG {day.day_number} • {day.date_or_phase.toUpperCase()}
                        </span>
                        <h4 className="text-xl sm:text-3xl font-serif font-bold text-ink-900 leading-tight">
                          {day.route_title || day.title}
                        </h4>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs sm:text-sm">
                      {day.distance_km > 0 && (
                        <span className="bg-lavender-100 text-lavender-900 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-lavender-300 font-bold">
                          {day.distance_km} km
                        </span>
                      )}
                      <span className="flex items-center gap-1.5 font-bold bg-sage-50 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-sage-200 text-sage-800">
                        <Mountain className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sage-600" />
                        {day.elevation_profile}
                      </span>
                    </div>
                  </div>

                  {/* Route Origin ➔ Destination Direction Ribbon */}
                  {(day.from_where || day.to_where) && (
                    <div className="flex flex-wrap items-center gap-2 p-3 sm:p-4 rounded-2xl bg-canvas border border-ink-200 text-xs sm:text-sm text-ink-800 font-semibold">
                      <div className="flex items-center gap-1.5 text-ink-900">
                        <MapPin className="w-4 h-4 text-coral-500 shrink-0" />
                        <span className="text-ink-500 font-normal">From:</span>
                        <strong className="font-bold">{day.from_where || 'Origin Point'}</strong>
                      </div>
                      <ArrowRight className="w-4 h-4 text-ink-400 mx-1 shrink-0" />
                      <div className="flex items-center gap-1.5 text-ink-900">
                        <Flag className="w-4 h-4 text-sage-600 shrink-0" />
                        <span className="text-ink-500 font-normal">To:</span>
                        <strong className="font-bold">{day.to_where || 'Destination'}</strong>
                      </div>
                      {day.terrain_type && (
                        <span className="ml-auto text-[11px] sm:text-xs font-mono text-ink-600 bg-white px-2.5 py-1 rounded-xl border border-ink-200">
                          Terrain: {day.terrain_type}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Milestone Summary Highway Ribbon */}
                  {day.milestone_summary && (
                    <div className="flex items-center gap-2 text-xs text-ink-700 bg-sage-50/80 px-3.5 py-2 rounded-xl border border-sage-200">
                      <Milestone className="w-4 h-4 text-sage-600 shrink-0" />
                      <span className="font-bold text-sage-900 shrink-0">Milestones:</span>
                      <span className="line-clamp-1">{day.milestone_summary}</span>
                    </div>
                  )}
                </div>

                {/* Day Scenic Route Landscape Photo (Genuine & Matched) */}
                {day.day_image && (
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] border-2 border-ink-900/10 shadow-soft group">
                    <img
                      src={day.day_image}
                      alt={day.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-3 sm:bottom-4 sm:left-6 text-white flex items-center gap-2">
                      <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-coral-300" />
                      <span className="text-[11px] sm:text-sm font-bold tracking-wide">
                        Verified landscape along Route Leg {day.day_number}
                      </span>
                    </div>
                  </div>
                )}

                {/* Route-Based Instruction Steps: How to travel from A to B */}
                <div className="space-y-3">
                  <h5 className="text-xs sm:text-sm font-black uppercase tracking-wider text-ink-500">
                    Step-by-Step Waypoint Instructions
                  </h5>
                  <div className="relative border-l-2 border-coral-300 ml-2 sm:ml-4 pl-4 sm:pl-8 space-y-5 sm:space-y-6 pt-1">
                    {day.route_steps.map((step, sIdx) => (
                      <div key={sIdx} className="relative group">
                        <div className="absolute -left-[23px] sm:-left-[41px] top-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white border-2 sm:border-3 border-coral-500 shadow-xs" />
                        <div className="space-y-1">
                          <span className="text-[11px] sm:text-xs font-mono text-coral-600 uppercase tracking-widest font-black">
                            {step.time_of_day}
                          </span>
                          <h6 className="text-sm sm:text-lg font-bold text-ink-900 leading-snug">{step.title}</h6>
                          <p className="text-xs sm:text-base text-ink-700 leading-relaxed font-normal">
                            {step.description}
                          </p>
                          {step.tip && (
                            <div className="text-xs sm:text-sm text-coral-900 bg-coral-50/90 border border-coral-200 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl mt-1.5 inline-flex items-center gap-1.5 font-medium">
                              <span>💡</span>
                              <span>{step.tip}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ========================================================
                    MANDATORY CULTURAL ANCHOR: INFLUENCED LOCAL ARTISAN STOP
                    (Marked directly on the route, NOT a passive recommendation)
                    ======================================================== */}
                {day.verified_artisan_stops && day.verified_artisan_stops.length > 0 && (
                  <div className="pt-6 border-t-2 border-dashed border-coral-300/80 space-y-4">
                    {day.verified_artisan_stops.map((artisan, aIdx) => (
                      <div
                        key={aIdx}
                        className="rounded-3xl sm:rounded-4xl bg-gradient-to-br from-amber-50/80 via-white to-coral-50/60 border-2 border-coral-400 shadow-card overflow-hidden"
                      >
                        {/* High-visibility Urgent Anchor Banner */}
                        <div className="bg-coral-500 text-white px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-base">🛑</span>
                            <span className="font-sans font-black text-xs sm:text-sm tracking-wider uppercase">
                              MANDATORY CULTURAL ANCHOR ON THIS ROUTE
                            </span>
                          </div>
                          <span className="text-[11px] sm:text-xs font-mono font-bold bg-white/20 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                            {artisan.route_marker_km || artisan.waypoint_location}
                          </span>
                        </div>

                        <div className="p-4 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                          {/* Workshop / Master Artisan Photo */}
                          <div className="md:col-span-5">
                            <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-ink-900/10 shadow-soft group">
                              <img
                                src={artisan.image_url}
                                alt={artisan.business_name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute top-3 left-3">
                                <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-white/95 text-ink-900 border border-ink-200 font-black shadow-soft">
                                  <Award className="w-3.5 h-3.5 text-coral-500" />
                                  {artisan.verification_tier}
                                </span>
                              </div>
                              <div className="absolute bottom-3 left-3 right-3">
                                <span className="inline-block text-xs text-white bg-ink-950/80 backdrop-blur-sm px-2.5 py-1 rounded-xl font-bold">
                                  Craft: {artisan.craft_specialty}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Influential Narrative: Why Traveler Must Stop */}
                          <div className="md:col-span-7 space-y-3.5">
                            <div>
                              <div className="flex items-center gap-2 text-xs font-mono font-bold text-coral-700">
                                <MapPin className="w-3.5 h-3.5 text-coral-500 shrink-0" />
                                <span>{artisan.waypoint_location}</span>
                              </div>
                              <h5 className="font-serif font-bold text-xl sm:text-2xl text-ink-900 leading-tight mt-0.5">
                                {artisan.business_name}
                              </h5>
                              <p className="text-xs sm:text-sm text-ink-600 font-semibold">
                                Master Maker: <strong className="text-ink-900">{artisan.artisan_name}</strong>
                              </p>
                            </div>

                            {/* Why You Cannot Miss This On Your Route */}
                            <div className="p-3.5 sm:p-4 rounded-2xl bg-coral-100/70 border border-coral-300 space-y-1">
                              <span className="text-xs font-black uppercase tracking-wider text-coral-900 flex items-center gap-1.5">
                                <span>⚠️</span>
                                <span>You Cannot Miss This On Your Route:</span>
                              </span>
                              <p className="text-xs sm:text-sm text-coral-950 leading-relaxed font-medium">
                                {artisan.why_you_cannot_miss ||
                                  artisan.influence_headline ||
                                  'Visiting this workshop directly anchors your route to the living heritage of this region. Do not bypass this generational master.'}
                              </p>
                            </div>

                            {/* Generational Craft Story */}
                            <p className="text-xs sm:text-sm text-ink-700 italic leading-relaxed bg-white/80 p-3 rounded-2xl border border-ink-100">
                              &ldquo;{artisan.story_snippet}&rdquo;
                            </p>

                            {/* Special Immersion Perk for Travelers */}
                            <div className="p-3 rounded-2xl bg-sage-50 border border-sage-200 text-xs sm:text-sm text-sage-950 flex items-start gap-2.5">
                              <Sparkles className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                              <div>
                                <strong className="font-bold">Warm Welcome on Arrival: </strong>
                                <span>{artisan.special_immersion}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 2: LIVING STORIES, GASTRONOMY & CRAFTS (MATCHED PHOTOS)
          ======================================================== */}
      {activeTab === 'cultural_deep_dive' && (
        <div className="space-y-10">
          {/* Main Cultural Intro */}
          <div className="p-6 sm:p-12 rounded-3xl sm:rounded-5xl bg-white border-2 border-ink-900/10 shadow-card space-y-4">
            <span className="font-handwriting text-3xl sm:text-4xl text-coral-500 block">
              ancient lore, local living traditions & delicious food ~
            </span>
            <h3 className="text-3xl sm:text-5xl font-serif font-bold text-ink-900">
              The Living Spirit of {plan.destination.name}
            </h3>
            <p className="text-base sm:text-lg text-ink-700 leading-relaxed max-w-3xl font-normal">
              Travel becomes unforgettable when you understand the history, stories, and warm-hearted people who call these lands home. Here are the authentic cultural anchors of this destination.
            </p>
          </div>

          {/* 2 Authentic Story Cards with 100% Matched Photos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Story & Sacred Lore */}
            <div className="rounded-4xl sm:rounded-5xl bg-white border-2 border-ink-900/10 shadow-card overflow-hidden flex flex-col">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={loreImage}
                  alt={`${plan.destination.name} History & Sacred Lore`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white">
                  <span className="px-3 py-1 rounded-full bg-coral-400 text-ink-950 text-xs font-black uppercase tracking-wider">
                    Sacred Lore & Heritage
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-3">
                <h4 className="font-serif font-bold text-xl sm:text-2xl text-ink-900 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-coral-500" />
                  <span>Sacred History & Folklore</span>
                </h4>
                <p className="text-base sm:text-lg text-ink-700 leading-relaxed font-normal">
                  {plan.deep_cultural_guide.sacred_lore_and_mythology}
                </p>
              </div>
            </div>

            {/* Living Traditions & Practices */}
            <div className="rounded-4xl sm:rounded-5xl bg-white border-2 border-ink-900/10 shadow-card overflow-hidden flex flex-col">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={traditionsImage}
                  alt={`${plan.destination.name} Living Traditions`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white">
                  <span className="px-3 py-1 rounded-full bg-lavender-300 text-ink-950 text-xs font-black uppercase tracking-wider">
                    Living Traditions
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-3">
                <h4 className="font-serif font-bold text-xl sm:text-2xl text-ink-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-lavender-600" />
                  <span>Unbroken Traditions & Daily Life</span>
                </h4>
                <p className="text-base sm:text-lg text-ink-700 leading-relaxed font-normal">
                  {plan.deep_cultural_guide.living_traditions}
                </p>
              </div>
            </div>
          </div>

          {/* Local Community & People */}
          <div className="rounded-3xl sm:rounded-5xl bg-white border-2 border-ink-900/10 shadow-card p-6 sm:p-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-sage-100 text-sage-800 flex items-center justify-center border-2 border-sage-300">
                <Mountain className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-xl sm:text-2xl text-ink-900">
                Community Life & The People You Meet
              </h4>
            </div>
            <p className="text-base sm:text-lg text-ink-700 leading-relaxed font-normal">
              {plan.deep_cultural_guide.community_and_people}
            </p>
          </div>

          {/* AUTHENTIC LOCAL GASTRONOMY (100% MATCHED PHOTOS) */}
          <div className="p-6 sm:p-10 rounded-3xl sm:rounded-5xl bg-white border-2 border-ink-900/10 shadow-card space-y-6">
            <div className="space-y-1">
              <h4 className="font-serif font-bold text-2xl sm:text-3xl text-ink-900 flex items-center gap-2.5">
                <Utensils className="w-6 h-6 text-coral-500" />
                <span>Authentic Regional Food & Drinks</span>
              </h4>
              <p className="text-sm sm:text-base text-ink-600">
                Traditional recipes prepared with native regional herbs, grains, and authentic cooking methods.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plan.deep_cultural_guide.traditional_gastronomy.map((g, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-sage-50/60 border border-sage-200 overflow-hidden flex flex-col shadow-xs hover:shadow-soft transition-all"
                >
                  {g.image_url && (
                    <div className="aspect-[16/10] overflow-hidden bg-white">
                      <img
                        src={g.image_url}
                        alt={g.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h5 className="font-bold text-base sm:text-lg text-ink-900">{g.name}</h5>
                      <p className="text-sm sm:text-base text-ink-700 leading-relaxed mt-1 font-normal">
                        {g.description}
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-coral-700 font-bold pt-2 border-t border-sage-200/60">
                      📍 Where to try: {g.where_to_try}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AUTHENTIC HERITAGE CRAFTS (100% MATCHED PHOTOS) */}
          <div className="p-6 sm:p-10 rounded-3xl sm:rounded-5xl bg-white border-2 border-ink-900/10 shadow-card space-y-6">
            <div className="space-y-1">
              <h4 className="font-serif font-bold text-2xl sm:text-3xl text-ink-900 flex items-center gap-2.5">
                <ShoppingBag className="w-6 h-6 text-sage-600" />
                <span>Living Heritage Crafts & Master Souvenirs</span>
              </h4>
              <p className="text-sm sm:text-base text-ink-600">
                Generational crafts created by hand—genuine keepsakes that preserve local craft traditions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {plan.deep_cultural_guide.heritage_crafts.map((c, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-lavender-50/60 border border-lavender-200 overflow-hidden flex flex-col shadow-xs hover:shadow-soft transition-all"
                >
                  {c.image_url && (
                    <div className="aspect-[16/10] overflow-hidden bg-white">
                      <img
                        src={c.image_url}
                        alt={c.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h5 className="font-bold text-base sm:text-lg text-ink-900">{c.name}</h5>
                      <p className="text-sm sm:text-base text-ink-700 leading-relaxed mt-1 font-normal">
                        {c.description}
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-ink-800 font-bold pt-2 border-t border-lavender-200/60">
                      🏷️ Handcrafted by: {c.artisan_line}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Respectful Travel Habits */}
          <div className="p-6 sm:p-10 rounded-3xl sm:rounded-5xl bg-white border-2 border-ink-900/10 shadow-card space-y-4">
            <h4 className="font-serif font-bold text-xl sm:text-2xl text-ink-900 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-sage-600" />
              <span>Respectful Travel Habits & Etiquette</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {plan.deep_cultural_guide.cultural_etiquette.map((et, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-ink-800 p-4 rounded-2xl bg-canvas border border-ink-200">
                  <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                  <span>{et}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 3: ESSENTIAL TRAVEL, PERMITS & HELPLINES
          ======================================================== */}
      {activeTab === 'essentials' && (
        <div className="space-y-8 sm:space-y-10">
          {/* Acclimatization & Altitude Care */}
          <div className="p-6 sm:p-10 rounded-3xl sm:rounded-5xl bg-white border-2 border-ink-900/10 shadow-card space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-coral-100 text-coral-700 flex items-center justify-center border-2 border-coral-300">
                <Mountain className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-xl sm:text-2xl text-ink-900">
                Altitude & Climate Adaptation
              </h4>
            </div>
            <p className="text-base sm:text-lg text-ink-700 leading-relaxed font-normal">
              {plan.practical_essentials.acclimatization_protocol}
            </p>
          </div>

          {/* Official Permits & Registration */}
          <div className="p-6 sm:p-10 rounded-3xl sm:rounded-5xl bg-white border-2 border-ink-900/10 shadow-card space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-sage-100 text-sage-800 flex items-center justify-center border-2 border-sage-300">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-xl sm:text-2xl text-ink-900">
                Official Permits & Registration Guidance
              </h4>
            </div>
            <p className="text-base sm:text-lg text-ink-700 leading-relaxed font-normal">
              {plan.practical_essentials.permits_and_registration}
            </p>
          </div>

          {/* Packing Checklist */}
          <div className="p-6 sm:p-10 rounded-3xl sm:rounded-5xl bg-white border-2 border-ink-900/10 shadow-card space-y-4">
            <h4 className="font-serif font-bold text-xl sm:text-2xl text-ink-900 flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-coral-500" />
              <span>Recommended Packing Essentials</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {plan.practical_essentials.packing_checklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-ink-800 p-4 rounded-2xl bg-canvas border border-ink-200">
                  <CheckCircle2 className="w-5 h-5 text-coral-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Helplines */}
          <div className="p-6 sm:p-10 rounded-3xl sm:rounded-5xl bg-white border-2 border-ink-900/10 shadow-card space-y-4">
            <h4 className="font-serif font-bold text-xl sm:text-2xl text-ink-900 flex items-center gap-2.5">
              <AlertTriangle className="w-5 h-5 text-coral-600" />
              <span>Important Helplines & Medical Assistance</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {plan.practical_essentials.emergency_helplines.map((line, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-coral-50/70 border border-coral-200 text-ink-900 font-mono text-sm sm:text-base font-bold">
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
