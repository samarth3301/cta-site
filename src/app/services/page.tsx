import React from 'react'
import { FaChartLine, FaLaptopCode, FaHashtag, FaUserFriends, FaPaintBrush } from 'react-icons/fa'

const ServiceCard = ({ icon: Icon, title, description, features }: {
  icon: any,
  title: string,
  description: string,
  features: string[]
}) => (
  <div className="backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-500/30">
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-primary/10 rounded-xl">
        <Icon className="text-neutral-500 text-2xl" />
      </div>
      <h3 className="text-white text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{title}</h3>
    </div>
    <p className="text-neutral-500 mb-6 leading-relaxed">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3 text-neutral-400">
          <span className="w-2 h-2 rounded-full" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
)

const ServicesPage = () => {
  const services = [
    {
      icon: FaChartLine,
      title: "Performance Marketing",
      description: "Leverage the power of data-driven strategies to maximize your Return on Ad Spend (ROAS). From targeted campaigns to effective ad optimization, we ensure your budget works harder, delivering real, measurable outcomes.",
      features: [
        "ROI-focused ad campaigns",
        "Advanced audience targeting",
        "Real-time analytics and optimization"
      ]
    },
    {
      icon: FaLaptopCode,
      title: "Web Design & Development",
      description: "Whether you're launching a brand-new website or enhancing your existing one, we create solutions that captivate audiences and drive results.",
      features: [
        "Custom website development",
        "E-commerce solutions (specialized in Shopify)",
        "Bug fixes and performance optimization"
      ]
    },
    {
      icon: FaHashtag,
      title: "Social Media Marketing",
      description: "Engage your audience where they spend the most time—on social media. Our targeted strategies ensure your message resonates and inspires action.",
      features: [
        "Platform-specific campaigns",
        "Content creation and management",
        "Community engagement"
      ]
    },
    {
      icon: FaUserFriends,
      title: "Influencer Marketing",
      description: "Harness the power of influencers to tell your brand's story. Our team helps you identify the right voices to amplify your reach and foster genuine customer relationships.",
      features: [
        "Influencer identification and onboarding",
        "Campaign planning and execution",
        "ROI tracking and performance analysis"
      ]
    },
    {
      icon: FaPaintBrush,
      title: "Creative Design Solutions",
      description: "Great design is at the heart of every successful campaign. From branding to ad creatives, we deliver designs that captivate and convert.",
      features: [
        "Branding and identity creation",
        "Ad creatives and banners",
        "User-friendly interface designs"
      ]
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-32 relative">
      {/* Hero Section */}
      <div className="text-center mb-24">
        <h1 className="text-white text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Our Services
        </h1>
        <p className="text-2xl text-neutral-500 max-w-3xl mx-auto font-medium">
          Driving Growth Through Excellence
        </p>
        <p className="mt-6 text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          At CTA, we specialize in crafting tailored strategies to accelerate your brand's success. 
          From building dynamic online experiences to delivering high-impact marketing campaigns, 
          we offer a comprehensive suite of services designed to transform your vision into reality.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* Why Work With Us Section */}
      <div className="mt-32 text-center">
        <h2 className="text-white text-4xl font-bold mb-16 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Why Work With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Proven Expertise", desc: "5 Cr+ ad spend managed, with ROAS up to 14X" },
            { title: "Comprehensive Services", desc: "From strategy to execution, we've got you covered" },
            { title: "Tailored Solutions", desc: "Custom strategies designed for your business needs" }
          ].map((item, index) => (
            <div key={index} className="backdrop-blur-sm p-8 rounded-2xl border border-neutral-500/30 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-neutral-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-32 text-center  text-white py-20 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold mb-6">Ready to Take Your Brand to the Next Level?</h2>
        <p className="mb-10 text-lg text-[#EDF0DA]/90">Let's work together to unlock your brand's potential.</p>
        <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl">
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default ServicesPage