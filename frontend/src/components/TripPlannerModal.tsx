'use client';

import React, { useState } from 'react';
import { DestinationMeta, TripPlan, TripPlanRequest } from '@/lib/types';
import { generateTripPlan } from '@/lib/api';
import {
  Calendar,
  Sparkles,
  Mountain,
  Users,
  Compass,
  ArrowRight,
  X,
  Flame,
  Heart,
  Check,
} from 'lucide-react';

interface TripPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: DestinationMeta;
  onPlanGenerated: (plan: TripPlan) => void;
}

export const TripPlannerModal: React.FC<TripPlannerModalProps> = ({
  isOpen,
  onClose,
  destination,
  onPlanGenerated,
}) => {
  const [dateType, setDateType] = useState<'EXACT' | 'FLEXIBLE'>('FLEXIBLE');
  const [startDate, setStartDate] = useState<string>('2026-11-05');
  const [endDate, setEndDate] = useState<string>('2026-11-09');
  const [flexibleMonth, setFlexibleMonth] = useState<string>('Next Month (November)');
  const [travelVibe, setTravelVibe] = useState<string>('SPIRITUAL_PILGRIMAGE');
  const [groupType, setGroupType] = useState<string>('FAMILY');

  const [isGenerating, setIsGenerating] = useState(false);
  const [genStep, setGenStep] = useState(0);

  if (!isOpen) return null;

  const handleGenerate = async () => {
    setIsGenerating(true);

    const steps = [
      'Gathering route details & scenic rest stops...',
      'Planning comfortable walking pace & fresh mountain views...',
      'Connecting with verified local weavers and craft shops along your path...',
      'Finalizing your day-by-day plan with stories & local food guides...',
    ];

    for (let i = 0; i < steps.length; i++) {
      setGenStep(i);
      await new Promise((r) => setTimeout(r, 650));
    }

    const payload: TripPlanRequest = {
      destination_id: destination.id,
      date_type: dateType,
      start_date: startDate,
      end_date: endDate,
      flexible_month: flexibleMonth,
      travel_vibe: travelVibe,
      group_type: groupType,
    };

    try {
      const plan = await generateTripPlan(payload);
      onPlanGenerated(plan);
      setIsGenerating(false);
      onClose();
    } catch (err) {
      console.error(err);
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-ink-900/50 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-t-[32px] sm:rounded-5xl bg-[#FDFCF8] p-4 sm:p-10 border-t-2 sm:border-2 border-ink-900/10 shadow-floating text-ink-900 max-h-[92vh] overflow-y-auto overscroll-contain">
        {/* Mobile Drag Indicator Handle */}
        <div className="w-12 h-1 bg-ink-300 rounded-full mx-auto mb-3 sm:hidden" />

        {/* Close Button */}
        <button
          onClick={onClose}
          disabled={isGenerating}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full hover:bg-ink-100 text-ink-500 hover:text-ink-900 transition-colors z-10"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 pr-8 sm:pr-0">
          <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-coral-100 border-2 border-ink-900 flex items-center justify-center shrink-0 text-coral-600 shadow-[2px_2px_0px_0px_#1C1B18]">
            <Sparkles className="w-5 h-5 sm:w-7 sm:h-7" />
          </div>
          <div>
            <span className="font-handwriting text-xl sm:text-3xl text-coral-500 rotate-[-2deg] block">
              plan your dream journey ~
            </span>
            <h3 className="text-xl sm:text-3xl font-serif font-bold text-ink-900 tracking-tight leading-tight">
              Trip Plan for {destination.name}
            </h3>
          </div>
        </div>

        {/* GENERATING CALM ANIMATION */}
        {isGenerating ? (
          <div className="py-12 sm:py-16 text-center space-y-5 sm:space-y-6">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-coral-200 border-t-coral-500 animate-spin" />
              <div className="absolute inset-2 sm:inset-3 rounded-full border-4 border-sage-200 border-b-sage-500 animate-spin duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Mountain className="w-6 h-6 sm:w-7 sm:h-7 text-coral-500 animate-pulse-subtle" />
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3 max-w-md mx-auto">
              <span className="font-handwriting text-xl sm:text-3xl text-coral-500 block">
                slow travel in progress ~
              </span>
              <h4 className="font-serif font-bold text-lg sm:text-2xl text-ink-900">
                Crafting Your Personalized Plan...
              </h4>
              <p className="text-xs sm:text-base text-ink-700 min-h-[2.5rem] flex items-center justify-center transition-all px-4 font-normal">
                {genStep === 0 && 'Gathering route details & scenic rest stops...'}
                {genStep === 1 && 'Planning comfortable walking pace & fresh mountain views...'}
                {genStep === 2 && 'Connecting with verified local weavers and craft shops along your path...'}
                {genStep === 3 && 'Finalizing your day-by-day plan with stories & local food guides...'}
              </p>
            </div>

            <div className="flex justify-center gap-2 pt-2">
              {[0, 1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    s <= genStep ? 'w-8 bg-coral-400' : 'w-2 bg-ink-200'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* CONFIGURATION WIZARD */
          <div className="space-y-4 sm:space-y-6">
            {/* Destination Highlight Banner */}
            <div className="p-3 sm:p-5 rounded-2xl sm:rounded-3xl bg-sage-50/80 border border-sage-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={destination.hero_image}
                  alt={destination.name}
                  className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl object-cover shadow-sm border border-sage-200 shrink-0"
                />
                <div>
                  <p className="font-handwriting text-xl sm:text-2xl text-sage-800 leading-none">{destination.hindi_name}</p>
                  <p className="text-sm sm:text-base font-bold text-ink-900 line-clamp-1">{destination.name}</p>
                </div>
              </div>
              <span className="text-[11px] sm:text-sm bg-white px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-sage-900 font-bold border border-sage-200 shadow-soft shrink-0">
                {destination.altitude_meters}m
              </span>
            </div>

            {/* 1. Date Selection Decision (Exact vs. Flexible) */}
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2">
                <label className="text-xs sm:text-base font-bold text-ink-800 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-coral-500 shrink-0" />
                  <span>When are you planning to travel?</span>
                </label>

                {/* Date Mode Toggle */}
                <div className="flex rounded-full bg-ink-100 p-1 border border-ink-200 text-xs font-semibold self-start xs:self-auto">
                  <button
                    type="button"
                    onClick={() => setDateType('FLEXIBLE')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      dateType === 'FLEXIBLE'
                        ? 'bg-white text-ink-900 font-bold shadow-soft'
                        : 'text-ink-600 hover:text-ink-900'
                    }`}
                  >
                    Flexible
                  </button>
                  <button
                    type="button"
                    onClick={() => setDateType('EXACT')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      dateType === 'EXACT'
                        ? 'bg-white text-ink-900 font-bold shadow-soft'
                        : 'text-ink-600 hover:text-ink-900'
                    }`}
                  >
                    Exact Dates
                  </button>
                </div>
              </div>

              {dateType === 'FLEXIBLE' ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                  {[
                    'Next Month (November)',
                    'Pre-Winter (December)',
                    'Spring Opening (May)',
                    'Summer Circuit (June)',
                    'Monsoon End (Sept)',
                    'Autumn Clarity (Oct)',
                  ].map((month) => (
                    <button
                      key={month}
                      type="button"
                      onClick={() => setFlexibleMonth(month)}
                      className={`p-2.5 sm:p-3.5 rounded-2xl border text-xs sm:text-sm text-left transition-all ${
                        flexibleMonth === month
                          ? 'border-coral-400 bg-coral-100 text-ink-950 font-bold shadow-soft'
                          : 'border-ink-200 bg-white text-ink-700 hover:border-coral-200'
                      }`}
                    >
                      {month}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
                  <div>
                    <span className="block text-[11px] sm:text-xs font-bold text-ink-600 mb-1">Start Date</span>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-2xl bg-white border border-ink-200 text-xs sm:text-sm font-medium text-ink-900 focus:outline-none focus:border-coral-400"
                    />
                  </div>
                  <div>
                    <span className="block text-[11px] sm:text-xs font-bold text-ink-600 mb-1">End Date</span>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-2xl bg-white border border-ink-200 text-xs sm:text-sm font-medium text-ink-900 focus:outline-none focus:border-coral-400"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* 2. Travel Vibe */}
            <div className="space-y-2">
              <label className="text-xs sm:text-base font-bold text-ink-800 flex items-center gap-2">
                <Flame className="w-4 h-4 text-coral-500" />
                <span>What kind of trip do you prefer?</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5">
                {[
                  { id: 'SPIRITUAL_PILGRIMAGE', label: 'Sacred & Soulful 🪔' },
                  { id: 'HIGH_ALTITUDE_TREK', label: 'Trekking & Nature 🏔️' },
                  { id: 'CULTURAL_HERITAGE', label: 'Culture & Local Food 🌿' },
                ].map((vibe) => (
                  <button
                    key={vibe.id}
                    type="button"
                    onClick={() => setTravelVibe(vibe.id)}
                    className={`p-3 rounded-2xl border text-xs sm:text-sm text-center transition-all ${
                      travelVibe === vibe.id
                        ? 'border-sage-400 bg-sage-100 text-ink-950 font-bold shadow-soft'
                        : 'border-ink-200 bg-white text-ink-700 hover:border-sage-300'
                    }`}
                  >
                    {vibe.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Group Dynamic */}
            <div className="space-y-2">
              <label className="text-xs sm:text-base font-bold text-ink-800 flex items-center gap-2">
                <Users className="w-4 h-4 text-coral-500" />
                <span>Who is traveling with you?</span>
              </label>

              <div className="grid grid-cols-2 min-[440px]:grid-cols-4 gap-2 sm:gap-2.5">
                {[
                  { id: 'SOLO', label: 'Solo' },
                  { id: 'COUPLE', label: 'Couple' },
                  { id: 'FAMILY', label: 'Family' },
                  { id: 'FRIENDS', label: 'Friends' },
                ].map((grp) => (
                  <button
                    key={grp.id}
                    type="button"
                    onClick={() => setGroupType(grp.id)}
                    className={`py-2.5 px-2 rounded-2xl border text-xs sm:text-sm text-center transition-all ${
                      groupType === grp.id
                        ? 'border-lavender-400 bg-lavender-100 text-ink-950 font-bold shadow-soft'
                        : 'border-ink-200 bg-white text-ink-700 hover:border-lavender-200'
                    }`}
                  >
                    {grp.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleGenerate}
                className="w-full py-3.5 sm:py-4 px-6 rounded-2xl bg-coral-300 hover:bg-coral-400 text-ink-950 font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-ink-900 shadow-[3px_3px_0px_0px_#1C1B18] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#1C1B18] transition-all"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-ink-950" />
                <span>See My Personalized Plan</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
