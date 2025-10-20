import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function OrderPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-primary-foreground p-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
          Order Now
        </h1>
        <p className="mb-8 text-lg md:text-xl max-w-md">
          This is where the amazing journey to delicious tendies would begin.
          Get ready!
        </p>
        <Button asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
