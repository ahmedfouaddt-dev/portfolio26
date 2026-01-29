"use client";

import ImageCarousel from "@/components/ImageCarousel";

interface ClientImageCarouselProps {
  images: string[];
  compact?: boolean;
}

export default function ClientImageCarousel({
  images,
  compact = false,
}: ClientImageCarouselProps) {
  return <ImageCarousel images={images} compact={compact} />;
}
