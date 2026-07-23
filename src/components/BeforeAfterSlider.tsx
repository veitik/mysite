"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Было",
  afterAlt = "Стало",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  // Allow clicking anywhere to jump
  const onClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-xl overflow-hidden cursor-ew-resize select-none border border-brand-border"
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onClick={onClick}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchEnd={() => setIsDragging(false)}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* Before Image (Old Site) */}
      <Image
        src={beforeImage}
        alt={beforeAlt}
        fill
        className="object-cover pointer-events-none"
        priority
      />
      <div className="absolute top-4 left-4 bg-brand-bg/80 backdrop-blur-sm px-3 py-1 rounded-md text-sm font-medium border border-brand-border/50 z-10 pointer-events-none">
        Было
      </div>

      {/* After Image (New Site) - Clipped */}
      <div
        className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
        style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
      >
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div
        className="absolute top-4 right-4 bg-brand-primary/90 text-brand-white backdrop-blur-sm px-3 py-1 rounded-md text-sm font-medium border border-brand-primary/50 z-30 pointer-events-none transition-opacity duration-300"
        style={{ opacity: sliderPosition < 80 ? 1 : 0 }}
      >
        Стало
      </div>

      {/* Slider Line & Handle */}
      <div
        className="absolute top-0 bottom-0 z-30 w-1 bg-brand-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize pointer-events-none"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-brand-white rounded-full flex items-center justify-center shadow-lg pointer-events-auto hover:scale-110 transition-transform text-brand-bg">
          <MoveHorizontal size={18} />
        </div>
      </div>
    </div>
  );
}
