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
    <section id="intro" className="relative w-full bg-background text-foreground h-screen flex items-center justify-center overflow-hidden">
      
      {/* Decorative Shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full filter blur-2xl animate-blob"></div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-secondary/20 rounded-full filter blur-2xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-32 h-32 bg-primary/10 rounded-full filter blur-2xl animate-blob animation-delay-4000"></div>
      
      <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left z-10 space-y-8">
             <h1
                className="font-headline text-6xl sm:text-7xl lg:text-8xl text-white font-black uppercase tracking-tighter"
                style={{ textShadow: '0 6px 20px rgba(0,0,0,0.6)' }}
              >
                This Chicken Hits Different.
              </h1>
            <div className="space-y-4">
               <p className="text-lg md:text-xl leading-relaxed max-w-prose mx-auto md:mx-0">
                You're here for that unforgettable crunch and bold flavor. We get it. At TENDIES, we're obsessed with making Bali's best high-quality chicken fingers. We serve them up in a cool, welcoming spot with a fresh, fun, 90s vibe. No fuss—just seriously good food that hits different.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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
            <div className="border-l-4 border-primary pl-6 space-y-2 text-left">
                 <h3 className="font-headline text-3xl font-bold uppercase text-primary">
                    The Star of the Show
                </h3>
                <p className="text-foreground/80">
                    Forget everything you know about dipping sauce. Our Sauce Bar is the hero of the TENDIES experience, featuring unique, house-made flavors that take every bite to the next level. Ready to meet your match?
                </p>
            </div>
          </div>
          
          {/* Right: Image */}
          <div className="relative w-full md:w-1/2 lg:w-2/5 flex items-center justify-center md:justify-start">
             <div className="relative w-72 h-96 md:w-80 md:h-[400px] lg:w-96 lg:h-[480px] bg-secondary p-4 rounded-3xl shadow-2xl shadow-black/50 transform -rotate-6 transition-transform duration-500 hover:rotate-0 hover:scale-105">
                 <Image
                    src={introImageUrl}
                    alt={placeholder?.description ?? 'Crispy chicken tenders in a vibrant setting'}
                    fill
                    className="object-cover rounded-xl"
                    sizes="(max-width: 768px) 75vw, 40vw"
                    data-ai-hint={placeholder?.imageHint ?? 'chicken tenders'}
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
