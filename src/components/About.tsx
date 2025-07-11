
import { Code, Database, Cloud, Smartphone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-3xl p-8 sm:p-12 border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-black/15 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I'm a passionate Software Developer with a strong foundation in full-stack development and cloud technologies. 
                I graduated with a Bachelor's in Computer Science and Engineering from Nehru College of Engineering and Research Centre.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I specialize in building scalable web applications using modern technologies like React, Node.js, and cloud platforms. 
                My experience spans from frontend development to backend architecture and deployment strategies.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I'm always eager to learn new technologies and tackle challenging problems that make a meaningful impact.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="backdrop-blur-md bg-white/5 dark:bg-black/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center mb-3">
                  <Code className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">Frontend</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">React, JavaScript, HTML5, CSS3, Tailwind CSS, Responsive Design</p>
              </div>
              
              <div className="backdrop-blur-md bg-white/5 dark:bg-black/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center mb-3">
                  <Database className="h-6 w-6 text-pink-600 dark:text-pink-400 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400">Backend</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Node.js, Express.js, RESTful APIs, Database Management</p>
              </div>
              
              <div className="backdrop-blur-md bg-white/5 dark:bg-black/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center mb-3">
                  <Cloud className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Cloud & Tools</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">AWS, Git, Docker, CI/CD, Agile Methodologies</p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="border-t border-white/10 pt-12">
            <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Education
            </h3>
            <div className="backdrop-blur-md bg-white/5 dark:bg-black/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Bachelor of Technology in Computer Science and Engineering
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Nehru College of Engineering and Research Centre
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Specialized in software development, algorithms, and modern web technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
