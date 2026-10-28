package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"bharatdarshan/backend/internal/handler"
	"bharatdarshan/backend/internal/service"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	plannerSvc := service.NewPlannerService()
	h := handler.NewAPIHandler(plannerSvc)

	r := chi.NewRouter()

	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	r.Use(cors.Handler(cors.Options{
		AllowedOrigins: []string{
			"http://localhost:3000",
			"http://localhost:3001",
			"https://bharat-darshan-sandy.vercel.app",
			"https://*.vercel.app",
			"*",
		},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		AllowCredentials: true,
		MaxAge:           300,
	}))

	r.Route("/api/v1", func(r chi.Router) {
		r.Get("/health", h.HealthCheck)
		r.Get("/destinations", h.GetDestinations)
		r.Post("/planner/generate", h.GeneratePlan)

		// Merchant & Artisan isolated endpoints
		r.Post("/merchant/register", h.RegisterMerchant)
		r.Post("/merchant/kyc", h.SubmitMerchantKYC)
		r.Get("/merchant/{id}", h.GetMerchantByID)
	})

	serverAddr := fmt.Sprintf(":%s", port)
	log.Printf("=========================================================")
	log.Printf("  BHARATDARSHAN Journey Planner & Cultural Engine v2")
	log.Printf("  Serving on http://localhost%s", serverAddr)
	log.Printf("  Health: http://localhost%s/api/v1/health", serverAddr)
	log.Printf("=========================================================")

	if err := http.ListenAndServe(serverAddr, r); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}
