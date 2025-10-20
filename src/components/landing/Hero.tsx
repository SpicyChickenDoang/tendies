'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpenText, Drumstick } from 'lucide-react';
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
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
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
    </section>
  );
}
