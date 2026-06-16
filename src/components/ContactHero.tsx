import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactHero() {
  const { t, language, isRtl } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    location: '',
    budget: '',
    details: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName) newErrors.fullName = t('common.required');
    if (!formData.companyName) newErrors.companyName = t('common.required');
    if (!formData.email) newErrors.email = t('common.required');
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t('common.invalid_email');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleResubmit = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      location: '',
      budget: '',
      details: ''
    });
    setErrors({});
  };

  return (
    <section className="relative min-h-screen w-full bg-industrial-navy overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-70 brightness-[0.8]"
        >
          <source src="https://framerusercontent.com/assets/gOl6ma0XSUUDWCAZbTBcqO6Bgmg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 lg:px-24 pt-[180px] pb-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left Side: Content */}
          <div className="lg:w-[45%]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-sans text-[14px] font-medium tracking-[0.12em] uppercase text-white mb-8">
                {t('contact.tagline')}
              </p>
              
              <h1 className="text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white mb-12 max-w-[520px]">
                {t('contact.title')}
              </h1>
              
              <div className="flex flex-col gap-10">
                <div className="pt-8 border-t border-white/20 max-w-[480px]">
                  <p className="font-sans text-[13px] font-medium tracking-[0.1em] uppercase text-white/60 mb-6">
                    {t('contact.hours')}
                  </p>
                  <div className="flex flex-col gap-y-8">
                    <div className="flex flex-col sm:flex-row gap-x-12 gap-y-4">
                      <a href="tel:+15551234567" className="text-xl font-bold text-white hover:text-industrial-blue transition-colors">
                         +1 (555) 123–4567
                      </a>
                      <a href="mailto:info@example.com" className="text-xl font-bold text-white hover:text-industrial-blue transition-colors">
                         info@example.com
                      </a>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                         <MapPin className="text-industrial-blue" size={20} />
                      </div>
                      <address className="not-italic text-lg text-white/90 leading-snug">
                        <span className="font-bold text-white block mb-1 uppercase tracking-wider text-sm">
                          {t('contact.dubai_hq')}
                        </span>
                        {t('footer.address').split(', ').map((line, i) => (
                          <span key={i}>{line}<br /></span>
                        ))}
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-[55%] w-full max-w-[680px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white p-8 md:p-10 border-t-8 border-industrial-blue shadow-2xl relative min-h-[500px]"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6"
                   >
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[11px] font-bold uppercase tracking-widest text-black">
                        {t('contact.form.name')}
                      </label>
                      <input 
                        type="text" 
                        placeholder={language === 'ar' ? 'زيد أحمد' : 'Jane Smith'}
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        dir="ltr"
                        className={`bg-transparent border-b py-1.5 outline-none focus:border-industrial-blue transition-colors font-medium text-[16px] text-industrial-navy placeholder:text-gray-300 ${errors.fullName ? 'border-red-500' : 'border-black/10'}`}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[11px] font-bold uppercase tracking-widest text-black">
                        {t('contact.form.company')}
                      </label>
                      <input 
                        type="text" 
                        placeholder={language === 'ar' ? 'ألما للميكانيكا' : 'Alma Mechanical'}
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        dir="ltr"
                        className={`bg-transparent border-b py-1.5 outline-none focus:border-industrial-blue transition-colors font-medium text-[16px] text-industrial-navy placeholder:text-gray-300 ${errors.companyName ? 'border-red-500' : 'border-black/10'}`}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[11px] font-bold uppercase tracking-widest text-black">
                        {t('contact.form.email')}
                      </label>
                      <input 
                        type="email" 
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        dir="ltr"
                        className={`bg-transparent border-b py-1.5 outline-none focus:border-industrial-blue transition-colors font-medium text-[16px] text-industrial-navy placeholder:text-gray-300 ${errors.email ? 'border-red-500' : 'border-black/10'}`}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[11px] font-bold uppercase tracking-widest text-black">
                        {t('contact.form.phone')}
                      </label>
                      <input 
                        type="tel" 
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        dir="ltr"
                        className="bg-transparent border-b border-black/10 py-1.5 outline-none focus:border-industrial-blue transition-colors font-medium text-[16px] text-industrial-navy placeholder:text-gray-300"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[11px] font-bold uppercase tracking-widest text-black">
                        {t('contact.form.location')}
                      </label>
                      <input 
                        type="text" 
                        placeholder={language === 'ar' ? 'دبي، الإمارات' : 'Dubai, UAE'}
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        dir="ltr"
                        className="bg-transparent border-b border-black/10 py-1.5 outline-none focus:border-industrial-blue transition-colors font-medium text-[16px] text-industrial-navy placeholder:text-gray-300"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[11px] font-bold uppercase tracking-widest text-black">
                        {t('contact.form.budget')}
                      </label>
                      <input 
                        type="text" 
                        placeholder={language === 'ar' ? 'الميزانية المتوقعة' : 'Estimated budget'}
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        dir="ltr"
                        className="bg-transparent border-b border-black/10 py-1.5 outline-none focus:border-industrial-blue transition-colors font-medium text-[16px] text-industrial-navy placeholder:text-gray-300"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 md:col-span-2">
                      <label className="font-sans text-[11px] font-bold uppercase tracking-widest text-black">
                        {t('contact.form.details')}
                      </label>
                      <textarea 
                        rows={3}
                        placeholder={language === 'ar' ? 'أخبرنا عن مشروعك' : 'Tell us about your project'}
                        value={formData.details}
                        onChange={(e) => setFormData({...formData, details: e.target.value})}
                        dir="ltr"
                        className="bg-transparent border-b border-black/10 py-1.5 outline-none focus:border-industrial-blue transition-colors font-medium text-[16px] text-industrial-navy placeholder:text-gray-300 resize-none"
                      />
                    </div>
                    <div className="md:col-span-2 pt-4">
                      <button 
                        type="submit"
                        className="bg-industrial-blue text-white h-[48px] px-8 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-all duration-300 w-full rounded-full"
                      >
                        {t('contact.form.cta')}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center text-center h-full py-10"
                  >
                    <div className="w-20 h-20 rounded-full bg-industrial-blue/10 flex items-center justify-center mb-8">
                       <CheckCircle2 className="text-industrial-blue" size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-industrial-navy mb-4">
                      {t('contact.form.success_title')}
                    </h2>
                    <p className="text-gray-500 mb-10 max-w-[320px]">
                      {t('contact.form.success_desc')}
                    </p>
                    <a 
                      href="#products" 
                      className="inline-flex items-center gap-3 bg-industrial-blue text-white h-[48px] px-8 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-all duration-300 rounded-full"
                    >
                      {t('contact.form.success_cta')}
                      <ArrowRight size={16} />
                    </a>

                    <button
                      onClick={handleResubmit}
                      className="mt-6 text-gray-500 hover:text-industrial-blue text-[11px] font-bold uppercase tracking-widest transition-colors"
                    >
                      {t('contact.form.resubmit')}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
