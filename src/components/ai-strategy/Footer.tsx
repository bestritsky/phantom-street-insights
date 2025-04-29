
import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 px-4 border-t border-gray-800 mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 h-[80px] max-h-[80px]">
          <div className="mb-4 md:mb-0 flex items-center">
            <img 
              src="https://binaryadvisers.com/wp-content/uploads/2025/04/ChatGPT_Image_Apr_29__2025__10_53_20_AM-removebg-preview-1.png" 
              alt="Binary Advisers Logo" 
              className="w-8 h-8 mr-2"
            />
            <div>
              <p>© 2025 BinaryAdvisers. New Milford, CT.</p>
              <p className="text-xs mt-1">Member of Rotary International</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-[#0ea5e9] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#0ea5e9] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#0ea5e9] transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
