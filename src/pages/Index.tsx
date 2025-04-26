
import React from 'react';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  return (
    <div className="min-h-screen bg-finance-dark-blue flex flex-col">
      <Header />
      <Dashboard />
      <footer className="py-6 px-4 border-t border-gray-800 mt-auto">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="mb-4 md:mb-0">
              <p>© 2025 PhantomStreet Insights. Premium financial data and research.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-finance-accent-blue transition-colors">Terms</a>
              <a href="#" className="hover:text-finance-accent-blue transition-colors">Privacy</a>
              <a href="#" className="hover:text-finance-accent-blue transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
