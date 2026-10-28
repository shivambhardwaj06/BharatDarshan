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

export interface BestThingToVisit {
  title: string;
  description: string;
  timing_or_highlight?: string;
  tag?: string;
  image_url?: string;
}

export interface StopShopOrArtisan {
  id: string;
  name: string;
  artisan_or_owner: string;
  exact_location: string;
  craft_or_items: string;
  story: string;
  why_must_visit: string;
  special_treat_or_demo?: string;
  image_url?: string;
  badge?: string;
}

export interface JourneyStop {
  stop_number: number;
  name: string;
  hindi_name?: string;
  route_leg_name: string;
  distance_from_start: string;
  altitude: string;
  estimated_time?: string;
  tagline: string;
  hero_image: string;
  quick_summary: string;
  best_things_to_visit: BestThingToVisit[];
  local_shops: StopShopOrArtisan[];
}

export interface VerifiedArtisanStop {
  merchant_id: string;
  business_name: string;
  artisan_name: string;
  waypoint_location: string;
  route_marker_km?: string;
  influence_headline?: string;
  why_you_cannot_miss?: string;
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
  route_title?: string;
  from_where?: string;
  to_where?: string;
  terrain_type?: string;
  milestone_summary?: string;
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
  sacred_lore_image?: string;
  living_traditions_image?: string;
  community_image?: string;
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
  journey_stops?: JourneyStop[];
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
