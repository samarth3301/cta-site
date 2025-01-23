'use client';

import { useState } from 'react';
import { client } from '@/sanity/lib/client';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setFormData({ name: '', email: '', message: '' });
      toast({
        title: "Message Sent Successfully",
      })
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Failed to send message. Please try again.',
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen px-4 py-28 max-w-[1440px] m-auto pt-36">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
          Let's{" "}
          <span className="bg-[#BE1E2D] text-white px-3 py-1">Connect</span> and
          Grow Together
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          At CTA Agency, we are here to help you achieve groundbreaking success
          in your marketing endeavors. Whether you're looking to amplify your
          brand's reach, improve your online presence, or launch a new campaign,
          our team is ready to assist.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div className="bg-neutral-100/10 p-8 rounded-lg shadow-lg backdrop-blur-sm">
          <h2 className="text-white text-2xl font-bold mb-6">
            Let's Discuss Your Digital Goals
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-white block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-neutral-100/30 ring-gray-500 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-white block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-neutral-100/30 ring-gray-500 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-white block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-neutral-100/30 ring-gray-500 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#C41E3A] text-white py-3 px-6 rounded-md hover:bg-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">↻</span>
                  Sending...
                </>
              ) : (
                'Submit Query →'
              )}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <p className="text-neutral-500 flex items-center gap-3">
                <span className="text-neutral-400 font-semibold">Phone:</span>
                +91 7792092027
              </p>
              <p className="text-neutral-500 flex items-center gap-3">
                <span className="text-neutral-400 font-semibold">Email:</span>
                howdy.cta@gmail.com
              </p>
              <p className="text-neutral-500 flex items-center gap-3">
                <span className="text-neutral-400 font-semibold">Website:</span>
                www.howdycta.com
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-white text-2xl font-bold mb-4">Office Hours</h3>
            <div className="space-y-2">
              <p className="text-neutral-500">
                <span className="text-neutral-400">Monday to</span> Friday: 9:00
                AM – 6:00 PM
              </p>
              <p className="text-neutral-500">
                <span className="text-neutral-400">Saturday:</span> 10:00 AM –
                4:00 PM
              </p>
              <p className="text-neutral-500">
                <span className="text-neutral-400">Sunday:</span> Closed
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-white text-2xl font-bold mb-4">
              Why Choose Us?
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-neutral-500">
                <span className="text-neutral-400">Tailored Solutions:</span> We
                understand your unique business needs
              </li>
              <li className="text-neutral-500">
                <span className="text-neutral-400">Proven Results:</span> With
                ROAS as high as 14x
              </li>
              <li className="text-neutral-500">
                <span className="text-neutral-400">Experienced Team:</span>{" "}
                Expertise in performance marketing and more
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-2xl font-bold mb-4">Follow Us</h3>
            <p className="flex items-center gap-3">
              <span className="text-neutral-400 font-semibold">Instagram:</span>
              <a
                href="https://instagram.com/cta.india"
                className="text-neutral-500 hover:underline"
              >
                @cta.india
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
