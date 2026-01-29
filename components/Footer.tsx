import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 relative">
              <span className="material-icons-round text-accent text-3xl absolute -top-1 -left-1">star</span>
              <span className="material-icons-round text-primary text-xl absolute bottom-0 right-0">favorite</span>
            </div>
            <span className="font-display text-2xl text-gray-800 dark:text-white">Style Festejos</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors">
              <span className="material-icons-round text-lg">facebook</span> 
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors">
              <span className="material-icons-round text-lg">camera_alt</span> 
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors">
              <span className="material-icons-round text-lg">alternate_email</span>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 text-center text-sm text-gray-500 dark:text-gray-500">
          <p>© 2024 Style Festejos. Todos los derechos reservados.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-primary">Términos</a>
            <a href="#" className="hover:text-primary">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;