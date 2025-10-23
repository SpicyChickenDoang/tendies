'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { type ImagePlaceholder } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

interface IntroProps {
  placeholder?: ImagePlaceholder;
}

export function Intro({ placeholder }: IntroProps) {
  const introImageUrl =
    placeholder?.imageUrl ??
    'https://picsum.photos/seed/about-tenders/800/1000';

  return (
    <section id="intro" className="w-full bg-background text-foreground h-screen flex items-center">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-black/50">
            <Image
              src={introImageUrl}
              alt={placeholder?.description ?? 'Crispy chicken tenders in a vibrant setting'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              data-ai-hint={placeholder?.imageHint ?? 'chicken tenders'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-end p-8">
              <h2
                className="font-headline text-5xl sm:text-6xl text-white font-black uppercase tracking-tighter"
                style={{ textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}
              >
                This Chicken Hits Different.
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
               <p className="text-lg md:text-xl leading-relaxed max-w-prose">
                You're here for that unforgettable crunch and bold flavor. We get it. At TENDIES, we're obsessed with making Bali's best high-quality chicken fingers. We serve them up in a cool, welcoming spot with a fresh, fun, 90s vibe. No fuss—just seriously good food that hits different.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="font-bold text-lg px-8 py-6 rounded-full">
                <Link href="/order">
                  Order Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-bold text-lg px-8 py-6 rounded-full border-2">
                <Link href="/menu">
                  See The Menu
                </Link>
              </Button>
            </div>
            <div className="border-l-4 border-primary pl-6 space-y-2 mt-8">
                 <h3 className="font-headline text-3xl font-bold uppercase text-primary">
                    The Star of the Show
                </h3>
                <p className="text-foreground/80">
                    Forget everything you know about dipping sauce. Our Sauce Bar is the hero of the TENDIES experience, featuring unique, house-made flavors that take every bite to the next level. Ready to meet your match?
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
