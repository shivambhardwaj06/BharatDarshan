'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { IndiaInteractiveMap } from '@/components/IndiaInteractiveMap';
import { TripPlannerModal } from '@/components/TripPlannerModal';
import { CinematicPlanViewer } from '@/components/CinematicPlanViewer';
import { AuthModal } from '@/components/AuthModal';
import { CrazyBharatDarshanLogo } from '@/components/CrazyBharatDarshanLogo';
import { DestinationMeta, TripPlan, UserProfile } from '@/lib/types';
import { fetchDestinations, FALLBACK_DESTINATIONS } from '@/lib/api';
import {
  Sparkles,
  Mountain,
  Compass,
  MapPin,
  Calendar,
  Flame,
  ArrowRight,
  ShieldCheck,
  Award,
  Store,
  CheckCircle2,
  Feather,
} from 'lucide-react';

export default function HomePage() {
  const [destinations, setDestinations] = useState<DestinationMeta[]>(FALLBACK_DESTINATIONS);
  const [selectedDest, setSelectedDest] = useState<DestinationMeta>(FALLBACK_DESTINATIONS[0]);
  const [activePlan, setActivePlan] = useState<TripPlan | null>(null);
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    async function load() {
      const data = await fetchDestinations();
      if (data && data.length > 0) {
        setDestinations(data);
        setSelectedDest(data[0]);
      }
    }
    load();
  }, []);

  const handleOpenPlannerForDest = (dest: DestinationMeta) => {
    setSelectedDest(dest);
    setIsPlannerOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCF8] text-[#2D2B28] overflow-x-hidden selection:bg-coral-300 selection:text-ink-900">
      {/* Navbar */}
      <Navbar
        user={user}
        onOpenAuth={() => setIsAuthOpen(true)}
        onLogout={() => setUser(null)}
        onOpenPlanner={() => setIsPlannerOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-20">
        {/* IF A PLAN IS ACTIVE, SHOW THE EXPEDITION PLAN VIEWER */}
        {activePlan ? (
          <CinematicPlanViewer plan={activePlan} onReset={() => setActivePlan(null)} />
        ) : (
          <>
            {/* HERO SECTION: Monumental BHARATDARSHAN Typographic Showstopper */}
            <section className="relative rounded-5xl pastel-card p-6 sm:p-14 text-center space-y-6 overflow-hidden border-2 border-ink-900/10 shadow-soft">
              {/* Floating ambient shapes */}
              <div className="absolute top-0 right-10 w-72 h-72 rounded-full bg-coral-100/60 blur-3xl pointer-events-none -z-10 animate-float-gentle" />
              <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-sage-100/70 blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />

              {/* Tag pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-ink-900 shadow-[3px_3px_0px_0px_#1C1B18] text-ink-900 text-xs sm:text-sm font-black uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-coral-500" />
                <span>Living Heritage & Journey Guide</span>
              </div>

              {/* CRAZY BHARATDARSHAN TYPOGRAPHY HERO */}
              <div className="py-2">
                <CrazyBharatDarshanLogo size="hero" showStickers={true} />
              </div>

              {/* Subheading & Description */}
              <div className="space-y-3 max-w-2xl mx-auto">
                <span className="font-handwriting text-3xl sm:text-4xl text-coral-500 block rotate-[-1.5deg]">
                  don&apos;t just visit india, touch its living pulse ~
                </span>
                <p className="text-base sm:text-lg text-ink-700 leading-relaxed font-normal">
                  Explore India like never before—from ancient river ghats and high Himalayan trails to golden desert dunes and misty green tea hills. Plan authentic journeys filled with deep cultural folklore, delicious local food, and verified artisan workshops.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
                <button
                  onClick={() => setIsPlannerOpen(true)}
                  className="px-8 py-4 rounded-2xl bg-coral-300 hover:bg-coral-400 text-ink-950 font-black text-xs uppercase tracking-wider flex items-center gap-2.5 border-2 border-ink-900 shadow-[4px_4px_0px_0px_#1C1B18] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#1C1B18] transition-all"
                >
                  <Sparkles className="w-4 h-4 text-ink-950" />
                  <span>Launch BHARATDARSHAN Planner</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </button>

                {!user && (
                  <button
                    onClick={() => setIsAuthOpen(true)}
                    className="px-7 py-4 rounded-2xl bg-white hover:bg-sage-50 text-ink-900 font-bold text-xs tracking-wider uppercase border-2 border-ink-900 shadow-[4px_4px_0px_0px_#1C1B18] flex items-center gap-2.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#1C1B18] transition-all"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    <span>Continue with Google</span>
                  </button>
                )}
              </div>

              {/* Pan-India Stats Bar */}
              <div className="pt-8 border-t border-ink-100 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
                <div className="p-4 rounded-2xl bg-sage-50/80 border border-sage-200">
                  <p className="text-2xl font-black font-sans text-ink-900">28 + 8</p>
                  <p className="text-xs text-ink-600 mt-0.5">States & Union Territories</p>
                </div>
                <div className="p-4 rounded-2xl bg-lavender-50/80 border border-lavender-200">
                  <p className="text-2xl font-black font-sans text-ink-900">500+</p>
                  <p className="text-xs text-ink-600 mt-0.5">Living Heritage Routes</p>
                </div>
                <div className="p-4 rounded-2xl bg-coral-50/80 border border-coral-200">
                  <p className="text-2xl font-black font-sans text-coral-600">100%</p>
                  <p className="text-xs text-ink-600 mt-0.5">Direct to Local Makers</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-ink-200 shadow-soft">
                  <p className="text-2xl font-black font-sans text-sage-800">0%</p>
                  <p className="text-xs text-ink-600 mt-0.5">Middleman Commissions</p>
                </div>
              </div>
            </section>

            {/* INTERACTIVE ATLAS MAP */}
            <section id="india-map" className="space-y-4">
              <IndiaInteractiveMap
                destinations={destinations}
                selectedDest={selectedDest}
                onSelectDest={(d) => setSelectedDest(d)}
                onOpenPlanner={handleOpenPlannerForDest}
              />
            </section>

            {/* DIVERSE CULTURAL JOURNEYS ACROSS INDIA */}
            <section id="living-traditions" className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sage-100 text-sage-800 text-xs font-black uppercase tracking-wider border border-sage-300">
                    <Flame className="w-3.5 h-3.5 text-sage-600" />
                    <span>Living Cultural Journeys Across India</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink-900 tracking-tight">
                    Explore India&apos;s Rich Cultural Diversity
                  </h2>
                </div>
                <span className="font-handwriting text-2xl sm:text-3xl text-coral-500">
                  from rivers & deserts to high mountains & spice hills ~
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destinations.slice(0, 6).map((dest) => (
                  <div
                    key={dest.id}
                    className="rounded-4xl bg-white border-2 border-ink-900/10 shadow-soft overflow-hidden flex flex-col justify-between hover:shadow-card transition-all group"
                  >
                    <div>
                      <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
                        <img
                          src={dest.hero_image}
                          alt={dest.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1 rounded-full bg-white/95 text-ink-900 text-xs font-bold border border-ink-900/10 shadow-sm">
                          <MapPin className="w-3 h-3 text-coral-500" />
                          <span>{dest.state}</span>
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <p className="font-handwriting text-xl text-coral-200">{dest.hindi_name}</p>
                          <h3 className="font-serif font-bold text-xl drop-shadow-sm -mt-0.5">{dest.name}</h3>
                        </div>
                      </div>

                      <div className="p-6 space-y-3">
                        <p className="text-sm text-ink-700 leading-relaxed font-normal">
                          {dest.short_desc}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {dest.vibe_tags.slice(0, 3).map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] px-2.5 py-0.5 rounded-full bg-sage-50 text-sage-800 font-semibold border border-sage-200"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <button
                        onClick={() => handleOpenPlannerForDest(dest)}
                        className="w-full py-3 px-4 rounded-2xl bg-coral-100 hover:bg-coral-200 text-ink-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-coral-300 transition-all active:scale-[0.98]"
                      >
                        <span>Plan Trip to {dest.name.split(' ')[0]}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ARTISAN GATEWAY SECTION */}
            <section className="rounded-5xl bg-sage-50/80 p-8 sm:p-12 border-2 border-sage-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-soft">
              <div className="space-y-2 max-w-xl">
                <span className="text-[11px] font-black uppercase tracking-wider text-sage-800 flex items-center gap-1.5">
                  <Store className="w-4 h-4 text-sage-700" />
                  <span>Artisans, Craftsmen & Workshops Across India</span>
                </span>
                <span className="font-handwriting text-2xl text-coral-500 block rotate-[-1deg]">
                  empowering authentic local craft ~
                </span>
                <h3 className="text-2xl font-serif font-bold text-ink-900 -mt-2">
                  Are you a local artisan, craftsman or weaver in India?
                </h3>
                <p className="text-sm text-ink-700 leading-relaxed font-normal">
                  Join the dedicated BHARATDARSHAN Merchant Portal. Get verified to appear naturally in travelers&apos; itineraries visiting your region—100% free with zero middleman commissions.
                </p>
              </div>

              <Link
                href="/merchant"
                className="px-8 py-4 rounded-2xl bg-sage-600 hover:bg-sage-700 text-white font-black text-xs uppercase tracking-wider whitespace-nowrap border-2 border-ink-900 shadow-[3px_3px_0px_0px_#1C1B18] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#1C1B18] flex items-center gap-2 transition-all shrink-0"
              >
                <span>Enter Artisan Portal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </section>
          </>
        )}
      </main>

      {/* TRIP PLANNER MODAL */}
      <TripPlannerModal
        isOpen={isPlannerOpen}
        onClose={() => setIsPlannerOpen(false)}
        destination={selectedDest}
        onPlanGenerated={(plan) => setActivePlan(plan)}
      />

      {/* AUTH MODAL */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={(u) => setUser(u)}
      />

      {/* FOOTER WITH CRAZY BHARATDARSHAN TYPOGRAPHIC MARQUEE */}
      <footer className="mt-auto border-t-2 border-ink-900/10 py-12 bg-white/80 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <div className="flex items-center justify-center">
            <span className="font-black text-4xl sm:text-7xl font-sans tracking-[0.25em] text-ink-200/50 uppercase select-none hover:text-coral-200 transition-colors">
              BHARATDARSHAN
            </span>
          </div>
          <p className="font-handwriting text-2xl sm:text-3xl text-coral-500">
            may your travels be gentle, peaceful & authentic ~
          </p>
          <p className="text-xs sm:text-sm text-ink-600 font-medium">
            ✦ BHARATDARSHAN • LIVING CULTURAL EXPEDITIONS ✦
          </p>
          <p className="text-xs text-ink-500 font-mono">
            Powered by Local Guides & Verified Cultural Guilds
          </p>
        </div>
      </footer>
    </div>
  );
}
