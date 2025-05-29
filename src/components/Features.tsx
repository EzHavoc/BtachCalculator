import React from 'react';
import { ChevronRight, FileBadge, Cpu, Gauge, ServerCrash, Clipboard, Users } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
      <div className="bg-teal-50 dark:bg-slate-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        <div className="text-teal-600 dark:text-teal-400">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <FileBadge className="h-6 w-6" />,
      title: "Batch Processing",
      description: "Process hundreds of calculations simultaneously with a single click."
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Advanced Formulas",
      description: "Support for complex mathematical formulas and scientific notations."
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: "High Performance",
      description: "Optimized algorithms for fast processing even with large datasets."
    },
    {
      icon: <ServerCrash className="h-6 w-6" />,
      title: "Error Handling",
      description: "Smart error detection with helpful suggestions for correction."
    },
    {
      icon: <Clipboard className="h-6 w-6" />,
      title: "Import/Export",
      description: "Import data from Excel or CSV and export results in multiple formats."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "Share calculation templates with team members or colleagues."
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Powerful Features</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Designed to handle complex calculations with ease, BatchCalc offers a comprehensive set of features to boost your productivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#download" 
            className="inline-flex items-center text-teal-600 dark:text-teal-400 font-medium hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
          >
            <span>Get all features now</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;