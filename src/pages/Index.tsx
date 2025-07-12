
import { useState, useEffect } from 'react';
import Background3D from '@/components/Background3D';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 font-outfit ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900'
    }`}>
      <Background3D isDark={isDark} />
      <Navigation isDark={isDark} onThemeToggle={toggleTheme} />

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 dark:bg-black/10 z-40">
        <div 
          className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300"
          style={{ width: `${(scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}
        />
      </div>
      
      <div className="relative z-10 pt-16">
        <section id="home" className="animate-fadeInUp">
          <Hero />
        </section>
        <section className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <About />
        </section>
        <section className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <Projects />
        </section>
        <section className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <Contact />
        </section>
      </div>
      
      <footer className="relative z-10 py-12 text-center border-t border-white/10 bg-white/5 dark:bg-black/5 backdrop-blur-md animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-500 dark:text-gray-400 font-outfit">
              © 2024 Athin PB. Built with React, Three.js & ❤️
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://github.com/Pbathin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform font-outfit"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/athin-pb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform font-outfit"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:athinpb@gmail.com"
                className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform font-outfit"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
