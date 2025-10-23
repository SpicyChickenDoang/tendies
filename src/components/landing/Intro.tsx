'use client';

import Image from 'next/image';
import { type ImagePlaceholder } from '@/lib/placeholder-images';

interface IntroProps {
  placeholder?: ImagePlaceholder;
}

export function Intro({ placeholder }: IntroProps) {
  const introImageUrl =
    placeholder?.imageUrl ??
    'https://picsum.photos/seed/about-tenders/1920/1080';

  const commonProps = {
    alt: placeholder?.description ?? 'Crispy chicken tenders in a vibrant setting',
    fill: true,
    priority: true
  };

  return (
    <section
      id="intro"
      className="relative w-full bg-background text-foreground h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={"/assets/images/tendies-mobile.png"}
          className="object-cover block md:hidden" // block on mobile, hidden on screens >= md
          {...commonProps}
        />

        {/* Desktop Image: visible ONLY on medium screens and up (min-width: 768px) */}
        <Image
          src={"/assets/images/tendies-store.png"}
          className="object-cover hidden md:block" // hidden on mobile, block on screens >= md
          {...commonProps}
        />
      </div>

      <div className="absolute bottom-16 z-20 text-center">
        <h1
          className="font-headline text-6xl sm:text-7xl lg:text-9xl text-white font-black uppercase"
          style={{ textShadow: '0 6px 20px rgba(0,0,0,0.6)' }}
        >
          This Chicken Hits Different.
        </h1>
      </div>
    </section>
  );
}
