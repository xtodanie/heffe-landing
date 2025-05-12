import HeroSection from "@/components/screens/HeroSection"
import BenefitsSection from "@/components/screens/BenefitsSection"
import PlansSection from "@/components/screens/PlansSection"
import FAQSection from "@/components/screens/FAQSection"


export default function Page() {
  return (
    <main className="flex flex-col items-center justify-start w-full">
      <HeroSection />
      <BenefitsSection />
      <PlansSection />
      <FAQSection />
    </main>
  )
}
