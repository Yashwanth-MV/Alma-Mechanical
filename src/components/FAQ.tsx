import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const faqs_en = [
  {
    question: "What industries do you work with?",
    answer: "We work with manufacturers, logistics providers, and industrial operators across sectors such as automotive, warehousing, food & beverage, and heavy industry."
  },
  {
    question: "Do you provide custom solutions?",
    answer: "Yes, we specialize in tailoring our products and services to meet the specific throughput and environmental requirements of your facility."
  },
  {
    question: "Can you handle projects end-to-end?",
    answer: "Absolutely. Our team manages everything from initial consultation and design to manufacturing, installation, and ongoing maintenance."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity, but most custom product installations are completed within 12-16 weeks."
  },
  {
    question: "Do you integrate with existing software?",
    answer: "Yes, our control systems are designed to be compatible with standard WMS and ERP software for seamless data integration."
  },
  {
    question: "What safety regulations do you follow?",
    answer: "Our products comply with all major international safety standards, including CE, ISO, and local regional occupational health and safety regulations."
  }
];

const faqs_ar = [
  {
    question: "ما هي الصناعات التي تعملون معها؟",
    answer: "نحن نعمل مع المصنعين ومقدمي الخدمات اللوجستية والمشغلين الصناعيين عبر قطاعات مثل السيارات والمستودعات والأغذية والمشروبات والصناعة الثقيلة."
  },
  {
    question: "هل تقدمون حلولاً مخصصة؟",
    answer: "نعم ، نحن متخصصون في تصميم منتجاتنا وخدماتنا لتلبية متطلبات الإنتاج والبيئة المحددة لمنشأتك."
  },
  {
    question: "هل يمكنكم التعامل مع المشاريع من البداية إلى النهاية؟",
    answer: "بالتأكيد. يدير فريقنا كل شيء بدءًا من الاستشارة الأولية والتصميم ووصولاً إلى التصنيع والتركيب والصيانة المستمرة."
  },
  {
    question: "كم يستغرق المشروع النموذجي عادة؟",
    answer: "تختلف الجداول الزمنية للمشروع بناءً على التعقيد ، ولكن يتم الانتهاء من معظم عمليات تركيب المنتجات المخصصة في غضون 12-16 أسبوعًا."
  },
  {
    question: "هل تتكاملون مع البرامج الموجودة؟",
    answer: "نعم ، تم تصميم أنظمة التحكم لدينا لتكون متوافقة مع برامج WMS و ERP القياسية لدمج البيانات بسلاسة."
  },
  {
    question: "ما هي لوائح السلامة التي تتبعونها؟",
    answer: "تتوافق منتجاتنا مع جميع معايير السلامة الدولية الرئيسية ، بما في ذلك CE و ISO ولوائح الصحة والسلامة المهنية الإقليمية المحلية."
  }
];

export default function FAQ() {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const currentFaqs = language === 'ar' ? faqs_ar : faqs_en;

  return (
    <section className="py-32 bg-white px-6 md:px-20 lg:px-40 max-w-[1440px] mx-auto overflow-visible">
      <div className="flex flex-col lg:flex-row gap-20">
        {/* Left Content - Sticky */}
        <div className="lg:w-2/5">
          <div className="lg:sticky lg:top-32 xl:top-40">
            <p className="text-[14px] font-sans font-medium tracking-[0.12em] uppercase text-industrial-blue mb-8">
              {t('faq.tagline')}
            </p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] text-industrial-navy mb-12">
              {t('faq.title')}
            </h2>
          </div>
        </div>

        {/* Right Content - FAQ Items Scrolling */}
        <div className="lg:w-3/5 flex flex-col">
          {currentFaqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-100 last:border-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 flex items-start justify-between text-left group"
              >
                <span className={`text-2xl font-bold tracking-tight transition-colors ${openIndex === index ? 'text-industrial-blue' : 'text-industrial-navy group-hover:text-industrial-blue'}`}>
                  {faq.question}
                </span>
                <span className={`mt-1 transition-transform duration-500 ${openIndex === index ? '-rotate-45 text-industrial-blue' : 'text-industrial-blue'}`}>
                  <ArrowRight size={28} strokeWidth={2.5} />
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-10 text-lg text-gray-500 leading-relaxed max-w-[90%]">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
