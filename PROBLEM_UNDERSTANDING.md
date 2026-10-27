# PROBLEM_UNDERSTANDING.md
### BHARATDARSHAN — Read this FIRST before writing any code

> **Note to the AI agent (Antigravity):** This file explains *why* the product exists. Every feature, screen, and
> database field in `README.md` traces back to a problem written here. When you are unsure how to make a design
> or engineering decision, choose the option that best solves the problems below.

---

## 1. One-line summary

India's cultural tourism and local-craft economy suffer from a massive disconnect: **travelers visit historic
cities without experiencing their living soul, while the artisans who keep those traditions alive struggle for
basic digital visibility.**

**BHARATDARSHAN** is a **two-sided platform** where immersive cultural storytelling naturally drives
footfall and orders to **verified local merchants**.

---

## 2. The two interlocking problems

### PROBLEM 1 — Merchant & Artisan side: "Only 3% of local artisans are satisfied with their reach"

| Pain point | What it means in real life | What the product must do |
|---|---|---|
| **The 97% Visibility Gap** | Artisans, traditional craftsmen and grassroots innovators have no good way for customers to discover them | Give every artisan a beautiful, verified digital storefront and a map pin |
| **Exploitation by middlemen** | No direct digital bridge to incoming visitors, so middlemen and souvenir aggregators capture most of the margin | Direct artisan → traveler discovery and navigation; no commission-taking middle layer |
| **Zero hyper-local promotion** | A brass maker in Moradabad has a workshop, but tourists in that same city cannot find it or see its offers | Geo-pinned shops + consent-based "Early Visitor Offers" shown inside the city guide |

**Merchant persona — "Ramesh ji, brass artisan, Moradabad"**
- Age 45, third-generation craftsman, comfortable with WhatsApp and YouTube, not with long forms.
- Prefers Hindi / vernacular UI. Has an Aadhaar card, possibly a UDYAM registration or Artisan Card.
- Fear: "Will this app cheat me / take a commission / leak my documents?"
- Win condition: tourists *walk into his shop* and he gets full price.

### PROBLEM 2 — Visitor & Traveler side: "Fragmented information & superficial sightseeing"

| Pain point | What it means in real life | What the product must do |
|---|---|---|
| **No complete cultural roadmap** | Travelers cannot easily find *when* to visit, *what is new* there, and how to experience a place beyond cliché monument checklists | Seasonal guides, live festival calendar, end-to-end curated itineraries |
| **Unseen cultural diversity** | Travel portals list hotels and flights, but do not show regional traditions, customs, folklore and craft heritage in an engaging, visual way | Ultra-visual, aesthetic, story-first destination pages (reels, scroll-stories, maps) |
| **No trustworthy way to buy authentic local specialties** | Visitors want genuine keepsakes (e.g., real Moradabad brassware) but cannot tell verified makers from overpriced tourist traps | "Verified Local Maker" badge, trust score, transparent verification, redeemable offers |

**Traveler persona — "Ananya, 28, cultural explorer from Bengaluru"**
- Plans trips on Instagram/YouTube. Bored of "top 10 monuments" lists.
- Wants: *What should I do in Moradabad in November? What is special there? Where do I buy the real thing?*
- Fear: "Is this shop legit? Am I being overcharged?"
- Win condition: a beautiful, trustworthy, ready-to-follow roadmap including real artisan stops.

---

## 3. The solution in one picture (the "flywheel")

```
 Artisan registers (vernacular UI)
        │
        ▼
 Digital eKYC + Verified Maker badge  ───────────────┐
        │                                            │  TRUST
        ▼                                            │
 Shop geo-pinned + products + story + consent offers │
        │                                            ▼
        └───────►  CORE ENGINE  ◄────────  Traveler discovers: when/where/what's new
                  (Cultural Intelligence            │
                   + Hyper-Local Match)             ▼
                        │                  Aesthetic visual stories + smart itinerary
                        ▼                           │
              Verified shops embedded               ▼
              inside cultural routes ──────►  Navigate to shop, redeem offer, buy craft
                                                    │
        Direct revenue to artisans  ◄───────────────┘
        + authentic roadmap for travelers
```

