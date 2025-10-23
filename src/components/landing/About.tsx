'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function About() {
  return (
    <section id="about" className="w-full bg-primary text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-secondary">
            You're here for that unforgettable crunch and bold flavor. We get it. At TENDIES, we're obsessed with making Bali's best high-quality chicken fingers. We serve them up in a cool, welcoming spot with a fresh, fun, 90s vibe. No fuss—just seriously good food that hits different.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" variant="outline" className="font-bold text-lg px-8 py-6 rounded-full">
              <Link href="/order">
                Order Now
              </Link>
            </Button>
            <Button asChild size="lg" className="font-bold text-lg px-8 py-6 rounded-full border-2">
              <Link href="/menu">
                See The Menu
              </Link>
            </Button>
          </div>
          <div className="bg-card/50 border-2 border-primary p-8 rounded-2xl">
            <h3 className="font-headline text-3xl font-bold uppercase text-primary mb-2">
                The Star of the Show
            </h3>
            <p className="text-foreground/80">
                Forget everything you know about dipping sauce. Our Sauce Bar is the hero of the TENDIES experience, featuring unique, house-made flavors that take every bite to the next level. Ready to meet your match?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
