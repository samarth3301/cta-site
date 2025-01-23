"use client";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GridPattern } from "../ui/grid-pattern";

const reviews = [
  {
    name: "Alice Johnson",
    role: "Client",
    condition: "Marketing Strategy",
    body: "The agency's marketing strategy transformed our brand visibility. We saw a significant increase in engagement.",
    img: "https://avatar.vercel.sh/alice",
  },
  {
    name: "Michael Smith",
    role: "Business Owner",
    condition: "Website Development",
    body: "Thanks to the agency, our website is now user-friendly and visually appealing. Our sales have skyrocketed!",
    img: "https://avatar.vercel.sh/michael",
  },
  {
    name: "Emily Davis",
    role: "Startup Founder",
    condition: "Branding",
    body: "The branding services provided were exceptional. Our identity is now clear and resonates with our audience.",
    img: "https://avatar.vercel.sh/emily",
  },
  {
    name: "David Brown",
    role: "E-commerce Manager",
    condition: "SEO Optimization",
    body: "The SEO optimization has significantly improved our search rankings. We're getting more organic traffic than ever!",
    img: "https://avatar.vercel.sh/david",
  },
  {
    name: "Sophia Wilson",
    role: "Social Media Manager",
    condition: "Social Media Campaigns",
    body: "The agency's social media campaigns have boosted our online presence and engagement with our target audience.",
    img: "https://avatar.vercel.sh/sophia",
  },
  {
    name: "James Taylor",
    role: "Content Creator",
    condition: "Content Marketing",
    body: "Their content marketing strategy has helped us connect with our audience on a deeper level. Highly recommend!",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  role,
  condition,
  body,
}: {
  img: string;
  name: string;
  role: string;
  condition: string;
  body: string;
}) => {
  return (
    <motion.figure
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative w-80 transform cursor-pointer overflow-hidden rounded-2xl p-8",
        // light styles
        "bg-zinc-900/90 shadow-lg hover:shadow-2xl border-l-4 border-l-red-500",
      )}
    >
      <div className="flex flex-col gap-6">
        <blockquote className="relative text-base leading-relaxed text-gray-300">
          <span className="absolute -left-2 -top-2 text-4xl text-gray-500/50">
            &ldquo;
          </span>
          {body}
        </blockquote>
        <div className="mt-auto flex items-center gap-4">
          <Image
            className="h-14 w-14 rounded-full ring-4 ring-blue-100 dark:ring-blue-900"
            width={56}
            height={56}
            alt={`${name}'s avatar`}
            src={img}
          />
          <div>
            <figcaption className="text-lg font-semibold text-gray-300 dark:text-white">
              {name}
            </figcaption>
            <p className="text-sm font-medium text-gray-5 00">
              {role}
            </p>
            <p className="text-xs font-semibold text-red-500 dark:text-blue-400">
              {condition}
            </p>
          </div>
        </div>
      </div>
    </motion.figure>
  );
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      filter: "brightness(1.5) blur(4px)",
    },
    visible: {
      opacity: 1,
      filter: "brightness(1) blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative flex min-h-[600px] w-full flex-col items-center justify-center overflow-hidden py-24 relative"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        className="flex-center flex-col gap-6 text-center mb-16"
        variants={staggerContainer}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        <motion.h1
          variants={fadeInUp}
          className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-3 max-w-[900px]"
        >
          Words of praise from others About our presence.
        </motion.h1>
      </motion.div>

      <motion.div
        className="relative w-full"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Marquee pauseOnHover className="[--duration:30s] mb-8">
          {firstRow.map((review, index) => (
            <motion.div
              key={review.name}
              className="mx-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: index * 0.1 }}
            >
              <ReviewCard {...review} />
            </motion.div>
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {secondRow.map((review, index) => (
            <motion.div
              key={review.name}
              className="mx-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
            >
              <ReviewCard {...review} />
            </motion.div>
          ))}
        </Marquee>

        <motion.div
          className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/50"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        />
        <motion.div
          className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/50"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </motion.div>
      <GridPattern width={30} height={30} x={-1} y={-1} className="z-[-1]" />
    </motion.section>
  );
}
