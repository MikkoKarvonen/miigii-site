import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReleaseDetail from './pages/ReleaseDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/release/:id" element={<ReleaseDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
