import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BookOpenText, Drumstick } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { MenuCard } from '@/components/MenuCard';

export default async function Home() {
  const heroPlaceholder = PlaceHolderImages.find(
    (img) => img.id === 'hero-tenders'
  );
  const aboutPlaceholder = PlaceHolderImages.find(
    (img) => img.id === 'about-tenders'
  );
  const menuPlaceholders = {
    classic: PlaceHolderImages.find((img) => img.id === 'classic-crunch'),
    spicy: PlaceHolderImages.find((img) => img.id === 'spicy-blaze'),
    honey: PlaceHolderImages.find((img) => img.id === 'honey-gold'),
    garlic: PlaceHolderImages.find((img) => img.id === 'garlic-butter'),
  };

  const heroImageUrl =
    heroPlaceholder?.imageUrl ?? 'https://picsum.photos/seed/hero-tenders/800/600';

  const aboutImageUrl =
    aboutPlaceholder?.imageUrl ?? 'https://picsum.photos/seed/about-tenders/600/800';

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8 overflow-x-hidden">
      <div className="flex flex-col items-center justify-center text-center w-full max-w-7xl mx-auto">
        <div
          className="flex flex-col items-center gap-2 mb-8"
          style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.4)' }}
        >
          <h1 className="font-headline text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tighter">
            TENDIES
          </h1>
          <p className="font-headline text-lg sm:text-xl md:text-2xl font-semibold uppercase tracking-wider text-primary">
            Crispy. Golden. Legendary.
          </p>
        </div>

        <div className="relative w-full max-w-4xl aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/50 mb-10 transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <Image
            src={heroImageUrl}
            alt={
              heroPlaceholder?.description ??
              'Deliciously golden chicken tenders'
            }
            fill
            className="object-cover"
            priority
            data-ai-hint={heroPlaceholder?.imageHint ?? 'chicken tenders'}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-24">
          <Button
            asChild
            size="lg"
            className="font-bold text-lg px-8 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Link href="/order" className="flex items-center justify-center">
              <Drumstick className="mr-2 h-5 w-5" />
              Order Now
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="font-bold text-lg px-8 py-6 rounded-full border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-background transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Link href="/menu" className="flex items-center justify-center">
              <BookOpenText className="mr-2 h-5 w-5" />
              See Menu
            </Link>
          </Button>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="w-full max-w-7xl mx-auto p-4 sm:p-8 my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative w-full aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
              src={aboutImageUrl}
              alt={aboutPlaceholder?.description ?? 'Crispy chicken tenders'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              data-ai-hint={aboutPlaceholder?.imageHint ?? 'chicken tenders'}
            />
             <div className="absolute -bottom-4 -right-4 w-32 h-32">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path fill="#FFCF1C" d="M48.1,-56.9C62.9,-46.8,75.7,-32.8,79.5,-16.4C83.3,0,78.1,18.9,68,34.8C58,50.7,43.1,63.6,26.7,71.2C10.4,78.8,-7.4,81.1,-24.1,75.8C-40.8,70.5,-56.3,57.6,-66.4,42.1C-76.5,26.6,-81.1,8.5,-77.8,-7.9C-74.5,-24.3,-63.3,-39.1,-49.7,-49.4C-36.1,-59.7,-20.1,-65.5,-3.1,-63.9C13.8,-62.3,27.7,-67.1,48.1,-56.9Z" transform="translate(100 100)" />
              </svg>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-headline text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-primary mb-4" style={{textShadow: '0 2px 4px rgba(0,0,0,0.2)'}}>
              It’s All About the Crunch.
            </h2>
            <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-md mx-auto md:mx-0">
              At Tendies, we take one thing seriously — the perfect chicken tender. Fresh chicken, golden crunch, and sauces that slap.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="w-full max-w-7xl mx-auto p-4 sm:p-8 my-16">
        <div className="text-center mb-12">
            <h2 className="font-headline text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-primary mb-4" style={{textShadow: '0 2px 4px rgba(0,0,0,0.2)'}}>
                Our Flavors
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <MenuCard
                placeholder={menuPlaceholders.classic}
                title="Classic Crunch"
                tagline="The Original Legend"
            />
            <MenuCard
                placeholder={menuPlaceholders.spicy}
                title="Spicy Blaze"
                tagline="Feel the Heat"
            />
            <MenuCard
                placeholder={menuPlaceholders.honey}
                title="Honey Gold"
                tagline="Sweet & Savory"
            />
            <MenuCard
                placeholder={menuPlaceholders.garlic}
                title="Garlic Butter"
                tagline="A Savory Delight"
            />
        </div>
        <div className="text-center mt-12">
             <Button
                asChild
                size="lg"
                className="font-bold text-lg px-8 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
                <Link href="/menu" className="flex items-center justify-center">
                    See Full Menu
                </Link>
            </Button>
        </div>
      </section>

    </main>
  );
}