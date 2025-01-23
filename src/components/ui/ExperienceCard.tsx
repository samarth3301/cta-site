"use client"
import { CornerRightUp } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  index: number;
}

const ExperienceCard = ({
  title,
  description,
  image,
  imageAlt,
  index
}: ExperienceCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group w-full h-full px-4 py-5 bg-zinc-900/80 hover:bg-zinc-800/80 transition-all duration-300 flex flex-col gap-4 rounded-xl sm:rounded-2xl border border-zinc-800 hover:border-zinc-700"
    >
      <div className="flex-1 w-full flex flex-col">
        <div className="w-full flex items-start justify-between gap-3">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: (index * 0.1) + 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl md:text-2xl text-zinc-100 font-bold tracking-tight line-clamp-2"
          >
            {title || 'missing'}
          </motion.h1>
          <motion.div 
            whileHover={{ rotate: -45 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex-shrink-0 p-1.5 sm:p-2 rounded-lg bg-zinc-800/50 group-hover:bg-zinc-700/50 transition-colors"
          >
            <CornerRightUp
              className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-400 group-hover:text-zinc-200 transition-colors"
            />
          </motion.div>
        </div>
        <span className="h-[1px] w-full bg-zinc-800 my-3"></span>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: (index * 0.1) + 0.3 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed line-clamp-4"
        >
          {description || 'missing'}
        </motion.p>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: (index * 0.1) + 0.4 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <Image 
          src={image} 
          alt={imageAlt} 
          width={1920} 
          height={1080} 
          className={cn(
            "w-full h-[140px] rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300",
            "bg-zinc-800/50 shadow-lg hover:shadow-2xl border-l-4 border-l-zinc-700 backdrop-blur-sm"
          )} 
        />
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;