**Dual impact:** direct revenue to artisans **+** an authentic roadmap for travelers.

---

## 4. Supply workflow (what the merchant experiences)

1. **App registration** — self-register or be reached out to; simple, vernacular onboarding (Hindi first).
2. **Digital eKYC & trust badge** — identity (Aadhaar / Artisan Card / UDYAM) + craft verification → "Verified Local Maker" badge.
3. **Geo-location & shop pinning** — exact workshop/storefront location so travelers can navigate to the doorstep.
4. **Rich product & craft cataloging** — products, price ranges, custom-order ability, cultural story behind the work.
5. **Consent-based early offers & spotlight deals** — merchant explicitly opts in to "Early Visitor Offers", festive discounts, combo deals; shown inside the city's exploration guide.

## 5. Demand workflow (what the traveler experiences)

1. **Smart discovery** — which place, which season, what's new/festivals now, hidden gems.
2. **Aesthetic & visual storytelling** — cultural diversity, traditions, culinary roots, history, in a "crazy visual experience" instead of text blocks.
3. **Complete end-to-end roadmap** — structured itinerary: morning-to-evening cultural trails, etiquette, must-try experiences, verified artisan stops.
4. **Side-by-side merchant & offer integration** — registered merchants appear next to the culture they belong to: what craft is sold where, live offers, direct navigation.

## 6. Hero use case (build the demo around this)

**Moradabad Brass Spotlight** — Moradabad is the "Brass City" of India. Tradition: gifting brassware.
The platform promotes **registered brass artisans + their offers** inside the Moradabad cultural guide.
Seed the database with Moradabad as the flagship destination and 4–6 demo verified brass merchants.

---

## 7. Product principles (decision rules for the agent)

1. **Story first, store second.** The traveler enters through culture (visuals, stories), never through a product grid.
2. **Trust is a feature, not a footnote.** Every merchant surface shows verification status and *how* it was verified.
3. **Vernacular & low-friction for artisans.** Big buttons, voice hints, Hindi default, minimal typing, photo-first uploads.
4. **Consent everywhere.** Offers only with explicit merchant opt-in. Documents only used for verification, with clear purpose text (DPDP Act 2023 spirit).
5. **No middleman economics.** No hidden markup. The platform connects; the artisan keeps the margin.
6. **Document safety is non-negotiable.** Identity documents are private, encrypted, never public, access-logged.
7. **Real-time where it matters.** KYC status, offer changes, and merchant availability update live.

## 8. Success metrics (what "solved" looks like)

| Side | Metric |
|---|---|
| Supply | # verified merchants onboarded; % completing KYC; time-to-verify; % merchants with active offers |
| Demand | Itineraries created; shop navigations started; offers redeemed; return visits |
| Trust | Verified-visit review ratio; reports/complaints per 1000 visits; % users who open "How we verify" |
| Impact | Estimated direct revenue reaching artisans; # cities with ≥10 verified makers |

## 9. Out of scope for v1 (do NOT build unless asked)

- Payments/escrow checkout (v1 = discovery, navigation, offer redemption; payment is a later phase).
- Hotel/flight booking.
- Real UIDAI e-KYC API integration (needs a licensed AUA/KUA). v1 uses **document upload + admin review**, designed so a DigiLocker/UIDAI provider can be plugged in later.

## 10. Key risks to design around

| Risk | Mitigation |
|---|---|
| Fake merchants / fraud | Multi-tier verification, admin review, geo-verified photos, reporting, audit trail |
| Sensitive Aadhaar data leak | Private Cloudinary assets, signed short-lived URLs, store only masked/last-4 number, encrypt metadata, access logs |
| Merchants distrust the app | Show "Why we ask" + "How your documents are protected" before upload; no commission messaging |
| Travelers see a boring catalog | Visual engine: reels, scroll-stories, interactive map, seasonal wheel, craft passport |
| Low digital literacy | Hindi-first, icon-led UI, WhatsApp-style flows, field-ambassador assisted onboarding |
