import React from 'react';
import { Calculator, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Calculator className="h-6 w-6 text-teal-400" />
              <span className="font-semibold text-xl">BatchCalc</span>
            </div>
            <p className="text-slate-300 dark:text-slate-400 text-sm">
              A powerful batch calculator for processing multiple calculations simultaneously. Perfect for data analysis, financial modeling, and scientific research.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-slate-300 hover:text-teal-400 transition-colors text-sm">Features</a></li>
              <li><a href="#download" className="text-slate-300 hover:text-teal-400 transition-colors text-sm">Download</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors text-sm">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors text-sm">Tutorials</a></li>
              <li><a href="#faq" className="text-slate-300 hover:text-teal-400 transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors text-sm">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-700 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-slate-400 mb-4 md:mb-0">
            © 2025 BatchCalc. All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
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