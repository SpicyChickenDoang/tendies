'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import { type ImagePlaceholder } from '@/lib/placeholder-images';

interface AboutProps {
  placeholder?: ImagePlaceholder;
}

export function About({ placeholder }: AboutProps) {
  const aboutImageUrl =
    placeholder?.imageUrl ??
    'https://picsum.photos/seed/about-tenders/600/800';

  return (
    <section id="about" className="w-full max-w-7xl mx-auto p-4 sm:p-8 my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="relative w-full aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <Image
            src={aboutImageUrl}
            alt={placeholder?.description ?? 'Crispy chicken tenders'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            data-ai-hint={placeholder?.imageHint ?? 'chicken tenders'}
          />
          <div className="absolute -bottom-4 -right-4 w-32 h-32">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                fill="#FFCF1C"
                d="M48.1,-56.9C62.9,-46.8,75.7,-32.8,79.5,-16.4C83.3,0,78.1,18.9,68,34.8C58,50.7,43.1,63.6,26.7,71.2C10.4,78.8,-7.4,81.1,-24.1,75.8C-40.8,70.5,-56.3,57.6,-66.4,42.1C-76.5,26.6,-81.1,8.5,-77.8,-7.9C-74.5,-24.3,-63.3,-39.1,-49.7,-49.4C-36.1,-59.7,-20.1,-65.5,-3.1,-63.9C13.8,-62.3,27.7,-67.1,48.1,-56.9Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h2
            className="font-headline text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-primary mb-4"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
          >
            The Perfect Crunch, Delivered.
          </h2>
          <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-md mx-auto md:mx-0 mb-8">
            We're obsessed with the perfect chicken tender — fresh chicken,
            golden crunch, and sauces that slap. Craving it now? Get your
            Tendies delivered hot and fresh right to your door.
          </p>
          <Button
            asChild
            size="lg"
            className="font-bold text-lg px-8 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Link href="/order" className="flex items-center justify-center">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Order for Delivery
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
