package service_test

import (
	"strings"
	"testing"

	"bharatdarshan/backend/internal/domain"
	"bharatdarshan/backend/internal/service"
)

func TestPlannerService_GeneratePlan(t *testing.T) {
	ps := service.NewPlannerService()

	req := domain.TripPlanRequest{
		DestinationID: "kedarnath",
		DateType:      "FLEXIBLE",
		FlexibleMonth: "November",
		TravelVibe:    "SPIRITUAL_PILGRIMAGE",
		GroupType:     "SOLO",
	}

	plan, err := ps.GeneratePlan(req)
	if err != nil {
		t.Fatalf("failed to generate plan: %v", err)
	}

	if plan.Destination.ID != "kedarnath" {
		t.Errorf("expected destination kedarnath, got %s", plan.Destination.ID)
	}

	if len(plan.Days) < 4 {
		t.Errorf("expected at least 4 days in Kedarnath circuit, got %d", len(plan.Days))
	}

	// Verify deep cultural guide
	if !strings.Contains(plan.DeepCulturalGuide.SacredLoreAndMythology, "Pandavas") {
		t.Errorf("expected Pandavas lore in cultural guide, got %s", plan.DeepCulturalGuide.SacredLoreAndMythology)
	}

	if !strings.Contains(plan.DeepCulturalGuide.LivingTraditions, "Rawal") {
		t.Errorf("expected Rawal priesthood in living traditions, got %s", plan.DeepCulturalGuide.LivingTraditions)
	}

	// Verify embedded artisan stop in Day 2
	day2 := plan.Days[1]
	if len(day2.VerifiedArtisanStops) == 0 {
		t.Errorf("expected embedded verified artisan stop in Day 2, got 0")
	}

	artisan := day2.VerifiedArtisanStops[0]
	if !strings.Contains(artisan.BusinessName, "Mandakini Valley") {
		t.Errorf("expected Mandakini Valley artisan stop, got %s", artisan.BusinessName)
	}
}

func TestPlannerService_MerchantKYC(t *testing.T) {
	ps := service.NewPlannerService()

	m := domain.Merchant{
		BusinessName:   "Garhwal Sacred Herbs",
		ArtisanName:    "Ramesh Negi",
		RouteTarget:    "kedarnath",
		ExactWaypoint:  "Jungle Chatti KM 4",
		CraftSpecialty: "Pure Shilajit & Mountain Teas",
	}

	created, err := ps.RegisterMerchant(m)
	if err != nil {
		t.Fatalf("failed to register merchant: %v", err)
	}

	if created.VerificationStatus != domain.StatusPending {
		t.Errorf("expected PENDING status on registration, got %s", created.VerificationStatus)
	}

	// Submit KYC
	err = ps.SubmitMerchantKYC(created.ID, "ARTISAN_CARD", "UK-CARD-8831")
	if err != nil {
		t.Fatalf("failed to submit KYC: %v", err)
	}

	updated, err := ps.GetMerchantByID(created.ID)
	if err != nil {
		t.Fatalf("failed to get updated merchant: %v", err)
	}

	if updated.VerificationStatus != domain.StatusVerified {
		t.Errorf("expected VERIFIED status after KYC, got %s", updated.VerificationStatus)
	}

	if !strings.HasPrefix(updated.MaskedDocID, "XXXX-XXXX-") {
		t.Errorf("expected DPDP masked ID, got %s", updated.MaskedDocID)
	}
}
