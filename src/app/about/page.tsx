import React from 'react'
import { Phone, Mail, Globe } from 'lucide-react'

const AboutPage = () => {
  const stats = [
    { value: '₹5Cr+', label: 'Ad Spend Managed' },
    { value: '14x', label: 'Max ROAS Achieved' },
    { value: '100+', label: 'Happy Clients' },
  ]

  const expertise = [
    {
      title: "Performance Marketing",
      description: "We excel in crafting targeted campaigns that enhance your brand's visibility and drive measurable results."
    },
    {
      title: 'Web Design & Development',
      description: "From concept to creation, our team builds and optimizes websites that exceed expectations and deliver seamless user experiences."
    },
    {
      title: 'Social Media Marketing',
      description: "Amplify your brand's reach with engaging content and impactful campaigns designed to resonate with your audience."
    },
    {
      title: 'Influencer Marketing',
      description: "Connect with the right influencers to tell your brand's story authentically and build lasting connections with your audience."
    }
  ]

  return (
    <div className="max-w-[1440px] mx-auto px-5 pt-36">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-2">About Us</h2>
        <h1 className="text-white text-4xl font-bold mb-4 max-w-[400px] m-auto">
          Unlocking Potential with Digital Precision
        </h1>
        <p className="text-xl text-neutral-500 max-w-3xl mx-auto">
          At CTA Agency, we specialize in transforming your brand's digital presence into a powerhouse 
          of growth and innovation. Our goal is simple: Your goals, our expertise.
        </p>
      </div>

      {/* Stats Section */}
      <div className="bg-[#232020] rounded-2xl p-8 mb-16">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-[#EDF0DA] mb-2">{stat.value}</div>
              <div className="text-[#EDF0DA]/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* What Sets Us Apart */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-white">What Sets Us Apart?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg shadow-md border border-neutral-500/40">
            <h3 className="text-xl font-semibold mb-4 text-white">Proven Results</h3>
            <p className="text-neutral-500">With over ₹5 crore in ad spends and an impressive ROAS of up to 14x, we deliver tangible outcomes that drive your business forward.</p>
          </div>
          <div className="p-6 rounded-lg shadow-md border border-neutral-500/40">
            <h3 className="text-xl font-semibold mb-4 text-white">Comprehensive Solutions</h3>
            <p className="text-neutral-500">From Shopify-powered e-commerce stores to bespoke web development, we cover all facets of digital strategy.</p>
          </div>
          <div className="p-6 rounded-lg shadow-md border border-neutral-500/40">
            <h3 className="text-xl font-semibold mb-4 text-white">Tailored Strategies</h3>
            <p className="text-neutral-500">Every business is unique. That's why we design customized solutions that align with your specific objectives.</p>
          </div>
        </div>
      </div>

      {/* Our Expertise */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-white">Our Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {expertise.map((item) => (
            <div key={item.title} className="p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
              <p className="text-neutral-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-white">Our Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg shadow-md border border-[#273043]/10">
            <h3 className="text-xl font-semibold mb-4 text-white">Black Friday Brilliance</h3>
            <p className="text-neutral-500">Achieved an impressive 14x ROAS during a Black Friday Sale.</p>
          </div>
          <div className="p-6 rounded-lg shadow-md border border-[#273043]/10">
            <h3 className="text-xl font-semibold mb-4 text-white">Collection Launch Triumph</h3>
            <p className="text-neutral-500">Delivered an extraordinary 18x ROAS for a client's product launch.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="rounded-2xl p-8 border border-[#273043]/10">
        <h2 className="text-3xl font-bold mb-4 text-white">Connect with Us</h2>
        <p className="mb-6 text-neutral-500">Your success is just a conversation away. Reach out to us and let's discuss your digital goals.</p>
        <div className="space-y-4">
          <div className="flex items-center">
            <Phone className="w-6 h-6 mr-3 text-neutral-400" />
            <span className="text-neutral-400">+91 7792092027</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-6 h-6 mr-3 text-neutral-400" />
            <span className="text-neutral-400">howdy.cta@gmail.com</span>
          </div>
          <div className="flex items-center">
            <Globe className="w-6 h-6 mr-3 text-neutral-400" />
            <span className="text-neutral-400">www.howdycta.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage