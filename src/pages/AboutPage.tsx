import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import WhyChoose from '../components/WhyChoose';
import FAQ from '../components/FAQ';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Marcus Reed',
    role: 'Automation Lead',
    role_ar: 'رئيس الأتمتة',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Sofia Alvarez',
    role: 'Head of Engineering',
    role_ar: 'رئيس الهندسة',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Andreas Vogel',
    role: 'Support Director',
    role_ar: 'مدير الدعم',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop'
  }
];

export default function AboutPage() {
  const { t, language } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Navbar darkText={true} />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-10 md:px-20 lg:px-24">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-2 mb-8 text-industrial-blue">
                <p className="text-[12px] font-black tracking-widest uppercase">{t('about.page.tagline')}</p>
              </div>
              <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-bold tracking-tight text-industrial-black leading-[1.05] mb-0">
                {t('about.page.title')}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-md lg:mt-20"
            >
              <p className="text-lg text-industrial-black font-medium leading-relaxed mb-10">
                {t('about.page.hero_desc')}
              </p>
              <a href="/contact" className="inline-flex bg-industrial-blue text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[13px] hover:bg-industrial-navy transition-all duration-300">
                {t('nav.contact')}
              </a>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 py-20 border-t border-gray-100">
            {[
              { value: '20+', label: language === 'ar' ? 'سنة خبرة' : 'Years of Experience' },
              { value: '500+', label: language === 'ar' ? 'مشروع سلم' : 'Projects Delivered' },
              { value: '30+', label: language === 'ar' ? 'دولة تخدم' : 'Countries Served' },
              { value: '99.8%', label: language === 'ar' ? 'موثوقية النظام' : 'System Reliability' },
              { value: '24/7', label: language === 'ar' ? 'قدرة تشغيلية' : 'Operational Capability' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
              >
                <p className="text-4xl md:text-5xl font-bold text-industrial-blue mb-4 tracking-tight">{stat.value}</p>
                <p className="text-[14px] font-medium text-industrial-black leading-tight max-w-[120px]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </section>

      {/* Our Purpose Section - Redesigned for Professionalism */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            
            {/* Left Content Column */}
            <div className="lg:w-[45%]">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 mb-8 text-industrial-blue">
                  <span className="w-8 h-[2px] bg-industrial-blue"></span>
                  <p className="text-[12px] font-black tracking-[0.3em] uppercase">{t('about.page.purpose_tagline')}</p>
                </div>
                
                <h2 className="text-[40px] md:text-[56px] font-bold text-industrial-black leading-[1.1] mb-10 tracking-tight">
                  {t('about.page.purpose_title')}
                </h2>
                
                <div className="relative mb-12">
                  <p className="text-xl md:text-2xl text-industrial-black font-semibold leading-snug">
                    {t('about.page.purpose_desc')}
                  </p>
                  <div className="absolute -left-6 top-0 bottom-0 w-1 bg-industrial-blue/30 rounded-full"></div>
                </div>
                
                <p className="text-lg text-gray-500 leading-relaxed mb-12">
                  {t('about.page.purpose_detail')}
                </p>
                
                <div className="flex flex-wrap gap-6">
                  <a href="/contact" className="bg-industrial-blue text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[13px] hover:bg-industrial-navy transition-all duration-300 shadow-xl shadow-industrial-blue/20">
                    {language === 'ar' ? 'اكتشف نهجنا' : 'Discover Our Approach'}
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:w-[55%] w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="h-[500px] md:h-[650px]"
              >
                <div className="w-full h-full rounded-[40px] overflow-hidden shadow-2xl">
                  <img 
                    src="/src/assets/images/industrial_crane_1781187299242.jpg" 
                    alt="Industrial Machinery" 
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                  />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Alma Section */}
      <WhyChoose />

      {/* Our Team Section - Match screenshot */}
      <section className="py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div className="max-w-2xl">
              <p className="text-[11px] font-black tracking-[0.4em] uppercase text-industrial-blue mb-8">
                {t('about.team.tagline')}
              </p>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-industrial-black">
                {t('about.team.title')}
              </h2>
            </div>
            <a href="/contact" className="bg-industrial-blue text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[12px] hover:bg-industrial-navy transition-all duration-300">
              {t('about.team.cta')}
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="relative aspect-[4/5] rounded-[40px] overflow-hidden group"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-10 flex justify-between items-end">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1">{member.name}</h4>
                    <p className="text-white/60 text-sm font-bold uppercase tracking-widest">
                      {language === 'ar' ? member.role_ar : member.role}
                    </p>
                  </div>
                  <a href="#" className="w-12 h-12 rounded-full bg-industrial-blue flex items-center justify-center text-white hover:bg-white hover:text-industrial-blue transition-all">
                    <Linkedin size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Client Feedback Section */}
      <Testimonials />

      <Footer />
    </main>
  );
}

