import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

const ContactInfo = ({ icon, title, value, href }) => (
  <div className="flex items-center gap-6 p-8 glass rounded-3xl hover:border-indigo-500 transition-all shadow-lg group">
    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all">
      {icon}
    </div>
    <div>
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{title}</p>
      <a href={href} className="text-lg font-bold hover:text-indigo-500 transition-colors">{value}</a>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-500 opacity-5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's <span className="gradient-text">Work Together</span></h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Ready to bring your next big idea to life. Reach out and let's start building something amazing.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Details */}
          <div className="w-full lg:w-1/3 space-y-6">
            <ContactInfo 
              icon={<Mail size={28} />} 
              title="Email" 
              value="hello@mahek.dev" 
              href="mailto:hello@mahek.dev"
            />
            <ContactInfo 
              icon={<LinkedinIcon size={28} />} 
              title="LinkedIn" 
              value="Mahek Developer" 
              href="https://linkedin.com"
            />
            <ContactInfo 
              icon={<GithubIcon size={28} />} 
              title="GitHub" 
              value="Mahek-Codes" 
              href="https://github.com"
            />

            <div className="p-10 glass rounded-[2.5rem] shadow-xl mt-12">
              <h4 className="text-xl font-bold mb-6">Social Pulse</h4>
              <div className="flex gap-5">
                <a href="#" className="p-4 bg-white dark:bg-slate-800 rounded-2xl hover:text-indigo-500 transition-all hover:scale-110 shadow-sm"><TwitterIcon size={24} /></a>
                <a href="#" className="p-4 bg-white dark:bg-slate-800 rounded-2xl hover:text-indigo-500 transition-all hover:scale-110 shadow-sm"><GithubIcon size={24} /></a>
                <a href="#" className="p-4 bg-white dark:bg-slate-800 rounded-2xl hover:text-indigo-500 transition-all hover:scale-110 shadow-sm"><LinkedinIcon size={24} /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 p-8 md:p-14 glass rounded-[3rem] shadow-2xl"
          >
            <form action="https://api.web3forms.com/submit" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-500 ml-1">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="John Doe" 
                  required
                  className="w-full p-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all shadow-sm"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-500 ml-1">Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="john@example.com" 
                  required
                  className="w-full p-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all shadow-sm"
                />
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="text-sm font-bold text-slate-500 ml-1">Message</label>
                <textarea 
                  name="message" 
                  rows="6" 
                  placeholder="Tell me about your project..." 
                  required
                  className="w-full p-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none shadow-sm"
                ></textarea>
              </div>
              
              <div className="md:col-span-2 pt-4">
                <button type="submit" className="w-full py-5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-2xl shadow-xl shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-lg">
                  Send Message <Send size={22} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
