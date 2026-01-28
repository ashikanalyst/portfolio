import React from 'react';
import SectionHeading from './SectionHeading';
import { Target, Search, FileBarChart, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    { icon: <Search className="w-6 h-6" />, title: "Exploratory Analysis", text: "Uncovering patterns in messy datasets." },
    { icon: <Target className="w-6 h-6" />, title: "Precision", text: "Ensuring data integrity and accuracy." },
    { icon: <FileBarChart className="w-6 h-6" />, title: "Reporting", text: "Building automated, interactive dashboards." },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Business Strategy", text: "Translating numbers into roadmap decisions." },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading title="About Me" subtitle="Analytical thinker with a passion for problem-solving" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Hello! I'm a Data Analyst dedicated to helping organizations make smarter decisions through data. My background bridges the gap between raw technical analysis and strategic business application.
            </p>
            <p>
              I don't just extract data; I investigate it. Whether it's cleaning a chaotic dataset to ensure accuracy, designing a dashboard for the C-suite, or running A/B tests to optimize a product feature, my goal is always the same: <strong>clarity</strong>.
            </p>
            <p>
              With experience in retail and tech sectors, I understand that data is only as good as the story it tells. I focus on actionable insights that drive revenue, efficiency, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div key={index} className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-brand-200 hover:bg-brand-50 transition-colors">
                <div className="text-brand-600 mb-4">{item.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;