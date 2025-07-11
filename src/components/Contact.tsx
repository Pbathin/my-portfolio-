
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { IconCloudDemo } from '@/components/IconCloudDemo';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:athinpb@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoLink);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Icon Cloud and Contact Info */}
          <div className="space-y-8">
            <div className="backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-3xl p-8 border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-black/15 transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
                Technologies I Work With
              </h3>
              <IconCloudDemo />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                  Get In Touch
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Whether you're looking to collaborate on a project, need a skilled developer for your team, 
                  or just want to connect with a fellow tech enthusiast, I'd love to hear from you.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group cursor-pointer hover:scale-105 transition-transform duration-300"
                     onClick={() => window.open('mailto:athinpb@gmail.com', '_blank')}>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">athinpb@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group cursor-pointer hover:scale-105 transition-transform duration-300"
                     onClick={() => window.open('https://linkedin.com/in/athin-pb', '_blank')}>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">LinkedIn</p>
                    <p className="text-gray-600 dark:text-gray-300">Connect with me</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group cursor-pointer hover:scale-105 transition-transform duration-300"
                     onClick={() => window.open('https://github.com/Pbathin', '_blank')}>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Github className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">GitHub</p>
                    <p className="text-gray-600 dark:text-gray-300">Check out my code</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">Location</p>
                    <p className="text-gray-600 dark:text-gray-300">Kerala, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-3xl p-8 border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-black/15 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/20 rounded-xl focus:border-purple-400 transition-all duration-300 hover:bg-white/10 focus:bg-white/10"
                />
                <Input 
                  name="email"
                  type="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/20 rounded-xl focus:border-purple-400 transition-all duration-300 hover:bg-white/10 focus:bg-white/10"
                />
              </div>
              <Input 
                name="subject"
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-white/5 border-white/20 rounded-xl focus:border-purple-400 transition-all duration-300 hover:bg-white/10 focus:bg-white/10"
              />
              <Textarea 
                name="message"
                placeholder="Your Message" 
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-white/5 border-white/20 rounded-xl focus:border-purple-400 resize-none transition-all duration-300 hover:bg-white/10 focus:bg-white/10"
              />
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
