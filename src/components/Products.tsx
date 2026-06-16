import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Products() {
  const { t, language, isRtl } = useLanguage();

  const productItems = [
    {
      category: language === 'ar' ? 'رافعات شوكية' : 'FORKLIFTS',
      metrics: { 
        capacity: language === 'ar' ? 'حتى 80 طن' : 'Up to 80t', 
        operation: language === 'ar' ? 'هيدروليكي / كهربائي' : 'Hydraulic / Electric' 
      },
      image: '/assets/images/equipment_forklift_studio_1781187708566.jpg',
      description: language === 'ar' ? 'مصممة للفعالية والأمان في رفع ونقل المواد الثقيلة.' : 'Designed for safe and efficient lifting and transport of heavy materials.',
    },
    {
      category: language === 'ar' ? 'أنظمة لودر' : 'LOADER SYSTEMS',
      metrics: { 
        capacity: language === 'ar' ? 'حتى 80 طن' : 'Up to 80t', 
        operation: language === 'ar' ? 'هيدروليكي / كهربائي' : 'Hydraulic / Electric' 
      },
      image: '/assets/images/equipment_loader_studio_1781187724570.jpg',
      description: language === 'ar' ? 'بنيت للتحميل السريع والموثوق لعمليات المواد السائبة.' : 'Built for fast and reliable loading of bulk materials operations.',
    },
    {
      category: language === 'ar' ? 'أنظمة سيور' : 'CONVEYOR SYSTEMS',
      metrics: { 
        capacity: language === 'ar' ? 'حمولة عالية' : 'High-Load Rated', 
        operation: language === 'ar' ? 'آلي / مستمر' : 'Automated / Continuous' 
      },
      image: '/assets/images/equipment_conveyor_studio_1781187739774.jpg',
      description: language === 'ar' ? 'هندسة لعمليات نقل المواد بسلاسة واستمرارية.' : 'Engineered for smooth and continuous material transport processes.',
    },
    {
      category: language === 'ar' ? 'رافعات صناعية' : 'INDUSTRIAL CRANES',
      metrics: { 
        capacity: language === 'ar' ? 'حتى 150 طن' : 'Up to 150t', 
        operation: language === 'ar' ? 'كهربائي / هجين' : 'Electric / Hybrid' 
      },
      image: '/assets/images/equipment_crane_studio_1781187753848.jpg',
      description: language === 'ar' ? 'طورت لرفع الحمولات الثقيلة والمناولة الدقيقة للأوزان.' : 'Developed for heavy-duty lifting and precise load handling operations.',
    }
  ];

  return (
    <section id="products" className="bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="px-10 py-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="max-w-4xl">
            <p className="text-[11px] font-sans font-bold tracking-[0.3em] uppercase text-industrial-blue mb-6">
              {t('products.tagline')}
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.05] tracking-tighter text-industrial-black uppercase">
              {t('products.title_p1')} <span className="text-industrial-blue">{t('products.title_p2')}</span> <br/> {t('products.title_p3')}
            </h2>
          </div>
          <button className="bg-industrial-blue text-white px-8 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-colors rounded-full transition-all">
            {t('products.explore')}
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {productItems.map((item, index) => (
            <div 
              key={item.category} 
              className={`p-10 flex flex-col gap-10 min-h-[600px] hover:bg-gray-50/50 transition-colors relative group`}
            >
              {/* Header Info */}
              <div className="flex justify-between items-start">
                <h3 className="text-[13px] font-bold tracking-[0.1em] uppercase text-industrial-black group-hover:text-industrial-blue transition-colors">
                  {item.category}
                </h3>
                <div className="text-right">
                  <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-gray-400 mb-1">
                    {language === 'ar' ? 'السعة:' : 'Capacity:'} <span className="text-industrial-black">{item.metrics.capacity}</span>
                  </p>
                  <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-gray-400">
                    {language === 'ar' ? 'التشغيل:' : 'Operation:'} <span className="text-industrial-black">{item.metrics.operation}</span>
                  </p>
                </div>
              </div>

              {/* Product Image */}
              <div className="flex-1 flex items-center justify-center py-10 px-4">
                <img 
                  src={item.image} 
                  alt={item.category}
                  className="max-w-full max-h-[300px] object-contain transition-all duration-700"
                />
              </div>

              {/* Footer Info */}
              <div className="flex justify-between items-end gap-6 text-left">
                <p className="text-sm font-medium text-gray-500 max-w-[280px] leading-relaxed">
                  {item.description}
                </p>
                <div className="w-12 h-12 border border-gray-200 flex items-center justify-center text-industrial-blue group-hover:bg-industrial-blue group-hover:text-white group-hover:border-industrial-blue transition-all cursor-pointer">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
