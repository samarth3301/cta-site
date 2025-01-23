'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import { ChevronDown } from 'lucide-react'
import { motion, Variants } from "framer-motion"
import GridBg from "../../../public/grid-bg.png";

type AnimatedWord = {
  text: string;
  bgColor: string;
}

const ANIMATED_WORDS: AnimatedWord[] = [
  { text: "marketing.", bgColor: "bg-[#BE1E2D]" },
  { text: "innovation.", bgColor: "bg-[#273043]" },
  { text: "excellence.", bgColor: "bg-[#BE1E2D]" },
  { text: "solutions.", bgColor: "bg-[#273043]" }
]

// Animation variants
const containerVariants: Variants = {
  hidden: { 
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
}

const itemVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 20 
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut"
    }
  }
}

const highlightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
    rotate: -5
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function Hero() {
  const [currentWord, setCurrentWord] = useState<string>("")
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const [wordIndex, setWordIndex] = useState<number>(0)
  const [delta, setDelta] = useState<number>(200)

  useEffect(() => {
    const tick = () => {
      const fullWord = ANIMATED_WORDS[wordIndex].text
      
      if (!isDeleting) {
        setCurrentWord(fullWord.substring(0, currentWord.length + 1))
        setDelta(100)

        if (currentWord === fullWord) {
          setIsDeleting(true)
          setDelta(100)
        }
      } else {
        setCurrentWord(fullWord.substring(0, currentWord.length - 1))
        setDelta(200)

        if (currentWord === '') {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % ANIMATED_WORDS.length)
          setDelta(2000)
        }
      }
    }

    const ticker = setInterval(tick, delta)
    return () => clearInterval(ticker)
  }, [currentWord, isDeleting, wordIndex, delta])

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <motion.div 
      className="relative w-full h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-[1000px] mx-auto px-4 lg:px-0">
        <motion.div 
          variants={containerVariants}
            
          className="flex h-screen w-full justify-center items-center flex-col gap-4"
        >
          <motion.p 
            variants={itemVariants}
            className="text-semibold BlauerNue-Italic text-neutral-300 text-center text-lg md:text-xl"
          >
            Empower Your Brand with Cutting-Edge Digital Strategies
          </motion.p>
          <motion.h1 
            variants={itemVariants}
            className="text-3xl md:text-5xl text-white leading-snug md:leading-[60px] capitalize text-center BlauerNue-Extra"
          >
            Turn your vision into reality with our expertise. From performance
            <motion.span 
              variants={highlightVariants}
              className="bg-[#273043] px-4 md:px-5 ml-2 y-2 text-[#EDF0DA] inline-block"
            >
              marketing
            </motion.span>
            to web development, we deliver results and fuel
            <motion.span 
              variants={highlightVariants}
              className="bg-[#BE1E2D] text-[#EDF0DA] px-4 md:px-5 ml-2 md:ml-4 py-2 inline-block"
            >
              {currentWord}
              <motion.span 
                animate={{ 
                  opacity: [1, 0, 1],
                  transition: {
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              >
                |
              </motion.span>
            </motion.span>
          </motion.h1>
        </motion.div>
      </div>
      <motion.div 
        variants={itemVariants}
        className="absolute bottom-8 left-0 right-0 mx-auto w-fit flex flex-col items-center"
      >
        <motion.span 
          variants={itemVariants}
          className="text-zinc-600 text-base md:text-lg font-semibold mb-2"
        >
          Scroll Down
        </motion.span>
        <motion.button
          whileHover={{ 
            scale: 1.1,
            transition: { type: "spring", stiffness: 400 }
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToNextSection}
          className="bg-zinc-200 hover:bg-zinc-300 transition-all duration-300 rounded-full p-2"
          aria-label="Scroll to next section"
        >
          <motion.div
            animate={{ 
              y: [0, 5, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <ChevronDown size={24} className="text-zinc-600" />
          </motion.div>
        </motion.button>
      </motion.div>
    </motion.div>
  )
}