
import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import Background3D from '@/components/Background3D';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900'
    }`}>
      <Background3D isDark={isDark} />
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      
      <footer className="relative z-10 py-8 text-center border-t border-white/10">
        <p className="text-gray-500 dark:text-gray-400">
          © 2024 John Developer. Built with React & Three.js
        </p>
      </footer>
    </div>
  );
};

export default Index;
