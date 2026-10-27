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
  FileText,
  Utensils,
  BookOpen,
  ArrowLeft,
  CheckCircle2,
  Heart,
  Feather,
  ShoppingBag,
  Phone,
  Camera,
  Coffee,
} from 'lucide-react';

interface PlanViewerProps {
  plan: TripPlan;
  onReset: () => void;
}

export const CinematicPlanViewer: React.FC<PlanViewerProps> = ({ plan, onReset }) => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'cultural_deep_dive' | 'essentials'>('timeline');

  // Fallback cultural story image helpers
  const destinationName = plan.destination?.name || 'India';
  const shortName = destinationName.split(' ')[0];

  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      {/* Top action bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 text-sm sm:text-base font-bold px-5 py-3 rounded-2xl bg-white hover:bg-sage-50 text-ink-900 border-2 border-ink-900 shadow-[3px_3px_0px_0px_#1C1B18] active:translate-x-0.5 active:translate-y-0.5 transition-all w-fit"
        >
          <ArrowLeft className="w-5 h-5 text-coral-500" />
          <span>Choose Another Destination</span>
        </button>

        <div className="flex items-center gap-3">
          <CrazyBharatDarshanLogo size="sm" />
          <span className="text-xs sm:text-sm px-3.5 py-1.5 rounded-full bg-sage-100 text-sage-800 border-2 border-ink-900 font-mono font-black shadow-[2px_2px_0px_0px_#1C1B18]">
            TRIP PLAN #{plan.id.slice(-6)}
          </span>
        </div>
      </div>

      {/* Hero Header Section */}
      <div className="relative rounded-5xl overflow-hidden bg-white border-2 border-ink-900/10 shadow-card p-6 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-coral-100 text-coral-700 text-xs sm:text-sm font-black uppercase tracking-wider border border-coral-300">
                {plan.destination.state}
              </span>
              <span className="px-3.5 py-1 rounded-full bg-sage-100 text-sage-800 text-xs sm:text-sm font-black uppercase tracking-wider border border-sage-300">
                BHARATDARSHAN VERIFIED
              </span>
            </div>

            <span className="font-handwriting text-3xl sm:text-4xl text-coral-500 block rotate-[-1.5deg]">
              {plan.destination.hindi_name}
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-ink-900 tracking-tight leading-tight -mt-1">
              {plan.destination.name}
            </h1>

            <p className="text-base sm:text-lg text-ink-700 leading-relaxed max-w-2xl font-normal">
              {plan.destination.short_desc}
            </p>

            {/* Quick Meta Info */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-sm sm:text-base text-ink-800 font-semibold">
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-sage-50 border border-sage-200">
                <Mountain className="w-4 h-4 text-sage-600" />
                <span>Altitude: {plan.destination.altitude_meters}m</span>
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-coral-50 border border-coral-200">
                <Calendar className="w-4 h-4 text-coral-500" />
                <span>Best Season: {plan.schedule_overview.optimal_window}</span>
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-lavender-50 border border-lavender-200">
                <Clock className="w-4 h-4 text-lavender-600" />
                <span>Duration: {plan.schedule_overview.total_duration}</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-card group border-4 border-canvas">
              <img
                src={plan.destination.hero_image}
                alt={plan.destination.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-handwriting text-2xl text-coral-200">unfiltered & peaceful</p>
                <p className="text-sm sm:text-base font-bold">BHARATDARSHAN VERIFIED GUIDE</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-20 z-30 bg-[#FDFCF8]/95 backdrop-blur-md border-b-2 border-ink-900/10 py-3.5">
        <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`py-3 px-6 rounded-full text-sm sm:text-base font-black tracking-wide transition-all flex items-center gap-2.5 whitespace-nowrap ${
              activeTab === 'timeline'
                ? 'bg-coral-300 text-ink-950 border-2 border-ink-900 shadow-[3px_3px_0px_0px_#1C1B18]'
                : 'bg-white text-ink-700 hover:bg-coral-50 border-2 border-ink-200 shadow-sm'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Day-by-Day Plan ({plan.days.length} Days)</span>
          </button>

          <button
            onClick={() => setActiveTab('cultural_deep_dive')}
            className={`py-3 px-6 rounded-full text-sm sm:text-base font-black tracking-wide transition-all flex items-center gap-2.5 whitespace-nowrap ${
              activeTab === 'cultural_deep_dive'
                ? 'bg-sage-200 text-ink-950 border-2 border-ink-900 shadow-[3px_3px_0px_0px_#1C1B18]'
                : 'bg-white text-ink-700 hover:bg-sage-50 border-2 border-ink-200 shadow-sm'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Know {shortName} Deeply (Stories & Culture)</span>
          </button>

          <button
            onClick={() => setActiveTab('essentials')}
            className={`py-3 px-6 rounded-full text-sm sm:text-base font-black tracking-wide transition-all flex items-center gap-2.5 whitespace-nowrap ${
              activeTab === 'essentials'
                ? 'bg-lavender-200 text-ink-950 border-2 border-ink-900 shadow-[3px_3px_0px_0px_#1C1B18]'
                : 'bg-white text-ink-700 hover:bg-lavender-50 border-2 border-ink-200 shadow-sm'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Travel Tips & Safety Guide</span>
          </button>
        </div>
      </div>

      {/* ========================================================
          TAB 1: DAY-BY-DAY TIMELINE WITH IMAGES & ARTISANS
          ======================================================== */}
      {activeTab === 'timeline' && (
        <div className="space-y-10">
          {/* Best Time & How to Reach Overview Card */}
          <div className="p-6 sm:p-10 rounded-5xl bg-white border-2 border-ink-900/10 shadow-soft space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-coral-600 flex items-center gap-2">
                <Clock className="w-5 h-5 text-coral-500" />
                <span>Best Time & How to Get There</span>
              </h3>
              <span className="font-handwriting text-2xl sm:text-3xl text-sage-600">
                walk gently & enjoy the view ~
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

          {/* Days List */}
          <div className="space-y-8">
            {plan.days.map((day) => (
              <div
                key={day.day_number}
                className="rounded-5xl bg-white p-6 sm:p-10 border-2 border-ink-900/10 shadow-card space-y-6"
              >
                {/* Day Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-ink-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-coral-200 border-2 border-ink-900 flex items-center justify-center text-ink-900 font-sans font-black text-xl shadow-[3px_3px_0px_0px_#1C1B18]">
                      {day.day_number}
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-mono text-coral-600 uppercase tracking-wider font-bold block">
                        {day.date_or_phase}
                      </span>
                      <h4 className="text-2xl sm:text-3xl font-serif font-bold text-ink-900">{day.title}</h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs sm:text-sm text-ink-700">
                    <span className="flex items-center gap-1.5 font-bold bg-sage-50 px-3.5 py-1.5 rounded-full border border-sage-200 text-sage-800">
                      <Mountain className="w-4 h-4 text-sage-600" />
                      {day.elevation_profile}
                    </span>
                    <span className="bg-lavender-50 px-3.5 py-1.5 rounded-full border border-lavender-200 font-bold text-lavender-700">
                      {day.distance_km} km
                    </span>
                  </div>
                </div>

                {/* Day Scenic Landscape Photo */}
                {day.day_image && (
                  <div className="relative rounded-3xl overflow-hidden aspect-[16/7] sm:aspect-[21/9] border-2 border-ink-900/10 shadow-soft group">
                    <img
                      src={day.day_image}
                      alt={day.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 text-white flex items-center gap-2">
                      <Camera className="w-4 h-4 text-coral-300" />
                      <span className="text-xs sm:text-sm font-bold tracking-wide">
                        Scenic landscape along Day {day.day_number}&apos;s route
                      </span>
                    </div>
                  </div>
                )}

                {/* Day Route Steps */}
                <div className="relative border-l-2 border-sage-300 ml-4 pl-6 sm:pl-8 space-y-7 pt-2">
                  {day.route_steps.map((step, sIdx) => (
                    <div key={sIdx} className="relative group">
                      <div className="absolute -left-[33px] sm:-left-[41px] top-1 w-4 h-4 rounded-full bg-white border-3 border-coral-400 shadow-sm" />

                      <div className="space-y-1.5">
                        <span className="text-xs sm:text-sm font-mono text-coral-600 uppercase tracking-widest font-bold">
                          {step.time_of_day}
                        </span>
                        <h5 className="text-base sm:text-lg font-bold text-ink-900">{step.title}</h5>
                        <p className="text-sm sm:text-base text-ink-700 leading-relaxed">{step.description}</p>
                        {step.tip && (
                          <div className="text-sm text-coral-800 bg-coral-50/90 border border-coral-200 px-3.5 py-2 rounded-2xl mt-2 inline-flex items-center gap-2 font-medium">
                            <span>💡</span>
                            <span>{step.tip}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* RECOMMENDED LOCAL ARTISAN & CRAFT SHOPS (WITH REAL IMAGES) */}
                {day.verified_artisan_stops && day.verified_artisan_stops.length > 0 && (
                  <div className="pt-8 border-t border-ink-100 space-y-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-2xl bg-sage-100 text-sage-800 flex items-center justify-center border-2 border-sage-300 shadow-xs">
                          <ShoppingBag className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="text-sm sm:text-base font-black uppercase tracking-wider text-sage-900">
                            Recommended Local Artisan & Craft Shops On Your Route
                          </h5>
                          <p className="text-xs sm:text-sm text-ink-600">
                            Real traditional makers you can visit directly along this path. Zero commercial middleman cuts.
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-sage-900 bg-sage-100 px-3 py-1 rounded-full border border-sage-300 font-bold self-start sm:self-auto">
                        100% Direct from Artisans
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {day.verified_artisan_stops.map((artisan, aIdx) => (
                        <div
                          key={aIdx}
                          className="rounded-4xl bg-white border-2 border-ink-900/10 shadow-soft overflow-hidden flex flex-col hover:shadow-card transition-all"
                        >
                          {/* Artisan Workshop / Shopfront Photo */}
                          <div className="relative aspect-[16/10] overflow-hidden bg-sage-50">
                            <img
                              src={artisan.image_url}
                              alt={artisan.business_name}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3">
                              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-white/95 text-sage-900 border border-sage-300 font-bold shadow-soft">
                                <Award className="w-3.5 h-3.5 text-sage-600" />
                                {artisan.verification_tier}
                              </span>
                            </div>
                            <div className="absolute bottom-3 left-3 right-3">
                              <span className="inline-block text-xs text-white bg-ink-950/70 backdrop-blur-sm px-2.5 py-1 rounded-lg font-medium">
                                Craft: {artisan.craft_specialty}
                              </span>
                            </div>
                          </div>

                          {/* Card Content */}
                          <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                            <div className="space-y-2">
                              <div>
                                <h6 className="font-serif font-bold text-lg sm:text-xl text-ink-900">
                                  {artisan.business_name}
                                </h6>
                                <p className="text-sm text-ink-600">
                                  Master Artisan: <strong className="text-ink-900">{artisan.artisan_name}</strong>
                                </p>
                              </div>

                              <p className="text-sm text-ink-700 italic leading-relaxed bg-sage-50/70 p-3.5 rounded-2xl border border-sage-100">
                                &ldquo;{artisan.story_snippet}&rdquo;
                              </p>
                            </div>

                            <div className="space-y-3 pt-2">
                              <div className="text-xs sm:text-sm text-ink-800 flex items-center gap-2 font-bold">
                                <MapPin className="w-4 h-4 text-coral-500 shrink-0" />
                                <span>{artisan.waypoint_location}</span>
                              </div>

                              {/* Free Immersion Perk */}
                              <div className="p-3.5 rounded-2xl bg-coral-50 border border-coral-200">
                                <span className="font-bold text-coral-700 flex items-center gap-1.5 text-xs sm:text-sm">
                                  <Sparkles className="w-4 h-4 text-coral-500" />
                                  Warm Welcome for Travelers
                                </span>
                                <p className="text-ink-800 text-xs sm:text-sm mt-1 leading-relaxed font-normal">
                                  {artisan.special_immersion}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 2: KNOW DESTINATION DEEPLY (STORIES & CULTURE)
          ======================================================== */}
      {activeTab === 'cultural_deep_dive' && (
        <div className="space-y-10">
          {/* Main Cultural Intro */}
          <div className="p-6 sm:p-12 rounded-5xl bg-white border-2 border-ink-900/10 shadow-card space-y-4">
            <span className="font-handwriting text-3xl sm:text-4xl text-coral-500 block">
              ancient stories, local people & delicious food ~
            </span>
            <h3 className="text-3xl sm:text-5xl font-serif font-bold text-ink-900">
              The Living Spirit of {plan.destination.name}
            </h3>
            <p className="text-base sm:text-lg text-ink-700 leading-relaxed max-w-3xl font-normal">
              Travel becomes unforgettable when you understand the stories, traditions, and warm-hearted people who call these places home. Here is everything that makes this place truly special.
            </p>
          </div>

          {/* 3 Story Cards with High-Res Photos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Story & Sacred Lore */}
            <div className="rounded-5xl bg-white border-2 border-ink-900/10 shadow-card overflow-hidden flex flex-col">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80"
                  alt="Ancient Temple Stories"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white">
                  <span className="px-3 py-1 rounded-full bg-coral-400 text-ink-950 text-xs font-black uppercase tracking-wider">
                    Ancient Legend
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-3">
                <h4 className="font-serif font-bold text-xl sm:text-2xl text-ink-900 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-coral-500" />
                  <span>Stories & Sacred History</span>
                </h4>
                <p className="text-base sm:text-lg text-ink-700 leading-relaxed">
                  {plan.deep_cultural_guide.sacred_lore_and_mythology}
                </p>
              </div>
            </div>

            {/* Living Traditions & Prayers */}
            <div className="rounded-5xl bg-white border-2 border-ink-900/10 shadow-card overflow-hidden flex flex-col">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80"
                  alt="Living Traditions"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white">
                  <span className="px-3 py-1 rounded-full bg-lavender-300 text-ink-950 text-xs font-black uppercase tracking-wider">
                    Unbroken Tradition
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-3">
                <h4 className="font-serif font-bold text-xl sm:text-2xl text-ink-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-lavender-600" />
                  <span>Living Traditions & Temple Life</span>
                </h4>
                <p className="text-base sm:text-lg text-ink-700 leading-relaxed">
                  {plan.deep_cultural_guide.living_traditions}
                </p>
              </div>
            </div>
          </div>

          {/* Local People & Mountain Life */}
          <div className="rounded-5xl bg-white border-2 border-ink-900/10 shadow-card p-6 sm:p-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-sage-100 text-sage-800 flex items-center justify-center border-2 border-sage-300">
                <Mountain className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-xl sm:text-2xl text-ink-900">
                The Friendly Local People & Mountain Life
              </h4>
            </div>
            <p className="text-base sm:text-lg text-ink-700 leading-relaxed">
              {plan.deep_cultural_guide.community_and_people}
            </p>
          </div>

          {/* DELICIOUS LOCAL FOOD TO TRY (WITH PHOTOS) */}
          <div className="p-6 sm:p-10 rounded-5xl bg-white border-2 border-ink-900/10 shadow-card space-y-6">
            <div className="space-y-1">
              <h4 className="font-serif font-bold text-2xl sm:text-3xl text-ink-900 flex items-center gap-2.5">
                <Utensils className="w-6 h-6 text-coral-500" />
                <span>Delicious Local Food & Drinks to Try</span>
              </h4>
              <p className="text-sm sm:text-base text-ink-600">
                Fresh, healthy regional dishes prepared with local mountain herbs and traditional recipes.
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
                      <p className="text-sm sm:text-base text-ink-700 leading-relaxed mt-1">{g.description}</p>
                    </div>
                    <p className="text-xs sm:text-sm text-coral-700 font-bold pt-2 border-t border-sage-200/60">
                      📍 Where to try: {g.where_to_try}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAMOUS HANDCRAFTED SOUVENIRS (WITH PHOTOS) */}
          <div className="p-6 sm:p-10 rounded-5xl bg-white border-2 border-ink-900/10 shadow-card space-y-6">
            <div className="space-y-1">
              <h4 className="font-serif font-bold text-2xl sm:text-3xl text-ink-900 flex items-center gap-2.5">
                <ShoppingBag className="w-6 h-6 text-sage-600" />
                <span>Famous Handcrafted Souvenirs & Crafts</span>
              </h4>
              <p className="text-sm sm:text-base text-ink-600">
                Authentic handcrafted treasures made by generational artisans—perfect keepsakes of your trip.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                      <p className="text-sm sm:text-base text-ink-700 leading-relaxed mt-1">{c.description}</p>
                    </div>
                    <p className="text-xs sm:text-sm text-ink-800 font-bold pt-2 border-t border-lavender-200/60">
                      🏷️ Made by: {c.artisan_line}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Helpful Tips & Respectful Travel Habits */}
          <div className="p-6 sm:p-10 rounded-5xl bg-white border-2 border-ink-900/10 shadow-card space-y-4">
            <h4 className="font-serif font-bold text-xl sm:text-2xl text-ink-900 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-sage-600" />
              <span>Helpful Tips & Respectful Travel Habits</span>
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
          TAB 3: TRAVEL TIPS & SAFETY GUIDE
          ======================================================== */}
      {activeTab === 'essentials' && (
        <div className="space-y-10">
          <div className="p-6 sm:p-12 rounded-5xl bg-white border-2 border-ink-900/10 shadow-card space-y-8">
            <div className="space-y-2">
              <span className="font-handwriting text-3xl sm:text-4xl text-coral-500 block">
                safe, healthy & mindful journey ~
              </span>
              <h3 className="font-serif font-bold text-2xl sm:text-4xl text-ink-900">
                Essential Health, Packing & Safety Tips
              </h3>
              <p className="text-base sm:text-lg text-ink-700">
                Everything you need to know for a smooth, relaxed, and safe trip up into the mountains.
              </p>
            </div>

            {/* High Altitude Advice Card */}
            <div className="p-6 sm:p-8 rounded-4xl bg-coral-50/80 border-2 border-coral-200 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-coral-600 shrink-0 mt-1" />
              <div className="space-y-2">
                <h4 className="font-bold text-lg sm:text-xl text-ink-900">
                  High Altitude Health Advice ({plan.destination.altitude_meters}m)
                </h4>
                <p className="text-base sm:text-lg text-ink-800 leading-relaxed font-normal">
                  {plan.practical_essentials.acclimatization_protocol}
                </p>
              </div>
            </div>

            {/* Official Registration */}
            <div className="p-6 sm:p-8 rounded-4xl bg-sage-50/80 border-2 border-sage-200 space-y-2">
              <h4 className="font-bold text-base sm:text-lg uppercase tracking-wider text-sage-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-sage-700" />
                <span>Trip Registration & Easy Passes</span>
              </h4>
              <p className="text-base sm:text-lg text-ink-800 leading-relaxed font-normal">
                {plan.practical_essentials.permits_and_registration}
              </p>
            </div>

            {/* Packing Checklist */}
            <div className="space-y-4 pt-4 border-t border-ink-100">
              <h4 className="font-bold text-base sm:text-lg uppercase tracking-wider text-ink-800">
                Recommended Packing Checklist
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {plan.practical_essentials.packing_checklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-base text-ink-800 p-4 rounded-2xl bg-sage-50/60 border border-sage-200 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Helplines */}
            <div className="space-y-4 pt-4 border-t border-ink-100">
              <h4 className="font-bold text-base sm:text-lg uppercase tracking-wider text-coral-600 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>Helpful Emergency & Medical Helplines</span>
              </h4>
              <div className="flex flex-wrap gap-3.5">
                {plan.practical_essentials.emergency_helplines.map((line, idx) => (
                  <span
                    key={idx}
                    className="text-sm sm:text-base px-4 py-2 rounded-full bg-coral-100 text-coral-800 border border-coral-200 font-mono font-bold"
                  >
                    {line}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
