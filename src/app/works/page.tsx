"use client"
import ProjectCard from '@/components/ui/ProjectCard'
import React, { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

interface Project {
  _id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: any;
  technologies: string[];
  projectUrl?: string;
  status: 'completed' | 'in-progress' | 'coming-soon';
  featured: boolean;
}

const OurWorks = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "project"] | order(featured desc, order asc) {
          _id,
          title,
          description,
          shortDescription,
          image,
          technologies,
          projectUrl,
          status,
          featured
        }`;
        const fetchedProjects = await client.fetch(query);
        setProjects(fetchedProjects);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Add your skeleton loader here if needed
  }
      
  return (
    <section className="w-full min-h-screen">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white relative">
            Our Works
            <div className="absolute w-24 h-1 bg-white bottom-0 left-1/2 transform -translate-x-1/2 mt-4"></div>
          </h1>
          <p className="text-neutral-500 dark:text-[#EDF0DA] text-xl leading-relaxed max-w-2xl mx-auto">
            Explore our portfolio of successful projects and innovative solutions that have transformed businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects?.map((project) => (
            <div 
              key={project._id}
              className="transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <ProjectCard
                title={project.title}
                description={project.shortDescription || project.description}
                imageUrl={urlForImage(project.image).url()}
                technologies={project.technologies}
                projectUrl={project.projectUrl}
                status={project.status}
                featured={project.featured}
              />
            </div>
          )) || (
            <div className="col-span-full text-center text-neutral-400">
              No projects available
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default OurWorks