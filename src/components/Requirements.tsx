import React from 'react';
import { CheckCircle2, Info } from 'lucide-react';

const Requirements: React.FC = () => {
  const systems = [
    {
      name: "Windows",
      versions: ["Windows 10", "Windows 11"],
      processor: "1.6 GHz or faster processor",
      memory: "2 GB RAM",
      storage: "500 MB available hard disk space",
      additional: "Microsoft .NET Framework 4.7.2 or higher"
    },
    {
      name: "macOS",
      versions: ["Monterey (12.0)", "Ventura (13.0)", "Sonoma (14.0)"],
      processor: "Intel or Apple Silicon processor",
      memory: "2 GB RAM",
      storage: "500 MB available hard disk space",
      additional: "None"
    },
    {
      name: "Linux",
      versions: ["Ubuntu 20.04 LTS or later", "Debian 11 or later", "Fedora 36 or later"],
      processor: "1.6 GHz or faster processor",
      memory: "2 GB RAM",
      storage: "500 MB available hard disk space",
      additional: "GTK+ 3.0 or later"
    }
  ];

  return (
    <section id="requirements" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">System Requirements</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            BatchCalc is designed to work efficiently on most modern systems with minimal requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {systems.map((system, index) => (
            <div 
              key={index} 
              className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-600"
            >
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">{system.name}</h3>
              
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Supported Versions</div>
                  <div className="text-slate-700 dark:text-slate-200">
                    {system.versions.map((version, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                        <span>{version}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Processor</div>
                  <div className="text-slate-700 dark:text-slate-200">{system.processor}</div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Memory</div>
                  <div className="text-slate-700 dark:text-slate-200">{system.memory}</div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Storage</div>
                  <div className="text-slate-700 dark:text-slate-200">{system.storage}</div>
                </div>
                
                {system.additional !== "None" && (
                  <div>
                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Additional Requirements</div>
                    <div className="text-slate-700 dark:text-slate-200">{system.additional}</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 dark:bg-slate-700 p-4 rounded-lg flex items-start max-w-2xl mx-auto">
          <Info className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
          <p className="text-slate-700 dark:text-slate-200 text-sm">
            For optimal performance with large datasets (10,000+ calculations), we recommend at least 8GB of RAM and a multi-core processor. 
            BatchCalc will work on systems with lower specifications, but processing time may be affected.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Requirements;