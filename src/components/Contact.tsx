
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { IconCloudDemo } from '@/components/IconCloudDemo';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_z9x3489', // EmailJS service ID
        'template_ur2qbic', //  EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'athin04pb@gmail.com'
        },
        'UifuvvBmuk1_pXQZ_' //  EmailJS public key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Fallback to mailto
      const mailtoLink = `mailto:athin04pb@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoLink);

      toast({
        title: "Opening email client",
        description: "Please send the email through your default email client.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 font-outfit">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-outfit">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-outfit">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column - Technologies I Work With */}
          <div className="space-y-8">
            <div className="space-y-6 bg-white/5 dark:bg-black/5 rounded-2xl border border-white/10 hover:bg-white/10 p-8 h-full dark:hover:bg-black/10 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-white font-outfit mb-6">
                  Technologies I Work With
                </h3>
                <div className="flex justify-center">
                  <IconCloudDemo />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Get In Touch */}
          <div className="space-y-8">
            <div className="bg-white/5 dark:bg-black/5 rounded-2xl border border-white/10 hover:bg-white/10 p-8 h-full dark:hover:bg-black/10 transition-all duration-300 hover:scale-[1.02]">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white font-outfit">
                  Get In Touch
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-outfit mb-3">
                  Whether you're looking to collaborate on a project, need a skilled developer for your team, 
                  or just want to connect with a fellow tech enthusiast, I'd love to hear from you.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4 group cursor-pointer hover:scale-105 transition-transform duration-300 pt-4"
                     onClick={() => window.open('mailto:athin04pb@gmail.com', '_blank')}>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white font-outfit">Email</p>
                    <p className="text-gray-600 dark:text-gray-300 font-outfit">athin04pb@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group cursor-pointer hover:scale-105 transition-transform duration-300"
                     onClick={() => window.open('https://linkedin.com/in/athin-pb', '_blank')}>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white font-outfit">LinkedIn</p>
                    <p className="text-gray-600 dark:text-gray-300 font-outfit">Connect with me</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group cursor-pointer hover:scale-105 transition-transform duration-300"
                     onClick={() => window.open('https://github.com/Pbathin', '_blank')}>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Github className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white font-outfit">GitHub</p>
                    <p className="text-gray-600 dark:text-gray-300 font-outfit">Check out my code</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-500 dark:to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white font-outfit">Location</p>
                    <p className="text-gray-600 dark:text-gray-300 font-outfit">Manglore, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form - 70% Width Section Below */}
        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-4xl" style={{ width: '70%' }}>
            <div className="bg-white/5 dark:bg-black/5 rounded-2xl border border-white/10 hover:bg-white/10 p-8 h-full dark:hover:bg-black/10    transition-all duration-500 bg-transparen">
              <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white font-outfit">
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
                    className="bg-white/5 dark:bg-black/5 border border-white/10 hover:bg-white/10 p-3 h-full dark:hover:bg-black/10  rounded-xl focus:border-purple-400 dark:focus:border-purple-500 transition-all duration-300 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 font-outfit"
                  />
                  <Input 
                    name="email"
                    type="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 dark:bg-black/5 border border-white/10 hover:bg-white/10 p-3 h-full dark:hover:bg-black/10  rounded-xl focus:border-purple-400 dark:focus:border-purple-500 transition-all duration-300 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 font-outfit"
                  />
                </div>
                <Input 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-white/5 dark:bg-black/5 border border-white/10 hover:bg-white/10 p-3 h-full dark:hover:bg-black/10  rounded-xl focus:border-purple-400 dark:focus:border-purple-500 transition-all duration-300 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 font-outfit"
                />
                <Textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-white/5 dark:bg-black/5 border border-white/10 hover:bg-white/10 p-3 h-full dark:hover:bg-black/10  rounded-xl focus:border-purple-400 dark:focus:border-purple-500 transition-all duration-300 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 font-outfit resize-none"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-1/2 ml-[25%] bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 dark:from-purple-500 dark:to-pink-500 dark:hover:from-purple-600 dark:hover:to-pink-600 text-white py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl font-outfit"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
