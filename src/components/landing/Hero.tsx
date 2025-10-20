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
    'https://picsum.photos/seed/hero-tenders/800/600';

  return (
    <div className="flex flex-col items-center justify-center text-center w-full max-w-7xl mx-auto">
      <div
        className="flex flex-col items-center gap-2 mb-8"
        style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.4)' }}
      >
        <Image
          src="/assets/images/logo.webp"
          alt="Tendies Logo"
          width={600}
          height={150}
          className="w-4/5 max-w-[600px]"
          priority
        />
        <p className="font-headline text-lg sm:text-xl md:text-2xl font-semibold uppercase tracking-wider text-primary">
          Dip It. Lock It. Get Jiggy with It.
        </p>
      </div>

      <div className="relative w-full max-w-4xl aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/50 mb-10 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <Image
          src={heroImageUrl}
          alt={
            placeholder?.description ?? 'Deliciously golden chicken tenders'
          }
          fill
          className="object-cover"
          priority
          data-ai-hint={placeholder?.imageHint ?? 'chicken tenders'}
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
  );
}
