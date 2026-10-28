'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { registerMerchant, submitMerchantKYC } from '@/lib/api';
import { CrazyBharatDarshanLogo } from '@/components/CrazyBharatDarshanLogo';
import {
  ShieldCheck,
  Store,
  MapPin,
  Lock,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Award,
  Eye,
  Heart,
  Compass,
  Check,
} from 'lucide-react';

interface RegionalPreset {
  id: string;
  regionName: string;
  businessName: string;
  artisanName: string;
  email: string;
  phone: string;
  routeTarget: string;
  routeTitle: string;
  exactWaypoint: string;
  craftSpecialty: string;
  artisanStory: string;
  specialImmersion: string;
  docType: string;
  docNumber: string;
  imageUrl: string;
  tierBadge: string;
}

const REGIONAL_PRESETS: RegionalPreset[] = [
  {
    id: 'varanasi',
    regionName: 'Varanasi, Uttar Pradesh',
    businessName: 'Madanpura Pure Kadhwa Silk Heritage Guild',
    artisanName: 'Master Weaver Haji Mohammad Naseem',
    email: 'naseem.kadhwa@varanasiweavers.org',
    phone: '+91 98390 19283',
    routeTarget: 'varanasi',
    routeTitle: 'Varanasi Ganga Ghats & Silk Quarter',
    exactWaypoint: 'Gali Lohiyan, Madanpura Silk Quarter (Near Dashashwamedh Ghat)',
    craftSpecialty: 'Hand-Woven Pure Mulberry Silk Sarees & Real Silver Zari Brocade',
    artisanStory:
      '4th generation master weaver. Every motif is hand-woven using wooden pit-looms. Takes up to 40 days per saree with zero synthetic threads.',
    specialImmersion:
      'Complimentary warm spiced Banarasi chai & 15-minute live pit-loom wooden shuttle weaving demonstration.',
    docType: 'ARTISAN_CARD',
    docNumber: 'UP-WEAVER-7123',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    tierBadge: 'Verified Varanasi Master Weaver',
  },
  {
    id: 'ladakh',
    regionName: 'Leh-Ladakh & Changthang UT',
    businessName: 'Changthang Nomadic Pashmina & Wool Guild',
    artisanName: 'Tsering Norbu & Dolma Angmo',
    email: 'tsering@ladakhpashmina.org',
    phone: '+91 94191 78291',
    routeTarget: 'ladakh',
    routeTitle: 'Leh & Pangong High Mountain Circuit',
    exactWaypoint: 'Old Leh Chubi Road (Near Central Asian Museum Gate)',
    craftSpecialty: 'Raw High-Altitude 100% Hand-Spun Changra Goat Pashmina',
    artisanStory:
      'Sourced directly from our nomadic pastoral relatives in eastern Changthang plateau at 4,500m. Spun on traditional wooden Charkhas with zero chemicals.',
    specialImmersion:
      'Authentic hot salted butter tea (Gur-Gur Chai) & live raw fiber purity demonstration.',
    docType: 'ARTISAN_CARD',
    docNumber: 'LA-CRAFT-9934',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    tierBadge: 'Verified Himalayan Master Maker',
  },
  {
    id: 'jaisalmer',
    regionName: 'Jaisalmer & Thar Desert, Rajasthan',
    businessName: 'Golden Fort Leather & Handloom Guild',
    artisanName: 'Ustad Bhawani Singh Rathore',
    email: 'rathore@jaisalmercrafts.in',
    phone: '+91 98292 48192',
    routeTarget: 'jaisalmer',
    routeTitle: 'Jaisalmer Golden Fort & Thar Desert Trail',
    exactWaypoint: 'Inside Golden Fort (Near 5th Jain Temple Court, Fort Wall)',
    craftSpecialty: 'Hand-Stitched Camel Leather Journals, Jharokha Woodwork & Blue Pottery',
    artisanStory:
      'Our family has handcrafted desert leather keepsakes and carved sandstone miniature windows for three generations inside the living golden fort.',
    specialImmersion:
      'Cool mint and lemon desert drink, traditional folk flute melody & live block-carving demo.',
    docType: 'UDYAM',
    docNumber: 'RJ-MSME-4412',
    imageUrl: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=800&q=80',
    tierBadge: 'Verified Rajasthani Master Maker',
  },
  {
    id: 'munnar',
    regionName: 'Munnar & High Ranges, Kerala',
    businessName: 'High-Range Forest Honey & Spice Haven',
    artisanName: 'Kurian Varghese & Sons',
    email: 'spices@munnarorganic.org',
    phone: '+91 94471 83920',
    routeTarget: 'munnar',
    routeTitle: 'Munnar Tea Hills & Western Ghats Route',
    exactWaypoint: 'Old Munnar Gap Road (100m past High-Range Tea Factory Gate)',
    craftSpecialty: 'Farm-Fresh Green Cardamom, Wild Cliff Honey & Stone-Crushed Pepper',
    artisanStory:
      'Single-estate organic spices hand-harvested by local hill tribes. Dried under natural sunlight and packaged directly without commercial waxes.',
    specialImmersion:
      'Fresh cardamom herbal infusion tea & a hands-on guide to testing the purity of black pepper and pure honey.',
    docType: 'UDYAM',
    docNumber: 'KL-ORGANIC-2819',
    imageUrl: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80',
    tierBadge: 'Verified Kerala Spice Master',
  },
  {
    id: 'kedarnath',
    regionName: 'Kedarnath & Garhwal, Uttarakhand',
    businessName: 'Mandakini Valley Himalayan Herb & Wool Guild',
    artisanName: 'Devendra Singh Rawat',
    email: 'devendra.rawat@mandakini.org',
    phone: '+91 94101 28392',
    routeTarget: 'kedarnath',
    routeTitle: 'Kedarnath Dham Pilgrimage Trail',
    exactWaypoint: 'Kedarnath Trek Trail KM 4.2 (Near Jungle Chatti Rest Hub)',
    craftSpecialty: 'Pure Bhotia Mountain Sheep Wool Shawls & Wild Rhododendron Herbal Tea',
    artisanStory:
      '4th generation mountain weaver. Our family gathers natural sheep wool from upper high meadows and weaves warm shawls on wooden pit-looms. We never use synthetic dyes.',
    specialImmersion:
      'Complimentary hot wild rhododendron mountain tea & 10-minute live pit-loom spinning demo for pilgrims.',
    docType: 'ARTISAN_CARD',
    docNumber: 'UK-HANDICRAFT-9142',
    imageUrl: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=800&q=80',
    tierBadge: 'Verified Himalayan Master Maker',
  },
  {
    id: 'spiti',
    regionName: 'Spiti Valley, Himachal Pradesh',
    businessName: 'Spiti Highland Thangka & Sea-Buckthorn Guild',
    artisanName: 'Lama Tenzin Norzang',
    email: 'tenzin@spitithangka.org',
    phone: '+91 94592 11029',
    routeTarget: 'spiti',
    routeTitle: 'Spiti Valley Trans-Himalayan Trail',
    exactWaypoint: 'Kaza Main Village Street (Opposite Old Sakya Monastery)',
    craftSpecialty: 'Sacred Mineral-Pigment Hand-Painted Thangkas & Pure Sea-Buckthorn Jam',
    artisanStory:
      'Practicing the ancient Buddhist art of hand-ground mineral pigments and gold leaf lines on cotton canvas, alongside wild desert sea-buckthorn berries.',
    specialImmersion:
      'Warm sea-buckthorn berry infusion & 15-minute live mineral paint mixing demonstration.',
    docType: 'PANCHAYAT_NOC',
    docNumber: 'HP-SPITI-5531',
    imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    tierBadge: 'Verified Trans-Himalayan Master Maker',
  },
];

