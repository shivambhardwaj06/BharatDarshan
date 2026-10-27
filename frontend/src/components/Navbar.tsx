'use client';

import React from 'react';
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
  return (
    <header className="sticky top-0 z-40 bg-[#FDFCF8]/90 backdrop-blur-md border-b-2 border-ink-900/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand: Crazy BHARATDARSHAN Logo */}
        <Link href="/" className="flex items-center gap-3">
          <CrazyBharatDarshanLogo size="md" />
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wider text-ink-700 uppercase">
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
        <div className="flex items-center gap-3">
          {/* Dedicated Artisan Portal */}
          <Link
            href="/merchant"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-ink-800 hover:text-ink-950 transition-all px-3.5 py-2 rounded-2xl bg-sage-100 hover:bg-sage-200 border-2 border-ink-900 font-bold shadow-[2px_2px_0px_0px_#1C1B18]"
            title="Dedicated Gateway for Mountain Artisans & Guilds"
          >
            <Store className="w-3.5 h-3.5 text-sage-700" />
            <span>Artisan Portal</span>
          </Link>

          {/* User Profile / Auth Button */}
          {user ? (
            <div className="flex items-center gap-2 bg-white border-2 border-ink-900 rounded-2xl p-1.5 pr-3 shadow-[2px_2px_0px_0px_#1C1B18]">
              <img
                src={user.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80'}
                alt={user.name}
                className="w-7 h-7 rounded-xl object-cover border border-coral-200"
              />
              <div className="text-left hidden sm:block">
                <p className="text-xs font-bold text-ink-900 leading-tight">{user.name}</p>
                <p className="text-[10px] text-coral-600 font-bold font-mono">BHARATDARSHAN YATRI</p>
              </div>
              <button
                onClick={onLogout}
                className="p-1 rounded-xl hover:bg-ink-100 text-ink-400 hover:text-red-500 transition-colors ml-1"
                title="Sign Out"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="py-2.5 px-4 rounded-2xl bg-coral-300 hover:bg-coral-400 text-ink-950 font-black text-xs tracking-wider uppercase transition-all border-2 border-ink-900 shadow-[3px_3px_0px_0px_#1C1B18] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#1C1B18] flex items-center gap-2"
            >
              <User className="w-3.5 h-3.5" />
              <span>Sign In / Google</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
