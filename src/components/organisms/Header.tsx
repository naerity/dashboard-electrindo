import { useState, useEffect } from 'react';
import { Bell, Sun, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateState(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateState.toLocaleDateString('en-GB', {
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
  });

  const formattedTime = dateState.toLocaleTimeString('en-GB', {
    hour12: false,
  });

  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 sticky top-0 z-20 shadow-sm flex-none">
    
      <div className="flex items-center gap-3">
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg text-gray-600 active:scale-95 transition-transform"
        >
          <Menu className="w-5 h-5" />
        </button>

        <h1 className="text-base font-bold text-gray-800 tracking-tight whitespace-nowrap">
          PT. Electrindo Inti Dinamika
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block leading-none">
          <span className="text-xs font-medium text-gray-500 mr-2">{formattedDate}</span>
          <span className="text-gray-300">|</span>
          <span className="text-sm font-bold text-slate-700 font-mono ml-2">{formattedTime}</span>
        </div>

        <div className="h-6 w-px bg-gray-200 mx-1 hidden sm:block"></div>

        <div className="flex items-center gap-1">
          <button className="p-1.5 text-gray-400 hover:bg-gray-100 rounded-full"><Sun size={18} /></button>
          <button className="p-1.5 text-gray-400 hover:bg-gray-100 rounded-full relative">
            <Bell size={18} />
            <span className="absolute top-1.5 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
          </button>
        </div>

        <div className="flex items-center pl-3 border-l border-gray-200 ml-1">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
            alt="Profile" 
            className="w-8 h-8 rounded-full border border-gray-200 p-0.5 bg-gray-50"
          />
        </div>
      </div>
    </header>
  );
};