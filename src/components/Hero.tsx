
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profile from "/profile.jpg";

const Hero = () => {
  const downloadResume = () => {
    // Create a temporary link element to download the resume directly
    const link = document.createElement('a');
    link.href = 'https://github.com/Pbathin/Resume/raw/main/Athin_PB_Software_Developer.pdf';
    link.download = 'Athin_PB_Software_Developer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-start justify-center px-4 py-15 sm:px-6 lg:px-8 relative">
      <div className="text-center max-w-6xl mx-auto">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-6 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img
                src={profile}
                alt="Athin PB"
                className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-white/20 shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent">
            Athin PB
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-4 font-light">
            Software Developer
          </h2>
          <h3 className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-6 font-light">
            Full Stack Developer | React | Java | Cloud Technologies
          </h3>
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Passionate software developer with expertise in modern web technologies, cloud platforms, and building scalable applications.
            I create innovative solutions that bridge the gap between complex technical requirements and user-friendly experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-7 animate-fade-in">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg rounded-full backdrop-blur-md bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105"
            onClick={downloadResume}
          >
            <Download className="h-5 w-5 mr-2" />
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center items-start space-x-8 animate-fade-in">
          <Button
            variant="ghost"
            size="lg"
            className="rounded-full w-14 h-14 p-0 backdrop-blur-md bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            onClick={() => window.open('https://github.com/Pbathin', '_blank')}
          >
            <Github className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="rounded-full w-14 h-14 p-0 backdrop-blur-md bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            onClick={() => window.open('https://linkedin.com/in/athinpb', '_blank')}
          >
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="rounded-full w-14 h-14 p-0 backdrop-blur-md bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            onClick={() => window.open('mailto:athin04pb@gmail.com', '_blank')}
          >
            <Mail className="h-6 w-6" />
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce sm:mt-4">
          <ArrowDown className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
