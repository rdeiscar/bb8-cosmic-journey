
import { useState } from 'react';
import { Mail, Send, Twitter, Github, Youtube, AlertCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      toast.success("Message sent successfully! I'll get back to you soon.");
    }, 1500);
  };
  
  return (
    <section id="contact" className="section-container bg-gradient-to-b from-bb8-dark-blue/80 to-background">
      <SectionHeading 
        title="Contact & Connect"
        subtitle="Get in touch with questions or follow the observatory's journey"
        icon={<Mail className="h-12 w-12 text-bb8-orange" />}
      />
      
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="glass-panel rounded-2xl p-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-bb8-orange/50"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-bb8-orange/50"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-bb8-orange/50 resize-none"
                  placeholder="I'd like to know more about your observatory..."
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bb8-button w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Connect Section */}
          <div className="animate-fade-in-right">
            <div className="glass-panel rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Along</h3>
              <p className="text-gray-300 mb-8">
                Keep up with the latest images, discoveries, and updates from the BB8 Observatory on these platforms:
              </p>
              
              <div className="space-y-4">
                <a 
                  href="#" 
                  className="flex items-center p-4 rounded-xl bg-black/20 text-white hover:bg-black/40 transition-colors"
                >
                  <Twitter className="h-6 w-6 mr-4 text-bb8-light-blue" />
                  <span>Follow astronomical updates on Twitter</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center p-4 rounded-xl bg-black/20 text-white hover:bg-black/40 transition-colors"
                >
                  <Youtube className="h-6 w-6 mr-4 text-red-500" />
                  <span>Watch time-lapses and tours on YouTube</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center p-4 rounded-xl bg-black/20 text-white hover:bg-black/40 transition-colors"
                >
                  <Github className="h-6 w-6 mr-4 text-white" />
                  <span>Open-source observatory automation on GitHub</span>
                </a>
              </div>
            </div>
            
            <div className="glass-panel rounded-2xl p-6 border border-yellow-500/20">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Observatory Visitation</h4>
                  <p className="text-gray-300 text-sm">
                    While the BB8 Observatory is primarily a personal facility, I occasionally host small group viewing 
                    sessions for astronomy clubs and educational purposes. Contact me for availability and details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
