
const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-3xl p-8 sm:p-12 border border-white/20 dark:border-white/10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                digital solutions that make a difference. I love turning complex problems into 
                simple, beautiful, and intuitive interfaces.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="backdrop-blur-md bg-white/5 dark:bg-black/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-400">Frontend</h3>
                <p className="text-gray-600 dark:text-gray-300">React, TypeScript, Next.js, Tailwind CSS</p>
              </div>
              <div className="backdrop-blur-md bg-white/5 dark:bg-black/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-2 text-pink-600 dark:text-pink-400">Backend</h3>
                <p className="text-gray-600 dark:text-gray-300">Node.js, Python, PostgreSQL, MongoDB</p>
              </div>
              <div className="backdrop-blur-md bg-white/5 dark:bg-black/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Tools</h3>
                <p className="text-gray-600 dark:text-gray-300">Docker, AWS, Git, Figma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
