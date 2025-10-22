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

        <div className="flex flex-col sm:flex-row items-center gap-6 mt-6">
          <div className='flex items-center gap-5'>

            <Link href="https://gofood.link/a/Q9vkRR7" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/icons/gofood.png"
                alt="GoFood Logo"
                width={300}
                height={300}
              />
            </Link>
            <Link href="https://r.grab.com/g/6-0ABEA09D71BF4051BA2D692FA67DEB22_MEXMPS-6-C7DTJ4DZDELHBA" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/icons/grabfood.png"
                alt="GoFood Logo"
                width={300}
                height={300}
              />
            </Link>
            <Link href="https://gofood.link/a/Q9vkRR7" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/icons/gmaps.png"
                alt="GoFood Logo"
                width={300}
                height={300}
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center mt-10">
          <Button asChild variant="outline" size="lg" className="bg-transparent text-foreground border-2 border-current font-bold text-lg px-8 py-6 rounded-full hover:bg-foreground hover:text-background">
            <Link href="/#about">
              <ArrowLeft className="mr-2 h-4 w-4" /> Go Back Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
