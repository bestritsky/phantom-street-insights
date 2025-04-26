
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import StockSearch from './StockSearch';

const Header: React.FC = () => {
  return (
    <header className="bg-finance-dark-gray bg-opacity-70 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-finance-accent-blue flex items-center justify-center">
            <span className="font-bold text-white">P</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            PhantomStreet<span className="text-finance-accent-blue">Insights</span>
          </h1>
        </div>
        
        <div className="hidden md:flex flex-1 max-w-md mx-6">
          <StockSearch />
        </div>
        
        <nav>
          <ul className="flex items-center space-x-6">
            <li className="hidden md:block">
              <a href="#" className="text-sm font-medium hover:text-finance-accent-blue transition-colors">
                Dashboard
              </a>
            </li>
            <li className="hidden md:block">
              <a href="#" className="text-sm font-medium hover:text-finance-accent-blue transition-colors">
                Markets
              </a>
            </li>
            <li className="hidden md:block">
              <a href="#" className="text-sm font-medium hover:text-finance-accent-blue transition-colors">
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
