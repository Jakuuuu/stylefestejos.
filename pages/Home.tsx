import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Show, Testimonial } from '../types';

/* 
  INSTRUCCIONES PARA IMÁGENES:
  Para usar tus propias imágenes, reemplaza las URLs en la propiedad 'image' 
  de abajo con el enlace directo a tu foto.
*/

const shows: Show[] = [
  {
    id: "princess-magic",
    title: "Mundo Mágico",
    description: "Princesas y cuentos de hadas cobran vida con vestuarios de alta costura.",
    price: 250,
    image: "/Ariel.jpg",
    tag: "Popular",
    features: [],
    type: 'princess'
  },
  {
    id: "action-league",
    title: "Liga de Acción",
    description: "Acrobacias y entrenamiento de héroes para los más aventureros.",
    price: 220,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjIZTbFivHbt9UNr1DrV00JN0bYYhJ4LKD6OvDiJx3sYLGKgn_RSI9WeB4XKE3-tFuzJnO7bpywhbTJLcm7hut1RVE8JJ2kKH5MQerKFI0E-_ePmhll8GrvQCaOpX0Q89BbfcAdAuZLnpdJX7U56LkKKTzGFMPL-19NVu6th_D19LhpmQ7T0_gKjvUDFG8m_orHaSOjiX3ov6gjE-kST-wZpHKRNmwjZz3gq5hONHnHRpK087qvWPA9LkHVUGem8LKj7OEgMEiBP5P",
    type: 'hero',
    features: []
  },
  {
    id: "live-musical",
    title: "Musical en Vivo",
    description: "Coreografías, canto en vivo y mucha interacción con el público.",
    price: 300,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG3LmtLzu5T_JLwZcwOnlTRJ1--of6aB2eponk99hZDpDeZmfJedYofSyDnyfY4sLbt8Bcy--7XucuKs_Po23dA06IS_BixZbx0EI33STn8rQeHQsnK85geAOSmvZcxLkZF3R7aMlhnuy9QKWHBw5d7lekro_-kRWAoXk8eSWwWX53i_b337KGWUVUWyAo-QBXeO-BYHx3ggkPMgY1PwEyGg5gE106B0EY7c9Od1kGvJxgg6tOe5oE6suk9h9M9yRV5xGRltc6WHje",
    tag: "Nuevo",
    tagColor: "accent",
    type: 'musical',
    features: []
  }
];

