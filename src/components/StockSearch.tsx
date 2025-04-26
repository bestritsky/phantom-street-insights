
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const StockSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const suggestions = [
    { symbol: 'AAPL', name: 'Apple Inc.' },
    { symbol: 'MSFT', name: 'Microsoft Corporation' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.' },
    { symbol: 'AMZN', name: 'Amazon.com Inc.' },
    { symbol: 'META', name: 'Meta Platforms Inc.' }
  ];
  
  const filteredSuggestions = suggestions.filter(item => 
    item.symbol.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="relative w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search stocks (e.g., AAPL, TSLA)"
          className="pl-10 pr-4 border-gray-700 bg-secondary/50 focus-visible:ring-finance-accent-blue"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        />
      </div>
      
      {showSuggestions && searchTerm.length > 0 && (
        <div className="absolute w-full mt-1 bg-card border border-border rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((item) => (
              <div 
                key={item.symbol}
                className="px-4 py-2 hover:bg-secondary/50 cursor-pointer"
                onClick={() => setSearchTerm(item.symbol)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.symbol}</span>
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-muted-foreground">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default StockSearch;
