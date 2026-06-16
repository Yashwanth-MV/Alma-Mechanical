import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative h-screen w-full bg-[#08111F] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-70 brightness-[0.8]"
        >
          <source src="https://framerusercontent.com/assets/21KP6ToyH75cWFLnyUEbhFqBl0.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      <div className="relative z-10 h-full max-w-[1440px] mx-auto flex pt-[86px]">
        {/* Main Content Column */}
        <div className="w-full flex flex-col justify-center pb-20 px-10 md:px-20 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="font-sans text-[14px] font-medium tracking-[0.12em] uppercase text-white mb-8">
              {t('hero.tagline')}
            </p>
            
            <h1 className="max-w-[720px] text-[clamp(2.5rem,6vw,4.25rem)] font-medium leading-[1.05] tracking-[-0.03em] text-white mb-10">
              {t('hero.title')}
            </h1>
            
            <p className="max-w-[580px] text-[20px] leading-[1.5] text-white font-normal opacity-[0.92] mb-12">
              {t('hero.desc')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="/contact" className="bg-industrial-blue text-white h-[48px] px-8 rounded-full font-sans text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-black transition-all duration-300 flex items-center justify-center">
                {t('hero.cta.quote')}
              </a>
              <button className="bg-white text-[#08111F] h-[48px] px-8 rounded-full font-sans text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3">
                {t('hero.cta.products')} <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
