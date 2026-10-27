export interface DestinationMeta {
  id: string;
  slug: string;
  name: string;
  hindi_name: string;
  state: string;
  region: string;
  coordinates: [number, number];
  altitude_meters: number;
  hero_image: string;
  ideal_months: string;
  vibe_tags: string[];
  short_desc: string;
}

export interface TripPlanRequest {
  destination_id: string;
  date_type: 'EXACT' | 'FLEXIBLE';
  start_date?: string;
  end_date?: string;
  flexible_month?: string;
  travel_vibe: string;
  group_type: string;
}

export interface RouteStep {
  time_of_day: string;
  title: string;
  description: string;
  icon: string;
  tip?: string;
}

export interface VerifiedArtisanStop {
  merchant_id: string;
  business_name: string;
  artisan_name: string;
  waypoint_location: string;
  craft_specialty: string;
  story_snippet: string;
  verification_tier: string;
  special_immersion: string;
  image_url: string;
}

export interface PlanDay {
  day_number: number;
  title: string;
  date_or_phase: string;
  elevation_profile: string;
  distance_km: number;
  day_image?: string;
  route_steps: RouteStep[];
  verified_artisan_stops?: VerifiedArtisanStop[];
}

export interface GastronomyItem {
  name: string;
  description: string;
  where_to_try: string;
  image_url?: string;
}

export interface CraftItem {
  name: string;
  description: string;
  artisan_line: string;
  image_url?: string;
}

export interface DeepCulturalGuide {
  sacred_lore_and_mythology: string;
  living_traditions: string;
  community_and_people: string;
  cultural_etiquette: string[];
  traditional_gastronomy: GastronomyItem[];
  heritage_crafts: CraftItem[];
}

export interface PracticalEssentials {
  acclimatization_protocol: string;
  permits_and_registration: string;
  packing_checklist: string[];
  emergency_helplines: string[];
}

export interface TripPlan {
  id: string;
  destination: DestinationMeta;
  schedule_overview: {
    when_to_reach: string;
    total_duration: string;
    optimal_window: string;
    gateway_city: string;
    transit_highlights: string[];
  };
  days: PlanDay[];
  deep_cultural_guide: DeepCulturalGuide;
  practical_essentials: PracticalEssentials;
  generated_at: string;
  model_source: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}
