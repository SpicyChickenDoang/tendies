import { PlaceHolderImages } from '@/lib/placeholder-images';
import { About } from '@/components/landing/About';
import { AnimatedDivider } from '@/components/landing/AnimatedDivider';
import { Footer } from '@/components/landing/Footer';
import { Location } from '@/components/landing/Location';
import { Menu } from '@/components/landing/Menu';
import { Intro } from '@/components/landing/Intro';

export default async function Home() {
  const heroPlaceholder = PlaceHolderImages.find(
    (img) => img.id === 'hero-tenders'
  );
  const menuPlaceholders = {
    classic: PlaceHolderImages.find((img) => img.id === 'classic-crunch'),
    spicy: PlaceHolderImages.find((img) => img.id === 'spicy-blaze'),
    honey: PlaceHolderImages.find((img) => img.id === 'honey-gold'),
    garlic: PlaceHolderImages.find((img) => img.id === 'garlic-butter'),
  };
  const mapPlaceholder = PlaceHolderImages.find(
    (img) => img.id === 'bali-map'
  );

  return (
    <div className="flex flex-col">
      <main className="flex min-h-screen flex-col items-center justify-center bg-background overflow-x-hidden">
        <Intro placeholder={heroPlaceholder} />
        <About />
        <AnimatedDivider />
        <Menu placeholders={menuPlaceholders} />
        <AnimatedDivider />
        <Location placeholder={mapPlaceholder} />
      </main>
      <Footer />
    </div>
  );
}
