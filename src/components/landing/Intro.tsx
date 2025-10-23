'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { type ImagePlaceholder } from '@/lib/placeholder-images';

interface IntroProps {
  placeholder?: ImagePlaceholder;
}

export function Intro({ placeholder }: IntroProps) {
  const introImageUrl =
    placeholder?.imageUrl ??
    'https://picsum.photos/seed/about-tenders/800/1000';

  return (
    <section 
      id="intro" 
      className="relative w-full bg-background text-foreground h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/tendies-pattern.webp')",
        backgroundSize:'400px',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="absolute inset-0 bg-background/80"></div>
      
      <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-8">
          
          {/* Left: Text Content */}
          <div className="md:col-span-3 text-center md:text-left z-10 space-y-8 bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/20">
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
          <div className="md:col-span-2 flex items-center justify-center">
             <div className="relative w-80 h-[420px] md:w-full md:h-[500px] bg-secondary p-4 rounded-3xl shadow-2xl shadow-black/50 transform rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105 bg-hero-pattern">
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
