import React from 'react';
import SectionHeading from './SectionHeading';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading title="Get In Touch" subtitle="Have a project in mind or looking for a data specialist? Let's connect." />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-900">Contact Information</h3>
            <p className="text-slate-600">
              I am currently available for freelance projects and full-time opportunities.
              Feel free to reach out via email or connect with me on professional networks.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center text-slate-700">
                <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 mr-4">
                  <Mail className="w-5 h-5" />
                </div>
                <span>hello@analystportfolio.com</span>
              </div>
              <div className="flex items-center text-slate-700">
                 <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>San Francisco, CA (Remote Friendly)</span>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-slate-100 rounded-lg text-slate-600 hover:bg-brand-600 hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-slate-100 rounded-lg text-slate-600 hover:bg-slate-800 hover:text-white transition-all">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full py-3.5 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;