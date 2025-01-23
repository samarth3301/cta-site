"use client"
import React, { useEffect, useState } from "react";
import ExperienceCard from "../ui/ExperienceCard";
import { motion } from "framer-motion";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { GridPattern } from "../ui/grid-pattern";

interface Experience {
  _id: string;
  title: string;
  description: string;
  image: {
    asset: {
      url: string;
    };
    alt: string;
  };
  order: number;
}

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      const fetchedExperiences = await client.fetch<Experience[]>(groq`
        *[_type == "experience"] | order(order asc) {
          _id,
          title,
          description,
          image {
            asset-> {
              url
            },
            alt
          },
          order
        }
      `);
      setExperiences(fetchedExperiences);
    };

    fetchExperiences();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full px-4 py-10 md:py-20 relative"
    >
      <main className="w-full max-w-[1440px] mx-auto rounded-2xl md:rounded-3xl border border-zinc-800 bg-zinc-900/5 backdrop-blur-lg shadow-2xl">
        <div className="px-4 sm:px-6 md:px-8 py-8 md:py-16 w-full flex flex-col gap-5">
          <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent">
                Our Expertise
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 flex-end"
            >
              <p className="text-sm sm:text-base md:text-lg text-neutral-400 font-normal text-left md:text-right leading-relaxed max-w-[300px]">
                Transform ideas into reality by combining creativity, strategy,
                and expertise to deliver exceptional results.
              </p>
            </motion.div>
          </div>

          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[1px] w-full bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-800 my-8 md:my-12"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
          >
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience._id}
                index={index}
                title={experience.title}
                description={experience.description}
                image={experience.image.asset.url}
                imageAlt={experience.image.alt}
              />
            ))}
          </motion.div>w
        </div>
      </main>
      <GridPattern width={30} height={30} x={-1} y={-1} className="z-[-1]" />
    </motion.section>
  );
};

export default ExperienceSection;
