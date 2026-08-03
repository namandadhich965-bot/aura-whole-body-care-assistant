import { Hero } from '@/components/landing/Hero';
import { CareAreas } from '@/components/landing/CareAreas';
import { HowItWorksLanding } from '@/components/landing/HowItWorks';
import { DemoVideoSection } from '@/components/media/DemoVideoSection';
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
      <DemoVideoSection />
      <RoutinePreview />
      <Features />
      <SafetySection />
      <FinalCTA />
    </>
  );
}
