import React from 'react';
import { useNavigate } from 'react-router-dom';

const Quote: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/success');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat font-modern" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqI4NNUemZlB5lAW_ziKvBmoC9YoE8ErZZp9q5wbqhr1GYNZlKW_I3IivjezptH223w5ltODgsZtaiS1vWXaRd3DHDB3UaEWrbjC4zBhEbIMDG4J5HPLRm1WE5fw09dvUT5BR2mjXOk--c7fgdECJH8NYRpBt78xdsHxFAH0_CodHgMGRCtg48wmIq8U-U6i4MML60RNtlHvE3WdwADc7udXhKyL6a0z-8SD9IGcTTcnpoxXtyXf-urdwxgsmJ6JgH82IDUXXXLiu4')"}}>
      {/* Backdrop Overlay */}
      <div className="absolute inset-0 bg-background-dark/30 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Modal Container */}
        <div className="relative w-full max-w-3xl bg-white dark:bg-[#1a0f12] rounded-xl shadow-2xl overflow-hidden my-auto transform transition-all border border-white/20">
          
          {/* Close Button */}
          <button 
            onClick={() => navigate('/')} 
            className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-400 hover:text-primary transition-colors z-10"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          <div className="flex flex-col md:flex-row h-full">
            {/* Decorative Sidebar (Desktop only) */}
            <div className="hidden md:flex w-24 bg-primary/5 dark:bg-primary/10 flex-col items-center justify-center border-r border-gray-100 dark:border-white/5 space-y-8 py-8">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">celebration</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">cake</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-purple/20 flex items-center justify-center text-purple">
                <span className="material-symbols-outlined">music_note</span>
              </div>
            </div>

            {/* Main Form Content */}
            <div className="flex-1 p-8 md:p-10 lg:p-12">
              {/* Header */}
              <div className="text-center md:text-left mb-8">
                <p className="text-secondary font-bold text-sm tracking-wider uppercase mb-1">Style Festejos</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#181113] dark:text-white tracking-tight leading-tight">
                  Cotizar Fecha
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-base md:text-lg">
                  Completa el formulario para verificar disponibilidad.
                </p>
              </div>

              {/* Form Grid */}
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Parent Name */}
                <div className="col-span-1 md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Nombre del Padre/Madre</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-secondary text-xl group-focus-within:text-primary transition-colors">person</span>
                    </div>
                    <input required className="w-full h-12 pl-12 pr-4 bg-background-light dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all placeholder:text-gray-400 text-gray-800 dark:text-white" placeholder="Maria Pérez" type="text" />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Correo Electrónico</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-secondary text-xl group-focus-within:text-primary transition-colors">mail</span>
                    </div>
                    <input required className="w-full h-12 pl-12 pr-4 bg-background-light dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all placeholder:text-gray-400 text-gray-800 dark:text-white" placeholder="ejemplo@correo.com" type="email" />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Teléfono</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-secondary text-xl group-focus-within:text-primary transition-colors">call</span>
                    </div>
                    <input required className="w-full h-12 pl-12 pr-4 bg-background-light dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all placeholder:text-gray-400 text-gray-800 dark:text-white" placeholder="+58 412 1234567" type="tel" />
                  </div>
                </div>

                {/* Date Picker */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Fecha del Evento</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-secondary text-xl group-focus-within:text-primary transition-colors">calendar_month</span>
                    </div>
                    <input required className="w-full h-12 pl-12 pr-4 bg-background-light dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all placeholder:text-gray-400 text-gray-800 dark:text-white appearance-none" type="date" />
                  </div>
                </div>

                {/* Number of Children */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Cantidad de Niños</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-secondary text-xl group-focus-within:text-primary transition-colors">child_care</span>
                    </div>
                    <input className="w-full h-12 pl-12 pr-4 bg-background-light dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all placeholder:text-gray-400 text-gray-800 dark:text-white" placeholder="ej. 15" type="number" />
                  </div>
                </div>

                {/* Location */}
                <div className="col-span-1 md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Ubicación</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-secondary text-xl group-focus-within:text-primary transition-colors">location_on</span>
                    </div>
                    <input className="w-full h-12 pl-12 pr-4 bg-background-light dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all placeholder:text-gray-400 text-gray-800 dark:text-white" placeholder="Dirección o nombre del salón" type="text" />
                  </div>
                </div>

                {/* Theme/Character Area */}
                <div className="col-span-1 md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Temática / Personaje</label>
                  <div className="relative group">
                    <div className="absolute top-3 left-0 pl-4 flex items-start pointer-events-none">
                      <span className="material-symbols-outlined text-secondary text-xl group-focus-within:text-primary transition-colors">theater_comedy</span>
                    </div>
                    <textarea className="w-full h-24 pl-12 pr-4 py-3 bg-background-light dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all placeholder:text-gray-400 text-gray-800 dark:text-white resize-none" placeholder="¿Qué personaje o temática deseas? (ej. Princesas, Superhéroes, Mickey Mouse...)"></textarea>
                  </div>
                </div>

                {/* Action Area */}
                <div className="mt-8 flex flex-col items-center gap-4 col-span-1 md:col-span-2">
                  <button type="submit" className="w-full md:w-auto md:min-w-[280px] bg-primary hover:bg-primary-hover text-white font-bold text-lg py-3.5 px-8 rounded-full shadow-lg hover:shadow-primary/40 transform active:scale-95 transition-all duration-200 flex items-center justify-center gap-2">
                    <span>Solicitar Cotización</span>
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </button>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm font-medium bg-background-light dark:bg-white/5 px-4 py-1.5 rounded-full">
                    <span className="material-symbols-outlined text-secondary text-[18px]">payments</span>
                    <span>Nuestros shows inician desde <span className="text-gray-800 dark:text-white font-bold">$200</span></span>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;