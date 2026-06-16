import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.aboutus': 'About Us',
    'nav.services': 'Services',
    'nav.products': 'Products',
    'nav.contact': 'Contact Us',
    'nav.home': 'Home',
    'nav.english': 'English',
    'nav.arabic': 'Arabic',
    'company.name': 'ALMA MECHANICAL',
    'company.name.split1': 'ALMA',
    'company.name.split2': 'MECHANICAL',
    'contact.us': 'Contact Us',
    'common.all': 'All',
    'common.view_more': 'View More',
    'common.read_more': 'Read More',
    'common.get_quote': 'Get a Quote',
    'common.work_with_us': 'Work With Us',
    'common.projects_completed': 'Projects Completed',
    'common.years_experience': 'Years Experience',
    'common.trusted': 'Trusted by industry leaders',
    'hero.tagline': 'Built to carry',
    'hero.title': 'Engineering heavy-duty performance.',
    'hero.desc': 'Precision-engineered industrial products for heavy loads, operations, and demanding environments.',
    'hero.cta.quote': 'Get a Quote',
    'hero.cta.products': 'View Products',
    'about.tagline': 'About Alma Mechanical',
    'about.title1': 'Engineering',
    'about.title2': 'strength into',
    'about.title3': 'EVERY PROJECT.',
    'about.desc': 'Alma manufactures and supplies heavy-duty machinery for industries like construction, manufacturing, logistics, and energy.',
    'about.desc2': 'Every Alma solution is engineered to handle extreme loads, harsh conditions, and continuous operation, helping businesses increase productivity while reducing operational risks.',
    'about.cta1': 'Request a Quote',
    'about.cta2': 'View Our Work',
    'why.tagline': 'Why Choose Alma Mechanical',
    'why.title1': 'Built for performance.',
    'why.title2': 'Designed for industry.',
    'services.tagline': 'Our Services',
    'services.title1': 'Smarter solutions for',
    'services.title2': 'complex challenges.',
    'products.tagline': 'Products',
    'products.title_p1': 'Products for',
    'products.title_p2': 'large-scale',
    'products.title_p3': 'industrial use.',
    'products.explore': 'Explore All Products',
    'banner.top': 'Engineered for extreme conditions reliability',
    'banner.title': 'From high-load facilities to demanding industrial sites.',
    'banner.cta': 'Explore Solutions',
    'banner.detail': 'Where engineering detail defines industrial strength.',
    'banner.desc': 'Our products are built to endure harsh conditions, excelling in extreme temperatures, pressure, and corrosion, perfect for oil, gas, mining, and construction.',
    'projects.tagline': '// Project Portfolio',
    'projects.title': 'Delivering high-stakes solutions across diverse sectors.',
    'projects.view_spec': 'View System Spec',
    'faq.tagline': 'Frequently Asked Questions',
    'faq.title': 'Clear answers for industrial projects.',
    'blog.tagline': 'Insights & Resources',
    'blog.title1': 'Knowledge for industrial',
    'blog.title2': 'decision-makers.',
    'contact.tagline': 'Get in touch',
    'contact.title': "Let's start the Discussion.",
    'contact.hours': 'Monday – Friday: 8:00 AM – 6:00 PM',
    'contact.dubai_hq': 'Dubai HQ',
    'contact.form.name': 'Full Name*',
    'contact.form.company': 'Company Name*',
    'contact.form.email': 'Work Email*',
    'contact.form.phone': 'Phone',
    'contact.form.location': 'Location',
    'contact.form.budget': 'Budget Range*',
    'contact.form.details': 'Project Details',
    'contact.form.cta': 'Request Consultation',
    'contact.form.success_title': 'Message Sent!',
    'contact.form.success_desc': 'Thank you for reaching out. Our team will review your project details and get back to you within 24 hours.',
    'contact.form.success_cta': 'View All Products',
    'contact.form.resubmit': 'Send another message',
    'common.required': 'Required',
    'common.invalid_email': 'Invalid email',
    'footer.discover': 'Discover our range of products.',
    'footer.tagline': 'Crafting durable machinery for reliable performance in tough environments.',
    'footer.address': 'Office 101, Business Bay, Dubai, United Arab Emirates',
    'footer.about': 'About',
    'footer.leadership': 'Leadership',
    'footer.careers': 'Careers',
    'footer.clients': 'Clients',
    'footer.pricing': 'Pricing',
    'footer.leasing': 'Leasing',
    'footer.industries': 'Industries',
    'footer.projects': 'Projects',
    'footer.faq': 'FAQ',
    'footer.forklifts': 'Forklifts',
    'footer.loaders': 'Loader Systems',
    'footer.cranes': 'Industrial Cranes',
    'footer.pallet': 'Pallet Handling',
    'footer.design': 'Engineering & Design',
    'footer.support': 'Maintenance & Support',
    'footer.custom': 'Custom Engineering',
    'footer.system': 'System Design',
    'footer.company': 'Company',
    'footer.info': 'Info',
    'footer.products': 'Products',
    'footer.services': 'Services',
    'footer.copyright': '© 2026 Alma Mechanical. All Rights Reserved',
    'footer.designed': 'Designed by',
    'contact.section.tagline': 'Get in Touch',
    'contact.section.title1': "Let's build the",
    'contact.section.title2': 'Future together.',
    'contact.section.desc': 'Our team of expert engineers is ready to help you solve your most complex industrial challenges. From custom consultation to full-scale deployment systems.',
    'contact.section.cta1': 'Request a Consultation',
    'contact.section.cta2': 'View Capabilities',
    'about.page.tagline': 'About Alma Mechanical',
    'about.page.title': 'Powering industry with solid strength.',
    'about.page.hero_desc': 'Alma Mechanical manufactures reliable, safe, and durable heavy-duty machinery for industrial operators.',
    'about.page.purpose_tagline': 'Our Purpose',
    'about.page.purpose_title': 'Engineered for real-world performance.',
    'about.page.purpose_desc': 'Alma Mechanical develops and delivers industrial-grade machinery designed for efficient operations, ensuring reliable performance.',
    'about.page.purpose_detail': 'Every Alma Mechanical solution is built for heavy-duty performance, challenging conditions, and continuous operation, helping businesses increase efficiency while reducing disruptions.',
    'about.why.tagline': 'Why Choose Alma',
    'about.why.title': 'The Alma Advantage',
    'about.why.reason1.title': 'Precision Engineering',
    'about.why.reason1.desc': 'Our components are crafted with sub-millimeter precision to ensure flawless operation under extreme stress.',
    'about.why.reason2.title': 'Durable Materials',
    'about.why.reason2.desc': 'We use industrial-grade alloys and coatings designed to resist corrosion and wear for decades.',
    'about.why.reason3.title': 'Safety First',
    'about.why.reason3.desc': 'Every machine undergoes rigorous safety testing exceeding international industrial standards.',
    'about.why.reason4.title': 'Global Support',
    'about.why.reason4.desc': 'Our maintenance teams are available worldwide, ensuring your operations never stop.',
    'about.team.tagline': 'Our Team',
    'about.team.title': 'Industrial innovators. Solution creators.',
    'about.team.cta': 'Meet Our Professionals',
    'about.faq.tagline': 'Support',
    'about.faq.title': 'Frequently Asked Questions',
    'about.faq.ask': 'Ask a question',
  },
  ar: {
    'nav.aboutus': 'من نحن',
    'nav.services': 'الخدمات',
    'nav.products': 'المنتجات',
    'nav.contact': 'تواصل معنا',
    'nav.home': 'الرئيسية',
    'nav.english': 'الإنجليزية',
    'nav.arabic': 'العربية',
    'company.name': 'ألما للميكانيكا',
    'company.name.split1': 'ألما',
    'company.name.split2': 'للميكانيكا',
    'contact.us': 'اتصل بنا',
    'common.all': 'الكل',
    'common.view_more': 'عرض المزيد',
    'common.read_more': 'اقرأ المزيد',
    'common.get_quote': 'احصل على عرض سعر',
    'common.work_with_us': 'اعمل معنا',
    'common.projects_completed': 'مشاريع مكتملة',
    'common.years_experience': 'سنوات خبرة',
    'common.trusted': 'موثوق به من قبل قادة الصناعة',
    'hero.tagline': 'صُنت للتحمل',
    'hero.title': 'هندسة الأداء الشاق والفعال.',
    'hero.desc': 'منتجات صناعية مصممة بدقة للأحمال الثقيلة والعمليات والبيئات الصعبة.',
    'hero.cta.quote': 'احصل على عرض سعر',
    'hero.cta.products': 'عرض المنتجات',
    'about.tagline': 'عن ألما للميكانيكا',
    'about.title1': 'هندسة',
    'about.title2': 'القوة في',
    'about.title3': 'كل مشروع.',
    'about.desc': 'تقوم ألما بتصنيع وتوريد الآلات الثقيلة للصناعات مثل البناء والتصنيع والخدمات اللوجستية والطاقة.',
    'about.desc2': 'كل حل من حلول ألما مصمم للتعامل مع الأحمال القصوى والظروف القاسية والتشغيل المستمر ، مما يساعد الأعمال على زيادة الإنتاجية مع تقليل المخاطر التشغيلية.',
    'about.cta1': 'اطلب عرض سعر',
    'about.cta2': 'شاهد أعمالنا',
    'why.tagline': 'لماذا تختار ألما للميكانيكا',
    'why.title1': 'بنيت للأداء.',
    'why.title2': 'صممت للصناعة.',
    'services.tagline': 'خدماتنا',
    'services.title1': 'حلول أذكى لـ',
    'services.title2': 'تحديات معقدة.',
    'products.tagline': 'المنتجات',
    'products.title_p1': 'منتجات للاستخدام الصناعي',
    'products.title_p2': 'واسع النطاق.',
    'products.title_p3': '',
    'products.explore': 'استكشف جميع المنتجات',
    'banner.top': 'مصمم للموثوقية في الظروف القاسية',
    'banner.title': 'من المرافق ذات الأحمال العالية إلى المواقع الصناعية المتطلبة.',
    'banner.cta': 'استكشف الحلول',
    'banner.detail': 'حيث تحدد التفاصيل الهندسية القوة الصناعية.',
    'banner.desc': 'صُنعت منتجاتنا لتتحمل الظروف القاسية، وتتفوق في درجات الحرارة القصوى، والضغط، والتآكل، وهي مثالية للنفط والغاز والتعدين والبناء.',
    'projects.tagline': '// محفظة المشاريع',
    'projects.title': 'تقديم حلول عالية القيمة عبر قطاعات متنوعة.',
    'projects.view_spec': 'عرض مواصفات النظام',
    'faq.tagline': 'الأسئلة الشائعة',
    'faq.title': 'إجابات واضحة للمشاريع الصناعية.',
    'blog.tagline': 'رؤى وموارد',
    'blog.title1': 'المعرفة لـ',
    'blog.title2': 'متخذي القرار الصناعي.',
    'contact.tagline': 'تواصل معنا',
    'contact.title': 'لنبدأ المناقشة.',
    'contact.hours': 'الإثنين - الجمعة: 8:00 صباحًا - 6:00 مساءً',
    'contact.dubai_hq': 'المقر الرئيسي في دبي',
    'contact.form.name': 'الاسم الكامل*',
    'contact.form.company': 'اسم الشركة*',
    'contact.form.email': 'البريد الإلكتروني للعمل*',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.location': 'الموقع',
    'contact.form.budget': 'نطاق الميزانية*',
    'contact.form.details': 'تفاصيل المشروع',
    'contact.form.cta': 'اطلب استشارة',
    'contact.form.success_title': 'تم إرسال الرسالة!',
    'contact.form.success_desc': 'شكراً لتواصلك معنا. سيقوم فريقنا بمراجعة تفاصيل مشروعك والرد عليك في غضون 24 ساعة.',
    'contact.form.success_cta': 'عرض جميع المنتجات',
    'contact.form.resubmit': 'إرسال رسالة أخرى',
    'common.required': 'مطلوب',
    'common.invalid_email': 'بريد إلكتروني غير صالح',
    'footer.discover': 'اكتشف مجموعتنا من المنتجات.',
    'footer.tagline': 'تصنيع آلات متينة لأداء موثوق في البيئات الصعبة.',
    'footer.address': 'المكتب 101، الخليج التجاري، دبي، الإمارات العربية المتحدة',
    'footer.about': 'حول',
    'footer.leadership': 'القيادة',
    'footer.careers': 'الوظائف',
    'footer.clients': 'العملاء',
    'footer.pricing': 'الأسعار',
    'footer.leasing': 'التأجير',
    'footer.industries': 'الصناعات',
    'footer.projects': 'المشاريع',
    'footer.faq': 'الأسئلة الشائعة',
    'footer.forklifts': 'الرافعات الشوكية',
    'footer.loaders': 'أنظمة اللودر',
    'footer.cranes': 'الرافعات الصناعية',
    'footer.pallet': 'مناولة الطبالي',
    'footer.design': 'الهندسة والتصميم',
    'footer.support': 'الصيانة والدعم',
    'footer.custom': 'هندسة مخصصة',
    'footer.system': 'تصميم الأنظمة',
    'footer.company': 'الشركة',
    'footer.info': 'معلومات',
    'footer.products': 'المنتجات',
    'footer.services': 'الخدمات',
    'footer.copyright': '© 2026 ألما للميكانيكا. جميع الحقوق محفوظة',
    'footer.designed': 'صمم بواسطة',
    'contact.section.tagline': 'تواصل معنا',
    'contact.section.title1': 'لنبنِ ',
    'contact.section.title2': 'المستقبل معاً.',
    'contact.section.desc': 'فريقنا من المهندسين الخبراء جاهز لمساعدتك في حل التحديات الصناعية الأكثر تعقيداً. من الاستشارات المخصصة إلى أنظمة النشر واسعة النطاق.',
    'contact.section.cta1': 'طلب استشارة',
    'contact.section.cta2': 'عرض القدرات',
    'about.page.tagline': 'عن ألما للميكانيكا',
    'about.page.title': 'تمكين الصناعة بقوة راسخة.',
    'about.page.hero_desc': 'تقوم ألما للميكانيكا بتصنيع آلات ثقيلة موثوقة وآمنة ومتينة للمشغلين الصناعيين.',
    'about.page.purpose_tagline': 'هدفنا',
    'about.page.purpose_title': 'هندسة للأداء في العالم الحقيقي.',
    'about.page.purpose_desc': 'تقوم ألما للميكانيكا بتطوير وتقديم آلات صناعية مصممة للعمليات الفعالة، مما يضمن أداءً موثوقاً.',
    'about.page.purpose_detail': 'تم بناء كل حل من حلول ألما للميكانيكا للأداء الشاق والظروف الصعبة والتشغيل المستمر، مما يساعد الشركات على زيادة الكفاءة مع تقليل الأعطال.',
    'about.why.tagline': 'لماذا تختار ألما',
    'about.why.title': 'ميزة ألما',
    'about.why.reason1.title': 'الهندسة الدقيقة',
    'about.why.reason1.desc': 'يتم تصنيع مكوناتنا بدقة متناهية لضمان التشغيل السلس تحت أقسى الظروف.',
    'about.why.reason2.title': 'مواد متينة',
    'about.why.reason2.desc': 'نحن نستخدم سبائك وطلاءات صناعية مصممة لمقاومة التآكل والصدا العقود.',
    'about.why.reason3.title': 'الأمان أولاً',
    'about.why.reason3.desc': 'تخضع كل آلة لاختبارات أمان صارمة تتجاوز المعايير الصناعية الدولية.',
    'about.why.reason4.title': 'دعم عالمي',
    'about.why.reason4.desc': 'فرق الصيانة لدينا متوفرة في جميع أنحاء العالم، مما يضمن عدم توقف عملياتك.',
    'about.team.tagline': 'فريقنا',
    'about.team.title': 'مبتكرون صناعيون. صانعو حلول.',
    'about.team.cta': 'قابل مهنيينا',
    'about.faq.tagline': 'الدعم',
    'about.faq.title': 'الأسئلة الشائعة',
    'about.faq.ask': 'اطرح سؤالاً',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  const isRtl = false;

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = language;
    
    // Switch font-family globally
    if (language === 'ar') {
      document.body.style.fontFamily = '"Tajawal", "Cairo", sans-serif';
    } else {
      document.body.style.fontFamily = '"Plus Jakarta Sans", sans-serif';
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  // Basic translation function - actual strings will move to a separate file later
  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRtl }}>
      <div className={isRtl ? 'font-arabic' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

