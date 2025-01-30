"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigateButtonProps {
  url: string;
  text: string;
  className?: string;
}

const arrowVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

export function NavigateButton({ url, text, className }: NavigateButtonProps) {
  return (
    <Link
      className={cn("hover:underline flex items-center gap-1", className)}
      href={url}
    >
      <motion.div
        className="flex items-center gap-1"
        whileHover="visible"
        initial="hidden"
      >
        <span>{text}</span>
        <motion.div
          variants={arrowVariants}
          transition={{ duration: 0.2, stiffness: 400 }}
        >
          <ArrowUpRight className="size-5" />
        </motion.div>
      </motion.div>
    </Link>
  );
}
