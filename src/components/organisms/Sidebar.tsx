import { 
  LayoutGrid, FileText, Wrench, Users, Clock, User, 
  Database, FileInput, Settings, LogOut, Search, Plus, X 
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import LogoEID from '../../assets/electrindo_inti_dinamika_logo-removebg-preview.png';

interface SidebarProps {
  onClose?: () => void; 
}

export const Sidebar = ({ onClose }: SidebarProps) => {
  
  const getItemClass = ({ isActive }: { isActive: boolean }) => {
    const base = "flex items-center gap-3 px-3 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 w-full";
    const active = "bg-emerald-50 text-emerald-600 font-semibold";
    const inactive = "text-gray-500 hover:bg-gray-50 hover:text-gray-700";
    
    return `${base} ${isActive ? active : inactive}`;
  };

  return (
    <aside className="w-full h-full flex flex-col font-sans bg-white border-r border-gray-200 shadow-sm">
      
      <div className="px-5 py-3 border-b border-gray-200 flex-none h-16 flex items-center justify-between">
        <img src={LogoEID} alt="Logo" className="h-14 w-auto object-contain" />

        <button 
          onClick={onClose}
          className="md:hidden p-2 text-gray-500 hover:bg-gray-100 hover:text-red-500 rounded-lg transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* SEARCH */}
      <div className="px-4 py-3 border-b border-gray-200 flex-none">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Search" className="w-full pl-9 pr-6 py-2 bg-white border border-gray-200 rounded-md text-xs focus:ring-1 focus:ring-emerald-500" />
          </div>
          <button className="w-[34px] h-[34px] bg-emerald-500 text-white rounded-md flex items-center justify-center shadow-sm flex-none">
            <Plus size={16} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* MENU LIST */}
      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden">
        
        {/* Application */}
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 px-2">Application</h3>
          <div className="space-y-0.5">
            <NavLink to="/" onClick={onClose} className={getItemClass}><LayoutGrid size={18} /> Dashboard</NavLink>
            <NavLink to="/summary" onClick={onClose} className={getItemClass}><FileText size={18} /> Summary</NavLink>
            <NavLink to="/maintenance" onClick={onClose} className={getItemClass}><Wrench size={18} /> Maintenance</NavLink>
          </div>
        </div>

        {/* Management */}
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 px-2">Management</h3>
          <div className="space-y-0.5">
            <NavLink to="/role" onClick={onClose} className={getItemClass}><Users size={18} /> Role</NavLink>
            <NavLink to="/activity" onClick={onClose} className={getItemClass}><Clock size={18} /> Activity User</NavLink>
            <NavLink to="/account" onClick={onClose} className={getItemClass}><User size={18} /> Account</NavLink>
          </div>
        </div>

        {/* Database */}
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 px-2">Database</h3>
          <div className="space-y-0.5">
            <NavLink to="/master-data" onClick={onClose} className={getItemClass}><Database size={18} /> Master Data</NavLink>
            <NavLink to="/register" onClick={onClose} className={getItemClass}><FileInput size={18} /> Register</NavLink>
            <NavLink to="/setting" onClick={onClose} className={getItemClass}><Settings size={18} /> Setting</NavLink>
          </div>
        </div>

        {/* Logout */}
        <div className="px-4 py-3">
          <button className="flex items-center gap-3 px-3 py-2 text-[13px] font-medium text-red-500 hover:bg-red-50 rounded-lg w-full transition-colors group">
            <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" /> Logout
          </button>
        </div>

      </div>
    </aside>
  );
};