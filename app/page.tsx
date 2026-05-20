import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { StatsCounter } from "@/components/stats-counter"
import { AccommodationsSection } from "@/components/accommodations-section"
import { GallerySection } from "@/components/gallery-section"
import { AmenitiesSection } from "@/components/amenities-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { MapSection } from "@/components/map-section"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Résidence Good House",
  "description": "Appartements meublés premium à Ngor, Almadies Dakar",
  "url": "https://residencegoodhouse.com",
  "telephone": "+221709660806",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ngor, Almadies",
    "addressLocality": "Dakar",
    "postalCode": "10700",
    "addressCountry": "SN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 14.7470,
    "longitude": -17.5140
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "reviewCount": "5"
  }
}
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsCounter />
      <AccommodationsSection />
      <GallerySection />
      <AmenitiesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <MapSection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
