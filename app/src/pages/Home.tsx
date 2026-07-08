import HeroSection from '../sections/HeroSection';
import IntroSection from '../sections/IntroSection';
import ExperiencesSection from '../sections/ExperiencesSection';
import HostSection from '../sections/HostSection';
import WorkshopGallery from '../sections/WorkshopGallery';
import WhatsIncludedSection from '../sections/WhatsIncludedSection';
import LocationSection from '../sections/LocationSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import FAQSection from '../sections/FAQSection';
import ApplySection from '../sections/ApplySection';
import OverlayScrollStack from '../components/animations/OverlayScrollStack';

export default function Home() {
  return (
    <>
      <HeroSection />
      <OverlayScrollStack
        base={<IntroSection />}
        overlay={<ExperiencesSection />}
      />
      <HostSection />
      <OverlayScrollStack
        base={<WorkshopGallery />}
        overlay={<WhatsIncludedSection />}
      />
      <LocationSection />
      <TestimonialsSection />
      <FAQSection />
      <ApplySection />
    </>
  );
}
