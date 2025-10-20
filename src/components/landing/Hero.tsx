'use client';

import Image from 'next/image';
import { type ImagePlaceholder } from '@/lib/placeholder-images';

interface HeroProps {
  placeholder?: ImagePlaceholder;
}

export function Hero({ placeholder }: HeroProps) {
  const heroImageUrl =
    placeholder?.imageUrl ??
    'https://picsum.photos/seed/hero-tenders/1920/1080';

  return (
    <section
      id="hero"
      className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImageUrl}
          alt={placeholder?.description ?? 'Deliciously golden chicken tenders'}
          fill
          className="object-cover"
          priority
          data-ai-hint={placeholder?.imageHint ?? 'chicken tenders'}
        />
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm" />
      </div>

      <div
        className="relative z-10 flex flex-col items-center gap-6"
        style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.5)' }}
      >
        <Image
          src="/assets/images/logo.webp"
          alt="Tendies Logo"
          width={600}
          height={150}
          className="w-4/5 max-w-[600px] drop-shadow-2xl"
          priority
        />
        <p className="font-headline text-lg sm:text-xl md:text-2xl font-semibold uppercase tracking-wider text-primary">
          Dip It. Lock It. Get Jiggy with It.
        </p>
      </div>
    </section>
  );
}
