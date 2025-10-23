
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
      className="relative w-full text-card-foreground py-8 px-4 sm:px-8 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/tendies-pattern.webp')",
        backgroundSize:'400px',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="absolute inset-0 bg-background/95"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <p className="font-headline text-3xl font-black uppercase tracking-tighter text-primary">
                    TENDIES
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                    Crispy. Golden. Legendary.
                </p>
            </div>
            <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                 <Link
                    href="/menu"
                    className="text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                    Menu
                </Link>
                <Link
                    href="/about"
                    className="text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                    About
                </Link>
                <Link
                    href="/find-us"
                    className="text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                    Find Us
                </Link>
                 <Link
                    href="/order"
                    className="text-base font-medium text-primary hover:text-primary/80 transition-colors"
                >
                    Order Now
                </Link>
            </nav>
            <div className="flex justify-center items-center gap-4">
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
        </div>
        <div className="border-t border-border/20 pt-6 mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {year} Tendies. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
