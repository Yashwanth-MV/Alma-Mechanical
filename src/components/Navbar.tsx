import { motion, AnimatePresence } from 'motion/react';
import { navItems } from '../data';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar({ darkText = false }: { darkText?: boolean }) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isDarkText = scrolled || darkText;

  return (
    <nav className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-[86px] px-10">
        <div className="flex items-center">
          <Link 
            to="/" 
            className={`text-[24px] md:text-[28px] font-bold tracking-tighter transition-colors whitespace-nowrap ${
              isDarkText ? 'text-industrial-navy' : 'text-white'
            } hover:opacity-80`}
          >
            {t('company.name')}
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-[42px]">
          <div className="flex items-center gap-[32px]">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className={`font-sans text-[15px] font-medium uppercase tracking-[0.02em] transition-all duration-300 ${
                  isDarkText ? 'text-gray-600 hover:text-industrial-blue' : 'text-white/95 hover:text-white'
                }`}
              >
                {t(`nav.${item.label.toLowerCase().replace(' ', '')}`)}
              </a>
            ))}
          </div>

          <div className="flex items-center">
            <Link 
              to="/contact"
              className={`flex items-center justify-center h-[40px] px-8 rounded-full font-sans text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                isDarkText 
                  ? 'bg-industrial-blue text-white hover:bg-industrial-navy' 
                  : 'bg-white text-industrial-navy hover:bg-industrial-blue hover:text-white'
              }`}
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>

        <button 
          className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-industrial-navy' : 'text-white'}`}
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] lg:hidden"
            />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-[400px] bg-industrial-navy z-[120] p-10 flex flex-col lg:hidden shadow-2xl"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="text-xl font-bold text-white tracking-tighter uppercase whitespace-nowrap">ALMA MECHANICAL</span>
                <button 
                  className="text-white hover:text-industrial-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={32} />
                </button>
              </div>

              <div className="flex flex-col gap-8 mb-12">
                {navItems.map((item) => (
                  <a 
                    key={item.label}
                    href={item.href}
                    className="text-lg font-semibold text-white/90 uppercase tracking-[0.15em] hover:text-white hover:translate-x-2 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {t(`nav.${item.label.toLowerCase().replace(' ', '')}`)}
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-4">
                <Link 
                  to="/contact"
                  className="bg-industrial-blue text-white py-4 px-8 rounded-full font-bold uppercase tracking-[0.2em] text-[12px] text-center shadow-lg shadow-industrial-blue/20 hover:bg-white hover:text-industrial-blue transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.contact')}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
