import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import Navbar from './components/Navbar';
import KingsPage from './pages/Kings';
import UnderDevelopment from './components/u_d';

const App: React.FC = () => {

  return (
    <>
      <Navbar/>
      <UnderDevelopment/>

        <Routes> 
         
          <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/kings" element={<KingsPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </>
  );
};

export default App;
