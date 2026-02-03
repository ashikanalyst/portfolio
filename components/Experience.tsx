import React from 'react';
import SectionHeading from './SectionHeading';
import { EXPERIENCE } from '../constants';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading title="Experience & Education" subtitle="My professional journey and certifications" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="w-6 h-6 text-brand-600 mr-3" />
              <h3 className="text-2xl font-bold text-slate-900">Work History</h3>
            </div>
            
            <div className="space-y-8 border-l-2 border-brand-200 ml-3 pl-8 relative">
              {EXPERIENCE.map((job) => (
                <div key={job.id} className="relative">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-brand-500"></span>
                  <div className="mb-1 text-sm font-semibold text-brand-600">{job.period}</div>
                  <h4 className="text-xl font-bold text-slate-900">{job.role}</h4>
                  <div className="text-slate-500 font-medium mb-4">{job.company}</div>
                  <ul className="space-y-2">
                    {job.description.map((desc, idx) => (
                      <li key={idx} className="text-slate-600 text-sm leading-relaxed">
                        • {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-6 h-6 text-brand-600 mr-3" />
              <h3 className="text-2xl font-bold text-slate-900">Education</h3>
            </div>
            
            <div className="space-y-8 mb-12">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="text-lg font-bold text-slate-900">Bachelor of Population Science and Human Resource Development</h4>
                <p className="text-slate-600">University of Rajshahi</p>
                <p className="text-slate-400 text-sm mt-1">2018 - 2023</p>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-brand-600 mr-3" />
              <h3 className="text-2xl font-bold text-slate-900">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start bg-white p-4 rounded-lg border border-slate-200">
                <img src="https://picsum.photos/40/40" alt="Google" className="w-10 h-10 rounded mr-4 bg-slate-100" />
                <div>
                  <h5 className="font-bold text-slate-900">Google Data Analytics Professional Certificate</h5>
                  <p className="text-sm text-slate-500">Completed 2021</p>
                </div>
              </div>
               <div className="flex items-start bg-white p-4 rounded-lg border border-slate-200">
                <img src="https://picsum.photos/41/41" alt="Tableau" className="w-10 h-10 rounded mr-4 bg-slate-100" />
                <div>
                  <h5 className="font-bold text-slate-900">Tableau Desktop Specialist</h5>
                  <p className="text-sm text-slate-500">Completed 2020</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;