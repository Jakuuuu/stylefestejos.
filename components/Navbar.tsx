import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-surface-dark/90 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 relative">
            <span className="material-icons-round text-accent text-4xl absolute -top-1 -left-1 drop-shadow-md group-hover:rotate-12 transition-transform">star</span>
            <span className="material-icons-round text-primary text-2xl absolute bottom-0 right-0">favorite</span>
          </div>
          <span className="font-display text-2xl text-primary drop-shadow-sm tracking-wide">Style Festejos</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`font-heading font-medium transition-colors ${isActive('/') ? 'text-primary' : 'hover:text-primary'}`}
          >
            Inicio
          </Link>
          <Link 
            to="/gallery" 
            className={`font-heading font-medium transition-colors ${isActive('/gallery') ? 'text-primary' : 'hover:text-primary'}`}
          >
            Personajes
          </Link>
          <a href="/#shows" className="font-heading font-medium hover:text-primary transition-colors">
            Nuestros Shows
          </a>
          <a href="/#testimonios" className="font-heading font-medium hover:text-primary transition-colors">
            Testimonios
          </a>
        </div>

        <div className="hidden md:block">
          <Link to="/quote" className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-6 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
            <span>Cotizar Fecha</span>
            <span className="material-icons-round text-sm">calendar_today</span>
          </Link>
        </div>

        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-icons-round text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-surface-dark border-t border-gray-100 shadow-xl py-4 px-6 flex flex-col space-y-4">
           <Link 
            to="/" 
            className="font-heading font-medium hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link 
            to="/gallery" 
            className="font-heading font-medium hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Personajes
          </Link>
          <a href="/#shows" className="font-heading font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
            Nuestros Shows
          </a>
          <Link to="/quote" className="bg-primary text-white text-center font-bold py-3 rounded-xl shadow-md" onClick={() => setIsMenuOpen(false)}>
            Cotizar Ahora
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;