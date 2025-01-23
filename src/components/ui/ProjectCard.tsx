import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  technologies: string[]
  projectUrl?: string
  status: 'completed' | 'in-progress' | 'coming-soon'
  featured?: boolean
}

const ProjectCard = ({ 
  title, 
  description, 
  imageUrl, 
  technologies = [], 
  projectUrl,
  status,
  featured = false 
}: ProjectCardProps) => {
  return (
    <div className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 h-full relative">
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 text-xs font-medium bg-yellow-500/90 text-black rounded-full">
            Featured
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <span className={`px-2 py-1 text-xs rounded-full ${
            status === 'completed' ? 'bg-green-500/20 text-green-400' :
            status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' :
            'bg-purple-500/20 text-purple-400'
          }`}>
            {status?.replace('-', ' ') || 'Status'}
          </span>
        </div>
        
        <p className="text-neutral-300 text-sm mb-4 line-clamp-2">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies?.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80 hover:bg-white/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Link */}
        {projectUrl && (
          <Link
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            View Project
            <svg
              className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}

export default ProjectCard

