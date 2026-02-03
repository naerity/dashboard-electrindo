import { Calendar } from 'lucide-react';

export const SpeedGauge = () => {
  const cx = 150; 
  const cy = 160; 
  const r = 110;  
  const thickness = 20;
  const currentValue = 80; 
  const maxValue = 200;

  const polarToCartesian = (cx: number, cy: number, r: number, angle: number) => {
    const rad = (angle - 180) * Math.PI / 180.0;
    return { x: cx + (r * Math.cos(rad)), y: cy + (r * Math.sin(rad)) };
  };

  const describeArc = (x: number, y: number, r: number, start: number, end: number) => {
    const s = polarToCartesian(x, y, r, end); 
    const e = polarToCartesian(x, y, r, start);
    return [ "M", s.x, s.y, "A", r, r, 0, end - start <= 180 ? "0" : "1", 0, e.x, e.y ].join(" ");
  };

  const needleAngle = (currentValue / maxValue) * 180;

  return (
    <div className="bg-white p-4 rounded-[20px] border border-gray-200 shadow-sm flex flex-col w-full h-full min-h-[360px] md:min-h-0 overflow-hidden">
      
      <div className="flex justify-between items-start mb-4 flex-none gap-2">
        <div>
          <h3 className="text-base font-bold text-gray-800">Speed Gauge</h3>
          <p className="text-[10px] text-gray-400 leading-tight">This is a long chart description</p>
        </div>
        
        <div className="relative flex items-center bg-white border border-gray-200 rounded-lg px-2 py-1.5 hover:border-emerald-500 transition-colors cursor-pointer group">
          <input type="date" className="absolute inset-0 opacity-0 cursor-pointer z-10" />
          <span className="text-[10px] text-gray-400 mr-1 whitespace-nowrap">Start</span>
          <span className="text-[10px] text-gray-300 mx-0.5">→</span>
          <span className="text-[10px] text-gray-400 mr-1 whitespace-nowrap">End</span>
          <Calendar className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-500" />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center w-full relative pb-4">
        <svg 
          viewBox="0 0 300 300" 
          className="w-full h-full max-h-[220px] overflow-visible"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* ARCS */}
          <path d={describeArc(cx, cy, r, 0, 90)} fill="none" stroke="#10b981" strokeWidth={thickness} />
          <path d={describeArc(cx, cy, r, 90, 144)} fill="none" stroke="#f59e0b" strokeWidth={thickness} />
          <path d={describeArc(cx, cy, r, 144, 180)} fill="none" stroke="#ef4444" strokeWidth={thickness} />

          {/* DIVIDERS */}
          {[20, 40, 60, 80, 100, 120, 140, 160, 180].map((val) => {
             const angle = (val / 200) * 180;
             return (<g key={val} transform={`translate(${cx}, ${cy}) rotate(${angle - 90})`}><rect x="-1" y={-r - (thickness/2) - 1} width="2" height={thickness + 2} fill="white" /></g>);
          })}

          {/* LABELS */}
          {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200].map((val) => {
             const angle = (val / 200) * 180;
             const coords = polarToCartesian(cx, cy, r + 28, angle);
             return (<text key={val} x={coords.x} y={coords.y} className="text-[14px] fill-gray-400 font-bold" textAnchor="middle" dominantBaseline="middle">{val}</text>);
          })}

          {/* NEEDLE */}
          <g transform={`translate(${cx}, ${cy}) rotate(${needleAngle - 90})`}> 
            <circle r="5" fill="#1f2937" /> 
            <path d="M -2 0 L 2 0 L 0 -80 Z" fill="#374151" />
          </g>

          {/* VALUE */}
          <text x={cx} y={cy + 40} textAnchor="middle" className="fill-gray-800 font-extrabold text-lg tracking-tight">80 km/h</text>

          <g transform={`translate(${cx - 95}, ${cy + 80})`}>
            <rect x="0" y="0" width="8" height="8" rx="2" fill="#10b981" />
            <text x="12" y="5" dominantBaseline="middle" className="text-[11px] fill-gray-500 font-bold">Lorem</text>
            <rect x="65" y="0" width="8" height="8" rx="2" fill="#f59e0b" />
            <text x="77" y="5" dominantBaseline="middle" className="text-[11px] fill-gray-500 font-bold">Lorem</text>
            <rect x="130" y="0" width="8" height="8" rx="2" fill="#ef4444" />
            <text x="142" y="5" dominantBaseline="middle" className="text-[11px] fill-gray-500 font-bold">Lorem</text>
          </g>
        </svg>
      </div>
    </div>
  );
};