'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { UserProfile } from '@/lib/types';
import { CrazyBharatDarshanLogo } from './CrazyBharatDarshanLogo';
import {
  Compass,
  Sparkles,
  MapPin,
  User,
  LogOut,
  Store,
  Feather,
  Menu,
  X,
  Flame,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface NavbarProps {
  user: UserProfile | null;
  onOpenAuth: () => void;
  onLogout: () => void;
  onOpenPlanner: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  user,
  onOpenAuth,
  onLogout,
  onOpenPlanner,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ========================================================
          STICKY TOP NAVBAR
          ======================================================== */}
      <header className="sticky top-0 z-40 bg-[#FDFCF8]/95 backdrop-blur-md border-b-2 border-ink-900/10 transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand: Crazy BHARATDARSHAN Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <CrazyBharatDarshanLogo size="md" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-bold tracking-wider text-ink-700 uppercase">
            <Link
              href="#india-map"
              className="hover:text-coral-600 transition-colors flex items-center gap-2 py-1"
            >
              <MapPin className="w-4 h-4 text-sage-600" />
              <span>Interactive Atlas</span>
            </Link>
            <button
              onClick={onOpenPlanner}
              className="hover:text-coral-600 transition-colors flex items-center gap-2 py-1"
            >
              <Sparkles className="w-4 h-4 text-coral-500" />
              <span>Journey Planner</span>
            </button>
            <Link
              href="#living-traditions"
              className="hover:text-coral-600 transition-colors flex items-center gap-2 py-1"
            >
              <Feather className="w-4 h-4 text-lavender-500" />
              <span>Living Traditions</span>
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dedicated Artisan Portal (Desktop / Tablet) */}
            <Link
              href="/merchant"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-ink-800 hover:text-ink-950 transition-all px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-sage-100 hover:bg-sage-200 border-2 border-ink-900 font-bold shadow-[2px_2px_0px_0px_#1C1B18] active:translate-x-0.5 active:translate-y-0.5"
              title="Dedicated Gateway for Mountain Artisans & Guilds"
            >
              <Store className="w-3.5 h-3.5 text-sage-700" />
              <span>Artisan Portal</span>
            </Link>

            {/* User Profile / Auth Button (Desktop & Mobile) */}
            {user ? (
              <Link
                href="/user"
                className="flex items-center gap-2 bg-white border-2 border-ink-900 rounded-2xl p-1 sm:p-1.5 pr-2.5 sm:pr-3 shadow-[2px_2px_0px_0px_#1C1B18] hover:bg-sage-50 transition-all"
              >
                <img
                  src={
                    user.avatar ||
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80'
                  }
                  alt={user.name}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-xl object-cover border border-coral-200 shrink-0"
                />
                <div className="text-left hidden min-[480px]:block">
                  <p className="text-[11px] sm:text-xs font-bold text-ink-900 leading-tight line-clamp-1">
                    {user.name.split(' ')[0]}
                  </p>
                  <p className="text-[8px] sm:text-[9px] text-coral-600 font-bold font-mono">YATRI</p>
                </div>
              </Link>
            ) : (
              <button
                onClick={onOpenAuth}
                className="py-1.5 px-3 sm:py-2.5 sm:px-4 rounded-2xl bg-coral-300 hover:bg-coral-400 text-ink-950 font-black text-[11px] sm:text-xs tracking-wider uppercase transition-all border-2 border-ink-900 shadow-[2px_2px_0px_0px_#1C1B18] sm:shadow-[3px_3px_0px_0px_#1C1B18] active:translate-x-0.5 active:translate-y-0.5 flex items-center gap-1.5 shrink-0"
              >
                <User className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Sign In</span>
              </button>
            )}

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 rounded-2xl bg-white border-2 border-ink-900 shadow-[2px_2px_0px_0px_#1C1B18] active:translate-x-0.5 active:translate-y-0.5 text-ink-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ========================================================
            MOBILE SLIDE-DOWN DRAWER MENU
            ======================================================== */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t-2 border-ink-900/10 bg-[#FDFCF8]/98 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200 shadow-card">
            <div className="px-4 py-5 space-y-3 max-w-md mx-auto">
              {/* Quick Cultural Badge */}
              <div className="p-3 rounded-2xl bg-coral-50 border border-coral-200 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-coral-700 uppercase">
                  ✦ PAN-INDIA LIVING HERITAGE
                </span>
                <span className="text-[10px] bg-white px-2 py-0.5 rounded-full border border-coral-200 font-bold text-ink-900">
                  28 States • 8 UTs
                </span>
              </div>

              {/* Navigation Links */}
              <div className="space-y-1.5 pt-1">
                <Link
                  href="#india-map"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-sage-50 border-2 border-ink-900 shadow-[2px_2px_0px_0px_#1C1B18] text-sm font-bold text-ink-900 transition-all active:scale-[0.99]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-sage-100 flex items-center justify-center text-sage-700">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>Interactive Atlas of India</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-ink-400" />
                </Link>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPlanner();
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-2xl bg-coral-100 hover:bg-coral-200 border-2 border-ink-900 shadow-[2px_2px_0px_0px_#1C1B18] text-sm font-black text-ink-950 transition-all active:scale-[0.99]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-coral-300 flex items-center justify-center text-ink-950">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span>Launch Journey Planner</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-ink-950" />
                </button>

                <Link
                  href="#living-traditions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-sage-50 border-2 border-ink-900 shadow-[2px_2px_0px_0px_#1C1B18] text-sm font-bold text-ink-900 transition-all active:scale-[0.99]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-lavender-100 flex items-center justify-center text-lavender-700">
                      <Feather className="w-4 h-4" />
                    </div>
                    <span>Living Cultural Traditions</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-ink-400" />
                </Link>

                <Link
                  href="/merchant"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-2xl bg-sage-100 hover:bg-sage-200 border-2 border-ink-900 shadow-[2px_2px_0px_0px_#1C1B18] text-sm font-bold text-ink-900 transition-all active:scale-[0.99]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-sage-200 flex items-center justify-center text-sage-800">
                      <Store className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="leading-tight font-black">Artisan & Guild Portal</p>
                      <p className="text-[10px] text-sage-800 font-medium">Free for traditional makers</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-sage-800" />
                </Link>

                {user && (
                  <Link
                    href="/user"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 rounded-2xl bg-white border-2 border-ink-900 shadow-[2px_2px_0px_0px_#1C1B18] text-sm font-bold text-ink-900 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-coral-100 flex items-center justify-center text-coral-600">
                        <User className="w-4 h-4" />
                      </div>
                      <span>My Profile & Saved Trips</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-ink-400" />
                  </Link>
                )}
              </div>

              {/* User Section / Sign Out */}
              {user && (
                <div className="pt-2 border-t border-ink-100 flex items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-xl object-cover border border-coral-200"
                    />
                    <div>
                      <p className="text-xs font-bold text-ink-900">{user.name}</p>
                      <p className="text-[10px] text-ink-500 font-mono">{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onLogout();
                    }}
                    className="flex items-center gap-1.5 text-xs text-red-600 font-bold hover:bg-red-50 p-2 rounded-xl transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* ========================================================
          CRAZY MOBILE FLOATING BOTTOM DOCK (NATIVE APP FEEL)
          ======================================================== */}
      <nav
        aria-label="Mobile Bottom Navigation Dock"
        className="md:hidden fixed bottom-3 inset-x-3 z-40 max-w-md mx-auto"
      >
        <div className="relative bg-[#181614]/95 text-white backdrop-blur-2xl border-2 border-ink-900 rounded-3xl p-1.5 px-2 flex items-center justify-between shadow-[0_12px_36px_rgba(0,0,0,0.38)]">
          {/* 1. Atlas */}
          <Link
            href="/#india-map"
            className="flex-1 flex flex-col items-center justify-center py-1.5 text-ink-300 hover:text-white transition-colors group active:scale-95"
          >
            <Compass className="w-4 h-4 group-hover:text-sage-400 transition-colors" />
            <span className="text-[10px] font-bold font-mono tracking-wider mt-0.5">Atlas</span>
          </Link>

          {/* 2. Traditions */}
          <Link
            href="/#living-traditions"
            className="flex-1 flex flex-col items-center justify-center py-1.5 text-ink-300 hover:text-white transition-colors group active:scale-95"
          >
            <Flame className="w-4 h-4 group-hover:text-coral-400 transition-colors" />
            <span className="text-[10px] font-bold font-mono tracking-wider mt-0.5">Traditions</span>
          </Link>

          {/* 3. Center Elevated PLAN TRIP Button */}
          <button
            onClick={onOpenPlanner}
            className="relative -top-4 mx-1 px-4 py-3 rounded-2xl bg-coral-300 hover:bg-coral-400 text-ink-950 font-black text-xs uppercase tracking-wider border-2 border-ink-950 shadow-[0_6px_20px_rgba(255,111,89,0.55)] active:translate-y-[-10px] active:scale-95 transition-all flex flex-col items-center shrink-0 group"
          >
            <Sparkles className="w-4 h-4 text-ink-950 group-hover:rotate-12 transition-transform" />
            <span className="text-[10px] font-black tracking-widest mt-0.5">PLAN</span>
          </button>

          {/* 4. Artisans */}
          <Link
            href="/merchant"
            className="flex-1 flex flex-col items-center justify-center py-1.5 text-ink-300 hover:text-white transition-colors group active:scale-95"
          >
            <Store className="w-4 h-4 group-hover:text-sage-400 transition-colors" />
            <span className="text-[10px] font-bold font-mono tracking-wider mt-0.5">Artisans</span>
          </Link>

          {/* 5. Account / User */}
          {user ? (
            <Link
              href="/user"
              className="flex-1 flex flex-col items-center justify-center py-1.5 text-ink-300 hover:text-white transition-colors group active:scale-95"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-4 h-4 rounded-full object-cover border border-coral-400"
              />
              <span className="text-[10px] font-bold font-mono tracking-wider mt-0.5">Profile</span>
            </Link>
          ) : (
            <button
              onClick={onOpenAuth}
              className="flex-1 flex flex-col items-center justify-center py-1.5 text-ink-300 hover:text-white transition-colors group active:scale-95"
            >
              <User className="w-4 h-4 group-hover:text-coral-400 transition-colors" />
              <span className="text-[10px] font-bold font-mono tracking-wider mt-0.5">Sign In</span>
            </button>
          )}
        </div>
      </nav>
    </>
  );
};
