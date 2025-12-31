import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReleaseDetail from './pages/ReleaseDetail';
import CharacterDetail from './pages/CharacterDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/release/:id" element={<ReleaseDetail />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
