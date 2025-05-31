import { Navbar } from "@/components/layout/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ClassesPreview } from "@/components/sections/classes-preview"
import { TrainersPreview } from "@/components/sections/trainers-preview"
import { SaunaPreview } from "@/components/sections/sauna-preview"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ClassesPreview />
        <TrainersPreview />
        <SaunaPreview />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
