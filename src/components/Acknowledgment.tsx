import React from 'react';

// Import images from src/images folder
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import image6 from '../images/image6.png';

const acknowledgments = [
  { 
    src: image1, 
    alt: 'Logo 1', 
    name: 'Dr. Madhu A. \n Dept. of Physics\n Dayananda Sagar College Of Engineering Bengaluru, India' 
  },
  { 
    src: image2, 
    alt: 'Logo 2', 
    name: 'Kanishk Singh\nDept. Of Computer Science Engineering (Cyber Security)\nDayananda Sagar College of Engineering Bengaluru, India' 
  },
  { 
    src: image3, 
    alt: 'Logo 3', 
    name: 'Nikhita Thupakula\nDept. Of Computer Science Engineering (Cyber Security)\nDayananda Sagar College of Engineering Bengaluru, India' 
  },
  { 
    src: image4, 
    alt: 'Logo 4', 
    name: 'Dhruthi G.P.\nDept. Of Computer Science Engineering (Cyber Security)\nDayananda Sagar College of Engineering Bengaluru, India' 
  },
  { 
    src: image5, 
    alt: 'Logo 5', 
    name: 'Samarth B.C.\nDept. Of Computer Science Engineering (Cyber Security)\nDayananda Sagar College of Engineering Bengaluru, India' 
  },
  { 
    src: image6, 
    alt: 'Logo 6', 
    name: 'Harni R.\nDept. Of Computer Science Engineering (Data Science)\nDayananda Sagar College of Engineering Bengaluru, India' 
  },
];

const Acknowledgment: React.FC = () => {
  return (
    <section className="py-16 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-white">Acknowledgment</h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
          We would like to thank our collaborators, institutions, and contributors whose support made this project possible.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
          {acknowledgments.map(({ src, alt, name }, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={src}
                alt={alt}
                className="h-24 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
              <span className="mt-2 text-sm text-slate-700 dark:text-slate-300 text-center">
                {name.split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line.trim()}
                    <br />
                  </React.Fragment>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Acknowledgment;
