import { motion } from 'motion/react';
import { ShieldCheck, Settings2, Clock, ArrowRight, FileText, Award, ThumbsUp, Headphones } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: ShieldCheck,
      title: language === 'ar' ? 'تصنيع ولحام معتمد' : 'Certified Fabrication & Welding',
      description: language === 'ar' ? 'صنعة عالية الجودة تلبي معايير الصناعة.' : 'High-quality workmanship meeting industry standards.'
    },
    {
      icon: Settings2,
      title: language === 'ar' ? 'حلول صناعية مخصصة' : 'Custom Industrial Solutions',
      description: language === 'ar' ? 'مصممة خصيصًا لمشروعك وصناعتك واحتياجاتك.' : 'Tailored to your project, your industry, your needs.'
    },
    {
      icon: Clock,
      title: language === 'ar' ? 'تسليم المشروع في الوقت المحدد' : 'On-Time Project Delivery',
      description: language === 'ar' ? 'ملتزمون بالمواعيد النهائية والكفاءة التشغيلية.' : 'Committed to deadlines and operational efficiency.'
    }
  ];

  return (
    <section id="company" className="bg-white py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-10 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-28">
          {/* Left Column: Industrial Image */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-[40px] overflow-hidden shadow-2xl relative group"
            >
              <img 
                src="/assets/images/about_us.jpg" 
                alt="Engineering Strength" 
                className="w-full h-full object-cover aspect-[4/3.5] transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700"></div>
            </motion.div>
            
            <div className="mt-8 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-5xl font-black text-industrial-black tracking-tighter">1,200<span className="text-industrial-blue">+</span></span>
                <span className="text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase mt-2">
                  {t('common.projects_completed')}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl font-black text-industrial-black tracking-tighter">15<span className="text-industrial-blue">+</span></span>
                <span className="text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase mt-2">
                  {t('common.years_experience')}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6 text-industrial-blue">
                <div className="w-1 h-4 bg-current"></div>
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase">
                  {t('about.tagline')}
                </p>
              </div>

              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-industrial-black leading-[1.05] mb-8 uppercase">
                {t('about.title1')} <br />
                {t('about.title2')} <br />
                <span className="text-industrial-blue">{t('about.title3')}</span>
              </h2>
              
              <p className="text-lg text-gray-500 font-medium leading-relaxed mb-6">
                {t('about.desc')}
              </p>
              
              <p className="text-lg text-gray-500 font-medium leading-relaxed mb-10">
                {t('about.desc2')}
              </p>

              <div className="space-y-8 mb-12">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-industrial-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-industrial-black mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-500 font-medium">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="bg-industrial-blue text-white h-[48px] px-8 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-black transition-all duration-300 flex items-center justify-center gap-3">
                  {t('about.cta1')} <ArrowRight size={16} />
                </a>
                <button className="border border-industrial-blue/30 text-industrial-blue h-[48px] px-8 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-industrial-blue hover:text-white transition-all duration-300 flex items-center gap-3">
                  {t('about.cta2')} <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Brand Logos Bar */}
        <div className="bg-gray-50/50 rounded-2xl p-10 flex flex-col lg:flex-row items-center gap-10 overflow-hidden">
          <p className="text-[10px] font-black tracking-widest uppercase text-industrial-black whitespace-nowrap lg:border-r border-gray-200 lg:pr-10 z-10 bg-gray-50/50">
            {t('common.trusted')}
          </p>
          <div className="flex-1 overflow-hidden relative">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-x-20 grayscale opacity-40 whitespace-nowrap"
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-x-20">
                  <span className="text-2xl font-black tracking-tighter">AECOM</span>
                  <span className="text-2xl font-bold italic tracking-tight">PCL</span>
                  <span className="text-2xl font-black tracking-tighter">FLUOR</span>
                  <span className="text-2xl font-black tracking-widest text-[#00529b]">BIRD</span>
                  <span className="text-[20px] font-extrabold uppercase">SNC · LAVALIN</span>
                  <span className="text-xl font-bold uppercase tracking-tight">ENBRIDGE</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-black">ISO</span>
                    <span className="text-[10px] font-bold leading-tight">CERTIFIED</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
