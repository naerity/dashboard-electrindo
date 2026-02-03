import {
  Search, Calendar, Plus, MoreHorizontal, ArrowUpDown,
  Eye, Pencil, Trash2, CheckCircle, ChevronLeft, ChevronRight, ChevronDown
} from 'lucide-react';

export const DataTable = () => {
  const rows = [1, 2, 3, 4];

  const headerBtnStyle = "flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-500 hover:border-emerald-500 transition-colors whitespace-nowrap";

  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col w-full h-full overflow-hidden">

      {/* 1. TOP CONTROLS */}
      <div className="flex-none flex flex-col md:flex-row justify-between items-start md:items-end gap-3 mb-3">
        <div>
          <h3 className="text-sm font-bold text-gray-800">Title Table</h3>
          <p className="text-[11px] text-gray-400 mt-0.5">Data table information</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <div className="relative group w-full sm:w-48">
            <input type="text" placeholder="Search" className="w-full pl-8 pr-2 py-1.5 bg-white border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500" />
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
          </div>
          <div className="relative flex items-center bg-white border border-gray-200 rounded-lg px-3 py-1.5 hover:border-emerald-500 transition-colors cursor-pointer group">
            <input
              type="date"
              className="absolute inset-0 opacity-0 cursor-pointer z-10"
              onChange={(e) => console.log(e.target.value)}
            />
            <span className="text-[10px] md:text-xs text-gray-400 mr-1 whitespace-nowrap">Start</span>
            <span className="text-[10px] md:text-xs text-gray-300 mx-0.5">→</span>
            <span className="text-[10px] md:text-xs text-gray-400 mr-1 whitespace-nowrap">End</span>
            <Calendar className="w-3 h-3 text-gray-400 group-hover:text-emerald-500" />
          </div>
          <button className="flex items-center gap-1 px-3 py-1.5 bg-emerald-500 text-white text-xs font-medium rounded-lg hover:bg-emerald-600 shadow-sm whitespace-nowrap">
            <Plus size={14} strokeWidth={3} /> Add
          </button>
          <button className="p-1.5 bg-white border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>

      {/* 2. TABLE WRAPPER */}
      <div className="flex-1 flex flex-col border border-gray-200 rounded-lg overflow-hidden min-h-0">

        <div className="flex-1 overflow-auto bg-white relative">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
              <tr>
                <th className="p-2 w-10 text-center"><input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-300 text-emerald-500" /></th>
                {['Header', 'Header', 'Header', 'Header'].map((h, i) => (
                  <th key={i} className="p-2 text-[10px] font-bold text-gray-600 uppercase tracking-wider group cursor-pointer hover:bg-gray-100">
                    <div className="flex items-center gap-1">{h} <ArrowUpDown size={10} className="text-gray-400" /></div>
                  </th>
                ))}
                <th className="p-2 text-[10px] font-bold text-gray-600 uppercase tracking-wider text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {rows.map((row) => (
                <tr key={row} className="hover:bg-gray-50 transition-colors">
                  <td className="py-1.5 px-2.5 text-center"><input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-300 text-emerald-500" /></td>
                  <td className="py-1.5 px-2.5 text-[11px] text-gray-600 font-medium">Table Cell</td>
                  <td className="py-1.5 px-2.5 text-[11px] text-gray-600">Table Cell</td>
                  <td className="py-1.5 px-2.5"><span className="px-2 py-0.5 rounded border border-indigo-100 bg-indigo-50 text-indigo-600 text-[10px] font-semibold">Badge</span></td>
                  <td className="py-1.5 px-2.5"><div className="flex items-center gap-1.5 text-emerald-600 text-[11px] font-medium"><CheckCircle size={13} /> Cell</div></td>
                  <td className="py-1.5 px-2.5">
                    <div className="flex justify-center gap-1.5">
                      <button className="p-1 rounded bg-blue-50 text-blue-500 border border-blue-200 hover:bg-blue-100"><Eye size={12} /></button>
                      <button className="p-1 rounded bg-yellow-50 text-yellow-600 border border-yellow-200 hover:bg-yellow-100"><Pencil size={12} /></button>
                      <button className="p-1 rounded bg-red-50 text-red-500 border border-red-200 hover:bg-red-100"><Trash2 size={12} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer  */}
        <div className="flex-none p-2 bg-white border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <span className="text-[10px] text-gray-500 font-medium">0 of <b>1000</b></span>
            <button className="flex items-center gap-1 px-2 py-1 text-red-500 border border-red-200 rounded hover:bg-red-50"><Trash2 size={10} /> <span className="text-[10px] font-bold">Del</span></button>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center border border-gray-200 rounded bg-white overflow-hidden">
              <button className="p-1 hover:bg-gray-50 border-r border-gray-200 text-gray-400"><ChevronLeft size={10} /></button>
              <div className="px-3 py-1 text-[10px] font-medium text-gray-600 bg-white">1 / 10</div>
              <button className="p-1 hover:bg-gray-50 border-l border-gray-200 text-gray-400"><ChevronRight size={10} /></button>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
              <span>Show</span>
              <button className="flex items-center justify-between gap-1 px-1.5 py-1 bg-white border border-gray-200 rounded text-gray-700 min-w-[40px] font-bold">10 <ChevronDown size={10} className="text-gray-400" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};