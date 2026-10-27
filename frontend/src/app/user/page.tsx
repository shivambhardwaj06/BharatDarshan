'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { CrazyBharatDarshanLogo } from '@/components/CrazyBharatDarshanLogo';
import { UserProfile } from '@/lib/types';
import {
  Compass,
  Mountain,
  Calendar,
  Sparkles,
  MapPin,
  ShieldCheck,
  Award,
  ArrowRight,
  Heart,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';

interface SavedTrip {
  id: string;
  destinationId: string;
  destinationName: string;
  state: string;
  window: string;
  duration: string;
  status: 'Upcoming' | 'Planned' | 'Saved Draft';
  heroImage: string;
  shortSummary: string;
  routeHighlights: string[];
  artisanStopsCount: number;
}

interface BookmarkedArtisan {
  id: string;
  businessName: string;
  artisanName: string;
  craftSpecialty: string;
  region: string;
  exactWaypoint: string;
  tierBadge: string;
  story: string;
  specialPerk: string;
  imageUrl: string;
}

const SAVED_TRIPS: SavedTrip[] = [
  {
    id: 'trip-varanasi',
    destinationId: 'varanasi',
    destinationName: 'Varanasi: Living Ghats & Pure Handloom Silk',
    state: 'Uttar Pradesh',
    window: 'November 2026',
    duration: '3 Days / 2 Nights',
    status: 'Upcoming',
    heroImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
    shortSummary:
      'Sunrise wooden boat ride along the 84 ancient ghats, touching the sanctum of Kashi Vishwanath, and exploring the centuries-old silk weaving quarter of Madanpura.',
    routeHighlights: [
      'Dawn wooden boat along Ganga',
      'Grand evening Dashashwamedh Maha Aarti',
      'Hand-woven Kadhwa silk pit-loom stop',
    ],
    artisanStopsCount: 2,
  },
  {
    id: 'trip-ladakh',
    destinationId: 'ladakh',
    destinationName: 'Leh-Ladakh: High Mountain Passes & Nomadic Valleys',
    state: 'Ladakh (UT)',
    window: 'June 2027',
    duration: '4 Days / 3 Nights',
    status: 'Planned',
    heroImage: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80',
    shortSummary:
      'Acclimatization in the high Leh valley, early morning prayer chants at cliffside Thiksey Monastery, crossing the snow-covered Chang La pass (5,360m), and gazing at turquoise Pangong Lake.',
    routeHighlights: [
      'Morning chants at Thiksey Monastery',
      'Over Chang La Pass to Pangong Lake',
      'Changthangi nomadic pashmina spinners',
    ],
    artisanStopsCount: 2,
  },
  {
    id: 'trip-jaisalmer',
    destinationId: 'jaisalmer',
    destinationName: 'Jaisalmer: Golden Fort & Thar Desert Stargazing',
    state: 'Rajasthan',
    window: 'January 2027',
    duration: '3 Days / 2 Nights',
    status: 'Saved Draft',
    heroImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    shortSummary:
      'Living inside the 12th-century golden sandstone fort, sunset camel ride over the rippling Sam sand dunes, listening to desert folk music beside a campfire, and visiting master camel-leather craftsmen.',
    routeHighlights: [
      'Living Golden Fort courtyards',
      'Sunset on Thar golden sand dunes',
      'Royal blue pottery & camel leather guilds',
    ],
    artisanStopsCount: 1,
  },
  {
    id: 'trip-munnar',
    destinationId: 'munnar',
    destinationName: 'Munnar & Western Ghats: Tea Mists & Forest Spices',
    state: 'Kerala',
    window: 'September 2027',
    duration: '3 Days / 2 Nights',
    status: 'Saved Draft',
    heroImage: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80',
    shortSummary:
      'Misty sunrise walks through rolling emerald tea estates, discovering organic cardamom and wild pepper plantations, and meeting indigenous spice cultivators.',
    routeHighlights: [
      'Sunrise tea garden walking trail',
      'Organic cardamom & black pepper harvest',
      'Direct-to-grower forest honey haven',
    ],
    artisanStopsCount: 1,
  },
];

const BOOKMARKED_ARTISANS: BookmarkedArtisan[] = [
  {
    id: 'art-1',
    businessName: 'Madanpura Pure Kadhwa Silk Heritage Guild',
    artisanName: 'Master Weaver Haji Mohammad Naseem',
    craftSpecialty: 'Hand-Woven Pure Mulberry Silk Sarees & Real Zari Brocade',
    region: 'Varanasi, Uttar Pradesh',
    exactWaypoint: 'Gali Lohiyan, Madanpura Silk Quarter (Near Dashashwamedh)',
    tierBadge: 'Verified Varanasi Master Weaver',
    story: '4th generation master weaver weaving pure silk by hand on wooden pit-looms with zero synthetic threads.',
    specialPerk: 'Warm spiced Banarasi chai & 15-minute live wooden loom demonstration for travelers.',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'art-2',
    businessName: 'Changthang Nomadic Pashmina & Wool Guild',
    artisanName: 'Tsering Norbu & Dolma Angmo',
    craftSpecialty: 'Raw High-Altitude 100% Hand-Spun Changra Goat Pashmina',
    region: 'Leh-Ladakh & Changthang UT',
    exactWaypoint: 'Old Leh Chubi Road (Near Central Asian Museum Gate)',
    tierBadge: 'Verified Himalayan Master Maker',
    story: 'Sourced directly from our nomadic pastoral relatives in eastern Changthang plateau at 4,500m. Spun on wooden Charkhas.',
    specialPerk: 'Authentic hot salted butter tea (Gur-Gur Chai) & raw fiber test.',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'art-3',
    businessName: 'Golden Fort Leather & Handloom Guild',
    artisanName: 'Ustad Bhawani Singh Rathore',
    craftSpecialty: 'Hand-Stitched Camel Leather Journals, Jharokha Woodwork & Blue Pottery',
    region: 'Jaisalmer, Rajasthan',
    exactWaypoint: 'Inside Golden Fort (Near 5th Jain Temple Court)',
    tierBadge: 'Verified Rajasthani Master Maker',
    story: 'Handcrafted desert leather keepsakes and carved sandstone miniature windows inside the living fort for three generations.',
    specialPerk: 'Cool mint and lemon desert drink & live block-carving demo.',
    imageUrl: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'art-4',
    businessName: 'High-Range Forest Honey & Spice Haven',
    artisanName: 'Kurian Varghese & Sons',
    craftSpecialty: 'Farm-Fresh Green Cardamom, Wild Cliff Honey & Stone-Crushed Pepper',
    region: 'Munnar & Western Ghats, Kerala',
    exactWaypoint: 'Old Munnar Gap Road (100m past High-Range Tea Factory Gate)',
    tierBadge: 'Verified Kerala Spice Master',
    story: 'Single-estate organic spices hand-harvested by local hill tribes. Sun-dried and packaged with 0% synthetic preservatives.',
    specialPerk: 'Fresh cardamom herbal infusion tea & a guide to testing spice purity.',
    imageUrl: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'art-5',
    businessName: 'Mandakini Valley Himalayan Herb & Wool Guild',
    artisanName: 'Devendra Singh Rawat',
    craftSpecialty: 'Pure Bhotia Mountain Sheep Wool Shawls & Wild Rhododendron Tea',
    region: 'Garhwal Himalayas, Uttarakhand',
    exactWaypoint: 'Kedarnath Trek Trail KM 4.2 (Near Jungle Chatti Rest Hub)',
    tierBadge: 'Verified Himalayan Master Maker',
    story: 'Gathers natural sheep wool from upper high meadows and weaves warm shawls on wooden pit-looms with zero artificial dyes.',
    specialPerk: 'Hot wild rhododendron tea & live pit-loom spinning demo for pilgrims.',
    imageUrl: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=600&q=80',
  },
];

export default function UserPortalPage() {
  const [user, setUser] = useState<UserProfile>({
    id: 'usr-101',
    name: 'Ananya Sharma',
    email: 'ananya.sharma@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  });

  const [activeTripTab, setActiveTripTab] = useState<string>('all');

  const filteredTrips =
    activeTripTab === 'all'
      ? SAVED_TRIPS
      : SAVED_TRIPS.filter((t) =>
          activeTripTab === 'upcoming' ? t.status === 'Upcoming' : t.status !== 'Upcoming'
        );

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCF8] text-[#2D2B28] selection:bg-coral-300 selection:text-ink-900 font-sans">
      <Navbar
        user={user}
        onOpenAuth={() => {}}
        onLogout={() => setUser({ id: '', name: 'Guest', email: '' })}
        onOpenPlanner={() => {}}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex-1 w-full space-y-12">
        {/* Profile Card Header */}
        <div className="rounded-5xl bg-white p-6 sm:p-8 border-2 border-ink-900/10 shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-coral-300 shadow-soft"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-handwriting text-2xl text-coral-500 block rotate-[-2deg]">
                  traveler sanctuary ~
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-ink-900 text-canvas text-[10px] font-mono font-black uppercase">
                  BHARATDARSHAN MEMBER
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-ink-900 -mt-1">{user.name}</h1>
              <p className="text-xs sm:text-sm text-ink-600">{user.email} • Exploring All 28 States & 8 Union Territories</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-6 py-3.5 rounded-2xl bg-coral-300 hover:bg-coral-400 text-ink-950 font-black text-sm uppercase tracking-wider flex items-center gap-2 border-2 border-ink-900 shadow-[3px_3px_0px_0px_#1C1B18] active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Plan New Trip on Map</span>
            </Link>
          </div>
        </div>

        {/* Quick Stats Counter */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-3xl bg-coral-50 border-2 border-ink-900 shadow-soft">
            <span className="text-xs font-mono font-bold text-coral-700 block uppercase">Saved Journeys</span>
            <span className="text-2xl sm:text-3xl font-serif font-bold text-ink-900">4 Routes</span>
          </div>
          <div className="p-4 rounded-3xl bg-sage-50 border-2 border-ink-900 shadow-soft">
            <span className="text-xs font-mono font-bold text-sage-700 block uppercase">Verified Makers</span>
            <span className="text-2xl sm:text-3xl font-serif font-bold text-ink-900">5 Bookmarked</span>
          </div>
          <div className="p-4 rounded-3xl bg-lavender-50 border-2 border-ink-900 shadow-soft">
            <span className="text-xs font-mono font-bold text-lavender-700 block uppercase">States Explored</span>
            <span className="text-2xl sm:text-3xl font-serif font-bold text-ink-900">UP, Ladakh, RJ, KL</span>
          </div>
          <div className="p-4 rounded-3xl bg-white border-2 border-ink-900 shadow-soft">
            <span className="text-xs font-mono font-bold text-ink-600 block uppercase">Middleman Fee</span>
            <span className="text-2xl sm:text-3xl font-serif font-bold text-emerald-700">₹0 Always</span>
          </div>
        </div>

        {/* Saved Planned Journeys Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-ink-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-ink-900 text-xs font-bold border border-ink-200 shadow-soft mb-1">
                <Compass className="w-3.5 h-3.5 text-coral-500" />
                <span>Pan-India Cultural Field Guides</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink-900">
                Your Saved Trips & Itineraries
              </h2>
            </div>

            {/* Filter pills */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTripTab('all')}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
                  activeTripTab === 'all'
                    ? 'bg-ink-900 text-canvas border-2 border-ink-900 shadow-soft'
                    : 'bg-white hover:bg-sage-50 text-ink-700 border-2 border-ink-200'
                }`}
              >
                All Trips ({SAVED_TRIPS.length})
              </button>
              <button
                onClick={() => setActiveTripTab('upcoming')}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
                  activeTripTab === 'upcoming'
                    ? 'bg-coral-300 text-ink-950 border-2 border-ink-900 shadow-soft'
                    : 'bg-white hover:bg-sage-50 text-ink-700 border-2 border-ink-200'
                }`}
              >
                Upcoming (1)
              </button>
            </div>
          </div>

          {/* List of Trip Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTrips.map((trip) => (
              <div
                key={trip.id}
                className="rounded-5xl bg-white p-6 sm:p-7 border-2 border-ink-900/10 shadow-card hover:shadow-hover transition-all flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-4">
                  {/* Photo with badges */}
                  <div className="relative h-52 w-full rounded-3xl overflow-hidden border-2 border-canvas shadow-inner">
                    <img
                      src={trip.heroImage}
                      alt={trip.destinationName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
                    
                    <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border-2 border-ink-900 shadow-[2px_2px_0px_0px_#1C1B18] ${
                      trip.status === 'Upcoming' ? 'bg-coral-300 text-ink-950' : 'bg-white text-ink-900'
                    }`}>
                      {trip.status}
                    </span>

                    <span className="absolute bottom-3 left-3 text-white text-xs font-bold drop-shadow-md">
                      📍 {trip.state} • {trip.duration}
                    </span>
                  </div>

                  {/* Title and Summary */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-ink-900 leading-snug">
                      {trip.destinationName}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-600 mt-2 leading-relaxed font-normal">
                      {trip.shortSummary}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="p-3.5 rounded-2xl bg-canvas border border-ink-200/60 space-y-1.5 text-xs">
                    <span className="font-bold text-ink-800 uppercase tracking-wider text-[10px] block">
                      Trail Highlights:
                    </span>
                    {trip.routeHighlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-ink-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sage-600 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Travel Window and Maker Badges */}
                  <div className="flex flex-wrap gap-2 text-xs text-ink-700 pt-1">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-coral-50 border border-coral-200/60 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-coral-500" />
                      <span>{trip.window}</span>
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-50 border border-sage-200/60 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5 text-sage-600" />
                      <span>{trip.artisanStopsCount} Verified Makers on Route</span>
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-ink-100 flex items-center justify-between">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm text-coral-600 font-bold hover:underline"
                  >
                    <span>Open Field Guide & Daily Map</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <span className="text-[11px] font-mono text-ink-500">
                    ID #{trip.id.slice(-6)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Curated Artisan Guilds on Your Saved Routes */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-ink-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-ink-900 text-xs font-bold border border-ink-200 shadow-soft mb-1">
                <Award className="w-3.5 h-3.5 text-sage-600" />
                <span>Pan-India Maker Passport</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink-900">
                Bookmarked Master Artisans on Your Routes
              </h2>
            </div>
            <span className="font-handwriting text-2xl sm:text-3xl text-coral-500">
              authentic hands of India ~
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BOOKMARKED_ARTISANS.map((art) => (
              <div
                key={art.id}
                className="rounded-4xl bg-white p-5 border-2 border-ink-900/10 shadow-soft hover:shadow-card transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-ink-100">
                    <img
                      src={art.imageUrl}
                      alt={art.businessName}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider text-sage-900 bg-white/95 px-2.5 py-0.5 rounded-full border border-sage-300 shadow-soft">
                      {art.tierBadge}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold text-coral-600 block uppercase">
                      {art.region}
                    </span>
                    <h4 className="font-serif font-bold text-base text-ink-900 line-clamp-1">
                      {art.businessName}
                    </h4>
                    <p className="text-xs text-ink-600 mt-0.5">
                      Master Artisan: <strong>{art.artisanName}</strong>
                    </p>
                    <p className="text-xs text-ink-500 font-medium mt-0.5">
                      Craft: {art.craftSpecialty}
                    </p>
                  </div>

                  <p className="text-xs text-ink-600 italic bg-sage-50/60 p-3 rounded-2xl border border-sage-100 leading-relaxed">
                    &ldquo;{art.story}&rdquo;
                  </p>

                  <div className="p-3 rounded-2xl bg-coral-50/80 border border-coral-200/70 text-xs">
                    <span className="font-bold text-coral-800 flex items-center gap-1.5 mb-0.5 text-[11px]">
                      <Sparkles className="w-3.5 h-3.5 text-coral-600" />
                      Free Welcome Perk
                    </span>
                    <p className="text-ink-700 leading-tight">
                      {art.specialPerk}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-ink-100 flex items-center justify-between text-xs text-ink-600">
                  <div className="flex items-center gap-1 text-[11px] text-ink-700 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-coral-500 shrink-0" />
                    <span className="line-clamp-1">{art.exactWaypoint.split('(')[0]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
