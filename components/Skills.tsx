import React from 'react';
import SectionHeading from './SectionHeading';
import { SKILLS } from '../constants';
import { Code2, Database, BarChart3, Server } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  code: <Code2 className="w-6 h-6" />,
  database: <Database className="w-6 h-6" />,
  chart: <BarChart3 className="w-6 h-6" />,
  server: <Server className="w-6 h-6" />,
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading title="Skills & Tools" subtitle="My technical toolkit for data science and analytics" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 mb-4">
                {iconMap[category.icon]}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-slate-600">
                    <span className="w-1.5 h-1.5 bg-brand-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;