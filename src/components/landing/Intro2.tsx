'use client';

import Image from 'next/image';
import { type ImagePlaceholder } from '@/lib/placeholder-images';
import useIsMobile from '@/app/lib/useIsMobile';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GradientText } from "@/components/ui/shadcn-io/gradient-text";


interface IntroProps {
  placeholder?: ImagePlaceholder;
}

export function Intro2({ placeholder }: IntroProps) {
  const isMobile = useIsMobile();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 30
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Define carousel images
  const carouselImages = [
    {
      mobile: '/assets/images/lp-1.webp',
      desktop: '/assets/images/lp-1.webp',
      alt: 'Crispy chicken tenders in a vibrant setting'
    },
    {
      mobile: '/assets/images/lp-2.webp',
      desktop: '/assets/images/lp-2.webp',
      alt: 'Golden fried chicken with dipping sauces'
    },
    {
      mobile: '/assets/images/lp-3.webp',
      desktop: '/assets/images/lp-3.webp',
      alt: 'Fresh chicken tenders platter'
    }
  ];

  return (
    <section
      id="intro"
      className="relative w-full bg-background text-foreground h-screen overflow-hidden"
    >
      {/* Carousel Container */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative h-full"
            >
              <div className="absolute inset-0">
                <Image
                  src={isMobile ? image.mobile : image.desktop}
                  alt={image.alt}
                  fill
                  // height={100}
                  // width={100}
                  priority={index === 0}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className="object-contain"
                  sizes="100vw"
                />
                {/* Overlay gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button> */}

      {/* Text Content */}
      <div className="absolute bottom-6 left-0 right-0 z-20 text-center px-4">
        <h1
          className="text-6xl text-white font-black uppercase leading-tight"
          style={{ textShadow: '0 6px 20px rgba(255, 215, 0, 0.8)' }}
        >
          This Chicken Hits Different.
        </h1>
      </div>

      {/* Dot Indicators */}
      {/* <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              index === selectedIndex 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/80 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </section>
  );
}