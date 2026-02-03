import { Search, Calendar, ChevronDown, Plus, FileText, CheckCircle, Users } from 'lucide-react';
import { StatCard } from '../components/molecules/StatCard';
import { ProjectChart } from '../components/organisms/ProjectChart';
import { SpeedGauge } from '../components/organisms/SpeedGauge';
import { DataTable } from '../components/organisms/DataTable'; 

export const Dashboard = () => {
  return (
    <div className="flex flex-col h-full bg-slate-100 lg:overflow-hidden">
      
      {/* --- SUB-HEADER --- */}
      <div className="flex-none bg-white px-4 py-3 border-b border-gray-200 z-10 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <h2 className="text-base font-bold text-gray-800">Dashboard</h2>
          
          {/* Controls */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 w-full sm:w-48">
              <input type="text" placeholder="Search" className="w-full pl-8 pr-3 py-1.5 bg-white border border-gray-200 rounded-md text-xs focus:ring-1 focus:ring-emerald-500 transition-all"/>
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            </div>
            
            <button className="hidden sm:flex items-center gap-1 px-2 py-1.5 bg-white border border-gray-200 rounded-md text-xs text-gray-600 whitespace-nowrap hover:border-emerald-500">
               <span>Date</span> <Calendar size={13} className="text-gray-400" /> 
            </button>
            <button className="hidden sm:flex items-center gap-1 px-2 py-1.5 bg-white border border-gray-200 rounded-md text-xs text-gray-600 whitespace-nowrap hover:border-emerald-500">
               <span>Gedung A</span> <ChevronDown size={13} />
            </button>
            <button className="p-1.5 bg-emerald-500 text-white rounded-md shadow-sm hover:bg-emerald-600 transition-colors"><Plus size={16} /></button>
          </div>
        </div>
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="flex-1 flex flex-col p-4 gap-4 overflow-y-auto lg:overflow-hidden lg:min-h-0 lg:pb-4 pb-24 scroll-smooth">
        
        {/* 1. STATS GRID (Responsive) */}
        <div className="flex-none grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 lg:h-auto xl:h-[70px]">
           <div className="h-[70px]"><StatCard label="Ongoing" value="78" trend="5.2%" trendUp={false} color="blue" icon={<FileText strokeWidth={2.5} size={18} />} /></div>
           <div className="h-[70px]"><StatCard label="Completed" value="62" trend="8.1%" trendUp={true} color="yellow" icon={<CheckCircle strokeWidth={2.5} size={18} />} /></div>
           <div className="h-[70px]"><StatCard label="Review" value="62" trend="8.1%" trendUp={true} color="purple" icon={<CheckCircle strokeWidth={2.5} size={18} />} /></div>
           <div className="h-[70px]"><StatCard label="Users" value="140" trend="8.1%" trendUp={true} color="emerald" icon={<Users strokeWidth={2.5} size={18} />} /></div>
        </div>

        {/* 2. CHARTS SECTION (Responsive) */}
        <div className="flex-none lg:flex-[4] grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-0">
           <div className="h-[280px] lg:h-full w-full overflow-hidden">
              <ProjectChart />
           </div>
           <div className="h-[250px] lg:h-full w-full overflow-hidden">
              <SpeedGauge />
           </div>
        </div>

        {/* 3. TABLE SECTION */}
        <div className="flex-none h-[450px] lg:h-auto lg:flex-[6] min-h-0">
          <DataTable />
        </div>

      </div>
    </div>
  );
};