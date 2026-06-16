import { motion } from 'motion/react';
import { Cpu, Factory, Settings, Wrench, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Services() {
  const { t, language } = useLanguage();

  const serviceList = [
    {
      title: language === 'ar' ? 'الهندسة والتصميم' : 'Engineering & Design',
      description: language === 'ar' ? 'نحن نقيم الاحتياجات ونطوّر منتجات تحقق الكفاءة والسلامة والأداء الأمثل.' : 'We assess needs and create products for efficiency, safety and optimal performance.',
      icon: Cpu,
      image: '/src/assets/images/precision_engineering_1781186515257.jpg',
      focus: language === 'ar' ? ['هندسة مخصصة', 'تحليل الأحمال', 'وثائق تقنية'] : ['Custom Engineering', 'Load Analysis', 'Technical Documentation']
    },
    {
      title: language === 'ar' ? 'التصنيع والتجميع' : 'Manufacture & Assembly',
      description: language === 'ar' ? 'يتم تصنيع المنتجات بعمليات معتمدة وفحوصات جودة صارمة طوال فترة الإنتاج.' : 'Products are crafted with certified processes and rigorous quality checks throughout production.',
      icon: Factory,
      image: '/src/assets/images/robotic_assembly_1781186532104.jpg',
      focus: language === 'ar' ? ['إنتاج داخلي', 'فحص الجودة', 'امتثال المعايير'] : ['In-House Production', 'Quality Inspection', 'Standards Compliance']
    },
    {
      title: language === 'ar' ? 'التركيب والتفعيل' : 'Installation & Activation',
      description: language === 'ar' ? 'يضمن الخبراء الاختبار الدقيق والتركيب والمعايرة في خدمات دعم الموقع.' : 'Experts guarantee precise testing, installation and calibration on site support services.',
      icon: Settings,
      image: '/src/assets/images/industrial_service_detail_1781187959814.jpg',
      focus: language === 'ar' ? ['إعداد الموقع', 'اختبار الأنظمة', 'الجاهزية التشغيلية'] : ['On-Site Setup', 'System Testing', 'Operational Readiness']
    },
    {
      title: language === 'ar' ? 'الصيانة والدعم' : 'Maintenance & Support',
      description: language === 'ar' ? 'مصممة لرفع الأحمال الثقيلة والمناولة الدقيقة مع أقصى قدر من الكفاءة والسلامة.' : 'Designed for heavy-duty lifting and precise load handling with maximum efficiency and safety.',
      icon: Wrench,
      image: '/src/assets/images/quality_control_1781186546438.jpg',
      focus: language === 'ar' ? ['صيانة وقائية', 'قطع غيار', 'دعم فني'] : ['Preventive Maintenance', 'Spare Parts', 'Technical Support']
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-10 md:px-20">
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-4xl">
            <p className="text-[11px] font-sans font-bold tracking-[0.4em] uppercase text-industrial-blue mb-6">
              {t('services.tagline')}
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-industrial-black">
              {t('services.title1')} <br/> <span className="text-industrial-blue">{t('services.title2')}</span>
            </h2>
          </div>
          <a href="/contact" className="inline-flex items-center gap-3 bg-industrial-blue text-white px-8 py-3 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-industrial-navy transition-all duration-300">
            {t('common.get_quote')} <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {serviceList.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative h-[500px] rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Background Image */}
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Overlay - Subtler gradient, no blue on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-12 flex flex-col justify-end text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-white/80 font-medium leading-relaxed mb-8 max-w-sm group-hover:text-white transition-colors">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/20">
                  {service.focus.map(item => (
                    <span key={item} className="px-4 py-2 bg-white/10 backdrop-blur-md text-[10px] font-bold text-white rounded-lg uppercase tracking-widest border border-white/10 group-hover:bg-white/20 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <a href="/contact" className="absolute top-10 right-10 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-industrial-blue hover:border-industrial-blue">
                <ArrowRight className="text-white" size={24} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
