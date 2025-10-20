'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function OrderPage() {
  const takeawayPlaceholder = PlaceHolderImages.find(
    (img) => img.id === 'takeaway-bags'
  );
  const takeawayImageUrl =
    takeawayPlaceholder?.imageUrl ??
    'https://picsum.photos/seed/takeaway-bags/1200/800';

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-background text-primary-foreground overflow-hidden p-8">
      <div className="absolute inset-0 z-0">
        <Image
          src={takeawayImageUrl}
          alt={
            takeawayPlaceholder?.description ??
            'Tendies takeaway bags floating'
          }
          fill
          className="object-cover"
          data-ai-hint={takeawayPlaceholder?.imageHint ?? 'takeaway bags'}
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 text-center flex flex-col items-center">
        <h1
          className="text-6xl md:text-8xl font-black uppercase text-primary mb-4"
          style={{ textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}
        >
          Order Now
        </h1>
        <p
          className="mb-8 text-lg md:text-xl max-w-md text-foreground"
          style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}
        >
          The amazing journey to delicious tendies is just a few clicks away.
          Get ready!
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button
            size="lg"
            className="font-bold text-lg px-8 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            Start My Order
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-transparent text-foreground border-2 border-current font-bold text-lg px-8 py-6 rounded-full hover:bg-foreground hover:text-background">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Go Back Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
