
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: "internship",
      title: "Software Development Intern",
      company: "Tech Company Name",
      location: "Location",
      duration: "Month Year - Month Year",
      description: [
        "Developed and maintained web applications using React and Node.js",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Participated in code reviews and followed best practices for software development",
        "Gained hands-on experience with modern development tools and methodologies"
      ],
      technologies: ["React", "Node.js", "JavaScript", "Git"]
    }
  ];

  const education = {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Nehru College of Engineering and Research Centre",
    duration: "2020 - 2024",
    description: "Specialized in software development, algorithms, and modern web technologies. Maintained excellent academic performance while actively participating in technical events and projects."
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* <div className="bg-white/10 dark:bg-black/10 rounded-3xl p-8 sm:p-12 border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-black/15 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"> */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Education & Experience
          </h2>
          
          <div className="space-y-12">
            {/* Education Section */}
            <div>
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Education
                </h3>
              </div>
              
              <div className="bg-white/5 dark:bg-black/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      {education.degree}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 font-medium flex items-center mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      {education.institution}
                    </p>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {education.duration}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {education.description}
                </p>
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <div className="flex items-center mb-6">
                <Briefcase className="h-8 w-8 text-pink-600 dark:text-pink-400 mr-3" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-red-600 dark:from-pink-400 dark:to-red-400 bg-clip-text text-transparent">
                  Professional Experience
                </h3>
              </div>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="bg-white/5 dark:bg-black/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                          {exp.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 font-medium flex items-center mb-2">
                          <MapPin className="h-4 w-4 mr-2" />
                          {exp.company}, {exp.location}
                        </p>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.duration}
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex} className="text-gray-600 dark:text-gray-300 leading-relaxed flex items-start">
                          <span className="text-purple-600 dark:text-purple-400 mr-2 mt-2">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 dark:from-purple-400/20 dark:to-pink-400/20 rounded-full text-sm text-purple-700 dark:text-purple-300 border border-purple-600/30 dark:border-purple-400/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Experience;
