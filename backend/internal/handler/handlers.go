package handler

import (
	"encoding/json"
	"net/http"

	"bharatdarshan/backend/internal/domain"
	"bharatdarshan/backend/internal/service"
	"github.com/go-chi/chi/v5"
	"github.com/google/uuid"
)

type APIHandler struct {
	plannerSvc *service.PlannerService
}

func NewAPIHandler(plannerSvc *service.PlannerService) *APIHandler {
	return &APIHandler{plannerSvc: plannerSvc}
}

func writeJSON(w http.ResponseWriter, status int, data any) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(map[string]any{
		"success": status >= 200 && status < 300,
		"data":    data,
	})
}

func writeError(w http.ResponseWriter, status int, message string) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(map[string]any{
		"success": false,
		"error":   message,
	})
}

func (h *APIHandler) HealthCheck(w http.ResponseWriter, r *http.Request) {
	writeJSON(w, http.StatusOK, map[string]string{
		"status":  "healthy",
		"service": "BHARATDARSHAN Journey Planner & Cultural Engine",
		"version": "2.0.0",
	})
}

func (h *APIHandler) GetDestinations(w http.ResponseWriter, r *http.Request) {
	destinations := h.plannerSvc.GetDestinations()
	writeJSON(w, http.StatusOK, destinations)
}

func (h *APIHandler) GeneratePlan(w http.ResponseWriter, r *http.Request) {
	var req domain.TripPlanRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		writeError(w, http.StatusBadRequest, "Invalid trip plan request body")
		return
	}

	plan, err := h.plannerSvc.GeneratePlan(req)
	if err != nil {
		writeError(w, http.StatusInternalServerError, "Failed to generate plan: "+err.Error())
		return
	}

	writeJSON(w, http.StatusOK, plan)
}

type MerchantRegisterRequest struct {
	BusinessName     string  `json:"business_name"`
	ArtisanName      string  `json:"artisan_name"`
	Email            string  `json:"email"`
	Phone            string  `json:"phone"`
	RouteTarget      string  `json:"route_target"` // e.g. "kedarnath"
	ExactWaypoint    string  `json:"exact_waypoint"`
	Latitude         float64 `json:"latitude"`
	Longitude        float64 `json:"longitude"`
	CraftSpecialty   string  `json:"craft_specialty"`
	ArtisanStory     string  `json:"artisan_story"`
	SpecialImmersion string  `json:"special_immersion"`
}

func (h *APIHandler) RegisterMerchant(w http.ResponseWriter, r *http.Request) {
	var req MerchantRegisterRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		writeError(w, http.StatusBadRequest, "Invalid merchant registration body")
		return
	}

	merchant := domain.Merchant{
		BusinessName:     req.BusinessName,
		ArtisanName:      req.ArtisanName,
		Email:            req.Email,
		Phone:            req.Phone,
		RouteTarget:      req.RouteTarget,
		ExactWaypoint:    req.ExactWaypoint,
		Latitude:         req.Latitude,
		Longitude:        req.Longitude,
		CraftSpecialty:   req.CraftSpecialty,
		ArtisanStory:     req.ArtisanStory,
		SpecialImmersion: req.SpecialImmersion,
	}

	created, err := h.plannerSvc.RegisterMerchant(merchant)
	if err != nil {
		writeError(w, http.StatusInternalServerError, "Failed to register merchant: "+err.Error())
		return
	}

	writeJSON(w, http.StatusCreated, created)
}

type MerchantKYCRequest struct {
	MerchantID string `json:"merchant_id"`
	DocType    string `json:"doc_type"`
	DocNumber  string `json:"doc_number"`
}

func (h *APIHandler) SubmitMerchantKYC(w http.ResponseWriter, r *http.Request) {
	var req MerchantKYCRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		writeError(w, http.StatusBadRequest, "Invalid KYC request body")
		return
	}

	mID, err := uuid.Parse(req.MerchantID)
	if err != nil {
		writeError(w, http.StatusBadRequest, "Invalid Merchant ID format")
		return
	}

	err = h.plannerSvc.SubmitMerchantKYC(mID, req.DocType, req.DocNumber)
	if err != nil {
		writeError(w, http.StatusNotFound, err.Error())
		return
	}

	writeJSON(w, http.StatusOK, map[string]string{
		"message": "KYC document verified and artisan activated for route inclusion.",
	})
}

func (h *APIHandler) GetMerchantByID(w http.ResponseWriter, r *http.Request) {
	idStr := chi.URLParam(r, "id")
	mID, err := uuid.Parse(idStr)
	if err != nil {
		writeError(w, http.StatusBadRequest, "Invalid merchant ID")
		return
	}

	m, err := h.plannerSvc.GetMerchantByID(mID)
	if err != nil {
		writeError(w, http.StatusNotFound, "Merchant not found")
		return
	}

	writeJSON(w, http.StatusOK, m)
}
