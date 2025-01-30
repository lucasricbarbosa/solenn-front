"use client";

import { CarouselItem } from "@/components/ui/carousel";
import { FlipWords } from "@/components/ui/flip-words";
import { ArrowDownRight } from "lucide-react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AnimatedArrowButton from "@/components/ui/animated-arrow-button";

const words = ["Better", "Cute", "Beautiful", "Modern"];

interface HeroCarouselItemProps {
  heroTextClassName?: string;
  flipWords?: string[];
  heroTitle: string;
  subtitle: string;
}

export const HeroCarouselItem = ({
  heroTextClassName,
  flipWords,
  heroTitle,
  subtitle,
}: HeroCarouselItemProps) => (
  <CarouselItem className="px-10 pb-10 bg-blue-600">
    <div className="flex flex-col relative justify-center  text-white gap-8 h-[840px]">
      <section className={cn("text-6xl", heroTextClassName)}>
        <div className="pl-12">
          {"//"}
          {flipWords && <FlipWords className=" text-white" words={words} />}
        </div>
        <h1 className="max-w-2xl">{heroTitle}</h1>
      </section>
      <section className="max-w-[454px] flex gap-2">
        <ArrowDownRight className="size-6" />
        <span>{subtitle}</span>
      </section>
      <div className="absolute ml-2 bottom-4 mx-auto left-1/2 -translate-x-1/2">
        <AnimatedArrowButton text="Compre agora" />
      </div>
    </div>
  </CarouselItem>
);

export const HeroCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <HeroCarouselItem
              heroTitle="vstore swag"
              subtitle="Show you vstore pride, get high-quality swag directly from the vstore
          foundation"
              flipWords={words}
              key={index}
            />
          ))}
        </CarouselContent>
        <CarouselPrevious className="right-20 left-auto top-32 bg-white/25 text-white" />
        <CarouselNext className="right-10 top-32 bg-white/25 text-white" />
      </Carousel>
      <div className="mt-2 absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
        {Array.from({ length: count }).map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className={cn(
              "h-3 w-3 rounded-full p-0",
              index === current - 1 ? "bg-primary" : "bg-muted"
            )}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};
