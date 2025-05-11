import HeroSection from "@/components/HeroSection"
import BenefitsSection from "@/components/BenefitsSection"
import PlansSection from "@/components/PlansSection"
import FAQSection from "@/components/FAQSection"
import Footer from "@/components/Footer"

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-start w-full">
      <HeroSection />
      <BenefitsSection />
      <PlansSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
