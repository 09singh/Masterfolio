import React from 'react';
import Hero from './Hero';

export default function Projects() {
  const projectsData = [
     {
      title: 'ERP System',
      description: 'Interactive analytics dashboard with data visualization and real-time metrics tracking.',
      tags: ['React', 'tailwindcss', 'Netlify'],
      link: '#',
      image: '📋'
    },
    {
      title: 'HR Managment System',
      description: 'Full-stack e-commerce solution with payment integration and real-time inventory management.',
      tags: ['React', 'next.js', 'TailwindCss' , 'Vercel'],
      link: 'https://employee-managementsystem-745.vercel.app/',
      image: '🛍️'
    },
    {
      title: 'Live Updates ',
      description: 'Collaborative task management application with real-time updates and team workspace features.',
      tags: ['React', 'Tailwind' , 'Netlify' , 'Chart.js'],
      link: 'https://sanket745liveupdates.netlify.app/',
      image: '📊'
    },
   
    {
      title: 'tic-tak-toe game',
      description: 'Interactive analytics dashboard with data visualization and real-time metrics tracking.',
      tags: ['html', 'css', 'javascript','Netlify'],
      link: 'https://sanket745tic-tak-toe.netlify.app/',
      image: '🎮'
    },
    {
      title: 'Portfolio Website',
      description: 'Beautiful and responsive portfolio website showcasing creative design and modern development.',
      tags: ['React', 'Vite', 'Tailwind'],
      link: {Hero},
      image: '🎨'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl px-5 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-black">Featured Projects</h2>
          <div className="w-16 h-1 mx-auto bg-brown-400"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <div key={index} className="flex flex-col overflow-hidden transition-all duration-300 rounded-lg shadow-md bg-brown-100 hover:shadow-xl hover:-translate-y-2">
              <div className="flex items-center justify-center h-48 text-6xl bg-gradient-to-br from-brown-300 to-brown-400">
                {project.image}
              </div>
              <div className="flex flex-col flex-grow p-6">
                <h3 className="mb-2 text-xl font-bold text-black">{project.title}</h3>
                <p className="flex-grow mb-4 text-sm text-brown-700">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium border rounded-full bg-brown-100 text-brown-700 border-brown-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a href={project.link} className="flex items-center px-6 py-3 font-semibold transition-all duration-300 text-brown-400 hover:text-brown-600 hover:translate-x-1">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
