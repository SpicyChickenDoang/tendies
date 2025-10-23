
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { ArrowLeft, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MenuPage() {
  const menuItems = [
    {
      id: 'core-meal',
      title: 'Core Meal (39k IDR)',
      description: 'The perfect starting point. Three of our signature crispy tenders. Simple, delicious, and waiting for sauce.',
    },
    {
      id: 'combo-up',
      title: 'Combo Up!',
      description: 'Make it a meal. Add our perfectly seasoned fries and a drink to any tendie order.',
    },
    {
      id: 'party-pack',
      title: 'Party Pack',
      description: "Bring the crew. A massive box of our crispy tenders, perfect for sharing. Or not. We don't judge.",
    },
  ];

  const sauces = [
    { title: 'TENDIES Sauce (House)', description: 'The secret signature. You gotta try it.' },
    { title: 'Classic Ranch', description: 'Cool, creamy, and classic for a reason.' },
    { title: 'Honey Mustard', description: 'That perfect blend of sweet with a zing.' },
    { title: 'Zesty Lime Crema', description: 'A fresh, citrusy kick to cut through the crunch.' },
    { title: 'Hot Honey', description: 'For those who like it sweet with a little heat.' },
    { title: 'Classic BBQ', description: 'Smoky, bold, and everything you want it to be.' },
  ];

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
        <div className="max-w-5xl mx-auto bg-background/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-4 border-primary shadow-2xl">
            <header className="text-center mb-12">
                <h1
                className="font-headline text-6xl md:text-8xl font-black uppercase text-primary mb-4"
                style={{ textShadow: '4px 4px 0px hsl(var(--secondary))' }}
                >
                The Menu
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto text-foreground/90">
                Craving that unforgettable crunch? You found it. We're TENDIES, Bali's home for high-quality chicken fingers served with a side of freshness and fun. It’s simple: Bold flavors, a cool vibe, and the best chicken tendies you’ve ever had.
                </p>
            </header>

            <section id="the-meals" className="mb-16">
                <h2
                className="font-headline text-4xl md:text-5xl font-bold uppercase text-primary mb-8 text-center"
                style={{ textShadow: '3px 3px 0px hsl(var(--secondary))' }}
                >
                Build Your Combo
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 justify-center">
                {menuItems.map((item, index) => {
                  const placeholder = PlaceHolderImages.find(p => p.id === item.id);
                  return (
                    <div key={index} className="bg-card rounded-lg border-2 border-primary shadow-lg transform hover:-rotate-2 transition-transform duration-300 overflow-hidden flex flex-col md:last:col-span-2 lg:last:col-span-1 md:[&:nth-child(3)]:last:md:col-start-1 md:[&:nth-child(3)]:last:md:col-end-3 lg:[&:nth-child(3)]:last:lg:col-start-auto lg:[&:nth-child(3)]:last:lg:col-end-auto">
                      {placeholder && (
                        <div className="relative w-full aspect-[4/3]">
                          <Image
                            src={placeholder.imageUrl}
                            alt={placeholder.description}
                            fill
                            className="object-cover"
                            data-ai-hint={placeholder.imageHint}
                          />
                        </div>
                      )}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-headline text-2xl font-bold text-primary mb-2">{item.title}</h3>
                        <p className="text-card-foreground/80 flex-grow">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
                </div>
            </section>

            <section id="the-sauces" className="mb-16 bg-primary/90 rounded-2xl p-8 border-2 border-secondary shadow-inner-lg">
                <h2
                className="font-headline text-4xl md:text-5xl font-bold uppercase text-secondary mb-4 text-center"
                style={{ textShadow: '3px 3px 0px hsla(var(--primary-foreground), 0.2)' }}
                >
                The Sauce Bar is the Star
                </h2>
                <p className='text-center text-lg text-primary-foreground/90 mb-8 -mt-2 max-w-2xl mx-auto'>This is where the magic happens. Every tendie needs a partner in crime. Choose your player from our lineup of unique, must-try flavors.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                {sauces.map((sauce, index) => (
                    <div key={index} className="text-center flex items-center justify-center gap-2">
                         <Star className="w-4 h-4 text-secondary/80 hidden sm:block" />
                         <div>
                            <h3 className="font-headline text-xl font-semibold text-secondary">{sauce.title}</h3>
                            <p className="text-sm text-primary-foreground/80">{sauce.description}</p>
                         </div>
                    </div>
                ))}
                </div>
            </section>

            <section id="motherlode">
                <Card className="bg-card border-4 border-primary text-card-foreground shadow-2xl shadow-primary/20 overflow-hidden transform rotate-1">
                    <CardContent className="p-8 text-center">
                    <h2 className="font-headline text-4xl font-black uppercase text-primary mb-2" style={{ textShadow: '2px 2px 0px hsl(var(--secondary))' }}>
                        Need More Sauce?
                    </h2>
                    <p className="text-lg text-foreground/90">
                        Ask for <strong className='font-bold text-primary'>"The Motherlode"</strong> — a legendary 32oz cup of your favorite sauce, made for our superfans.
                    </p>
                    </CardContent>
                </Card>
            </section>
        </div>
      </div>
    </div>
  );
}
