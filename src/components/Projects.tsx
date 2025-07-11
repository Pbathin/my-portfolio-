
import { ExternalLink, Github, Globe, Code, Database, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "Full Stack E-Commerce Platform",
    description: "A comprehensive e-commerce solution built with React and Node.js, featuring user authentication, payment integration, inventory management, and admin dashboard with real-time analytics.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    github: "https://github.com/Pbathin",
    demo: "#",
    icon: Globe
  },
  {
    title: "Real-Time Chat Application",
    description: "A modern chat application with real-time messaging, file sharing, group chats, and user presence indicators. Built with Socket.io for seamless communication experience.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tech: ["React", "Socket.io", "Node.js", "Redis", "Material-UI"],
    github: "https://github.com/Pbathin",
    demo: "#",
    icon: Code
  },
  {
    title: "Cloud-Based Task Management System",
    description: "A collaborative project management tool deployed on AWS with features like task assignment, progress tracking, team collaboration, and automated notifications.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tech: ["React", "AWS Lambda", "DynamoDB", "API Gateway", "S3"],
    github: "https://github.com/Pbathin",
    demo: "#",
    icon: Database
  },
  {
    title: "Responsive Portfolio Website",
    description: "A modern, responsive portfolio website with 3D animations, dark/light theme toggle, and smooth scrolling effects. Optimized for performance and SEO.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tech: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Pbathin",
    demo: "#",
    icon: Smartphone
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, cloud technologies, and modern web frameworks.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-3xl overflow-hidden border border-white/20 dark:border-white/10 hover:scale-[1.02] transition-all duration-500 group hover:bg-white/15 dark:hover:bg-black/15 hover:shadow-2xl"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <project.icon className="h-8 w-8 text-white drop-shadow-lg" />
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 rounded-full bg-white/5 border-white/20 hover:bg-white/10 hover:scale-105 transition-all duration-300"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
