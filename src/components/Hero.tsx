
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent">
            John Developer
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light">
            Full Stack Developer & UI/UX Designer
          </h2>
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, functional, and user-centered digital experiences. 
            Passionate about clean code, elegant design, and innovative solutions.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-6 text-lg rounded-full backdrop-blur-md bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
          >
            Download CV
          </Button>
        </div>

        <div className="flex justify-center space-x-6 animate-fade-in">
          <Button variant="ghost" size="lg" className="rounded-full w-14 h-14 p-0 backdrop-blur-md bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110">
            <Github className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="lg" className="rounded-full w-14 h-14 p-0 backdrop-blur-md bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110">
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="lg" className="rounded-full w-14 h-14 p-0 backdrop-blur-md bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110">
            <Mail className="h-6 w-6" />
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
