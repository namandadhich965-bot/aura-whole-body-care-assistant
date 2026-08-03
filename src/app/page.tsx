import { Hero } from '@/components/landing/Hero';
import { CareAreas } from '@/components/landing/CareAreas';
import { HowItWorksLanding } from '@/components/landing/HowItWorks';
import { RoutinePreview } from '@/components/landing/RoutinePreview';
import { Features } from '@/components/landing/Features';
import { SafetySection } from '@/components/landing/SafetySection';
import { FinalCTA } from '@/components/landing/FinalCTA';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <CareAreas />
      <HowItWorksLanding />
      <RoutinePreview />
      <Features />
      <SafetySection />
      <FinalCTA />
    </>
  );
}
