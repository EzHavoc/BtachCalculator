import React, { useState } from 'react';
import { Download, CheckCircle2, AppWindow as Windows, Apple, FileDown } from 'lucide-react';

const DownloadSection: React.FC = () => {
  const [downloadStarted, setDownloadStarted] = useState(false);
  
 const handleDownload = (platform: string) => {
  setDownloadStarted(true);

  let downloadUrl = '';
  switch (platform) {
    case 'windows v1.0.0':
      downloadUrl = 'https://drive.google.com/drive/folders/14TJcP3xpiSFWHXfRHdsys0oIh2AeGQds?usp=sharing';
      break;
    case 'macos v1.0.0':
      downloadUrl = 'https://drive.google.com/drive/folders/14TJcP3xpiSFWHXfRHdsys0oIh2AeGQds?usp=sharing';
      break;
    case 'linux v1.0.0':
      downloadUrl = 'https://drive.google.com/drive/folders/14TJcP3xpiSFWHXfRHdsys0oIh2AeGQds?usp=sharing';
      break;
      case 'windows v2.0.0':
      downloadUrl = 'https://drive.google.com/file/d/1x9UwgoNZdUQWBMUHw0G-aG8LfL4KRcSp/view?usp=drive_link';
      break;
    case 'macos v2.0.0':
      downloadUrl = 'https://drive.google.com/file/d/1x9UwgoNZdUQWBMUHw0G-aG8LfL4KRcSp/view?usp=drive_link';
      break;
    case 'linux v2.0.0':
      downloadUrl = 'https://drive.google.com/file/d/1x9UwgoNZdUQWBMUHw0G-aG8LfL4KRcSp/view?usp=drive_link';
      break;
    default:
      return;
  }
  

  // Start the file download
  window.location.href = downloadUrl;

  // Optional: Reset the state after a delay
  setTimeout(() => {
    setDownloadStarted(false);
  }, 3000);
};

  
  return (
    <section id="download" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Download BatchCalculator</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Get started with BatchCalc today. Choose your platform below to download the latest version.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {/* Windows Download */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-50 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Windows className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">Windows</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Windows 10, 11</p>
            <button
              onClick={() => handleDownload('windows v1.0.0')}
              className="w-full bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              disabled={downloadStarted}
            >
              {downloadStarted ? (
                <>
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <Download className="h-5 w-5" />
                  <span>Download</span>
                </>
              )}
            </button>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">v1.0.0 (64-bit) • 88.6MB</p>
          </div>
          {/* macOS Download */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-50 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Apple className="h-8 w-8 text-slate-800 dark:text-slate-200" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">macOS</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Intel & Apple Silicon</p>
            <button
              onClick={() => handleDownload('macos v1.0.0')}
              className="w-full bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              disabled={downloadStarted}
            >
              {downloadStarted ? (
                <>
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <Download className="h-5 w-5" />
                  <span>Download</span>
                </>
              )}
            </button>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">v1.0.0 • 88.6MB</p>
          </div>
           {/* Linux Download */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-50 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-slate-800 dark:text-slate-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" fill="currentColor"/>
                <path d="M12 4V2M12 22V20M4 12H2M22 12H20M19.8 19.8L18.4 18.4M19.8 4.2L18.4 5.6M4.2 19.8L5.6 18.4M4.2 4.2L5.6 5.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">Linux</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Ubuntu, Debian, Fedora</p>
            <button
              onClick={() => handleDownload('linux')}
              className="w-full bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              disabled={downloadStarted}
            >
              {downloadStarted ? (
                <>
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <Download className="h-5 w-5" />
                  <span>Download</span>
                </>
              )}
            </button>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">v1.0.0 • 88.6MB</p>
          </div>
          {/*Windows Download*/}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-50 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Windows className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">Windows</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Windows 10, 11</p>
            <button
              onClick={() => handleDownload('windows v2.0.0')}
              className="w-full bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              disabled={downloadStarted}
            >
              {downloadStarted ? (
                <>
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <Download className="h-5 w-5" />
                  <span>Download</span>
                </>
              )}
            </button>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">v2.0.0 (64-bit) • 99.4MB</p>
          </div>
          
          
          {/* macOS Download */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-50 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Apple className="h-8 w-8 text-slate-800 dark:text-slate-200" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">macOS</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Intel & Apple Silicon</p>
            <button
              onClick={() => handleDownload('macos v2.0.0')}
              className="w-full bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              disabled={downloadStarted}
            >
              {downloadStarted ? (
                <>
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <Download className="h-5 w-5" />
                  <span>Download</span>
                </>
              )}
            </button>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">v2.0.0 • 99.4MB</p>
          </div>
          
         
          {/* Linux Download */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-50 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-slate-800 dark:text-slate-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" fill="currentColor"/>
                <path d="M12 4V2M12 22V20M4 12H2M22 12H20M19.8 19.8L18.4 18.4M19.8 4.2L18.4 5.6M4.2 19.8L5.6 18.4M4.2 4.2L5.6 5.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">Linux</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Ubuntu, Debian, Fedora</p>
            <button
              onClick={() => handleDownload('linux v2.0.0')}
              className="w-full bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              disabled={downloadStarted}
            >
              {downloadStarted ? (
                <>
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <Download className="h-5 w-5" />
                  <span>Download</span>
                </>
              )}
            </button>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">v2.0.0 • 99.4MB</p>
          </div>
        </div>
        
        
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <a 
            href="#" 
            className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            <FileDown className="h-5 w-5" />
            <span>Download older versions</span>
          </a>
          
          <span className="hidden md:inline text-slate-400 dark:text-slate-600">•</span>
          
          <a 
            href="#" 
            className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8L8 16M8 8L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>Report an issue</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;