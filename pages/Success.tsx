import React from 'react';
import { Link } from 'react-router-dom';

const Success: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden font-modern bg-background-light dark:bg-background-dark">
      {/* Main Content */}
      <main className="layout-container flex h-full grow flex-col items-center justify-center py-10 px-4 sm:px-8">
        <div className="layout-content-container flex flex-col max-w-[600px] w-full flex-1 items-center text-center gap-8">
          
          {/* Hero Illustration */}
          <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-full animate-pulse"></div>
            <div className="w-full h-full bg-center bg-no-repeat bg-contain z-10" 
                 style={{
                   backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC1QR30UqvOaUBCiWm-SEo9vgoRktsjyKqWTKDN5hqSuYPHFzgb34zcZaG4MvlbZCDfzgJgPys_1Co23takYAUSB_-22-fwGuFUUuhARPIzXBbFwpEigMY-9H9TYGgqYXKyZ_Lz2l86Yw8CD1naWD4-B9VKmYvg6TTabGwOPAa252Gom_9UFl9sHQXxol9f1CUBQIgBy2O8aRYRZnmdNRYVqhSReIq_7Xnld8gk3rgPj85XomT-OIrDO3pifHGiRFALdEJkZUSpq4d-")',
                   maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
                   WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)'
                 }}>
            </div>
            
            {/* Success Badge Overlay */}
            <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-4 bg-white dark:bg-[#3a2e32] p-2 rounded-full shadow-lg z-20">
              <div className="bg-[#10b981] text-white rounded-full p-3 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">check</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-4">
            <h1 className="text-[#181113] dark:text-white tracking-tight text-4xl sm:text-5xl font-extrabold leading-tight">
              ¡Magia en Camino!
            </h1>
            <p className="text-[#181113]/80 dark:text-white/80 text-lg font-normal leading-relaxed max-w-[500px] mx-auto">
              ¡Gracias por contactarnos! Hemos recibido tu solicitud. Una de nuestras consultoras revisará los detalles y te contactará en menos de 24 horas.
            </p>
          </div>

          {/* Summary Card */}
          <div className="w-full bg-white dark:bg-white/5 border border-primary/10 dark:border-white/10 rounded-xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-around gap-6 mt-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">calendar_month</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs uppercase tracking-wide font-bold text-primary/70">Fecha solicitada</span>
                <span className="text-[#181113] dark:text-white font-semibold">24 de Noviembre, 2023</span>
              </div>
            </div>
            <div className="w-full h-px sm:w-px sm:h-12 bg-gray-100 dark:bg-white/10"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">auto_fix_high</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs uppercase tracking-wide font-bold text-primary/70">Temática elegida</span>
                <span className="text-[#181113] dark:text-white font-semibold">Mundo de Fantasía</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row w-full gap-4 justify-center items-center mt-4">
            <Link to="/gallery" className="w-full sm:w-auto flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5">
              <span className="mr-2 material-symbols-outlined text-[20px]">explore</span>
              <span className="truncate">Seguir Explorando Personajes</span>
            </Link>
            <Link to="/" className="w-full sm:w-auto flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-[#181113] dark:text-white text-base font-medium leading-normal tracking-[0.015em] transition-colors">
              <span className="truncate">Volver al Inicio</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Success;