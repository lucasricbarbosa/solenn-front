import { HeroCarousel } from "./carousel/hero-carousel";

export function Hero() {
  return (
    <main className="h-[840px] relative max-w-[2400px] mx-auto bg-foreground max-h-[90dvh] mb-10">
      <HeroCarousel />
    </main>
  );
}
