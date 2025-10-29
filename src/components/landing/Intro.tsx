'use client';

import Image from 'next/image';
import { type ImagePlaceholder } from '@/lib/placeholder-images';
import useIsMobile from '@/app/lib/useIsMobile';

interface IntroProps {
  placeholder?: ImagePlaceholder;
}

export function Intro({ placeholder }: IntroProps) {
  const isMobile = useIsMobile();

  const commonProps = {
    alt: placeholder?.description ?? 'Crispy chicken tenders in a vibrant setting',
    fill: true,
    priority: true,
    loading: 'eager'
  } as const;

  return (
    <section
      id="intro"
      className="relative w-full bg-background text-foreground h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {isMobile ?
          (
            <Image
              src={"/assets/images/tendies-mobile.png"}
              className="object-cover"
              {...commonProps}
            />
          ) : (
            <Image
              src={"/assets/images/tendies-store.png"}
              className="object-cover"
              {...commonProps}
            />
          )}

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
