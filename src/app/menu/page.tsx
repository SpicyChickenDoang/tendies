
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function MenuPage() {
  const menuItems = [
    {
      title: 'Core Meal (39k IDR)',
      description: 'The perfect starting point. Three of our signature crispy tenders. Simple, delicious, and waiting for sauce.',
    },
    {
      title: 'Combo Up!',
      description: 'Make it a meal. Add our perfectly seasoned fries and a drink to any tendie order.',
    },
    {
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
    <div className="min-h-screen bg-secondary text-primary-foreground">
      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="outline" className="bg-background text-foreground hover:bg-accent hover:text-accent-foreground mb-8">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Go Back Home
            </Link>
          </Button>

          <header className="text-center mb-12">
            <h1
              className="font-headline text-6xl md:text-8xl font-black uppercase text-primary mb-4"
              style={{ textShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
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
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
            >
              Build Your Combo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {menuItems.map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border/20 shadow-lg">
                  <h3 className="font-headline text-2xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-card-foreground/80">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="the-sauces" className="mb-16">
            <h2
              className="font-headline text-4xl md:text-5xl font-bold uppercase text-primary mb-8 text-center"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
            >
              The Sauce Bar is the Star
            </h2>
            <p className='text-center text-lg text-foreground/90 mb-8 -mt-4'>This is where the magic happens. Every tendie needs a partner in crime. Choose your player from our lineup of unique, must-try flavors.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
              {sauces.map((sauce, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-headline text-xl font-semibold text-primary">{sauce.title}</h3>
                  <p className="text-sm text-foreground/70">{sauce.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="motherlode">
            <Card className="bg-primary/90 border-2 border-primary text-primary-foreground shadow-2xl shadow-primary/20 overflow-hidden">
                <CardContent className="p-8 text-center">
                  <h2 className="font-headline text-4xl font-black uppercase text-secondary mb-2" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.3)' }}>
                    Need More Sauce?
                  </h2>
                  <p className="text-lg text-primary-foreground/90">
                    Ask for <strong className='font-bold text-secondary'>"The Motherlode"</strong> — a legendary 32oz cup of your favorite sauce, made for our superfans.
                  </p>
                </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
