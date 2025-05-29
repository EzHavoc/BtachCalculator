import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-slate-200 dark:border-slate-700 last:border-0">
      <button
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-lg text-slate-800 dark:text-white">{question}</span>
        <span className="text-slate-500 dark:text-slate-400">
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </span>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-slate-600 dark:text-slate-300">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Is BatchCalc free to use?",
      answer: "BatchCalc offers both free and premium versions. The free version includes all essential features for basic batch calculations. The premium version adds advanced formula support, larger batch sizes, and priority support."
    },
    {
      question: "How do I import data from Excel or CSV files?",
      answer: "To import data, click on the 'Import' button in the top menu, select your file format (Excel or CSV), and choose the file from your computer. BatchCalc will automatically parse the data and prepare it for processing."
    },
    {
      question: "Can I save my calculation templates for future use?",
      answer: "Yes, BatchCalc allows you to save your calculation templates. Click on 'Save Template' in the File menu, give it a name, and it will be available for future use. You can access your saved templates from the 'Templates' section."
    },
    {
      question: "What's the maximum number of calculations BatchCalc can handle?",
      answer: "The free version supports up to 1,000 calculations per batch. The premium version can handle up to 100,000 calculations per batch, depending on your system's resources and the complexity of the formulas."
    },
    {
      question: "Is BatchCalc available for mobile devices?",
      answer: "Currently, BatchCalc is only available for desktop operating systems (Windows, macOS, and Linux). We're working on mobile versions for iOS and Android that will be released in the future."
    },
    {
      question: "How do I get help if I encounter a problem?",
      answer: "For technical support, you can visit our documentation page, join our community forum, or contact our support team directly through the 'Help' menu in the application. Premium users receive priority support via email or live chat."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-600 dark:text-slate-300 mb-4">Still have questions?</p>
          <a 
            href="#" 
            className="inline-flex bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-full transition-colors shadow-sm hover:shadow-md"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;