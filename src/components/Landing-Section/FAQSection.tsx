"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ClipboardList, Wrench, LineChart, Timer, Target, Phone } from 'lucide-react'
import { GridPattern } from '../ui/grid-pattern';

interface FAQItem {
  question: string;
  answer: string;
  icon?: React.ReactNode;
}

const faqs: FAQItem[] = [
    {
      question: "What is your cancellation policy?",
      answer: "We understand that things change. You can cancel your plan at any time, and we'll refund you the difference already paid.",
      icon: <ClipboardList size={24} className='text-[#BE1E2D]' />
    },
    {
      question: "What services do you offer?",
      answer: "We provide performance marketing, social media marketing, influencer marketing, web design and development, and more tailored strategies.",
      icon: <Wrench size={24} className='text-[#BE1E2D]' />
    },
    {
      question: "How do you measure success?",
      answer: "Success is measured through data-driven insights, achieving KPIs like increased ROAS, engagement, and conversions.",
      icon: <LineChart size={24} className='text-[#BE1E2D]' />
    },
    {
      question: "How soon can we see results?",
      answer: "Results vary by campaign type, but typically our strategies start showing improvements within the first few weeks.",
      icon: <Timer size={24} className='text-[#BE1E2D]' />
    },
    {
      question: "Do you offer custom solutions?",
      answer: "Yes, we tailor our strategies to meet your unique goals and challenges for optimal results.",
      icon: <Target size={24} className='text-[#BE1E2D]' />
    },
    {
      question: "How can we get started?",
      answer: "Simply reach out through our contact form or email us to schedule a consultation. We'll discuss your goals and propose a plan.",
      icon: <Phone size={24} className='text-[#BE1E2D]' />
    }
  ];
  

const FAQAccordion = ({ question, answer, icon }: FAQItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="last:border-b-0 px-5" id='faq'>
      <button
        className="w-full flex justify-between items-center text-left py-6 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl bg-gray-800 p-4 rounded-full">{icon}</span>
          <span className="text-lg font-semibold text-gray-300">{question}</span>
        </div>
        <ChevronDown 
          className={`w-6 h-6 text-[#BE1E2D] transition-transform duration-300 ease-in-out ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 pb-6 ml-16 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-[1440px] m-auto px-6 bg-zinc-900/90 rounded-2xl md:p-5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="rounded-2xl shadow-lg border border-gray-800">
          <div className="divide-y divide-gray-800">
            {faqs.map((faq, index) => (
              <FAQAccordion key={index} {...faq} />
            ))}
          </div>
        </div>
      </div>
      <GridPattern width={30} height={30} x={-1} y={-1} className="z-[-1]" />
    </section>
  );
};

export default FAQSection