
'use client';

import { Button } from '@/components/ui/button';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const aboutPlaceholder: ImagePlaceholder | undefined = PlaceHolderImages.find(
    (img) => img.id === 'about-tenders'
  );

  return (
    <div className="relative min-h-screen bg-background text-primary-foreground overflow-x-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={aboutPlaceholder?.imageUrl ?? 'https://picsum.photos/seed/about-bg/1920/1080'}
          alt={aboutPlaceholder?.description ?? 'Interior of a modern restaurant'}
          fill
          className="object-cover"
          data-ai-hint={aboutPlaceholder?.imageHint ?? 'restaurant interior'}
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-md"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="outline" className="bg-transparent hover:bg-foreground hover:text-background mb-8">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Go Back Home
            </Link>
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-1 md:row-span-1 bg-card/20 p-8 rounded-2xl border border-border/10 flex items-center justify-center">
               <h1
                className="font-headline text-5xl md:text-6xl font-black uppercase text-primary text-center"
                style={{ textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}
              >
                Fresh, Fun & Fried in Bali
              </h1>
            </div>
            <div className="bg-card/20 p-8 rounded-2xl border border-border/10">
              <p className="text-lg text-foreground/90">
                We started TENDIES with a radical idea: what if we made the crispiest, juiciest, most legendary chicken tenders on the planet? So we did. We're a throwback, fast-casual joint in the heart of Bali, serving up good times for locals and travelers alike.
              </p>
            </div>
            <div className="bg-card/20 p-8 rounded-2xl border border-border/10">
               <p className="text-lg text-foreground/90">
                What's the secret sauce? Obsession. We're laser-focused on one thing: perfect, high-quality chicken breast tendies. Our streamlined menu means every single order is consistently awesome and nothing goes to waste. That's how you get the perfect bite, every time.
              </p>
            </div>
             <div className="bg-card/20 p-8 rounded-2xl border border-border/10">
              <p className="text-lg text-foreground/90">
                It’s all about premium quality without the price tag, wrapped in a vibrant brand with a fresh-to-death 90s vibe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