const testimonials: Testimonial[] = [
  {
    id: "1",
    text: "Increíble experiencia. Los trajes son de primera calidad y los actores realmente se meten en el personaje. Mi hija lloró de felicidad al ver a su princesa.",
    author: "Carolina Méndez",
    event: "Fiesta de 5 años",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0tzygxjkBG2dmc5IFxArehYqhktznUP39I397pNI_OoIIBreYNes_LHWhQQRgK8K1cO2l4IWdho28DRvLePsz1wOaY_BHT8Z3Ya7WHwMUI-ofgQ6nrt1_kfnRApnsDwccd8LzrP5zVX44uwuegh0ZrDch06mliGPVaLhC0ZLiGtvxqJT-Toj1qD7Jy_B0_Mig6bD__snMX5x33N1P7mGqV7RoJ89df1NhPRMWQxRmbZ3Kc2TynDL4VmxIEtBirUYERxRaesiGvpg-",
    borderColor: "primary"
  },
  {
    id: "2",
    text: "Superó mis expectativas. Puntuales, profesionales y muy divertidos. El show de superhéroes mantuvo a 20 niños entretenidos por horas.",
    author: "Roberto Gómez",
    event: "Fiesta de 7 años",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBc26tainy8ZzrijCLGHJ86U7q0y7wjd3D5GYv-z640MHN5Uq0vU-s5zd8qUUEFvDbwzgyh1pnyTyeRfiMfk1_sjC4k2su0PYdxEYZazwc1aFOiMD9Di9zDQjxeNzJoqL8LQM48s0wCE7w-twwISpbuz1-9Y9yk7qrd1wZmUwAHfpcb5y5IRGGta7jjMjp-ea9LVg3ECciUqqXasOKYB1CdRi6VH9gS0tb2HOOFlNGiswFVPO7BO2JuyIaqSkATfEP2owwmLrIhg7c8",
    borderColor: "secondary"
  }
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl -z-10 transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple/10 dark:bg-purple/20 rounded-full blur-3xl -z-10 transform -translate-x-1/4 translate-y-1/4"></div>
        <span className="material-icons-round text-accent absolute top-32 left-10 animate-bounce text-2xl opacity-80">star</span>
        <span className="material-icons-round text-accent absolute top-40 right-20 sparkle-animation text-xl opacity-60">star</span>
        <span className="material-icons-round text-accent absolute bottom-20 left-1/4 sparkle-animation text-3xl opacity-70">auto_awesome</span>
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-center md:text-left z-10">
              <div className="inline-block px-4 py-1 mb-4 rounded-full bg-accent/20 border border-accent text-yellow-700 dark:text-yellow-200 font-heading text-sm font-semibold tracking-wide">
                ✨ Diversión Garantizada
              </div>
              <h1 className="font-display text-5xl md:text-7xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple to-secondary mb-6 drop-shadow-sm">
                Hacemos Realidad los Sueños de tus Hijos
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Espectáculos personalizados con sus personajes favoritos, magia profesional y momentos inolvidables. <br/>
                <span className="font-bold text-primary">Shows desde $200 USD.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/quote" className="bg-primary text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl hover:bg-primary-hover transform hover:-translate-y-1 transition-all duration-300 text-lg flex items-center justify-center gap-2">
                  Cotizar Ahora
                  <span className="material-icons-round">arrow_forward</span>
                </Link>
                <Link to="/gallery" className="bg-white dark:bg-surface-dark border-2 border-primary/20 text-primary font-bold py-4 px-8 rounded-full shadow-sm hover:shadow-md hover:border-primary transform transition-all duration-300 text-lg flex items-center justify-center gap-2">
                  <span className="material-icons-round">play_circle</span>
                  Ver Galería
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative float-animation">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-surface-dark transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTQfcYRwcVeeqQ06dyPaxQUF4qCzFzBrzap-SyOGR4tCH0z7Z8lSSK7QEAq05jEQu3RUviFsLnntCJXByip_Q12tIAVUkHjWoXHU2D3bl15XremLiqHTJBwSfyXgquAUHEDtu_XyXtDocd08v3-DOpShNribSZhDLMmS06tkFz7X9-9kdV6ubxlt2rDmsPWm_xxnChMRAOKdIN7_Zmw5fPATd-af8nctFmGE46S2TfxbeBMm6KJ62Wq4tLKMm3XN-rniabXaTTzHz7" alt="Children laughing with entertainer" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white font-heading text-xl">
                  🎉 ¡Celebra con nosotros!
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full -z-10 opacity-80"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary rounded-full -z-10 opacity-50 mix-blend-multiply dark:mix-blend-screen"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      <section className="py-10 bg-white dark:bg-surface-dark border-y border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-heading text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">Expertos en temáticas</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col items-center group cursor-pointer">
              <span className="material-icons-round text-4xl mb-2 text-blue-500 group-hover:scale-110 transition-transform">castle</span>
              <span className="text-xs font-bold">Princesas</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <span className="material-icons-round text-4xl mb-2 text-red-500 group-hover:scale-110 transition-transform">rocket_launch</span>
              <span className="text-xs font-bold">Superhéroes</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <span className="material-icons-round text-4xl mb-2 text-green-500 group-hover:scale-110 transition-transform">forest</span>
              <span className="text-xs font-bold">Aventura</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <span className="material-icons-round text-4xl mb-2 text-purple-500 group-hover:scale-110 transition-transform">auto_fix_high</span>
              <span className="text-xs font-bold">Fantasía</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <span className="material-icons-round text-4xl mb-2 text-orange-500 group-hover:scale-110 transition-transform">pets</span>
              <span className="text-xs font-bold">Mascotas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Shows Section */}
      <section id="shows" className="py-20 bg-background-light dark:bg-background-dark relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary font-heading font-bold uppercase tracking-wider text-sm">Diversión sin límites</span>
            <h2 className="font-display text-4xl md:text-5xl text-gray-800 dark:text-white mt-2">Nuestros Shows</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shows.map((show) => (
              <div key={show.id} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-surface-dark transform hover:-translate-y-2">
                <div className="h-64 overflow-hidden relative">
                  <img src={show.image} alt={show.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  {show.tag && (
                    <div className={`absolute top-4 right-4 ${show.tagColor === 'accent' ? 'bg-accent/90 text-yellow-900' : 'bg-white/90 text-primary'} backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm`}>
                      {show.tag}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-bold text-gray-800 dark:text-white mb-2">{show.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{show.description}</p>
                  <div className="flex justify-between items-center border-t border-gray-100 dark:border-gray-700 pt-4">
                    <span className="text-primary font-bold text-lg">Desde ${show.price}</span>
                    <button 
                      onClick={() => navigate(`/show/${show.id}`)}
                      className="text-secondary hover:text-teal-600 font-bold text-sm flex items-center gap-1"
                    >
                      Ver Detalles <span className="material-icons-round text-sm">chevron_right</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/gallery" className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
              Ver Catálogo Completo
              <span className="material-icons-round">category</span>
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-20 bg-gradient-to-b from-white to-pink-50 dark:from-surface-dark dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-gray-800 dark:text-white">¿Cómo Funciona?</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">Llevar la magia a tu fiesta es muy sencillo. Solo sigue estos tres pasos.</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-dashed border-t-2 border-gray-200 dark:border-gray-700 -z-10 transform -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 text-center relative hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-primary/30">1</div>
                <h3 className="font-heading text-xl font-bold mb-3 dark:text-white">Elige tu Tema</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Explora nuestro catálogo y selecciona los personajes favoritos de tu pequeño.</p>
              </div>
              <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 text-center relative hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-secondary/30">2</div>
                <h3 className="font-heading text-xl font-bold mb-3 dark:text-white">Personaliza</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Define la fecha, duración y agrega extras como pintacaritas o globoflexia.</p>
              </div>
              <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 text-center relative hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto bg-accent text-yellow-900 rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-accent/30">3</div>
                <h3 className="font-heading text-xl font-bold mb-3 dark:text-white">¡A Disfrutar!</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Nosotros nos encargamos de todo el entretenimiento. Tú solo relájate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-20 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-gray-800 dark:text-white">Padres Felices</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-md relative">
                <span className="material-icons-round text-6xl text-gray-100 dark:text-gray-700 absolute top-4 left-4 -z-10">format_quote</span>
                <div className="flex items-center gap-1 text-accent mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="material-icons-round">star</span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt="Avatar" className={`w-12 h-12 rounded-full object-cover border-2 border-${t.borderColor}`} />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{t.author}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 relative overflow-hidden" id="cotizar">
        <div className="absolute inset-0 bg-primary/90 dark:bg-primary/40 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-6xl text-white mb-6">¿Listo para la mejor fiesta del año?</h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10">Reserva hoy y obtén un video saludo personalizado de regalo con tu paquete premium.</p>
          <Link to="/quote" className="bg-white text-primary font-bold py-4 px-12 rounded-xl shadow-2xl hover:bg-gray-50 transform hover:-translate-y-1 transition-all inline-block text-lg">
             Solicitar Cotización Gratis
          </Link>
          <p className="text-xs text-center text-white/70 mt-6">Te responderemos en menos de 24 horas.</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
