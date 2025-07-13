
import { useState, useEffect } from 'react';
import { Menu, X, Download, Home, User, Briefcase, Mail, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

const Navigation = ({ isDark, onThemeToggle }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: User },
    { href: '#projects', label: 'Projects', icon: Briefcase },
    { href: '#contact', label: 'Contact', icon: Mail }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const downloadResume = () => {
    // Create a temporary link element to download the resume
    const link = document.createElement('a');
    link.href = 'https://github.com/Pbathin/Resume/raw/main/Athin_PB_Software_Developer.pdf';
    link.download = 'Athin_PB_Software_Developer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={` `}>
      <div className="max-w-8xl mx-auto px-4 sm:px-1 lg:px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 font-outfit"
            >
              Athin PB
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block fixed top-4 left-[30%] right-[15%] z-50 transition-all duration-300 ">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 backdrop-blur-sm font-outfit"
                >
                  <item.icon className="h-4 w-4 font-outfit" />
                  <span>{item.label}</span>
                </button>
              ))}
              
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={onThemeToggle}
                className="rounded-full w-10 h-10 p-0 backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 ml-2  "
              >
                {isDark ? (
                  <Sun className="h-4 w-4 text-yellow-400 transition-transform duration-300 rotate-0 hover:rotate-12" />
                ) : (
                  <Moon className="h-4 w-4 text-blue-600 transition-transform duration-300 rotate-0 hover:-rotate-12" />
                )}
              </Button>
              
              <Button
                onClick={downloadResume}
                size="sm"
                className="ml-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-105 font-outfit"
              >
                <Download className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden  flex items-end space-x-2 fixed top-4 left-[75%] right-[10px] z-50 transition-all duration-300 ">
            {/* Mobile Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onThemeToggle}
              className="rounded-full w-8  h-8 p-0 backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-yellow-400 transition-transform duration-300 rotate-0 hover:rotate-12" />
              ) : (
                <Moon className="h-4 w-4 text-blue-600 transition-transform duration-300 rotate-0 hover:-rotate-12" />
              )}
            </Button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed top-4 left-[10px] right-[10px] mt-[-8px] z-40 transition-all duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-lg border border-white/20 dark:border-white/10 mt-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className="flex items-center space-x-2 w-full px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 font-outfit"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              ))}
              <Button
                onClick={downloadResume}
                size="sm"
                className="w-full mt-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 font-outfit"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
