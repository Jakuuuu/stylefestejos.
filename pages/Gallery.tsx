import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../types';

const characters: Character[] = [
  { id: '1', name: 'Cenicienta', category: 'princess', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0mmuqYTRGKy1OGO6xDcT4LX9-jFb8vw4zpWFuJUSBaSKp_DBDvcxhIOhxpDj3f9rQIiqEsN9cO4VX535N7mP2vpsg4JCbT1t5lr22nHmAbD7KxQBWqHQWk50goBS6i7AQvTmtXulMhd2MeRWCzFiWUgb0REjwEf5SRbmRysEsCHYe5ArYGNMhtfWMLoPBAl8WlPBS5Ob5y1aD6lY4qJYo_BNxcqXGmvqw-3d5Vn01LAES7oBk4NRo-rxzOZ2YbZOtnSxAPkDGXizs' },
  { id: '2', name: 'Spider-Man', category: 'hero', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6k1ve24TPkjS6-Ux33DBOlmaCUzSp--kJW4xYtGHY5bpW_pDQ_QnV2GIb5hy3_LK02fafEeDZFGSDaBN8evr3Cn_xf0rOGSGrXLPp5Q5N-bepo0Qoz-vULUk4wa9xDTudQwxCwjMQRQlufQPvYx_oIVnTarwp4Yry8RaW8hBh3o8zG6eVMzn78aXxPDuEOpEPoh3tX02wk93aHlN-ebCjir_z6KCcbLjneHJ5Ase12bNTdW5kS0MinqpdJsksyltrxEhxMgQNBQJ3' },
  { id: '3', name: 'Jack Sparrow', category: 'adventure', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY12NS8um2D2Oqft5rrofaK_-UbdvO5ECOZnwo6XVsZuJh4rIY5l6DT7F0qoty2VvkMuBN4MG0J9MRZoi0_QiMmUpe8AGtJ0cbxbrkFgbi28C28RiUtLBGmc4XXxg2zUy63yc3176cyIW31A3hSF3L2M9Hi6M8sEi7Mem9stD4Ks3octyCfOQuiDelnpGhlvyV26E90ztwvXLcHLtKcvoO8wYu-UPCu9TnbtGlMVxn3RQxp2lMKpotN5rPhmRocSa4Rnl1NL9-esU6' },
  { id: '4', name: 'Elsa', category: 'classic', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLqqfRpRIgW_ybR9WHum0Guzq1c7yV90A0hLH_r4fmQDKHHXZSwoIzd1uLICMPHXPxX8Hhj1hf3EQ_yTKqL3UFegANt2k-C0vl_tVjfh78pMq-EZU_km_jxgFu0Kz7qbB9_mCMAdKdwqlNrX-FGf4ete_-pXtzxQkU9pAk10xk5-7VnuBwe3xTQv58Ch4sR-7zaNm-rm8Tl0YBNcMjRbuLfdOWne4aivDwYS_ywwYPwQA5ig4p2N8YTYRMDeIQ_Np-2pxOJD7B7oec' },
  { id: '5', name: 'Batman', category: 'hero', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgb8Cq6wqqXxRaKW9UOpB3v0LPGvIeFbscfx66viHxD9akGm8vaMaTGgGwIESnHlw04GiqnM6d8Tu4CeVYOK1nkQqZkN7vhFTGcVQ8Et98DgLp18C2iy73hCS-kTxf2JxhHh7VVQOCjIUYY0lVLLrD5V-beXbMlE8oSv9ZAhfMtWxIwugX2RzlGi5MqO2Y5vna-G3KBwbOQr2AVLbGOPlHqbRkNz68X8k0yPqBkqAfnGpLv9l5mMbp9aB5p5BVRCv0EqQW_lg5xvjQ' },
  { id: '6', name: 'Mickey', category: 'classic', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZV8Dq3rrGiZkyjjIVVBI_yHs9WzJ0ypBmiQSytuyTgjiBhyM6f_MHeRW0NqNj5_TI5QBdS63ZAYLZN9IOhDSrPkNG6nmaXhpay4JTfW95eBC0mGOJslb6ozrbHvjGEVsoRgiLjNPfU7jusZqMWE_l_J_oDVCeMdXOiWMISteQZ5MYBCt8W4svooHS-rfQNeaiSBuRl3V6WpDgTDMST8GOZmGItYfLIfE7WKBoJmwxIAAVmGvMNV5xzVUFgH96jPfaq9Z-c05kYAV4' },
  { id: '7', name: 'Moana', category: 'adventure', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwyQNwvwKv8RgnGDQ8q1eqV6zIic3JuOW73OUMrVrkzNLpvPUNOcRwkeaWLvEDbyn8HtfK3tkFynTucYTwel4YvGCmMTRF614BTFTHvglp1kQsQ7QqVw6Ssl-k90MR55gg5Iwjh-UemAKsDS7kbY7liMMtwaVS8ZPaSHepa9HJuRdFFJQaxEjKm3S-aJonb5Lg2_Af73EmtMuLQjR3_2Gf7JAv7QYkmzS_QxTMpwx3dHQGUcfQfRJDj-KN71VrRzfGvLR7wtofpwBC' },
  { id: '8', name: 'Mujer Maravilla', category: 'hero', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACpKh-aBGw27pjRo28B4pt5EE3p8fitljZePSstRPvUMZyU75z4Uf4arZtZaNgSoHWTFlxIm68uBTIkU4EV51v-4uDmZDuTToOJIqlejFyrsWpdwxtZsjpPPlrQgpfU3IJfSlLpybhhmVpLQ5KghzkZvYmitPfIB7ipaFfPDa4hyrUJRt8tJugyncDYQPNhniz79qYsAycnR0O8oK5YtNyD256ZEGd_0fXQ46ZRwzrSfNqRL0eiIgRXw8_sE6dg9C0790EDPhb2pko' },
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredCharacters = filter === 'all' 
    ? characters 
    : characters.filter(c => c.category === filter);

  const getCategoryLabel = (cat: string) => {
      switch(cat) {
          case 'princess': return 'Princesas';
          case 'hero': return 'Superhéroes';
          case 'adventure': return 'Aventura';
          case 'classic': return 'Clásicos';
          default: return '';
      }
  };

  const getCategoryColor = (cat: string) => {
    switch(cat) {
        case 'princess': return 'text-secondary';
        case 'hero': return 'text-primary';
        case 'adventure': return 'text-orange-500';
        case 'classic': return 'text-purple';
        default: return 'text-gray-500';
    }
  };

  return (
    <main className="relative w-full flex-col flex-1 bg-sparkle-pattern font-modern pt-24">
      {/* Hero & Title Section */}
      <section className="px-6 lg:px-40 py-12 flex justify-center">
        <div className="max-w-[1200px] w-full flex flex-col items-center text-center gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit mx-auto">
              <span className="material-icons-round text-primary text-sm">auto_awesome</span>
              <span className="text-primary text-xs font-bold uppercase tracking-wider">La Magia Comienza Aquí</span>
            </div>
            <h1 className="text-[#181113] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Galería de Personajes
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-normal leading-relaxed">
              Explora nuestra mágica colección organizada por categorías para encontrar al invitado de honor perfecto para tu celebración.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <button 
              onClick={() => setFilter('all')}
              className={`group flex h-10 items-center justify-center gap-x-2 rounded-full px-6 transition-all hover:scale-105 ${filter === 'all' ? 'bg-primary text-white shadow-lg shadow-primary/25' : 'bg-white dark:bg-gray-800 border border-gray-200 hover:bg-gray-50'}`}
            >
              <span className="material-icons-round text-[20px]">grid_view</span>
              <span className="text-sm font-bold">Todos</span>
            </button>
            <button 
               onClick={() => setFilter('princess')}
               className={`group flex h-10 items-center justify-center gap-x-2 rounded-full px-6 transition-all hover:scale-105 ${filter === 'princess' ? 'bg-secondary text-white shadow-lg' : 'bg-white dark:bg-gray-800 border border-secondary/20 hover:border-secondary hover:bg-secondary/5'}`}
            >
              <span className={`material-icons-round text-[20px] ${filter !== 'princess' && 'text-secondary'}`}>diamond</span>
              <span className={`text-sm font-medium ${filter !== 'princess' && 'text-[#181113] dark:text-gray-200'}`}>Princesas</span>
            </button>
            <button 
               onClick={() => setFilter('hero')}
               className={`group flex h-10 items-center justify-center gap-x-2 rounded-full px-6 transition-all hover:scale-105 ${filter === 'hero' ? 'bg-primary text-white shadow-lg' : 'bg-white dark:bg-gray-800 border border-primary/20 hover:border-primary hover:bg-primary/5'}`}
            >
              <span className={`material-icons-round text-[20px] ${filter !== 'hero' && 'text-primary'}`}>bolt</span>
              <span className={`text-sm font-medium ${filter !== 'hero' && 'text-[#181113] dark:text-gray-200'}`}>Superhéroes</span>
            </button>
             <button 
               onClick={() => setFilter('adventure')}
               className={`group flex h-10 items-center justify-center gap-x-2 rounded-full px-6 transition-all hover:scale-105 ${filter === 'adventure' ? 'bg-orange-400 text-white shadow-lg' : 'bg-white dark:bg-gray-800 border border-orange-400/20 hover:border-orange-400 hover:bg-orange-400/5'}`}
            >
              <span className={`material-icons-round text-[20px] ${filter !== 'adventure' && 'text-orange-400'}`}>explore</span>
              <span className={`text-sm font-medium ${filter !== 'adventure' && 'text-[#181113] dark:text-gray-200'}`}>Aventura</span>
            </button>
             <button 
               onClick={() => setFilter('classic')}
               className={`group flex h-10 items-center justify-center gap-x-2 rounded-full px-6 transition-all hover:scale-105 ${filter === 'classic' ? 'bg-purple text-white shadow-lg' : 'bg-white dark:bg-gray-800 border border-purple/20 hover:border-purple hover:bg-purple/5'}`}
            >
              <span className={`material-icons-round text-[20px] ${filter !== 'classic' && 'text-purple'}`}>auto_awesome</span>
              <span className={`text-sm font-medium ${filter !== 'classic' && 'text-[#181113] dark:text-gray-200'}`}>Clásicos Disney</span>
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 lg:px-40 pb-20 flex justify-center">
        <div className="max-w-[1200px] w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCharacters.map((char) => (
              <div key={char.id} className="group relative flex flex-col gap-4 bg-white dark:bg-gray-800 p-3 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-transparent hover:border-primary/20">
                <div className="relative w-full aspect-[3/4] rounded-[1.5rem] overflow-hidden">
                  <div className="w-full h-full bg-center bg-cover bg-no-repeat transition-transform duration-500 transform group-hover:scale-105" style={{ backgroundImage: `url('${char.image}')` }}></div>
                  <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 uppercase tracking-wider shadow-sm">
                    {getCategoryLabel(char.category)}
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link to="/quote" className="bg-white text-primary px-6 py-3 rounded-full font-bold shadow-lg transform scale-90 hover:scale-100 transition-transform flex items-center gap-2">
                      <span className="material-icons-round">request_quote</span>
                      Cotizar ahora
                    </Link>
                  </div>
                </div>
                <div className="px-2 pb-2 text-center">
                  <h3 className="text-3xl font-script text-primary mb-1">{char.name}</h3>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <Link to={char.category === 'princess' ? '/show/princess-magic' : '/quote'} className="w-full py-2.5 rounded-xl bg-surface-light dark:bg-white/5 text-[#181113] dark:text-gray-200 text-sm font-bold hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group-hover:bg-primary group-hover:text-white">
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
           {/* Pagination */}
            <div className="flex items-center justify-center mt-12 mb-8">
            <div className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-sm p-1 gap-1">
                <button className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                    <span className="material-icons-round text-[#181113] dark:text-white text-lg">chevron_left</span>
                </button>
                <button className="text-sm font-bold flex size-10 items-center justify-center text-white rounded-full bg-primary shadow-md shadow-primary/30">1</button>
                <button className="text-sm font-medium flex size-10 items-center justify-center text-[#181113] dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">2</button>
                <button className="text-sm font-medium flex size-10 items-center justify-center text-[#181113] dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">3</button>
                <button className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                    <span className="material-icons-round text-[#181113] dark:text-white text-lg">chevron_right</span>
                </button>
            </div>
            </div>

        </div>
      </section>
    </main>
  );
};

export default Gallery;