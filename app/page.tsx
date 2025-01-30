import { Header } from "@/components/header/header";
import { CategoriesDots } from "@/components/home/categorie-dots/categoriesDots";
import { ColectionSection } from "@/components/home/colection-section/colection-section";
import { Hero } from "@/components/home/hero-section/hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CategoriesDots />
      <ColectionSection />
    </>
  );
}
