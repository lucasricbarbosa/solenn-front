import { categories } from "@/utils/categories";
import { CategorieDot } from "./components/categorieDot";

export function CategoriesDots() {
  return (
    <div className="flex items-center py-10 justify-center w-full gap-8">
      {categories.map((categorie, index) => (
        <CategorieDot key={index} {...categorie} />
      ))}
    </div>
  );
}
