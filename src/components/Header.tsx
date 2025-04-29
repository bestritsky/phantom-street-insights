
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import StockSearch from './StockSearch';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="bg-finance-dark-gray bg-opacity-70 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img 
                src="https://binaryadvisers.com/wp-content/uploads/2025/04/ChatGPT-Image-Apr-29-2025-12_23_33-AM.png" 
                alt="BinaryAdvisers Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Binary<span className="text-finance-accent-blue">Advisers</span>
            </h1>
          </Link>
        </div>
        
        <div className="hidden md:flex flex-1 max-w-md mx-6">
          <StockSearch />
        </div>
        
        <nav>
          <ul className="flex items-center space-x-6">
            <li className="hidden md:block">
              <Link 
                to="/ai-strategy" 
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/ai-strategy' || location.pathname === '/' 
                    ? 'text-finance-accent-blue' 
                    : 'text-gray-300 hover:text-finance-accent-blue'
                }`}
              >
                Home
              </Link>
            </li>
            <li className="hidden md:block">
              <Link 
                to="/dashboards" 
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/dashboards' || location.pathname === '/products'
                    ? 'text-finance-accent-blue' 
                    : 'text-gray-300 hover:text-finance-accent-blue'
                }`}
              >
                Dashboards
              </Link>
            </li>
            <li className="hidden md:block">
              <a href="#" className="text-sm font-medium text-gray-300 hover:text-finance-accent-blue transition-colors">
                Research
              </a>
            </li>
            <li>
              <Button variant="outline" size="sm" className="hidden md:flex">
                <Search className="h-4 w-4 mr-2" /> Advanced Search
              </Button>
              <Button variant="outline" size="sm" className="md:hidden">
                <Search className="h-4 w-4" />
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
