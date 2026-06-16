import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-industrial-navy">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover brightness-[0.4]"
        >
          <source src="https://framerusercontent.com/assets/gOl6ma0XSUUDWCAZbTBcqO6Bgmg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-navy via-transparent to-industrial-navy/50"></div>
      </div>

      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-10 flex items-center">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] font-sans font-bold tracking-[0.3em] uppercase text-white mb-6">
              {t('contact.section.tagline')}
            </p>
            <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white uppercase mb-12">
              {t('contact.section.title1')} <br/>
              <span className="text-industrial-blue">{t('contact.section.title2')}</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-12">
              {t('contact.section.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-industrial-blue text-white h-[48px] px-8 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-industrial-black transition-all duration-300 flex items-center justify-center gap-3">
                {t('contact.section.cta1')} <ArrowRight size={16} />
              </button>
              <button className="bg-transparent text-white border border-white/20 h-[48px] px-8 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-industrial-black transition-all duration-300">
                {t('contact.section.cta2')}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
