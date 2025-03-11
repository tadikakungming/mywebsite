import HeroSection from "@/components/hero-section"
import SchoolIntro from "@/components/school-intro"
import LatestNews from "@/components/latest-news"
import FeaturedPrograms from "@/components/featured-programs"
import VirtualTour from "@/components/virtual-tour"
import ContactCTA from "@/components/contact-cta"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <SchoolIntro />
      <LatestNews />
      <FeaturedPrograms />
      <VirtualTour />
      <ContactCTA />
    </div>
  )
}

