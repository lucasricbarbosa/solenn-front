import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const separatorVariants = cva("bg-muted-foreground", {
  variants: {
    variant: {
      horizontal: "h-px",
      vertical: "w-px",
    },
  },
  defaultVariants: {
    variant: "vertical",
  },
});

interface SeparatorProps extends VariantProps<typeof separatorVariants> {
  className?: string;
}

export function Separator({ variant, className }: SeparatorProps) {
  return <div className={cn(separatorVariants({ variant, className }))} />;
}
