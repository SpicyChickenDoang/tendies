'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { type ImagePlaceholder } from '@/lib/placeholder-images';

interface MenuCardProps {
  placeholder?: ImagePlaceholder;
  title: string;
  tagline: string;
}

export function MenuCard({ placeholder, title, tagline }: MenuCardProps) {
  const imageUrl =
    placeholder?.imageUrl ?? 'https://picsum.photos/seed/menucard/600/800';
  const description = placeholder?.description ?? `A photo of ${title}`;
  const imageHint = placeholder?.imageHint ?? 'chicken tenders';

  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-2xl shadow-black/50 transform hover:scale-105 transition-transform duration-500 ease-in-out">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/30 z-10" />
      <Image
        src={imageUrl}
        alt={description}
        width={600}
        height={800}
        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
        data-ai-hint={imageHint}
      />
      <div className="absolute bottom-0 left-0 p-6 z-20 text-white w-full">
        <h3 className="font-headline text-3xl font-black uppercase text-primary tracking-tight" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
          {title}
        </h3>
        <p className="text-base font-semibold uppercase tracking-wider mb-4">
          {tagline}
        </p>
        {/* <Button
            size="sm"
            variant="secondary"
            className="w-full font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Add to Order
        </Button> */}
      </div>
    </div>
  );
}