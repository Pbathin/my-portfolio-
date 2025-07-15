
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 rounded-full w-13 h-13 p-0 backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-400 transition-transform duration-300 rotate-0 hover:rotate-12" />
      ) : (
        <Moon className="h-5 w-5 text-blue-600 transition-transform duration-300 rotate-0 hover:-rotate-12" />
      )}
    </Button>
  );
};

export default ThemeToggle;
