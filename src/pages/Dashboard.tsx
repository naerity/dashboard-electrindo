import { Search, Calendar, Plus, FileText, CheckCircle, Users } from 'lucide-react';
import { StatCard } from '../components/molecules/StatCard';
import { ProjectChart } from '../components/organisms/ProjectChart';
import { SpeedGauge } from '../components/organisms/SpeedGauge';
import { DataTable } from '../components/organisms/DataTable'; 

export const Dashboard = () => {
  return (
    <div className="flex flex-col h-full bg-slate-100 lg:overflow-hidden">
      
      {/* HEADER  */}
      <div className="flex-none bg-white px-4 py-3 border-b border-gray-200 z-10 shadow-sm">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3">
          <h2 className="text-base font-bold text-gray-800">Dashboard</h2>
          
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            <div className="relative flex-1 min-w-[150px] lg:w-48">
              <input type="text" placeholder="Search" className="w-full pl-8 pr-3 py-1.5 bg-white border border-gray-200 rounded-md text-xs focus:ring-1 focus:ring-emerald-500 transition-all"/>
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            </div>
            
            {/* DATE PICKER  */}
            <div className="relative flex items-center bg-white border border-gray-200 rounded-md px-2 py-1.5 hover:border-emerald-500 transition-colors cursor-pointer group">
              <input 
                type="date" 
                className="absolute inset-0 opacity-0 cursor-pointer z-10" 
                onChange={(e) => console.log(e.target.value)}
              />
              <span className="text-[10px] md:text-xs text-gray-400 mr-1 whitespace-nowrap">Start</span>
              <span className="text-[10px] md:text-xs text-gray-300 mx-0.5">→</span>
              <span className="text-[10px] md:text-xs text-gray-400 mr-1 whitespace-nowrap">End</span>
              <Calendar size={13} className="text-gray-400 group-hover:text-emerald-500" />
            </div>

            <select className="bg-white border border-gray-200 rounded-md px-2 py-1.5 text-[10px] md:text-xs text-gray-600 focus:ring-1 focus:ring-emerald-500 outline-none hover:border-emerald-500 cursor-pointer">
              <option>Gedung A</option>
              <option>Gedung B</option>
              <option>Gedung C</option>
            </select>

            <button className="p-1.5 bg-emerald-500 text-white rounded-md shadow-sm hover:bg-emerald-600 transition-colors ml-auto lg:ml-0">
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="flex-1 flex flex-col p-4 gap-4 overflow-y-auto lg:overflow-hidden lg:min-h-0 lg:pb-4 pb-24 scroll-smooth">
        <div className="flex-none grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 lg:h-auto xl:h-[70px]">
           <div className="h-[70px]"><StatCard label="Ongoing" value="78" trend="5.2%" trendUp={false} color="blue" icon={<FileText strokeWidth={2.5} size={18} />} /></div>
           <div className="h-[70px]"><StatCard label="Completed" value="62" trend="8.1%" trendUp={true} color="yellow" icon={<CheckCircle strokeWidth={2.5} size={18} />} /></div>
           <div className="h-[70px]"><StatCard label="Review" value="62" trend="8.1%" trendUp={true} color="purple" icon={<CheckCircle strokeWidth={2.5} size={18} />} /></div>
           <div className="h-[70px]"><StatCard label="Users" value="140" trend="8.1%" trendUp={true} color="emerald" icon={<Users strokeWidth={2.5} size={18} />} /></div>
        </div>

        <div className="flex-none lg:flex-[4] grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-0">
           <div className="h-[280px] lg:h-full w-full overflow-hidden"><ProjectChart /></div>
           <div className="h-[250px] lg:h-full w-full overflow-hidden"><SpeedGauge /></div>
        </div>

        <div className="flex-none h-[450px] lg:h-auto lg:flex-[6] min-h-0">
          <DataTable />
        </div>
      </div>
    </div>
  );
};