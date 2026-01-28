import React from 'react';
import { Project, SkillCategory, ExperienceItem, CaseStudyData } from './types';

export const SKILLS: SkillCategory[] = [
  {
    title: "Programming & Analysis",
    skills: ["Python", "SQL", "R", "Pandas", "NumPy"],
    icon: 'code'
  },
  {
    title: "Visualization",
    skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "D3.js"],
    icon: 'chart'
  },
  {
    title: "Databases & Tools",
    skills: ["PostgreSQL", "MySQL", "Excel (Advanced)", "Jupyter", "Git"],
    icon: 'database'
  },
  {
    title: "Methodologies",
    skills: ["A/B Testing", "Statistical Modeling", "EDA", "Data Cleaning"],
    icon: 'server'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: "E-commerce Sales Performance Dashboard",
    category: "Business Intelligence",
    description: "Designed an interactive dashboard to track KPI metrics, enabling regional managers to identify underperforming sectors immediately.",
    tools: ["Tableau", "SQL", "Excel"],
    outcomes: ["Reduced reporting time by 40%", " identified $50k in untapped revenue opportunities"],
    github: "#",
    link: "#"
  },
  {
    id: '2',
    title: "Customer Churn Prediction Model",
    category: "Predictive Analytics",
    description: "Developed a logistic regression model to predict high-risk customers based on usage patterns and support ticket history.",
    tools: ["Python", "Scikit-Learn", "Pandas"],
    outcomes: ["Achieved 82% accuracy", "helped retention team reduce churn by 15% in Q3"],
    github: "#"
  },
  {
    id: '3',
    title: "Marketing Campaign ROI Analysis",
    category: "Data Analysis",
    description: "Analyzed multi-channel marketing data to determine the most cost-effective acquisition channels.",
    tools: ["R", "Ggplot2", "SQL"],
    outcomes: ["Reallocated budget to increase conversion rate by 12%", "Cut wasted ad spend by 20%"],
    link: "#"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    role: "Data Analyst",
    company: "TechFlow Solutions",
    period: "2021 - Present",
    description: [
      "Spearheaded the migration of legacy Excel reporting to automated Power BI dashboards.",
      "Conducted weekly deep-dive analyses on user engagement, influencing product roadmap decisions.",
      "Collaborated with engineering to improve data quality, reducing null values in core datasets by 90%."
    ]
  },
  {
    id: '2',
    role: "Junior Data Analyst",
    company: "RetailMetrics Inc.",
    period: "2019 - 2021",
    description: [
      "Cleaned and preprocessed large datasets (1M+ rows) for seasonal trend analysis.",
      "Assisted in A/B test design and analysis for website checkout optimization.",
      "Created ad-hoc SQL queries to support marketing and sales teams."
    ]
  }
];

export const CASE_STUDY: CaseStudyData = {
  title: "Optimizing Supply Chain Efficiency",
  problem: "A regional logistics company was facing rising fuel costs and delivery delays due to inefficient route planning and inventory mismanagement.",
  approach: [
    "Data Integration: Merged GPS data, warehouse inventory logs, and delivery schedules into a unified PostgreSQL database.",
    "Exploratory Analysis: Identified bottlenecks in 'last-mile' delivery during peak hours.",
    "Modeling: Applied clustering algorithms to regroup delivery zones for optimal density."
  ],
  insights: [
    "20% of routes overlapped significantly, causing redundancy.",
    "Peak delay times correlated strongly with specific warehouse dispatch windows."
  ],
  impact: "The new routing strategy reduced fuel consumption by 18% and improved on-time delivery rates from 85% to 94% within 3 months."
};
