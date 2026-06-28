import HeroSection from '@/components/HeroSection';
import SeoBlock from '@/components/SeoBlock';
import ReviewsSection from '@/components/ReviewsSection';
import LocationSection from '@/components/LocationSection';
import ConsultSection from '@/components/ConsultSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SeoBlock />
      <ReviewsSection />
      <LocationSection />
      <ConsultSection />
    </main>
  );
}
