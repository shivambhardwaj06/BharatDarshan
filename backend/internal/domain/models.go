package domain

import (
	"time"

	"github.com/google/uuid"
)

type VerificationStatus string

const (
	StatusPending  VerificationStatus = "PENDING"
	StatusVerified VerificationStatus = "VERIFIED"
	StatusRejected VerificationStatus = "REJECTED"
)

// Destination Hotspot
type DestinationMeta struct {
	ID             string   `json:"id"`
	Slug           string   `json:"slug"`
	Name           string   `json:"name"`
	HindiName      string   `json:"hindi_name"`
	State          string   `json:"state"`
	Region         string   `json:"region"`
	Coordinates    [2]float64 `json:"coordinates"` // [lat, lng]
	AltitudeMeters int      `json:"altitude_meters"`
	HeroImage      string   `json:"hero_image"`
	IdealMonths    string   `json:"ideal_months"`
	VibeTags       []string `json:"vibe_tags"`
	ShortDesc      string   `json:"short_desc"`
}

// Trip Planner Request
type TripPlanRequest struct {
	DestinationID string `json:"destination_id"` // e.g. "kedarnath"
	Destination   string `json:"destination,omitempty"` // resilient alias
	DateType      string `json:"date_type"`      // "EXACT" or "FLEXIBLE"
	StartDate     string `json:"start_date,omitempty"`
	EndDate       string `json:"end_date,omitempty"`
	FlexibleMonth string `json:"flexible_month,omitempty"` // e.g. "Next Month", "November", "May"
	TravelVibe    string `json:"travel_vibe"`              // "SPIRITUAL_PILGRIMAGE", "HIGH_ALTITUDE_TREK", "CULTURAL_EXPLORER"
	GroupType     string `json:"group_type"`               // "SOLO", "COUPLE", "FAMILY", "FRIENDS"
}

// Complete Cinematic Trip Plan
type TripPlan struct {
	ID                 uuid.UUID           `json:"id"`
	Destination        DestinationMeta     `json:"destination"`
	ScheduleOverview   ScheduleOverview    `json:"schedule_overview"`
	Days               []PlanDay           `json:"days"`
	DeepCulturalGuide  DeepCulturalGuide   `json:"deep_cultural_guide"`
	PracticalEssentials PracticalEssentials `json:"practical_essentials"`
	GeneratedAt        time.Time           `json:"generated_at"`
	ModelSource        string              `json:"model_source"` // "NVIDIA-NIM-Llama-3-70B" or "Bharatdarshan-Engine"
}

type ScheduleOverview struct {
	WhenToReach      string   `json:"when_to_reach"`
	TotalDuration    string   `json:"total_duration"`
	OptimalWindow    string   `json:"optimal_window"`
	GatewayCity      string   `json:"gateway_city"`
	TransitHighlights []string `json:"transit_highlights"`
}

type PlanDay struct {
	DayNumber             int                    `json:"day_number"`
	Title                 string                 `json:"title"`
	DateOrPhase           string                 `json:"date_or_phase"`
	ElevationProfile      string                 `json:"elevation_profile"`
	DistanceKm            float64                `json:"distance_km"`
	DayImage              string                 `json:"day_image,omitempty"`
	RouteSteps            []RouteStep            `json:"route_steps"`
	VerifiedArtisanStops  []VerifiedArtisanStop  `json:"verified_artisan_stops,omitempty"`
}

type RouteStep struct {
	TimeOfDay   string `json:"time_of_day"` // "Morning", "Afternoon", "Evening"
	Title       string `json:"title"`
	Description string `json:"description"`
	Icon        string `json:"icon"` // "temple", "mountain", "coffee", "bed", "walk"
	Tip         string `json:"tip,omitempty"`
}

// Authentic Artisan Stop embedded in route
type VerifiedArtisanStop struct {
	MerchantID       uuid.UUID `json:"merchant_id"`
	BusinessName     string    `json:"business_name"`
	ArtisanName      string    `json:"artisan_name"`
	WaypointLocation string    `json:"waypoint_location"` // e.g. "Trek Trail KM 4.5, Jungle Chatti"
	CraftSpecialty   string    `json:"craft_specialty"`
	StorySnippet     string    `json:"story_snippet"`
	VerificationTier string    `json:"verification_tier"` // "Verified Master Maker"
	SpecialImmersion string    `json:"special_immersion"` // e.g. "Free Himalayan Rhododendron Tea + Live Loom Demonstration"
	ImageURL         string    `json:"image_url"`
}

// Deep Cultural Dive
type DeepCulturalGuide struct {
	SacredLoreAndMythology  string            `json:"sacred_lore_and_mythology"`
	LivingTraditions        string            `json:"living_traditions"`
	CommunityAndPeople      string            `json:"community_and_people"`
	CulturalEtiquette       []string          `json:"cultural_etiquette"`
	TraditionalGastronomy   []GastronomyItem  `json:"traditional_gastronomy"`
	HeritageCrafts          []CraftItem       `json:"heritage_crafts"`
}

type GastronomyItem struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	WhereToTry  string `json:"where_to_try"`
	ImageURL    string `json:"image_url,omitempty"`
}

type CraftItem struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	ArtisanLine string `json:"artisan_line"`
	ImageURL    string `json:"image_url,omitempty"`
}

type PracticalEssentials struct {
	AcclimatizationProtocol string   `json:"acclimatization_protocol"`
	PermitsAndRegistration  string   `json:"permits_and_registration"`
	PackingChecklist        []string `json:"packing_checklist"`
	EmergencyHelplines      []string `json:"emergency_helplines"`
}

// Dedicated Merchant & KYC Domain
type Merchant struct {
	ID                 uuid.UUID          `json:"id"`
	Email              string             `json:"email"`
	PasswordHash       string             `json:"-"`
	BusinessName       string             `json:"business_name"`
	ArtisanName        string             `json:"artisan_name"`
	Phone              string             `json:"phone"`
	RouteTarget        string             `json:"route_target"` // e.g. "kedarnath"
	ExactWaypoint      string             `json:"exact_waypoint"` // "Sonprayag to Gaurikund Trail"
	Latitude           float64            `json:"latitude"`
	Longitude          float64            `json:"longitude"`
	CraftSpecialty     string             `json:"craft_specialty"`
	ArtisanStory       string             `json:"artisan_story"`
	SpecialImmersion   string             `json:"special_immersion"`
	VerificationStatus VerificationStatus `json:"verification_status"`
	MaskedDocID        string             `json:"masked_doc_id"`
	DocType            string             `json:"doc_type"`
	ReviewNotes        string             `json:"review_notes"`
	CreatedAt          time.Time          `json:"created_at"`
}
