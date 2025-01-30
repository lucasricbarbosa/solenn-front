"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";

interface AnimatedArrowButtonProps {
  text: string;
  className?: string;
}

export default function AnimatedArrowButton({
  text,
  className,
}: AnimatedArrowButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      className="group h-full bg-transparent hover:bg-transparent flex items-center overflow-hidden w-fit justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "bg-white text-foreground font-medium rounded text-base h-9 py-2 px-10 ",
          className
        )}
      >
        {text}
      </div>
      <motion.div
        className="flex items-center justify-center ml-1 bg-white  rounded-full overflow-hidden"
        initial={{ width: 0, height: 0, opacity: 0 }}
        animate={{
          width: isHovered ? 36 : 0,
          height: isHovered ? 36 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <motion.div
          initial={{ rotate: 0, x: "-50%" }}
          animate={{
            rotate: isHovered ? 360 : 0,
            x: isHovered ? 0 : "-50%",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <ArrowUpRight className="size-6 text-foreground" />
        </motion.div>
      </motion.div>
    </Button>
  );
}
