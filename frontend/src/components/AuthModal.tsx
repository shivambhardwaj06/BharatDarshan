'use client';

import React, { useState } from 'react';
import { UserProfile } from '@/lib/types';
import { X, Lock, Mail, User, ShieldCheck, Sparkles, Heart } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: UserProfile) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleGoogleSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      const mockGoogleUser: UserProfile = {
        id: 'usr-google-109',
        name: 'Ananya Sharma',
        email: 'ananya.sharma@gmail.com',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      };
      onLoginSuccess(mockGoogleUser);
      setLoading(false);
      onClose();
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const newUser: UserProfile = {
        id: 'usr-' + Date.now(),
        name: name || (email.split('@')[0] ?? 'Yatri'),
        email: email,
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      };
      onLoginSuccess(newUser);
      setLoading(false);
      onClose();
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-ink-900/50 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-t-[32px] sm:rounded-4xl bg-[#FDFCF8] p-5 sm:p-8 border-t-2 sm:border border-ink-200 shadow-floating text-ink-900 max-h-[92vh] overflow-y-auto overscroll-contain">
        {/* Mobile Drag Indicator Handle */}
        <div className="w-12 h-1 bg-ink-300 rounded-full mx-auto mb-3 sm:hidden" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full hover:bg-ink-100 text-ink-400 hover:text-ink-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-5 sm:mb-6">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-coral-100 border border-coral-200 flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-soft text-coral-600">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <span className="font-handwriting text-xl sm:text-2xl text-coral-500 block rotate-[-2deg]">
            welcome to mindful yatra ~
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-ink-900 tracking-tight mt-0.5">
            {mode === 'login' ? 'Welcome Back, Traveler' : 'Join Our Travel Community'}
          </h3>
          <p className="text-[11px] sm:text-xs text-ink-500 mt-1 max-w-xs mx-auto">
            Save your cultural trails, bookmark artisan guilds, and customize itineraries.
          </p>
        </div>

        {/* 1. Continue with Google (One-Click) */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full py-3 px-4 rounded-2xl bg-white hover:bg-sage-50 text-ink-800 font-bold text-xs tracking-wider flex items-center justify-center gap-3 border-2 border-ink-900 shadow-[2px_2px_0px_0px_#1C1B18] transition-all active:scale-[0.99] mb-4 sm:mb-5 disabled:opacity-50"
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

        {/* Soft Divider */}
        <div className="relative flex items-center justify-center mb-4 sm:mb-5">
          <div className="border-t border-ink-200 w-full" />
          <span className="bg-[#FDFCF8] px-3 text-[10px] sm:text-[11px] uppercase tracking-widest text-ink-400 font-semibold">
            Or with email
          </span>
          <div className="border-t border-ink-200 w-full" />
        </div>

        {/* Email & Password Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {mode === 'register' && (
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink-600 mb-1">
                Your Name
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-3 w-4 h-4 text-ink-400" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ananya Sharma"
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-ink-200 text-ink-900 text-base sm:text-xs placeholder:text-ink-400 focus:outline-none focus:border-coral-400 shadow-inner"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink-600 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3 w-4 h-4 text-ink-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-ink-200 text-ink-900 text-base sm:text-xs placeholder:text-ink-400 focus:outline-none focus:border-coral-400 shadow-inner"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink-600 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3 w-4 h-4 text-ink-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-ink-200 text-ink-900 text-base sm:text-xs placeholder:text-ink-400 focus:outline-none focus:border-coral-400 shadow-inner"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 rounded-2xl bg-coral-300 hover:bg-coral-400 text-ink-950 font-black text-xs uppercase tracking-wider transition-all border-2 border-ink-900 shadow-[2px_2px_0px_0px_#1C1B18] active:translate-x-0.5 active:translate-y-0.5 disabled:opacity-50 mt-2"
          >
            {loading ? 'Entering...' : mode === 'login' ? 'Sign In' : 'Create Free Account'}
          </button>
        </form>

        {/* Toggle Mode */}
        <div className="mt-4 sm:mt-5 text-center text-xs text-ink-500">
          {mode === 'login' ? (
            <>
              First time here?{' '}
              <button
                onClick={() => setMode('register')}
                className="text-coral-600 font-bold hover:underline ml-1"
              >
                Create account
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={() => setMode('login')}
                className="text-coral-600 font-bold hover:underline ml-1"
              >
                Sign in
              </button>
            </>
          )}
        </div>

        <div className="mt-5 pt-3 border-t border-ink-100 flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] text-ink-400 pb-2 sm:pb-0">
          <ShieldCheck className="w-3.5 h-3.5 text-sage-600" />
          <span>Mindful privacy • Zero spam guarantee</span>
        </div>
      </div>
    </div>
  );
};
