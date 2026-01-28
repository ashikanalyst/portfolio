import React from 'react';
import SectionHeading from './SectionHeading';
import { CASE_STUDY } from '../constants';
import { CheckCircle2, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Month 1', 'On-Time Rate': 85, 'Cost Efficiency': 78 },
  { name: 'Month 2', 'On-Time Rate': 88, 'Cost Efficiency': 82 },
  { name: 'Month 3', 'On-Time Rate': 94, 'Cost Efficiency': 91 },
];

const CaseStudy: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-12">
           <span className="text-brand-400 font-semibold tracking-wider uppercase text-sm">Case Study Highlight</span>
           <h2 className="text-3xl md:text-4xl font-bold mt-2">{CASE_STUDY.title}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-sm mr-3">01</span>
                The Problem
              </h3>
              <p className="text-slate-300 leading-relaxed border-l-2 border-slate-700 pl-4">
                {CASE_STUDY.problem}
              </p>
            </div>

            <div>
               <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm mr-3">02</span>
                My Approach
              </h3>
              <ul className="space-y-4">
                {CASE_STUDY.approach.map((step, idx) => (
                  <li key={idx} className="flex items-start text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 mr-3 mt-1 shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm mr-3">03</span>
                The Impact
              </h3>
               <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="flex items-start">
                    <TrendingUp className="w-8 h-8 text-emerald-400 mr-4 shrink-0" />
                    <p className="text-emerald-100 font-medium text-lg italic">"{CASE_STUDY.impact}"</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6 lg:p-8 border border-slate-700 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
               <h4 className="font-semibold text-slate-200">Performance Metrics (Pre vs Post Optimization)</h4>
               <div className="flex gap-2 text-xs">
                  <span className="px-2 py-1 bg-slate-700 rounded text-slate-300">PostgreSQL</span>
                  <span className="px-2 py-1 bg-slate-700 rounded text-slate-300">Python</span>
               </div>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: -20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                  <XAxis dataKey="name" stroke="#94a3b8" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                    cursor={{fill: '#334155', opacity: 0.4}}
                  />
                  <Legend wrapperStyle={{paddingTop: '20px'}} />
                  <Bar dataKey="On-Time Rate" name="On-Time Delivery %" fill="#38bdf8" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Cost Efficiency" name="Cost Efficiency Score" fill="#34d399" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                <div className="text-sm text-slate-400">Routes Optimized</div>
                <div className="text-2xl font-bold text-white">142</div>
              </div>
              <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                <div className="text-sm text-slate-400">Hours Saved/Mo</div>
                <div className="text-2xl font-bold text-white">320+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;