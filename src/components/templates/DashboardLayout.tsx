import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../organisms/Sidebar';
import { Header } from '../organisms/Header';

export const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      
      {/* 1. SIDEBAR WRAPPER  */}
      <div 
        className={`
          fixed inset-y-0 left-0 z-50 w-[260px] bg-white transition-transform duration-300 ease-in-out shadow-2xl
          md:relative md:translate-x-0 md:shadow-none md:z-0
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* 2. OVERLAY GELAP */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)} 
        ></div>
      )}

      {/* 3. MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative">
        
        <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <main className="flex-1 overflow-y-auto bg-slate-100 relative scroll-smooth">
          <Outlet />
        </main>

      </div>
    </div>
  );
};