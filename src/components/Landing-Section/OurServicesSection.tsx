"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GridPattern } from "../ui/grid-pattern";

interface ServiceItem {
  id: string;
  title: string;
  description?: string;
  isExpanded?: boolean;
  image?: string;
}

const OurServicesSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const services: ServiceItem[] = [
    {
      id: "01",
      title: "Performance Marketing",
      description:
        "Achieve measurable growth with precision-targeted campaigns driven by insights and analytics.",
      image: "/Performance Marketing.png",
      isExpanded: false,
    },
    {
      id: "02",
      title: "Social Media Marketing",
      description:
        "Transform your social media presence with engaging visuals, targeted campaigns, and actionable insights.",
      image: "/social media marketing.jpg",
      isExpanded: false,
    },
    {
      id: "03",
      title: "Influencer Marketing",
      description:
        "Strategic collaborations with influencers to amplify brand visibility and foster genuine connections.",
      image: "/influencer marketing.jpg",
      isExpanded: false,
    },
    {
      id: "04",
      title: "Web Design & Development",
      description:
        "Create custom websites or optimize existing platforms to ensure seamless online experiences.",
      image: "/Web Design & Development.png",
      isExpanded: false,
    },
    {
      id: "05",
      title: "Scalable ROI",
      description:
        "Deliver exceptional results with Return on Ad Spend (ROAS) as high as 14X.",
      image: "/Scalable ROI.png",
      isExpanded: false,
    },
    {
      id: "06",
      title: "Diverse Campaign Expertise",
      description:
        "Expertise in lead generation, product promotions, and impactful strategies that matter.",
        image: '/Diverse Campaign Expertise.jpg',
      isExpanded: false,
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mx-auto px-4 py-16 relative"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-[1440px] m-auto bg-zinc-900/90 rounded-2xl md:p-5"
      >
        <h2 className="text-5xl font-bold mb-6 text-white max-w-[600px]">
          Services That Add Significant Business Value
        </h2>
        <p className="text-gray-400 max-w-2xl">
          Our offerings encompass services that serve as startup mentoring or
          include consulting, contributing to the enhanced value proposition of
          your business.
        </p>
      </motion.div>

      <div className="space-y-6 max-w-[1440px] m-auto bg-zinc-900/90 rounded-2xl md:p-5">
        {services.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="border-b border-gray-800 pb-6"
          >
            <div
              onClick={() => toggleExpand(service.id)}
              className="flex items-center justify-between group cursor-pointer hover:bg-red-500/10 p-4 rounded-lg transition-colors duration-200"
            >
              <div className="flex items-center gap-6">
                <motion.span
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1 }}
                  className="text-sm text-gray-300 font-medium"
                >
                  {service.id}
                </motion.span>
                <h3 className="text-2xl font-normal text-gray-300 group-hover:text-red-400 transition-colors duration-200">
                  {service.title}
                </h3>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-xl transition-all duration-200
                  ${
                    expandedId === service.id
                      ? "bg-red-600 text-white border-red-600"
                      : "hover:border-gray-400"
                  }`}
              >
                {expandedId === service.id ? "−" : "+"}
              </motion.button>
            </div>

            <AnimatePresence>
              {expandedId === service.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-2 gap-12 mt-8">
                    <motion.p
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-gray-300 text-lg leading-relaxed"
                    >
                      {service.description}
                    </motion.p>
                    {service.image && (
                      <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="rounded-xl overflow-hidden"
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          className="h-auto w-full hover:scale-105 transition-transform duration-500"
                          width={1920}
                          height={1080}
                        />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <GridPattern width={30} height={30} x={-1} y={-1} className="z-[-1]" />
    </motion.section>
  );
};

export default OurServicesSection;
