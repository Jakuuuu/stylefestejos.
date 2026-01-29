import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
// Importaciones directas sin extensión .tsx para evitar errores de resolución
import Home from './pages/Home';
import Quote from './pages/Quote';
import Success from './pages/Success';
import Gallery from './pages/Gallery';
import ShowDetail from './pages/ShowDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* Routes with Navbar and Footer */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/gallery"
            element={
              <>
                <Navbar />
                <Gallery />
                <Footer />
              </>
            }
          />
          
          {/* Routes that might have different layouts */}
          <Route path="/quote" element={<Quote />} />
          <Route path="/success" element={<Success />} />
          <Route path="/show/:id" element={<ShowDetail />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;