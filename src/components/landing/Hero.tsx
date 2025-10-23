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
      className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/tendies-wp.jpg"
          alt={placeholder?.description ?? 'Deliciously golden chicken tenders'}
          fill
          className="object-cover"
          priority={true}
          data-ai-hint={placeholder?.imageHint ?? 'chicken tenders'}
        />
         <div className="absolute inset-0 bg-black/30" />
      </div>

      <div
        className="relative z-10 flex flex-col items-center gap-6 w-[1200px]"
        style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.5)' }}
      >
        <Image
          src="/assets/images/logo-white.png"
          alt="Tendies Logo"
          width={1200}
          height={400}
          className="w-4/5 drop-shadow-2xl"
          priority
        />
        {/* <p className="font-headline text-lg sm:text-xl md:text-2xl font-semibold uppercase tracking-wider text-primary">
          Dip It. Lock It. Get Jiggy with It.
        </p> */}
      </div>
    </section>
  );
}
