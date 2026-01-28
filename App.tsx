import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CaseStudy />
      <Experience />
      <Contact />
    </Layout>
  );
}

export default App;