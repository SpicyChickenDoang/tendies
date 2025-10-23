
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Instagram, Mail, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      className="relative w-full text-card-foreground py-16 px-4 sm:px-8 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/tendies-pattern.webp')",
        backgroundSize:'700px',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="absolute inset-0 bg-background/90"></div>
      <div className="relative max-w-7xl mx-auto text-center">
        <h2
          className="font-headline text-5xl sm:text-6xl font-black uppercase tracking-tighter text-primary mb-6"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
        >
          Dip It. Lock It. Get Jiggy With It!
        </h2>
        <Button
          asChild
          size="lg"
          className="font-bold text-lg px-8 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-10"
        >
          <Link href="/order" className="flex items-center justify-center">
            Order Now
          </Link>
        </Button>
        <div className="flex justify-center items-center gap-6 mb-10">
          <Link
            href="/menu"
            className="text-lg font-medium text-primary hover:text-primary/70 transition-colors"
          >
            See Menu
          </Link>
          <Link
            href="/find-us"
            className="text-lg font-medium text-primary hover:text-primary/70 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="#"
            className="text-lg font-medium text-primary hover:text-primary/70 transition-colors"
          >
            Instagram
          </Link>
        </div>
        <div className="flex justify-center items-center gap-4 mb-8">
          <Link href="#" aria-label="Instagram">
            <Instagram className="w-6 h-6 text-secondary hover:text-primary transition-colors" />
          </Link>
          <Link href="#" aria-label="Email">
            <Mail className="w-6 h-6 text-secondary hover:text-primary transition-colors" />
          </Link>
          <Link href="#" aria-label="Phone">
            <Phone className="w-6 h-6 text-secondary hover:text-primary transition-colors" />
          </Link>
        </div>
        <div className="border-t border-border/20 pt-8">
          <p className="font-headline text-3xl font-black uppercase tracking-tighter">
            TENDIES
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            &copy; {year} Tendies. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
