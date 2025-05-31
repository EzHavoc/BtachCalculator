import React from 'react';
import { Calculator, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="text-center max-w-xl">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Calculator className="h-6 w-6 text-teal-400" />
              <span className="font-semibold text-xl">BatchCalc</span>
            </div>
            <p className="text-slate-300 dark:text-slate-400 text-sm">
              A powerful batch calculator for processing multiple calculations simultaneously. Perfect for data analysis, financial modeling, and scientific research.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-700 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-slate-400 mb-4 md:mb-0">
            © 2025 BatchCalc. All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/EzHavoc/BtachCalculator" className="text-slate-400 hover:text-teal-400 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="mailto:mmathi33@gmail.com" className="text-slate-400 hover:text-teal-400 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
