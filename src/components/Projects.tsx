import { useState, useEffect } from 'react';
import { ExternalLink, Github, Globe, Code, Database, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import DaanSethu from "../../public/DaanSethu.png"

const projects = [
  {
    title: "Daan Sethu",
    description: "Daan Sethu is a cross-platform donation management app built with React Native and Expo, designed to connect donors with NGOs and individuals in need.",
    image: DaanSethu,
    tech: ["React Native", "Node.js", "Firebase", "Clerk Expo"], // Fixed typo
    github: "https://github.com/Pbathin/Daan-Sethu",
    demo: "#",
    icon: Smartphone // More appropriate for mobile app
  },
  {
    title: "Laboratory Management System",
    description: "A Java-based application designed to streamline laboratory operations such as managing student records, tracking equipment, and handling inventory, using JDBC and MySQL.",
    image: "https://miro.medium.com/v2/resize:fit:1000/1*XGVgNmTvSGUMHVbcDRTrAw.png",
    tech: ["Java", "JDBC", "MySQL", "Swing", "Eclipse"],
    github: "https://github.com/Pbathin/Laboratory-Management-system-",
    demo: "#",
    icon: Database // Changed to Database for better representation
  },
  {
    title: "Quiz App",
    description: "A cross-platform mobile quiz application built using React Native. It features multiple-choice questions, real-time score tracking, and intuitive UI for a seamless learning experience.",
    image: "https://theappideas.com/wp-content/uploads/2021/12/quiz-app-development.webp",
    tech: ["React Native", "JavaScript", "Expo"],
    github: "https://github.com/Pbathin/Quiz_App",
    demo: "#",
    icon: Smartphone
  },
  {
    title: "Responsive Portfolio Website",
    description: "A modern, responsive portfolio website with animations, dark/light theme toggle, and smooth scrolling effects. Optimized for performance and SEO.",
    image: "https://www.hostinger.com/uk/tutorials/wp-content/uploads/sites/51/2022/04/web-developer-portfolio.png",
    tech: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Pbathin",
    demo: "#",
    icon: Globe // Changed from Smartphone to Globe for web portfolio
  }
];

const Projects = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Secure external link opening function
  const openExternalLink = (url) => {
    if (url && url !== "#") {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (newWindow) {
        newWindow.opener = null; // Security improvement
      }
    }
  };

  // Autoplay functionality
  useEffect(() => {
    if (!api || !isPlaying || isHovered) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000); // 4 seconds delay for better UX

    return () => clearInterval(interval);
  }, [api, isPlaying, isHovered]);

  // Stop autoplay on user interaction and resume after delay
  useEffect(() => {
    if (!api) return;

    const handleUserInteraction = () => {
      setIsPlaying(false);
      // Resume autoplay after 8 seconds of no interaction
      setTimeout(() => setIsPlaying(true), 2000);
    };

    // Listen to user interactions
    api.on('pointerDown', handleUserInteraction);
    api.on('select', handleUserInteraction);

    return () => {
      api.off('pointerDown', handleUserInteraction);
      api.off('select', handleUserInteraction);
    };
  }, [api]);

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

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-3xl overflow-hidden border border-white/20 dark:border-white/10 hover:scale-[1.02] transition-all duration-500 group hover:bg-white/15 dark:hover:bg-black/15 hover:shadow-2xl">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title} project screenshot`}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      // onError={(e) => {
                      //   e.target.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop'; // Fallback image
                      // }}
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
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tech.slice(0, 5).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 font-outfit"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 5 && (
                          <span className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-outfit">
                            +{project.tech.length - 5}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 rounded-full bg-white/5 border-white/20 hover:bg-white/10 hover:scale-105 transition-all duration-300 text-xs font-outfit"
                          onClick={() => openExternalLink(project.github)}
                          aria-label={`View ${project.title} source code on GitHub`}
                        >
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </Button>
                        {project.demo && project.demo !== "#" && (
                          <Button
                            size="sm"
                            className="flex-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all duration-300 hover:shadow-lg text-xs font-outfit"
                            onClick={() => openExternalLink(project.demo)}
                            aria-label={`View ${project.title} live demo`}
                          >
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Demo
                          </Button>
                        )}
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
      </div>
    </section>
  );
};

export default Projects;
