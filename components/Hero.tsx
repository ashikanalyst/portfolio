import React from 'react';
import { Download, ChevronRight, Database, BarChart2, PieChart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-50 via-slate-50 to-white"></div>
      <div className="absolute top-20 right-0 -z-10 opacity-30 transform translate-x-1/4">
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0ea5e9" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,70.6,33.6C59,44.1,47.1,51.4,34.8,59.8C22.5,68.2,9.8,77.6,-3.6,83.9C-17,90.2,-31.1,93.3,-43.3,87.3C-55.5,81.3,-65.8,66.1,-74.3,51.3C-82.8,36.5,-89.5,22.1,-90.6,7.1C-91.7,-7.9,-87.2,-23.5,-77.7,-36.5C-68.2,-49.5,-53.7,-59.9,-39.3,-66.9C-24.9,-73.9,-10.6,-77.5,2.6,-82C15.8,-86.5,30.5,-76,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-brand-600 mr-2"></span>
              Available for new opportunities
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Data Analysis Specialist turning data into <span className="text-brand-600">actionable insights</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
              I specialize in transforming raw data into clear, strategic decisions. With expertise in data cleaning, predictive modeling, and visualization, I help businesses uncover hidden value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#projects" className="inline-flex justify-center items-center px-8 py-3.5 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/20">
                View Projects
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#" className="inline-flex justify-center items-center px-8 py-3.5 bg-white text-slate-700 border border-slate-200 font-semibold rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors">
                Download Resume
                <Download className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            {/* Abstract Dashboard Graphic */}
            <div className="bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 relative z-10 max-w-lg mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-6">
                <div className="h-3 w-32 bg-slate-200 rounded"></div>
                <div className="flex gap-2">
                  <div className="h-3 w-3 bg-red-400 rounded-full"></div>
                  <div className="h-3 w-3 bg-amber-400 rounded-full"></div>
                  <div className="h-3 w-3 bg-emerald-400 rounded-full"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-brand-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart2 className="w-5 h-5 text-brand-600" />
                    <span className="text-sm font-semibold text-slate-600">Growth</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">+127%</div>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm font-semibold text-slate-600">Efficiency</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">94.2%</div>
                </div>
              </div>
              <div className="h-32 bg-slate-50 rounded-lg flex items-end justify-between px-4 pb-2 gap-2">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} className="w-full bg-brand-500 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"></div>
                ))}
              </div>
            </div>
            
            {/* Floating Element */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20 animate-bounce delay-700">
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-purple-100 rounded-lg">
                   <PieChart className="w-6 h-6 text-purple-600" />
                 </div>
                 <div>
                   <div className="text-xs text-slate-500 font-medium">Data Accuracy</div>
                   <div className="text-lg font-bold text-slate-900">99.8%</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;