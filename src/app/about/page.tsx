
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

          <header className="text-center mb-12">
            <h1
              className="font-headline text-6xl md:text-8xl font-black uppercase text-primary mb-4"
              style={{ textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}
            >
              Fresh, Fun & Fried in Bali
            </h1>
          </header>

          <section className="space-y-6 text-lg md:text-xl text-center max-w-3xl mx-auto text-foreground/90">
              <p>
                TENDIES was born from a simple mission: create ridiculously good chicken tenders and serve them in a cool, welcoming atmosphere. We're a modern, fast-casual joint based right here in Bali, created for a diverse crowd of locals and international visitors.
              </p>
              <p>
                Our secret? We focus on one thing: high-quality chicken breast tendies. Our simple, modular menu lets us nail consistent quality and minimize waste, which means you get a perfect bite every time.
              </p>
              <p>
                We're all about that perfect balance of affordability and quality, wrapped in a vibrant, trendy brand with a fresh, fun, 90s vibe.
              </p>
          </section>
        </div>
      </div>
    </div>
  );
}
