import { generateFoodImages } from '@/ai/flows/generate-food-images';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BookOpenText, Drumstick } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  let imageUrl: string;
  const placeholder = PlaceHolderImages.find((img) => img.id === 'hero-tenders');

  try {
    const result = await generateFoodImages({
      description:
        'A cinematic, premium food photography close-up of golden, crunchy, and juicy chicken tenders. The tenders have glossy highlights and are under warm, appetizing lighting. The background is a clean, dark, out-of-focus surface. The aesthetic is high-contrast, confident, and playful, like a Shake Shack or Wingstop ad.',
    });
    imageUrl = result.imageUrl;
  } catch (error) {
    console.error('Failed to generate food image:', error);
    imageUrl =
      placeholder?.imageUrl ?? 'https://picsum.photos/seed/tendies1/800/600';
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8 overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center w-full max-w-5xl mx-auto">
        <div
          className="flex flex-col items-center gap-2 mb-8"
          style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.4)' }}
        >
          <h1 className="font-headline text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tighter">
            TENDIES
          </h1>
          <p className="font-headline text-lg sm:text-xl md:text-2xl font-semibold uppercase tracking-wider text-primary">
            Crispy. Golden. Legendary.
          </p>
        </div>

        <div className="relative w-full max-w-3xl aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/50 mb-10 transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <Image
            src={imageUrl}
            alt={
              placeholder?.description ?? 'Deliciously golden chicken tenders'
            }
            fill
            className="object-cover"
            priority
            data-ai-hint={placeholder?.imageHint ?? 'chicken tenders'}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button
            asChild
            size="lg"
            className="font-bold text-lg px-8 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Link href="/order" className="flex items-center justify-center">
              <Drumstick className="mr-2 h-5 w-5" />
              Order Now
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="font-bold text-lg px-8 py-6 rounded-full border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-background transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Link href="/menu" className="flex items-center justify-center">
              <BookOpenText className="mr-2 h-5 w-5" />
              See Menu
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
