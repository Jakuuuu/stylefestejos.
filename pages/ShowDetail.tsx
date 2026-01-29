import React from 'react';
import { Link } from 'react-router-dom';

const ShowDetail: React.FC = () => {
  return (
    <div className="flex-1 flex overflow-hidden h-screen bg-background-light dark:bg-background-dark font-modern pt-20">
      
      {/* Left Panel: Hero Image (Fixed) */}
      <div className="hidden lg:block lg:w-1/2 h-full relative group">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
             style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAN0EDezIuqxqm-WUwqqDkuCwngWobEzYGJOBwwPw0rdWlbBn7Gus6CxpMYJOjBIWQ-X4TKSC4CUQlFoze05CT8Y_3CupKggNGTNF8XvvYdXVRgUEfZMN9H4b7pBws4ZbI-_CdX2QImFiApURzMlI33uy4eXD2aL5uiVXdK9xRG_t409ETzZ8busDjDzInH4xoeQgSnx97Mb3NzfwqOjLs0r5EKsvW-0-UyDDg0bQnV3D-uLMhsThgM8i6Oe_Ty43cHW3C476cWnB2')" }}></div>
        <div className="absolute bottom-10 left-10 z-20 text-white max-w-md">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-icons-round text-yellow-400">star</span>
            <span className="uppercase tracking-widest text-xs font-bold">Show Destacado</span>
          </div>
          <h1 className="text-5xl font-black tracking-tight mb-2 drop-shadow-lg">Magia Real</h1>
          <p className="text-white/90 text-lg font-medium drop-shadow-md">Convierte su día especial en un cuento de hadas inolvidable.</p>
        </div>
      </div>

      {/* Right Panel: Scrollable Content */}
      <div className="w-full lg:w-1/2 h-full overflow-y-auto bg-white dark:bg-background-dark relative scrollbar-hide">
        <div className="max-w-2xl mx-auto px-6 py-8 lg:px-12 lg:py-12 pb-32">
          
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 mb-6 text-sm">
            <Link to="/" className="text-gray-400 hover:text-primary transition-colors">Inicio</Link>
            <span className="text-gray-300 material-icons-round text-[12px]">arrow_forward_ios</span>
            <Link to="/#shows" className="text-gray-400 hover:text-primary transition-colors">Shows</Link>
            <span className="text-gray-300 material-icons-round text-[12px]">arrow_forward_ios</span>
            <span className="text-primary font-semibold">Princesas</span>
          </div>

          {/* Mobile Hero */}
          <div className="lg:hidden w-full h-64 rounded-2xl overflow-hidden mb-8 relative">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuArkzF5jzuVbWE_qyUGq_5cngwMEqDidthtkSixQYE0C__K8TXUCic5PoO4g6DW01diK2TsQbXhrdxH14x9zYj4tZRCDXl1q54v-p-FqvZxa_HlG0PB34COYWkuR-LYY8UwBsxfbZPLfPxjSjIshECaYMAolGHTwSTCOostl1XS8PwNk2S7IGngIr0uYhVGsxxMiQ1Qs57tuw0UthF2gyNM6WsMnSjKqrg-oeTuW98DZT5DcyNZLSijx8TE7pG8S-_ZIUYfV1G3Egvc')" }}></div>
          </div>

          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Premium Experience</span>
                <h1 className="text-[#181113] dark:text-white text-4xl lg:text-5xl font-black leading-[1.1] tracking-[-0.02em] mb-2">
                  Show de Princesas
                </h1>
                <p className="text-primary text-xl italic font-medium">Una experiencia mágica e inolvidable</p>
              </div>
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-gray-400 text-sm font-medium">Desde</span>
                <span className="text-3xl font-black text-[#181113] dark:text-white">$200</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-none mb-10">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Vive un momento de ensueño con nuestro show más solicitado. Nuestras princesas traerán la magia de los cuentos de hadas directamente a tu celebración con vestuarios de alta costura, caracterización profesional y un repertorio musical que emocionará a grandes y chicos.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mt-4">
              Cada detalle está cuidado para transportar a los invitados a un reino encantado, desde el saludo real hasta el momento mágico de los deseos.
            </p>
          </div>

          {/* What's Included Grid */}
          <div className="bg-background-light dark:bg-white/5 rounded-2xl p-6 lg:p-8 mb-10 border border-gray-100 dark:border-white/10">
            <h3 className="text-lg font-bold text-[#181113] dark:text-white mb-6 flex items-center gap-2">
              <span className="material-icons-round text-primary">auto_awesome</span>
              ¿Qué incluye el show?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-white/10 transition-colors">
                <div className="bg-primary/10 text-primary p-2 rounded-lg">
                  <span className="material-icons-round">diamond</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#181113] dark:text-white text-sm">Gran Entrada Real</h4>
                  <p className="text-xs text-gray-500 mt-1">Llegada triunfal con música temática.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-white/10 transition-colors">
                <div className="bg-primary/10 text-primary p-2 rounded-lg">
                  <span className="material-icons-round">music_note</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#181113] dark:text-white text-sm">Musical en Vivo</h4>
                  <p className="text-xs text-gray-500 mt-1">Canciones icónicas interpretadas en vivo.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-white/10 transition-colors">
                <div className="bg-primary/10 text-primary p-2 rounded-lg">
                  <span className="material-icons-round">photo_camera</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#181113] dark:text-white text-sm">Sesión de Fotos</h4>
                  <p className="text-xs text-gray-500 mt-1">Tiempo ilimitado para fotos con invitados.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-white/10 transition-colors">
                <div className="bg-primary/10 text-primary p-2 rounded-lg">
                  <span className="material-icons-round">volunteer_activism</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#181113] dark:text-white text-sm">Coronación</h4>
                  <p className="text-xs text-gray-500 mt-1">Ceremonia especial para la cumpleañera.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Preview */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-[#181113] dark:text-white mb-4">Galería de Momentos</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer group">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYTTOda9my5jnstOqcWHrovbJekWmhSccrpWSXxMUOqQTke60CdMeTzT3Nw9KZF1DxKKEIjRBJ57B95Xktn1Ijn-F8Byix7sG9WdurHAdOH1Wd-OAFccwSGUfZeZXSa01tpjNcCO82E3jJVG45zaEWgNe18paFh3o7eeBjQWl3IEXS8IvZ5VLXB393ZhaEx5sK8VCn6nGJgIqbqtb7MFlMDFBSK_yTBjmT8sNu8yCDn09RwfGcSFRD9PI_HZMQDfwez5LIq1Ba2EJZ')" }}></div>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer group">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC48ZAPEKWTktcFOhu-20W-FwX1MmAcp5jAzJTx0_aqPqa2a1PvNlWSfFb6aDeJ-D9YBBD1ooj3-99j4BV4DPWBOEyvPpVIlniAa8J1G0tRXD7RZivki3Ah07dyzi3P1Ur9PBhTcHthi760UpqzlQBzZL0Cl9Eb8OJFzwe6Y7MNG_dugkue4aA5WHNkdGwr6F2Lv4La-xhyg3vx0grHTHfK1NZDZcmSP4dvCtlN4cuNJZYz29Mo8gK274Toar2hpxZ7BRRn0I58mxDQ')" }}></div>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer group">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvYL2KvW3gW3tjQCvBBU7ejR4AWKU_jxBvAELJgsFWRsSbw4eGrEFLXNViU1eL7cXSwSscEP3FTJRZR3EDOXGRtHZcdChJ2pxWcxdqrwNr4Ms3T-fRYiygA_Sr1zX0jCpL1jNmI4G1gUY4H-t9l5apVB25eAWdW2MokP1SvJmGYQiLaz3wAudHiSlvnEMZnqm9CXuGCbJODnX2pJarqnzUOxsLtJd4C9paBVe9i5kgM4F6Ws20coGn_GDjTsmZUeoiMK1i3t3V0pQB')" }}></div>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer group relative">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110 blur-[2px] scale-105 opacity-60" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQwk7k9B0tduNwr9LK4GWyck47qDfN4AOvfceZAGMrZ_qcz9tfWLdzLZP7eVtHQetyOArnsucPd4Dqv6x5t3MAaC2BnqqY67emJ3AMEvwdNX7XKCgVlld9JVsUbJHem72JPVHXuJXtQHOCnQ6cr7OHNbYY94KBqtR0ICiy7v_1Tq0Z-aXAyawjvWm68XQeELgiE1GE3wPDe-Bs9lcdMRSV1dUd2TCLG64JSznI3SZZ1tKR9iTXXLoIPZ5J5uZSFw3IyfLW-bNn7Iz4')" }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white/90 text-primary font-bold text-sm px-3 py-1 rounded-full shadow-sm">+8 más</span>
                </div>
              </div>
            </div>
          </div>

          {/* Review Snippet */}
          <div className="bg-secondary/5 border border-secondary/10 rounded-2xl p-6 flex items-start gap-4 mb-20">
            <div className="size-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
              <span className="material-icons-round text-xl">format_quote</span>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300 italic mb-2">"¡Fue increíble! Mi hija no paraba de sonreír. La princesa fue súper dulce y paciente con todos los niños. ¡Recomendadísimo!"</p>
              <p className="text-xs font-bold text-[#181113] dark:text-white">– María Fernanda G.</p>
            </div>
          </div>

        </div>

        {/* Sticky Bottom CTA */}
        <div className="fixed bottom-0 right-0 lg:w-1/2 w-full p-6 bg-white/80 dark:bg-[#181113]/90 backdrop-blur-xl border-t border-gray-100 dark:border-white/5 z-40">
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Precio Total</p>
              <p className="text-3xl font-black text-primary">$200 <span className="text-base text-gray-400 font-normal">/ 1 hora</span></p>
            </div>
            <Link to="/quote" className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              <span>Cotizar este Show</span>
              <span className="material-icons-round">arrow_forward</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShowDetail;