
'use client';

import { Button } from '@/components/ui/button';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { ArrowLeft, MapPin, Clock, Navigation } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function FindUsPage() {
  const mapPlaceholder: ImagePlaceholder | undefined = PlaceHolderImages.find(
    (img) => img.id === 'bali-map'
  );

  return (
    <div className="relative min-h-screen bg-background text-primary-foreground overflow-x-hidden">
        <div className="absolute inset-0 z-0">
            <Image
            src={mapPlaceholder?.imageUrl ?? 'https://picsum.photos/seed/menu-bg/1920/1080'}
            alt={mapPlaceholder?.description ?? 'Map of Bali'}
            fill
            className="object-cover"
            data-ai-hint={mapPlaceholder?.imageHint ?? 'map Bali'}
            />
            <div className="absolute inset-0 bg-background/80 backdrop-blur-md"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
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
                    Come Get Your Tendies
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto text-foreground/90">
                    Find us in Bali. We've got a cool, welcoming atmosphere waiting for you. Swing by to crush your craving.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
                        <Image
                            src={mapPlaceholder?.imageUrl ?? 'https://picsum.photos/seed/bali-map/1200/800'}
                            alt={mapPlaceholder?.description ?? 'Map of our location in Bali'}
                            fill
                            className="object-cover"
                            data-ai-hint={mapPlaceholder?.imageHint ?? 'Bali map'}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <MapPin
                            className="w-16 h-16 text-primary drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)] animate-bounce"
                            strokeWidth={1.5}
                            />
                        </div>
                    </div>
                    <div className="space-y-8 text-lg text-left text-foreground/90 bg-card/20 p-8 rounded-2xl border border-border/10">
                        <div>
                            <h3 className="font-headline text-2xl font-bold text-primary mb-2 flex items-center">
                                <Navigation className="mr-3 h-6 w-6" />
                                Address
                            </h3>
                            <p className="text-foreground">
                                Pengubengan Kauh No. 79X, Kerobokan, Badung, Bali
                            </p>
                        </div>
                         <div>
                            <h3 className="font-headline text-2xl font-bold text-primary mb-2 flex items-center">
                                <Clock className="mr-3 h-6 w-6" />
                                Hours
                            </h3>
                            <div className="space-y-1">
                                <p><strong className="font-semibold text-secondary">Mon - Thu:</strong> 10am - 12am</p>
                                <p><strong className="font-semibold text-secondary">Fri - Sun:</strong> 9am - 3am</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
