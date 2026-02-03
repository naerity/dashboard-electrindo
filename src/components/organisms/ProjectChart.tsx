import { Calendar } from 'lucide-react';
import { 
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend, ScriptableContext, ChartOptions 
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

export const ProjectChart = () => {
  const labels = ['12/10/2024', '13/10/2024', '14/10/2024', '15/10/2024', '16/10/2024'];
  const dataValues = [115000, 148000, 165000, 190000, 180000];

  const data = {
    labels,
    datasets: [
      {
        fill: true, label: 'Project Value', data: dataValues,
        borderColor: '#3b82f6', borderWidth: 2, 
        pointBackgroundColor: '#ffffff', pointBorderColor: '#3b82f6', pointBorderWidth: 2,
        pointRadius: (ctx: any) => (ctx.dataIndex === 2 ? 5 : 0), 
        pointHoverRadius: 6, tension: 0.4,
        backgroundColor: (context: ScriptableContext<'line'>) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, 'rgba(59, 130, 246, 0.4)'); 
          gradient.addColorStop(1, 'rgba(59, 130, 246, 0.0)');
          return gradient;
        },
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false, 
    layout: { 
      padding: { top: 35, right: 10, left: 10, bottom: 5 } 
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1e293b', titleColor: '#fff', bodyColor: '#fff',
        padding: { x: 10, y: 6 }, cornerRadius: 6, displayColors: false,
        titleFont: { size: 0 }, bodyFont: { size: 11, weight: 'bold' as const },
        yAlign: 'bottom',
        callbacks: { label: (c: any) => c.parsed.y.toLocaleString('id-ID') }
      },
    },
    scales: {
      x: { 
        border: { display: false }, 
        grid: { display: false }, 
        ticks: { 
          color: '#9ca3af', font: { size: 9 }, 
          autoSkip: false, maxRotation: 0, 
          padding: 10 
        } 
      },
      y: {
        min: 0, max: 200000, 
        border: { display: false },
        ticks: { 
          stepSize: 20000, 
          color: '#9ca3af', 
          font: { size: 9 }, 
          padding: 20, 
          autoSkip: false,   
          callback: (v: any) => (v === 0 ? '0' : v < 100000 ? '' : v.toLocaleString('id-ID'))
        },
        grid: { 
          color: (ctx: any) => (ctx.tick.value < 100000 && ctx.tick.value !== 0 ? 'transparent' : '#f1f5f9'), 
          tickBorderDash: [0, 0] 
        },
      },
    },
  };

  return (
    <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex flex-col w-full h-full min-h-[240px] md:min-h-0 overflow-hidden">
      
      <div className="flex justify-between items-start mb-2 flex-none gap-2">
        <div>
          <h3 className="text-base font-bold text-gray-800">Project Graph</h3>
          <p className="text-[10px] text-gray-400 leading-tight">Monthly stats</p>
        </div>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-500 hover:border-emerald-500 transition-colors whitespace-nowrap">
          <span className="hidden sm:inline text-gray-400">Date</span>
          <Calendar className="w-3 h-3 text-gray-400" />
        </button>
      </div>

      <div className="flex-1 w-full relative min-h-0">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};