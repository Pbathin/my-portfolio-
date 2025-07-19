
import { ExternalLink, Github, Globe, Code, Database, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const projects = [
  {
    title: "Daan Sethu ",
    // description: "A comprehensive e-commerce solution built with React and Node.js, featuring user authentication, payment integration, inventory management, and admin dashboard with real-time analytics.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tech: ["React Native", "Node.js", "Firebase", "Clerck Expo"],
    github: "https://github.com/Pbathin/Daan-Sethu",
    demo: "#",
    icon: Globe
  }
  // ,
  // {
  //   title: "Real-Time Chat Application",
  //   description: "A modern chat application with real-time messaging, file sharing, group chats, and user presence indicators. Built with Socket.io for seamless communication experience.",
  //   image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
  //   tech: ["React", "Socket.io", "Node.js", "Redis", "Material-UI"],
  //   github: "https://github.com/Pbathin",
  //   demo: "#",
  //   icon: Code
  // },
  // {
  //   title: "Cloud-Based Task Management System",
  //   description: "A collaborative project management tool deployed on AWS with features like task assignment, progress tracking, team collaboration, and automated notifications.",
  //   image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
  //   tech: ["React", "AWS Lambda", "DynamoDB", "API Gateway", "S3"],
  //   github: "https://github.com/Pbathin",
  //   demo: "#",
  //   icon: Database
  // },
  // {
  //   title: "Responsive Portfolio Website",
  //   description: "A modern, responsive portfolio website with 3D animations, dark/light theme toggle, and smooth scrolling effects. Optimized for performance and SEO.",
  //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  //   tech: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
  //   github: "https://github.com/Pbathin",
  //   demo: "#",
  //   icon: Smartphone
  // }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-outfit">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-outfit">
            Here are some of my recent projects that showcase my skills in full-stack development, cloud technologies, and modern web frameworks.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-3xl overflow-hidden border border-white/20 dark:border-white/10 hover:scale-[1.02] transition-all duration-500 group hover:bg-white/15 dark:hover:bg-black/15 hover:shadow-2xl">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <project.icon className="h-8 w-8 text-white drop-shadow-lg" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 font-outfit">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed font-outfit line-clamp-3">
                      {/* {project.description} */}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 font-outfit"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-outfit">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 rounded-full bg-white/5 border-white/20 hover:bg-white/10 hover:scale-105 transition-all duration-300 text-xs font-outfit"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Button>
                      {/* <Button
                        size="sm"
                        className="flex-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all duration-300 hover:shadow-lg text-xs font-outfit"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </Button> */}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-white/80 dark:bg-black/80 border-gray-300 dark:border-white/20 hover:bg-white dark:hover:bg-black/90 text-gray-700 dark:text-white backdrop-blur-sm" />
          <CarouselNext className="hidden md:flex -right-12 bg-white/80 dark:bg-black/80 border-gray-300 dark:border-white/20 hover:bg-white dark:hover:bg-black/90 text-gray-700 dark:text-white backdrop-blur-sm" />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
