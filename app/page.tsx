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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
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
