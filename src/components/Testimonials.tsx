import { motion, AnimatePresence } from 'motion/react';
import { testimonials, testimonials_ar } from '../data';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Testimonials() {
  const { t, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const currentTestimonials = language === 'ar' ? testimonials_ar : testimonials;
  
  const next = () => {
    setActiveIndex((prev) => (prev + 1 >= currentTestimonials.length ? 0 : prev + 1));
  };
  const prev = () => {
    setActiveIndex((prev) => (prev - 1 < 0 ? currentTestimonials.length - 1 : prev - 1));
  };

  return (
    <section id="feedback" className="bg-[#F8F9FA] py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-10 md:px-20">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Left Side: Content */}
          <div className="lg:w-1/2">
            <p className="text-industrial-blue text-sm font-bold tracking-[0.2em] uppercase mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-industrial-blue"></span>
              {language === 'ar' ? 'تعليقات العملاء' : 'Client Feedback'}
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-industrial-black mb-12">
              {language === 'ar' 
                ? <>تعتمد الشركات الصناعية على ألما لتحقيق أداء <span className="text-industrial-blue">المعدات.</span></>
                : <>Industrial companies rely on Alma for <span className="text-industrial-blue">equipment</span> performance.</>
              }
            </h2>
            
            <div className="hidden lg:flex gap-4">
              <button 
                onClick={prev}
                className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center transition-all hover:bg-industrial-blue hover:border-industrial-blue group"
              >
                <ArrowLeft className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </button>
              <button 
                onClick={next}
                className="w-16 h-16 rounded-full border border-industrial-blue bg-industrial-blue flex items-center justify-center transition-all hover:bg-industrial-navy hover:border-industrial-navy group"
              >
                <ArrowRight className="w-6 h-6 text-white transition-colors" />
              </button>
            </div>
          </div>

          {/* Right Side: Slider */}
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="bg-white p-12 md:p-16 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative"
                >
                  <div className="flex items-center gap-6 mb-10">
                    <img 
                      src={currentTestimonials[activeIndex].avatar} 
                      alt={currentTestimonials[activeIndex].author} 
                      className="w-20 h-20 rounded-2xl object-cover"
                    />
                    <div>
                      <h4 className="text-2xl font-bold text-industrial-black leading-tight">
                        {currentTestimonials[activeIndex].author}
                      </h4>
                      <p className="text-industrial-blue font-medium text-sm mt-1">
                        {currentTestimonials[activeIndex].role} @ {currentTestimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>

                  <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed text-gray-700 italic">
                    "{currentTestimonials[activeIndex].content}"
                  </blockquote>
                  
                  <div className="absolute top-10 right-12 text-gray-100">
                    <svg width="60" height="45" viewBox="0 0 60 45" fill="currentColor">
                      <path d="M15.4 0C23.9 0 30.8 6.9 30.8 15.4C30.8 23.9 23.9 30.8 15.4 30.8H0V0H15.4ZM44.6 0C53.1 0 60 6.9 60 15.4C60 23.9 53.1 30.8 44.6 30.8H29.2V0H44.6Z" opacity="0.1"/>
                    </svg>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Bar */}
              <div className="mt-12 flex items-center justify-between">
                <div className="flex gap-2">
                  {currentTestimonials.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`h-1.5 transition-all duration-500 rounded-full ${idx === activeIndex ? 'w-12 bg-industrial-blue' : 'w-3 bg-gray-200'}`}
                    ></div>
                  ))}
                </div>
                <div className="lg:hidden flex gap-3">
                  <button onClick={prev} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center"><ArrowLeft size={20}/></button>
                  <button onClick={next} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center"><ArrowRight size={20}/></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
