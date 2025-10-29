'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MenuCard } from '@/components/MenuCard';
import { type ImagePlaceholder } from '@/lib/placeholder-images';

interface MenuProps {
  placeholders: {
    classic?: ImagePlaceholder;
    spicy?: ImagePlaceholder;
    honey?: ImagePlaceholder;
    garlic?: ImagePlaceholder;
  };
}

export function Menu({ placeholders }: MenuProps) {
  return (
    <section id="menu" className="w-full bg-primary">
      <div className="text-center mb-12 mt-12">
        <h2
          className="font-headline text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-secondary mb-4"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
        >
          Our Flavors
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
        <MenuCard
          placeholder={placeholders.classic}
          title="Classic Crunch"
          tagline="The Original Legend"
        />
        <MenuCard
          placeholder={placeholders.spicy}
          title="Spicy Blaze"
          tagline="Feel the Heat"
        />
        <MenuCard
          placeholder={placeholders.honey}
          title="Honey Gold"
          tagline="Sweet & Savory"
        />
        <MenuCard
          placeholder={placeholders.garlic}
          title="Garlic Butter"
          tagline="A Savory Delight"
        />
      </div>
      <div className="text-center mt-12 mb-12">
        <Button
          asChild
          size="lg"
          className="font-bold text-lg px-8 py-6 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <Link href="/menu" className="flex items-center justify-center">
            See Full Menu
          </Link>
        </Button>
      </div>
    </section>
  );
}
