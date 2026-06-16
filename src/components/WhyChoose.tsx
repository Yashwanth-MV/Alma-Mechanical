import { motion } from 'motion/react';
import { ArrowRight, Hammer, Settings, Shield, UserPlus } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function WhyChoose() {
  const { t, language } = useLanguage();

  const features = [
    {
      title: language === 'ar' ? 'هندسة ثقيلة' : 'Heavy-Duty Engineering',
      description: language === 'ar' ? 'مصمم لتحمل أقسى البيئات الصناعية.' : 'Designed to withstand the toughest industrial environments.',
      icon: Hammer
    },
    {
      title: language === 'ar' ? 'تصنيع دقيق' : 'Precision Manufacturing',
      description: language === 'ar' ? 'تضمن العمليات المتقدمة الدقة والموثوقية على المدى الطويل.' : 'Advanced processes guarantee precision and long-term reliability.',
      icon: Settings
    },
    {
      title: language === 'ar' ? 'الامتثال الصناعي' : 'Industry Compliance',
      description: language === 'ar' ? 'تلبي جميع المنتجات معايير السلامة والجودة العالمية.' : 'All products meet international safety and quality standards.',
      icon: Shield
    },
    {
      title: language === 'ar' ? 'دعم متكامل' : 'End-to-End Support',
      description: language === 'ar' ? 'دعم كامل من التصميم إلى التركيب والصيانة.' : 'Complete support from design to installation and maintenance.',
      icon: UserPlus
    }
  ];

  return (
    <section className="relative min-h-[850px] w-full bg-industrial-navy overflow-hidden flex flex-col py-24">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover brightness-[0.4]"
        >
          <source src="https://framerusercontent.com/assets/wK5EtPXcOfy4u5gT6eTLpz0Y.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-navy via-transparent to-industrial-navy/50"></div>
      </div>

      <div className="relative z-10 flex-1 max-w-[1440px] mx-auto px-10 border-x border-white/10 flex flex-col justify-between w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] font-sans font-bold tracking-[0.3em] uppercase text-white mb-6">
              {t('why.tagline')}
            </p>
            <h2 className="text-[clamp(2rem,6vw,4rem)] font-bold leading-[1.05] tracking-tight text-white uppercase max-w-4xl">
              {t('why.title1')}<br/>
              {t('why.title2')}
            </h2>
          </motion.div>
        </div>

        <div>
          {/* Feature Grid - Minimalist approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20 mb-16">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all group rounded-xl"
              >
                <div className="mb-4 p-2.5 border border-white/20 w-fit group-hover:border-industrial-blue transition-colors rounded-lg">
                  <feature.icon className="w-5 h-5 text-white group-hover:text-industrial-blue transition-colors font-bold" />
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-tight mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/50 text-[11px] font-medium leading-relaxed max-w-[200px]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center md:justify-start">
            <button className="bg-white text-industrial-black px-8 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-industrial-blue hover:text-white transition-all flex items-center gap-4 group">
              {t('common.work_with_us')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