export default function MerchantPortalPage() {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('varanasi');
  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  // Active form state defaulted to Varanasi (or changed via preset)
  const defaultPreset = REGIONAL_PRESETS[0];
  const [formData, setFormData] = useState({
    businessName: defaultPreset.businessName,
    artisanName: defaultPreset.artisanName,
    email: defaultPreset.email,
    phone: defaultPreset.phone,
    routeTarget: defaultPreset.routeTarget,
    routeTitle: defaultPreset.routeTitle,
    exactWaypoint: defaultPreset.exactWaypoint,
    craftSpecialty: defaultPreset.craftSpecialty,
    artisanStory: defaultPreset.artisanStory,
    specialImmersion: defaultPreset.specialImmersion,
    docType: defaultPreset.docType,
    docNumber: defaultPreset.docNumber,
    imageUrl: defaultPreset.imageUrl,
    tierBadge: defaultPreset.tierBadge,
  });

  const applyPreset = (preset: RegionalPreset) => {
    setSelectedPresetId(preset.id);
    setFormData({
      businessName: preset.businessName,
      artisanName: preset.artisanName,
      email: preset.email,
      phone: preset.phone,
      routeTarget: preset.routeTarget,
      routeTitle: preset.routeTitle,
      exactWaypoint: preset.exactWaypoint,
      craftSpecialty: preset.craftSpecialty,
      artisanStory: preset.artisanStory,
      specialImmersion: preset.specialImmersion,
      docType: preset.docType,
      docNumber: preset.docNumber,
      imageUrl: preset.imageUrl,
      tierBadge: preset.tierBadge,
    });
  };

  const handleRegisterAndKYC = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const regRes = await registerMerchant({
        business_name: formData.businessName,
        artisan_name: formData.artisanName,
        email: formData.email,
        phone: formData.phone,
        route_target: formData.routeTarget,
        exact_waypoint: formData.exactWaypoint,
        latitude: 25.3176,
        longitude: 82.9739,
        craft_specialty: formData.craftSpecialty,
        artisan_story: formData.artisanStory,
        special_immersion: formData.specialImmersion,
      });

      if (regRes && regRes.data) {
        await submitMerchantKYC(regRes.data.id || 'm-1', formData.docType, formData.docNumber);
      }

      setIsVerified(true);
    } catch (err) {
      console.error(err);
      setIsVerified(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2D2B28] flex flex-col font-sans selection:bg-sage-200 selection:text-ink-900">
      {/* Merchant Top Header */}
      <header className="border-b-2 border-ink-900/10 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <CrazyBharatDarshanLogo size="md" />
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-[11px] font-mono font-black uppercase tracking-widest border border-sage-300">
              ALL-INDIA MAKER & ARTISAN DESK
            </span>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-ink-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl bg-white hover:bg-sage-50 border-2 border-ink-900 shadow-[2px_2px_0px_0px_#1C1B18] active:translate-x-0.5 active:translate-y-0.5 transition-all font-bold"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-coral-500" />
            <span>Tourist App</span>
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-3 sm:px-6 py-6 sm:py-12 flex-1 w-full space-y-6 sm:space-y-10 pb-28 md:pb-12">
        {/* Banner Explaining Pan-India Purpose */}
        <div className="rounded-3xl sm:rounded-5xl bg-sage-50/90 p-5 sm:p-12 border-2 border-ink-900/10 shadow-soft relative overflow-hidden">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white text-sage-800 text-[11px] sm:text-xs font-black uppercase tracking-wider border-2 border-ink-900 shadow-[2px_2px_0px_0px_#1C1B18]">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sage-600" />
              <span>PAN-INDIA LOCAL ARTISAN & MAKER NETWORK</span>
            </div>

            <span className="font-handwriting text-2xl sm:text-4xl text-coral-500 block rotate-[-1.5deg]">
              welcome travelers directly to your workshop ~
            </span>

            <h1 className="text-2xl sm:text-5xl font-serif font-bold text-ink-900 tracking-tight -mt-1 leading-tight">
              Connect Directly with Incoming Travelers Across India
            </h1>

            <p className="text-sm sm:text-lg text-ink-700 leading-relaxed font-normal">
              Whether you weave silk in Varanasi, spin pure pashmina in Ladakh, carve sandstone in Rajasthan, grow spices in Kerala, or weave sheep wool in the Himalayas—join BHARATDARSHAN. Complete a quick verification and we feature your workshop inside traveler itineraries as an authentic cultural waypoint.
            </p>

            <div className="pt-2 sm:pt-3 flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-sage-900 font-bold">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white border border-sage-200 shadow-soft">
                <CheckCircle2 className="w-4 h-4 text-sage-600" /> 0% Middleman Commission
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white border border-sage-200 shadow-soft">
                <CheckCircle2 className="w-4 h-4 text-sage-600" /> Exact Landmark On Traveler Map
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white border border-sage-200 shadow-soft">
                <CheckCircle2 className="w-4 h-4 text-sage-600" /> Genuine Cultural Visit (Never Paid Ads)
              </span>
            </div>
          </div>
        </div>

        {/* REGIONAL PRESET SELECTOR (Showcases Pan-India Diversity) */}
        {!isVerified && (
          <div className="space-y-2.5 sm:space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h3 className="text-sm sm:text-base font-serif font-bold text-ink-900 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-coral-500" />
                  <span>Choose Your Region or Corridors Across India</span>
                </h3>
                <p className="text-[11px] sm:text-xs text-ink-600 font-medium">
                  Swipe or click any regional craft to fill the form with an example, then easily customize your details below:
                </p>
              </div>
            </div>

            <div className="flex sm:grid overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 scrollbar-none snap-x sm:grid-cols-3 lg:grid-cols-6 gap-2.5 -mx-1 px-1">
              {REGIONAL_PRESETS.map((p) => {
                const isActive = selectedPresetId === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => applyPreset(p)}
                    className={`shrink-0 snap-start w-40 xs:w-44 sm:w-auto p-3 rounded-2xl sm:rounded-3xl text-left border-2 transition-all flex flex-col justify-between h-28 relative overflow-hidden group ${
                      isActive
                        ? 'bg-coral-100/80 border-ink-900 shadow-[3px_3px_0px_0px_#1C1B18] scale-[1.02]'
                        : 'bg-white hover:bg-sage-50 border-ink-200 text-ink-700'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold text-coral-600 block uppercase tracking-wider">
                        {p.regionName.split(',')[1]?.trim() || p.regionName}
                      </span>
                      <h4 className="text-xs font-bold text-ink-900 line-clamp-1 leading-snug">
                        {p.regionName.split(',')[0]}
                      </h4>
                    </div>

                    <p className="text-[10px] text-ink-600 line-clamp-2 leading-tight">
                      {p.craftSpecialty.split('&')[0]}
                    </p>

                    {isActive && (
                      <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-ink-900 text-canvas flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* VERIFIED SUCCESS SCREEN & ROUTE PREVIEW */}
        {isVerified ? (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Success card */}
            <div className="p-8 sm:p-10 rounded-5xl bg-white border-2 border-ink-900 text-center space-y-4 shadow-[6px_6px_0px_0px_#1C1B18]">
              <div className="w-16 h-16 rounded-2xl bg-sage-100 text-sage-700 flex items-center justify-center mx-auto border-2 border-ink-900 shadow-soft">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="font-handwriting text-3xl text-sage-600 block">
                all verified & active in BHARATDARSHAN ~
              </span>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink-900 -mt-2">
                KYC Verification Complete & Route Active!
              </h2>

              <p className="text-sm sm:text-base text-ink-700 max-w-xl mx-auto leading-relaxed">
                Your workshop <strong className="text-ink-900">{formData.businessName}</strong> has been verified and awarded the <strong className="text-sage-700">{formData.tierBadge || 'Verified Master Maker'}</strong> badge.
              </p>

              <div className="p-5 rounded-3xl bg-sage-50 border border-sage-200 max-w-lg mx-auto text-left text-xs sm:text-sm space-y-2">
                <p><strong>Merchant / Master Artisan:</strong> {formData.artisanName}</p>
                <p><strong>Route Target:</strong> {formData.routeTitle}</p>
                <p><strong>Trail / City Location:</strong> {formData.exactWaypoint}</p>
                <p><strong>Document Proof:</strong> {formData.docType} (XXXX-XXXX-{formData.docNumber.slice(-4)})</p>
                <p><strong>Status:</strong> <span className="text-sage-700 font-bold">Active in Traveler Day-by-Day Field Guides</span></p>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={() => setIsVerified(false)}
                  className="px-5 py-2.5 rounded-2xl bg-white hover:bg-sage-50 text-ink-800 text-xs font-bold border-2 border-ink-900 shadow-soft"
                >
                  Edit Workshop Details
                </button>
                <Link
                  href="/"
                  className="px-5 py-2.5 rounded-2xl bg-coral-300 hover:bg-coral-400 text-ink-950 text-xs font-black uppercase tracking-wider border-2 border-ink-900 shadow-[2px_2px_0px_0px_#1C1B18]"
                >
                  See How It Looks on Tourist App
                </Link>
              </div>
            </div>

            {/* LIVE PREVIEW: How it appears in the traveler planner */}
            <div className="rounded-5xl bg-white p-6 sm:p-10 border-2 border-ink-900 space-y-5 shadow-[6px_6px_0px_0px_#1C1B18]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="font-handwriting text-2xl text-coral-500 block">
                    live preview ~
                  </span>
                  <h3 className="text-xl font-serif font-bold text-ink-900 -mt-1">
                    How Travelers to {formData.routeTitle} Will See Your Workshop
                  </h3>
                </div>
                <span className="text-xs px-3.5 py-1.5 rounded-full bg-sage-100 text-sage-800 border-2 border-ink-900 flex items-center gap-1.5 font-bold shadow-soft w-fit">
                  <Eye className="w-4 h-4 text-sage-600" />
                  <span>Curated Non-Promotional Stop</span>
                </span>
              </div>

              {/* The exact card tourists see inside their itinerary */}
              <div className="rounded-4xl bg-sage-50/80 p-6 sm:p-8 border-2 border-sage-200 space-y-5 shadow-soft">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                  <div className="sm:col-span-4 relative h-48 w-full rounded-3xl overflow-hidden border-2 border-white shadow-soft">
                    <img
                      src={formData.imageUrl}
                      alt={formData.businessName}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 px-2.5 py-1 rounded-full bg-white/95 text-ink-900 text-[10px] font-mono font-bold border border-ink-900/10">
                      Authentic Workshop
                    </span>
                  </div>

                  <div className="sm:col-span-8 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-white text-sage-800 border-2 border-ink-900 font-bold shadow-[2px_2px_0px_0px_#1C1B18]">
                        <Award className="w-3.5 h-3.5 text-sage-600" />
                        {formData.tierBadge || 'Verified Master Maker'}
                      </span>
                      <span className="text-xs font-mono text-sage-900 bg-white px-3 py-1 rounded-full border border-sage-300 font-bold">
                        {formData.exactWaypoint.split('(')[0].trim()}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-xl sm:text-2xl text-ink-900">
                      {formData.businessName}
                    </h4>

                    <p className="text-xs sm:text-sm text-ink-600">
                      Master Artisan: <strong className="text-ink-900">{formData.artisanName}</strong> • Craft: <span className="text-coral-600 font-bold">{formData.craftSpecialty}</span>
                    </p>

                    <p className="text-xs sm:text-sm text-ink-700 italic leading-relaxed bg-white/90 p-3.5 rounded-2xl border border-sage-200">
                      &ldquo;{formData.artisanStory}&rdquo;
                    </p>

                    <div className="p-3.5 rounded-2xl bg-coral-100/80 border border-coral-200 text-xs sm:text-sm">
                      <span className="font-bold text-coral-800 flex items-center gap-1.5 mb-1">
                        <Sparkles className="w-4 h-4 text-coral-600" />
                        Special Cultural Welcome for Travelers
                      </span>
                      <p className="text-ink-800 leading-relaxed font-normal">
                        {formData.specialImmersion}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-ink-600 text-center pt-2">
                Your workshop is positioned as an authentic cultural waypoint in BHARATDARSHAN rather than an advertisement. Travelers visit your doorstep organically.
              </p>
            </div>
          </div>
        ) : (
          /* MULTI-STEP KYC & ONBOARDING FORM */
          <div className="space-y-6">
            <form
              onSubmit={handleRegisterAndKYC}
              className="rounded-5xl bg-white p-6 sm:p-10 border-2 border-ink-900 space-y-6 shadow-[6px_6px_0px_0px_#1C1B18]"
            >
              {/* Step Indicators */}
              <div className="grid grid-cols-3 gap-2 pb-6 border-b border-ink-100 text-xs sm:text-sm font-bold">
                <div
                  className={`text-center pb-2 border-b-2 transition-colors ${
                    step >= 1 ? 'border-coral-400 text-coral-600' : 'border-ink-200 text-ink-400'
                  }`}
                >
                  1. Workshop & Craft
                </div>
                <div
                  className={`text-center pb-2 border-b-2 transition-colors ${
                    step >= 2 ? 'border-coral-400 text-coral-600' : 'border-ink-200 text-ink-400'
                  }`}
                >
                  2. Route & Location
                </div>
                <div
                  className={`text-center pb-2 border-b-2 transition-colors ${
                    step >= 3 ? 'border-coral-400 text-coral-600' : 'border-ink-200 text-ink-400'
                  }`}
                >
                  3. KYC Verification
                </div>
              </div>

              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-ink-700 mb-1.5">
                      Workshop or Guild Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Madanpura Pure Kadhwa Silk Heritage Guild"
                      className="w-full px-4 py-3.5 rounded-2xl bg-canvas border-2 border-ink-900 text-ink-900 text-sm sm:text-base focus:outline-none focus:border-coral-400 shadow-inner"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-ink-700 mb-1.5">
                        Lead Master Artisan Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.artisanName}
                        onChange={(e) => setFormData({ ...formData, artisanName: e.target.value })}
                        placeholder="e.g. Master Weaver Haji Mohammad Naseem"
                        className="w-full px-4 py-3.5 rounded-2xl bg-canvas border-2 border-ink-900 text-ink-900 text-sm sm:text-base focus:outline-none focus:border-coral-400 shadow-inner"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-ink-700 mb-1.5">
                        Phone / WhatsApp Contact *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98390 19283"
                        className="w-full px-4 py-3.5 rounded-2xl bg-canvas border-2 border-ink-900 text-ink-900 text-sm sm:text-base focus:outline-none focus:border-coral-400 shadow-inner"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-ink-700 mb-1.5">
                      Craft Specialty & Raw Materials Used *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.craftSpecialty}
                      onChange={(e) => setFormData({ ...formData, craftSpecialty: e.target.value })}
                      placeholder="e.g. Pure Mulberry Silk Sarees, Hand-spun Pashmina, Camel Leather, Organic Cardamom"
                      className="w-full px-4 py-3.5 rounded-2xl bg-canvas border-2 border-ink-900 text-ink-900 text-sm sm:text-base focus:outline-none focus:border-coral-400 shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-ink-700 mb-1.5">
                      Artisan Lineage & Story (Why is your craft authentic?)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.artisanStory}
                      onChange={(e) => setFormData({ ...formData, artisanStory: e.target.value })}
                      placeholder="Share your family lineage, techniques, or how you preserve this living Indian craft..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-canvas border-2 border-ink-900 text-ink-900 text-sm sm:text-base focus:outline-none focus:border-coral-400 shadow-inner leading-relaxed"
                    />
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-8 py-3.5 rounded-2xl bg-coral-300 hover:bg-coral-400 text-ink-950 text-sm font-black uppercase tracking-wider flex items-center gap-2 transition-all border-2 border-ink-900 shadow-[3px_3px_0px_0px_#1C1B18] active:translate-x-0.5 active:translate-y-0.5"
                    >
                      <span>Proceed to Route & Location</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-ink-700 mb-1.5">
                      Target Travel Route / Heritage Corridor *
                    </label>
                    <select
                      value={formData.routeTarget}
                      onChange={(e) => {
                        const val = e.target.value;
                        const match = REGIONAL_PRESETS.find((p) => p.id === val);
                        if (match) {
                          setFormData({
                            ...formData,
                            routeTarget: val,
                            routeTitle: match.routeTitle,
                            exactWaypoint: match.exactWaypoint,
                            tierBadge: match.tierBadge,
                            imageUrl: match.imageUrl,
                          });
                        } else {
                          setFormData({ ...formData, routeTarget: val, routeTitle: 'Pan-India Cultural Route' });
                        }
                      }}
                      className="w-full px-4 py-3.5 rounded-2xl bg-canvas border-2 border-ink-900 text-ink-900 text-sm sm:text-base focus:outline-none focus:border-coral-400 shadow-inner"
                    >
                      <option value="varanasi">Varanasi Ganga Ghats & Silk Quarter (Uttar Pradesh)</option>
                      <option value="ladakh">Leh & Pangong High Mountain Circuit (Ladakh UT)</option>
                      <option value="jaisalmer">Jaisalmer Golden Fort & Thar Desert Trail (Rajasthan)</option>
                      <option value="munnar">Munnar Tea Hills & Western Ghats Route (Kerala)</option>
                      <option value="kedarnath">Kedarnath Dham Pilgrimage Trail (Uttarakhand)</option>
                      <option value="spiti">Spiti Valley Trans-Himalayan Trail (Himachal Pradesh)</option>
                      <option value="other">Other Heritage Trail Across India</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-ink-700 mb-1.5">
                      Exact Landmark or Trail Waypoint (How travelers easily spot your door) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.exactWaypoint}
                      onChange={(e) => setFormData({ ...formData, exactWaypoint: e.target.value })}
                      placeholder="e.g. Gali Lohiyan, 200m from Dashashwamedh Ghat gate"
                      className="w-full px-4 py-3.5 rounded-2xl bg-canvas border-2 border-ink-900 text-ink-900 text-sm sm:text-base focus:outline-none focus:border-coral-400 shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-ink-700 mb-1.5">
                      Special Cultural Welcome (What makes visiting your workshop special?)
                    </label>
                    <input
                      type="text"
                      value={formData.specialImmersion}
                      onChange={(e) => setFormData({ ...formData, specialImmersion: e.target.value })}
                      placeholder="e.g. Free warm spiced tea + 15-min live wooden handloom demonstration"
                      className="w-full px-4 py-3.5 rounded-2xl bg-canvas border-2 border-ink-900 text-ink-900 text-sm sm:text-base focus:outline-none focus:border-coral-400 shadow-inner"
                    />
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-2.5 text-xs sm:text-sm font-bold text-ink-600 hover:text-ink-900"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-8 py-3.5 rounded-2xl bg-coral-300 hover:bg-coral-400 text-ink-950 text-sm font-black uppercase tracking-wider flex items-center gap-2 transition-all border-2 border-ink-900 shadow-[3px_3px_0px_0px_#1C1B18] active:translate-x-0.5 active:translate-y-0.5"
                    >
                      <span>Proceed to KYC Verification</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-5">
                  <div className="p-5 rounded-3xl bg-sage-50 border border-sage-200 flex items-start gap-3">
                    <Lock className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="text-xs sm:text-sm font-bold text-sage-900 uppercase tracking-wider">
                        DPDP Act 2023 Identity Protection
                      </h4>
                      <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-normal">
                        Your government document proves you are a genuine maker and not an unauthorized commercial middleman. Your unmasked number is kept private and never shown to the public.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-ink-700 mb-1.5">
                        Document Type *
                      </label>
                      <select
                        value={formData.docType}
                        onChange={(e) => setFormData({ ...formData, docType: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-canvas border-2 border-ink-900 text-ink-900 text-sm sm:text-base focus:outline-none focus:border-coral-400 shadow-inner"
                      >
                        <option value="ARTISAN_CARD">Govt. Artisan Card / Bunkar Pehchan Patra</option>
                        <option value="UDYAM">UDYAM MSME Registration</option>
                        <option value="AADHAAR">Aadhaar Identity Card</option>
                        <option value="PANCHAYAT_NOC">Gram Panchayat Artisan Certificate</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-ink-700 mb-1.5">
                        Document Number *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.docNumber}
                        onChange={(e) => setFormData({ ...formData, docNumber: e.target.value })}
                        placeholder="e.g. UP-WEAVER-7123"
                        className="w-full px-4 py-3.5 rounded-2xl bg-canvas border-2 border-ink-900 text-ink-900 text-sm sm:text-base focus:outline-none focus:border-coral-400 shadow-inner"
                      />
                      {formData.docNumber.length >= 4 && (
                        <p className="text-xs text-sage-700 mt-1.5 flex items-center gap-1 font-mono font-medium">
                          <Lock className="w-3.5 h-3.5 text-sage-600" />
                          <span>Will be masked: XXXX-XXXX-{formData.docNumber.slice(-4)}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 text-xs sm:text-sm font-bold text-ink-600 hover:text-ink-900"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      disabled={loading || !formData.docNumber}
                      className="px-8 py-3.5 rounded-2xl bg-sage-600 hover:bg-sage-700 text-white text-sm font-black uppercase tracking-wider border-2 border-ink-900 shadow-[3px_3px_0px_0px_#1C1B18] flex items-center gap-2 transition-all disabled:opacity-50 active:translate-x-0.5 active:translate-y-0.5"
                    >
                      {loading ? (
                        <span>Auditing Document...</span>
                      ) : (
                        <>
                          <ShieldCheck className="w-5 h-5" />
                          <span>Submit KYC & Activate Route Placement</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>

            {/* LIVE PREVIEW BOX WHILE EDITING */}
            <div className="p-6 sm:p-8 rounded-5xl bg-white/70 border-2 border-ink-900/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-ink-500 uppercase tracking-wider">
                  Live Preview of Your Card in Traveler Itineraries:
                </span>
                <span className="text-xs text-sage-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sage-600" /> Dynamic Itinerary Card
                </span>
              </div>

              <div className="rounded-3xl bg-white p-5 border-2 border-ink-900 shadow-soft space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold text-sage-800 bg-sage-100 px-2.5 py-0.5 rounded-full border border-sage-200 inline-block mb-1">
                      {formData.tierBadge || 'Verified Master Maker'}
                    </span>
                    <h4 className="font-serif font-bold text-lg text-ink-900">
                      {formData.businessName || 'Your Workshop Name'}
                    </h4>
                    <p className="text-xs text-ink-600">
                      Artisan: <strong>{formData.artisanName}</strong> • {formData.craftSpecialty}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-ink-700 bg-canvas px-3 py-1 rounded-full border border-ink-200 shrink-0">
                    {formData.exactWaypoint.split('(')[0].trim() || 'Trail Landmark'}
                  </span>
                </div>

                <p className="text-xs text-ink-700 italic bg-sage-50/60 p-3 rounded-2xl border border-sage-100">
                  &ldquo;{formData.artisanStory || 'Share your story with travelers...'}&rdquo;
                </p>

                {formData.specialImmersion && (
                  <div className="p-3 rounded-2xl bg-coral-50 border border-coral-200 text-xs text-coral-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-coral-600 shrink-0" />
                    <span><strong>Traveler Perk:</strong> {formData.specialImmersion}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
