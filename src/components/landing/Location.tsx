'use client';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { type ImagePlaceholder } from '@/lib/placeholder-images';

const GoFoodIcon = () => (
  <svg
    width="80"
    height="24"
    viewBox="0 0 80 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.932 12.016c0-4.04-3.232-7.304-7.22-7.304H0V20h3.712c3.988 0 7.22-3.264 7.22-7.304V12.016zm-3.616 0c0 2.02-1.588 3.632-3.604 3.632H3.64V8.36h.072c2.016 0 3.604 1.612 3.604 3.656v0zM19.382 12.892l2.484-4.832h-3.4L16.27 12.82l-2.22-4.76h-3.4l3.96 8.524V20h3.64V12.892h.132zM27.243 4.712h3.64V20h-3.64V4.712zM40.245 12.28c0-2.828-2.02-4.816-4.9-4.816-2.888 0-4.908 1.988-4.908 4.816 0 2.84 2.02 4.824 4.908 4.824 2.88 0 4.9-1.984 4.9-4.824zm-3.616 0c0 1.016-.624 1.832-1.284 1.832s-1.292-.816-1.292-1.832c0-1.008.624-1.824 1.292-1.824s1.284.816 1.284 1.824zM53.111 4.712c-3.92 0-6.684 2.916-6.684 6.992v.288c0 4.068 2.764 6.992 6.684 6.992 2.748 0 4.74-1.348 5.4-3.3l-3.208-1.22c-.3.816-1.044 1.296-2.192 1.296-1.4 0-2.484-1.008-2.6-2.312h5.548v-.76c0-3.9-2.26-6.976-5.548-6.976zm-2.048 5.28c.152-1.428 1.092-2.328 2.22-2.328 1.068 0 1.932.828 2.084 2.328h-4.304v0zM68.046 12.016c0-4.04-3.232-7.304-7.22-7.304H57.11V20h3.712c3.988 0 7.22-3.264 7.22-7.304V12.016zm-3.616 0c0 2.02-1.588 3.632-3.604 3.632h-.072V8.36h.072c2.016 0 3.604 1.612 3.604 3.656v0zM79.355 7.492c-1.224-1.3-2.98-2.08-4.864-2.08-3.424 0-5.748 2.4-5.748 5.616 0 3.24 2.324 5.624 5.748 5.624 1.884 0 3.64-.78 4.864-2.088V20h3.64V4.712h-3.64v2.78zM74.499 13.04c-1.344 0-2.136-.912-2.136-2.048 0-1.128.792-2.04 2.136-2.04 1.352 0 2.136.912 2.136 2.04 0 1.136-.784 2.048-2.136 2.048z"
      fill="#00AA13"
    />
  </svg>
);

const GrabFoodIcon = () => (
  <svg
    width="80"
    height="24"
    viewBox="0 0 125 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M121.327 16.7115C121.327 15.6033 121.536 14.5375 121.921 13.56H109.919V22.0999H116.035V19.7214H112.515V15.7565H117.065V13.56H107.24V24.3001H120.306C121.676 24.3001 122.951 23.9519 124.048 23.321L121.327 16.7115Z"
      fill="#00B14F"
    />
    <path d="M102.348 24.3H104.998V11.2599H102.348V24.3Z" fill="#00B14F" />
    <path
      d="M93.0469 24.3L95.6969 11.26H99.4669L96.8169 24.3H93.0469Z"
      fill="#00B14F"
    />
    <path
      d="M83.693 24.3L86.343 11.26H90.113L87.463 24.3H83.693Z"
      fill="#00B14F"
    />
    <path d="M79.5414 11.26V24.3H76.8914V11.26H79.5414Z" fill="#00B14F" />
    <path
      d="M68.0833 11.26H71.3933C74.0133 11.26 75.7233 12.63 75.7233 15.01C75.7233 16.59 74.8333 17.61 73.5633 18.02L76.1133 24.3H72.8833L70.7333 18.8H69.4533V24.3H66.7133V11.26H68.0833ZM69.4533 13.56V16.72H71.0433C72.5633 16.72 73.1833 16.03 73.1833 15.01C73.1833 13.99 72.5633 13.56 71.0433 13.56H69.4533Z"
      fill="#00B14F"
    />
    <path
      d="M36.1915 24.3L38.8415 11.26H42.6115L39.9615 24.3H36.1915Z"
      fill="#00B14F"
    />
    <path d="M49.2057 11.26H51.8557V24.3H49.2057V11.26Z" fill="#00B14F" />
    <path
      d="M61.8845 11.26L57.5645 24.3H54.1545L58.4745 11.26H61.8845Z"
      fill="#00B14F"
    />
    <path
      d="M29.5391 18.15C29.5391 21.6 26.8391 24.3 23.3891 24.3C19.9391 24.3 17.2391 21.6 17.2391 18.15C17.2391 14.7 19.9391 12 23.3891 12C26.8391 12 29.5391 14.7 29.5391 18.15ZM19.8891 18.15C19.8891 20.14 21.4691 21.72 23.3891 21.72C25.3091 21.72 26.8891 20.14 26.8891 18.15C26.8891 16.16 25.3091 14.58 23.3891 14.58C21.4691 14.58 19.8891 16.16 19.8891 18.15Z"
      fill="#00B14F"
    />
    <path d="M31.2988 24.3H33.9488V12H31.2988V24.3Z" fill="#00B14F" />
    <path d="M43.7197 24.3H46.3697V12H43.7197V24.3Z" fill="#00B14F" />
    <path
      d="M0 18.15C0 14.52 2.85 11.82 6.48 11.82C8.55 11.82 10.15 12.63 11.25 13.91L9.42 15.42C8.7 14.59 7.72 14.19 6.66 14.19C4.8 14.19 3.51 15.69 3.51 18.02C3.51 20.35 4.8 21.85 6.66 21.85C7.72 21.85 8.7 21.45 9.42 20.62L11.25 22.12C10.15 23.4 8.55 24.15 6.48 24.15C2.85 24.15 0 21.45 0 18.15Z"
      fill="#00B14F"
    />
    <path d="M11.8906 12H14.5406V24.3H11.8906V12Z" fill="#00B14F" />
  </svg>
);

interface LocationProps {
  placeholder?: ImagePlaceholder;
}

export function Location({ placeholder }: LocationProps) {
  const mapImageUrl =
    placeholder?.imageUrl ?? 'https://picsum.photos/seed/bali-map/1200/800';

  return (
    <section
      id="location"
      className="w-full max-w-7xl mx-auto p-4 sm:p-8 my-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center bg-card p-8 rounded-3xl shadow-2xl shadow-black/30">
        <div className="text-center md:text-left">
          <h2
            className="font-headline text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-primary mb-4"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
          >
            Find Your Tendies.
          </h2>
          <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-md mx-auto md:mx-0 mb-8">
            Available for pickup and delivery across Bali. Order now on GoFood &
            GrabFood.
          </p>
          <div className="flex justify-center md:justify-start items-center gap-4">
            <GoFoodIcon />
            <GrabFoodIcon />
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
              className="w-16 h-16 text-primary drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] animate-bounce"
              strokeWidth={1.5}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-50" />
        </div>
      </div>
    </section>
  );
}
