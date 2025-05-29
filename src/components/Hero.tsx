import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-6 leading-tight">
          Batch Calculator
          <span className="block text-teal-600 dark:text-teal-400">Simplify Complex Calculations</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          A powerful, intuitive calculator for processing multiple calculations simultaneously. 
          Perfect for data analysis, financial modeling, and scientific research.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
          <a 
            href="#download" 
            className="group bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-full transition-all shadow-md hover:shadow-lg flex items-center space-x-2 w-full md:w-auto justify-center"
          >
            <Download className="h-5 w-5" />
            <span>Download Now</span>
          </a>
          
          <a 
            href="#features" 
            className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 border border-slate-200 dark:border-slate-700 font-medium py-3 px-8 rounded-full transition-all shadow-sm hover:shadow-md flex items-center space-x-2 w-full md:w-auto justify-center"
          >
            <span>Learn More</span>
            <ArrowDown className="h-4 w-4 group-hover:animate-bounce" />
          </a>
        </div>
        
        <div className="relative mx-auto max-w-4xl">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
            <div className="p-2 bg-slate-100 dark:bg-slate-700 flex items-center space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">Input Data</div>
                  <div className="font-mono text-xs text-slate-700 dark:text-slate-300">
                    <div>1000 * 0.05 = ?</div>
                    <div>500 + 250 = ?</div>
                    <div>3000 / 4 = ?</div>
                    <div>50 * 12 - 100 = ?</div>
                  </div>
                </div>
                <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">Results</div>
                  <div className="font-mono text-xs text-teal-600 dark:text-teal-400">
                    <div>50</div>
                    <div>750</div>
                    <div>750</div>
                    <div>500</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-6 bg-black/5 dark:bg-black/20 blur-xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;