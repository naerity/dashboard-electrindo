import { MoreVertical, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon: React.ReactNode;
  color?: 'blue' | 'yellow' | 'purple' | 'emerald'; 
}

export const StatCard = ({ label, value, trend, trendUp, icon, color = 'blue' }: StatCardProps) => {
  
  const themes = {
    blue:   { bg: 'bg-blue-100',   text: 'text-blue-600' },
    yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
    emerald:{ bg: 'bg-emerald-100',text: 'text-emerald-600' },
  };

  const theme = themes[color];

  return (
    <div className="bg-white p-2 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2 relative h-full w-full min-w-0">
      
      {/* 1. Icon Container  */}
      <div className={`w-9 h-9 rounded-full flex-none flex items-center justify-center ${theme.bg} ${theme.text} shrink-0`}>
        <div className="[&>svg]:w-4 [&>svg]:h-4"> 
           {icon}
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="flex flex-col min-w-0 overflow-hidden justify-center">
        <span className="text-[11px] font-medium text-gray-500 truncate leading-tight">{label}</span>
        
        <div className="flex items-center gap-1.5 flex-wrap mt-0.5">
          <h3 className="text-lg font-bold text-gray-800 tracking-tight leading-none">
            {value}
          </h3>
          
          {/* Badge Trend */}
          <span className={`flex items-center text-[9px] font-bold px-1 py-0.5 rounded border whitespace-nowrap ${
            trendUp 
              ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
              : 'bg-red-50 text-red-600 border-red-100'
          }`}>
            {trendUp 
              ? <ArrowUpRight size={8} strokeWidth={3} className="mr-0.5" /> 
              : <ArrowDownRight size={8} strokeWidth={3} className="mr-0.5" />
            }
            {trend}
          </span>
        </div>
      </div>

      {/* 3. Menu Button */}
      <button className="absolute top-1.5 right-1.5 text-gray-400 hover:text-gray-600 transition-colors">
        <MoreVertical size={14} /> 
      </button>

    </div>
  );
};