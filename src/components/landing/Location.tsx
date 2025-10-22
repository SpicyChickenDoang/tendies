'use client';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { type ImagePlaceholder } from '@/lib/placeholder-images';
import Link from 'next/link';

interface LocationProps {
  placeholder?: ImagePlaceholder;
}

export function Location({ placeholder }: LocationProps) {
  const mapImageUrl =
    placeholder?.imageUrl ?? 'https://picsum.photos/seed/bali-map/1200/800';

  return (
    <section
      id="location"
      className="w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center bg-primary p-8 shadow-2xl shadow-black/30">
        <div className="text-center md:text-left">
          <h2
            className="font-headline text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-secondary mb-4"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
          >
            Find Your Tendies.
          </h2>
          <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-md mx-auto md:mx-0 mb-8">
            Available for pickup and delivery across Bali. Order now on GoFood &
            GrabFood.
          </p>
          <div className="flex justify-center md:justify-start items-center gap-4">
            {/* <GoFoodIcon />
            <GrabFoodIcon /> */}
          </div>
        </div>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg shadow-black/50">
          <Image
            src={mapImageUrl}
            alt={placeholder?.description ?? 'Map of Bali'}
            fill
            className="object-cover"
            data-ai-hint={placeholder?.imageHint ?? 'map Bali'}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <MapPin
              className="w-16 h-16 text-blue-700 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] animate-bounce"
              strokeWidth={1.5}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-50" />
        </div>
        <div className='flex items-center gap-5'>

          <Link href="https://gofood.link/a/Q9vkRR7" target="_blank" rel="noopener noreferrer" className="animate-bounce delay-200">
            {/* <MapPin size={32} color="green" /> */}
            <Image
              src="/assets/icons/gofood.png"
              alt="GoFood Logo"
              width={100}
              height={100}
            />
          </Link>
          <Link href="https://r.grab.com/g/6-0ABEA09D71BF4051BA2D692FA67DEB22_MEXMPS-6-C7DTJ4DZDELHBA" target="_blank" rel="noopener noreferrer" className="animate-bounce delay-200">
            {/* <MapPin size={100} color="blue" /> */}
            <Image
              src="/assets/icons/grabfood.png"
              alt="GoFood Logo"
              width={100}
              height={100}
            />
          </Link>
          <Link href="https://gofood.link/a/Q9vkRR7" target="_blank" rel="noopener noreferrer" className="animate-bounce delay-200">
            {/* <MapPin size={100} color="red" /> */}
            <Image
              src="/assets/icons/gmaps.png"
              alt="GoFood Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
