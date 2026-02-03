import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from './components/templates/DashboardLayout';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Utama (Sidebar + Header) */}
        <Route path="/" element={<DashboardLayout />}>
          
          {/* Halaman Dashboard (Default) */}
          <Route index element={<Dashboard />} />
          
          {/* Halaman Dummy (Buat menu lain biar gak error 404) */}
          <Route path="summary" element={<div className="p-4">Halaman Summary</div>} />
          <Route path="maintenance" element={<div className="p-4">Halaman Maintenance</div>} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;