import { cn } from "@/lib/utils";

interface CarouselBulletsProps {
  totalSlides: number;
  activeIndex: number;
  onBulletClick: (index: number) => void;
}

export function CarouselBullets({
  totalSlides,
  activeIndex,
  onBulletClick,
}: CarouselBulletsProps) {
  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          className={cn(
            "w-3 h-3 rounded-full transition-all",
            activeIndex === index ? "bg-white" : "bg-white/50"
          )}
          onClick={() => onBulletClick(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
