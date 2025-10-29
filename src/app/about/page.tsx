
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
    <div 
        className="min-h-screen text-primary-foreground py-16"
        style={{
            backgroundImage: "url('/assets/images/tendies-pattern.webp')",
            backgroundSize:'400px',
            backgroundRepeat: 'repeat',
        }}
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-background/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-4 border-primary shadow-2xl">
          <header className="text-center mb-12">
            <h1
              className="font-headline text-6xl md:text-8xl font-black uppercase text-primary mb-4"
              style={{ textShadow: '4px 4px 0px hsl(var(--secondary))' }}
            >
              Fresh, Fun & Fried in Bali
            </h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-sm overflow-hidden shadow-lg border-2 border-primary transform hover:rotate-2 transition-transform duration-300 size-[100%]">
               <Image
                    src={"/assets/images/tendies-mobile.png"}
                    alt={aboutPlaceholder?.description ?? 'Vibrant photo of crispy chicken tenders'}
                    fill
                    className="object-cover"
                    data-ai-hint={aboutPlaceholder?.imageHint ?? 'chicken tenders'}
                />
            </div>
            <div className="space-y-6 text-lg md:text-xl text-left text-foreground/90 bg-card/80 p-8 rounded-sm border-2 border-primary shadow-lg transform hover:-rotate-1 transition-transform duration-300 size-[100%]">
                <p>
                We started <span className='text-primary font-bold uppercase'>tendies</span> with a radical idea: what if we made the crispiest, juiciest, most legendary chicken tenders on the planet? So we did. We're a throwback, fast-casual joint in the heart of <span className='text-primary font-bold uppercase'>bali</span>, serving up good times for locals and travelers alike.
                </p>
                <p>
                What's the secret sauce? <span className='text-primary font-bold'>Obsession</span>. We're laser-focused on one thing: perfect, high-quality <span className='text-primary font-bold uppercase'>chicken breast</span> tendies. Our streamlined menu means every single order is consistently awesome and nothing goes to waste. That's how you get the <span className='text-primary font-bold uppercase'>perfect</span> bite, every time.
                </p>
                <p>
                It’s all about premium quality without the price tag, wrapped in a <span className='text-primary font-bold uppercase'>vibrant</span> brand with a fresh-to-death 90s vibe.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
