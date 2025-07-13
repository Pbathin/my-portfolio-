
import { Code, Database, Cloud, Wrench } from 'lucide-react';

const About = () => {
  const techStacks = [
    {
      category: "Frontend",
      icon: Code,
      color: "from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400",
      technologies: [
        { name: "React", icon: "⚛️" },
        { name: "JavaScript", icon: "🟨" },
        { name: "HTML5", icon: "🧡" },
        { name: "CSS3", icon: "🔵" },
        { name: "Tailwind CSS", icon: "💨" },
        { name: "Responsive Design", icon: "📱" }
      ]
    },
    {
      category: "Backend",
      icon: Database,
      color: "from-pink-600 to-red-600 dark:from-pink-400 dark:to-red-400",
      technologies: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "⚡" },
        { name: "Spring", icon: "🌱" },
        { name: "Hibernate", icon: "🔄" },
        { name: "RESTful APIs", icon: "🔗" },
        { name: "Database Management", icon: "🗃️" }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      color: "from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400",
      technologies: [
        { name: "AWS", icon: "☁️" },
        { name: "Git", icon: "📚" },
        { name: "Docker", icon: "🐳" },
        { name: "CI/CD", icon: "🔄" },
        { name: "Linux", icon: "🐧" },
        { name: "Nginx", icon: "🌐" }
      ]
    },
    {
      category: "Tools & Others",
      icon: Wrench,
      color: "from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400",
      technologies: [
        { name: "VS Code", icon: "💻" },
        { name: "Figma", icon: "🎨" },
        { name: "Postman", icon: "📮" },
        { name: "Agile", icon: "🏃" },
        { name: "Problem Solving", icon: "🧩" },
        { name: "Team Work", icon: "🤝" }
      ]
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/10 dark:bg-black/10 rounded-3xl p-8 sm:p-12 border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-black/15 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>

          {/* About Me Description - Single Column */}
          <div className="mb-10">
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center">
                I'm a passionate Software Developer with a strong foundation in full-stack development and cloud technologies.
                I graduated with a BE in Information Science and Engineering from AJ Institute of Engineering and Technology, Manglore.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center">
                I specialize in building scalable Mobile and Web applications using modern technologies like React, Node.js, Java and cloud platforms.
                My experience spans from frontend development to backend architecture and deployment strategies.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center">
                I'm always eager to learn new technologies and tackle challenging problems that make a meaningful impact.
              </p>
            </div>
          </div>
        </div>
        {/* Tech Stack Section - Single Column */}
        <div className="mb-12 mt-10">
          <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-8 ">
            Tech Stack
          </h3>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStacks.map((stack, index) => (
                <div key={index} className="bg-white/5 dark:bg-black/5 rounded-2xl p-4 border border-white/10 hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center mb-3">
                    <stack.icon className={`h-6 w-6 bg-gradient-to-r ${stack.color} bg-clip-text text-transparent mr-3 group-hover:rotate-12 transition-transform duration-300`} />
                    <h4 className={`text-lg font-semibold bg-gradient-to-r ${stack.color} bg-clip-text text-transparent`}>
                      {stack.category}
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center space-x-2 p-2 rounded-lg bg-white/5 dark:bg-black/5 hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-200">
                        <span className="text-sm flex-shrink-0">{tech.icon}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-300 font-medium truncate">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
