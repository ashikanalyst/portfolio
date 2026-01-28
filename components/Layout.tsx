import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart2 } from 'lucide-react';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2 text-brand-600 font-bold text-xl tracking-tight">
            <BarChart2 className="w-8 h-8" />
            <span className={scrolled ? 'text-slate-900' : 'text-slate-900'}>DataAnalyst<span className="text-brand-600">.pro</span></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg py-4 px-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-base font-medium text-slate-600 hover:text-brand-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <a 
              href="#contact" 
              className="w-full text-center px-5 py-3 text-sm font-semibold text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <div className="flex items-center justify-center space-x-2 mb-4 font-bold text-xl">
            <BarChart2 className="w-6 h-6 text-brand-400" />
            <span>DataAnalyst.pro</span>
          </div>
          <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
            Turning raw data into clear, actionable insights for forward-thinking businesses.
          </p>
          <div className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Data Analyst Portfolio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;