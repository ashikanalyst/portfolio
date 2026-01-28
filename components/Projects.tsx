import React from 'react';
import SectionHeading from './SectionHeading';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading title="Featured Projects" subtitle="A selection of my work in data analysis and visualization" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <span className="px-3 py-1 text-xs font-semibold tracking-wider text-brand-700 uppercase bg-brand-100 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Key Outcomes:</h4>
                    <ul className="space-y-1">
                      {project.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-600">
                          <ArrowRight className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200">
                    {project.tools.map((tool, idx) => (
                      <span key={idx} className="text-xs font-medium text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="px-8 py-4 bg-white border-t border-slate-100 flex items-center justify-between">
                {project.github && (
                    <a href={project.github} className="flex items-center text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                )}
                {project.link && (
                    <a href={project.link} className="flex items-center text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors ml-auto">
                      View Project
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;