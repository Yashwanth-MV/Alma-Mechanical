import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

export default function Banner() {
  const { t, language, isRtl } = useLanguage();

  return (
    <section className="relative h-[800px] w-full overflow-hidden bg-industrial-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/assets/images/Engineered for extreme conditions reliability.png" 
          alt="Engineered for reliability" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/30 to-transparent md:bg-gradient-to-r"></div>
      </div>

      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-10 flex flex-col justify-between py-24">
        {/* Top Header */}
        <div className="flex justify-end">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-white">
            {t('banner.top')}
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(1.75rem,4vw,3.25rem)] font-bold leading-[1.1] tracking-tight text-white uppercase max-w-[800px] mb-12"
          >
            {t('banner.title')}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href="/products" 
              className="inline-flex items-center gap-6 bg-white text-industrial-navy px-8 py-2.5 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-industrial-blue hover:text-white transition-all duration-500 group border border-white"
            >
              <span className="mt-0.5">{t('banner.cta')}</span>
              <div className="w-10 h-10 rounded-full bg-industrial-blue flex items-center justify-center group-hover:bg-white transition-colors duration-500">
                <ArrowRight className="w-4 h-4 text-white group-hover:text-industrial-blue transition-colors" />
              </div>
            </a>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="flex items-center gap-6">
            <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-white leading-relaxed max-w-[240px]">
              {t('banner.detail')}
            </p>
          </div>

          <p className="text-white text-lg font-medium leading-relaxed max-w-[480px] text-right bg-black/20 p-6 backdrop-blur-sm rounded-2xl border border-white/5">
            {t('banner.desc')}
          </p>
        </div>
      </div>
    </section>
  );
}
