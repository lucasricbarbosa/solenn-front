import { CategorieDotProps } from "@/utils/categories";
import Image from "next/image";
import Link from "next/link";

export function CategorieDot({ image, name, url }: CategorieDotProps) {
  return (
    <Link className="flex flex-col items-center gap-2" href={url}>
      <div className="size-20 rounded-full overflow-hidden shadow">
        <Image
          width={80}
          height={80}
          className="size-20 object-cover"
          src={image}
          alt={`Categoria de ${name}`}
        />
      </div>
      <span>{name}</span>
    </Link>
  );
}
