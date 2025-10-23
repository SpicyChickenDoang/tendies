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
    <section id="about" className="w-full bg-primary">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="relative w-full aspect-square md:aspect-[4/5] overflow-hidden shadow-2xl shadow-black/50 transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <Image
            src={aboutImageUrl}
            alt={placeholder?.description ?? 'Crispy chicken tenders'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            data-ai-hint={placeholder?.imageHint ?? 'chicken tenders'}
          />
        </div>
        <div className="text-center md:text-left p-8">
          <h2
            className="font-headline text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-secondary mb-4"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
          >
            FRESH, FUN &amp; FRIED IN BALI
          </h2>
          <div className="text-lg md:text-xl text-secondary leading-relaxed max-w-lg mx-auto md:mx-0 mb-8 space-y-4">
            <p>
              TENDIES was born from a simple mission: create ridiculously good
              chicken tenders and serve them in a cool, welcoming atmosphere.
              We're a modern, fast-casual joint based right here in Bali,
              created for a diverse crowd of locals and international
              visitors.
            </p>
            <p>
              Our secret? We focus on one thing: high-quality chicken breast
              tendies. Our simple, modular menu lets us nail consistent quality
              and minimize waste, which means you get a perfect bite every
              time. We're all about that perfect balance of affordability and
              quality, wrapped in a vibrant, trendy brand with a fresh, fun, 90s
              vibe.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="font-bold text-lg px-8 py-6 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/70 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
