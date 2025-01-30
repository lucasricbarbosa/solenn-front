import { NavigateButton } from "@/components/navigate-button";

export function ColectionSection() {
  return (
    <section className="max-w-7xl px-5 mx-auto pt-16">
      <div className="flex flex-col gap-5">
        <span className="uppercase text-base">Coleção</span>
        <h2 className="font-medium text-5xl">Nossa coleção de produtos</h2>
        <div className="flex items-center justify-between">
          <p className="max-w-xl">
            Explore our curated collection of premium furniture, blending
            timeless design, exceptional quality and modern comfort
          </p>
          <NavigateButton text="Ver todos" url="#" />
        </div>
      </div>
    </section>
  );
}
