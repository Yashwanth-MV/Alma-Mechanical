import { NavItem, Service, Project, Testimonial, BlogPost } from './types';

export const navItems: NavItem[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
];

export const services: Service[] = [
  {
    id: 's1',
    title: 'Advanced Precision Engineering',
    description: 'Ultra-tight tolerance mechanical and component design for mission-critical aerospace and medical applications.',
    icon: 'Cpu',
    image: '/assets/images/precision_engineering_1781186515257.jpg',
  },
  {
    id: 's2',
    title: 'Automated Assembly Systems',
    description: 'Custom robotic workcells and high-throughput production lines designed for maximum efficiency and scalability.',
    icon: 'Workflow',
    image: '/assets/images/robotic_assembly_1781186532104.jpg',
  },
  {
    id: 's3',
    title: 'Quality Matrix Control',
    description: 'NIST-traceable inspection and comprehensive lifecycle tracking to ensure zero-defect manufacturing outcomes.',
    icon: 'ShieldCheck',
    image: '/assets/images/quality_control_1781186546438.jpg',
  },
];

export const services_ar: Service[] = [
  {
    id: 's1',
    title: 'هندسة دقيقة متقدمة',
    description: 'تصميم ميكانيكي ومكونات بتسامح شديد الدقة للتطبيقات الحيوية في مجالات الطيران والطب.',
    icon: 'Cpu',
    image: '/assets/images/precision_engineering_1781186515257.jpg',
  },
  {
    id: 's2',
    title: 'أنظمة تجميع آلية',
    description: 'خلايا عمل روبوتية مخصصة وخطوط إنتاج عالية الإنتاجية مصممة لتحقيق أقصى قدر من الكفاءة والقابلية للتوسع.',
    icon: 'Workflow',
    image: '/assets/images/robotic_assembly_1781186532104.jpg',
  },
  {
    id: 's3',
    title: 'مصفوفة مراقبة الجودة',
    description: 'فحص قابل للتتبع من NIST وتتبع شامل لدورة الحياة لضمان نتائج تصنيع خالية من العيوب.',
    icon: 'ShieldCheck',
    image: '/assets/images/quality_control_1781186546438.jpg',
  },
];

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Aerospace Structural Framework',
    category: 'Precision Mechanical',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'p2',
    title: 'Next-Gen EV Powertrain',
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'p3',
    title: 'Medical Grade Micro-Tools',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  },
];

export const projects_ar: Project[] = [
  {
    id: 'p1',
    title: 'إطار هيكلي للطيران',
    category: 'ميكانيكا دقيقة',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'p2',
    title: 'مجموعة نقل الحركة للمركبات الكهربائية من الجيل القادم',
    category: 'السيارات',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'p3',
    title: 'أدوات دقيقة طبية',
    category: 'الرعاية الصحية',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    author: 'Michael Turner',
    role: 'Operations Manager',
    company: 'Alma Mechanical',
    content: 'Alma equipment has been running in our facility around the clock with consistent performance. Quality is evident in every detail.',
    avatar: 'https://i.pravatar.cc/150?u=michael_turner',
  },
  {
    id: 't2',
    author: 'Andreas Müller',
    role: 'Project Director',
    company: 'Alma Mechanical',
    content: 'The team managed the project with precision, keeping everything on track, on time, and smoothly executed from start to finish.',
    avatar: 'https://i.pravatar.cc/150?u=andreas_muller',
  },
  {
    id: 't3',
    author: 'Sofia Ramirez',
    role: 'Logistics Lead',
    company: 'Alma Mechanical',
    content: 'The integration of Alma Mechanical products into our workflow significantly improved throughput and reduced manual handling.',
    avatar: 'https://i.pravatar.cc/150?u=sofia_ramirez',
  },
  {
    id: 't4',
    author: 'Laura Bennett',
    role: 'Tech Lead',
    company: 'Alma Mechanical',
    content: 'Even under peak load conditions, the products operate seamlessly with minimal maintenance, ensuring consistent reliability.',
    avatar: 'https://i.pravatar.cc/150?u=laura_bennett',
  },
  {
    id: 't5',
    author: 'Tomasz Nowak',
    role: 'Compliance Officer',
    company: 'Alma Mechanical',
    content: "Alma Mechanical's certification process and records made deployment simple and fully compliant, ensuring complete regulatory standards overall.",
    avatar: 'https://i.pravatar.cc/150?u=tomasz_nowak',
  },
  {
    id: 't6',
    author: 'Hiroshi Tanaka',
    role: 'Engineering Consultant',
    company: 'Alma Mechanical',
    content: 'From design review to launch, the Alma Mechanical team delivered clear updates and strong technical support, ensuring smooth execution.',
    avatar: 'https://i.pravatar.cc/150?u=hiroshi_tanaka',
  },
];

export const testimonials_ar: Testimonial[] = [
  {
    id: 't1',
    author: 'مايكل تيرنر',
    role: 'مدير العمليات',
    company: 'ألما للميكانيكا',
    content: 'تعمل معدات ألما في منشأتنا على مدار الساعة بأداء ثابت. الجودة واضحة في كل التفاصيل.',
    avatar: 'https://i.pravatar.cc/150?u=michael_turner',
  },
  {
    id: 't2',
    author: 'أندرياس مولر',
    role: 'مدير المشروع',
    company: 'ألما للميكانيكا',
    content: 'أدار الفريق المشروع بدقة، وحافظ على كل شيء في مساره الصحيح، في الوقت المحدد، وتم تنفيذه بسلاسة من البداية إلى النهاية.',
    avatar: 'https://i.pravatar.cc/150?u=andreas_muller',
  },
  {
    id: 't3',
    author: 'صوفيا راميريز',
    role: 'مسؤول اللوجستيات',
    company: 'ألما للميكانيكا',
    content: 'أدى دمج منتجات ألما للميكانيكا في سير عملنا إلى تحسين الإنتاجية بشكل كبير وتقليل المناولة اليدوية.',
    avatar: 'https://i.pravatar.cc/150?u=sofia_ramirez',
  },
  {
    id: 't4',
    author: 'لورا بينيت',
    role: 'قائد تقني',
    company: 'ألما للميكانيكا',
    content: 'حتى في ظل ظروف الحمل القصوى، تعمل المنتجات بسلاسة مع الحد الأدنى من الصيانة، مما يضمن موثوقية متسقة.',
    avatar: 'https://i.pravatar.cc/150?u=laura_bennett',
  },
  {
    id: 't5',
    author: 'توماش نوفاك',
    role: 'مسؤول الامتثال',
    company: 'ألما للميكانيكا',
    content: "جعلت عملية إصدار الشهادات والسجلات الخاصة بألما للميكانيكا الانتشار بسيطًا ومتوافقًا تمامًا، مما يضمن المعايير التنظيمية الكاملة بشكل عام.",
    avatar: 'https://i.pravatar.cc/150?u=tomasz_nowak',
  },
  {
    id: 't6',
    author: 'هيروشي تاناكا',
    role: 'مستشار هندسي',
    company: 'ألما للميكانيكا',
    content: 'من مراجعة التصميم إلى الإطلاق، قدم فريق ألما للميكانيكا تحديثات واضحة ودعمًا فنيًا قويًا، مما ضمن تنفيذًا سلسًا.',
    avatar: 'https://i.pravatar.cc/150?u=hiroshi_tanaka',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'Future of e-comm fulfillment: speed meets scalability',
    date: 'Apr 11, 2026',
    category: 'Logistics',
    thumbnail: '/assets/images/insight_ecomm_fulfillment_1781188110531.jpg',
  },
  {
    id: 'b2',
    title: 'Reducing downtime in heavy industrial operations',
    date: 'Apr 10, 2026',
    category: 'Operations',
    thumbnail: '/assets/images/insight_industrial_downtime_1781188125937.jpg',
  },
  {
    id: 'b3',
    title: 'How automation transforms modern warehousing',
    date: 'Apr 9, 2026',
    category: 'Automation',
    thumbnail: '/assets/images/insight_warehouse_automation_1781188140312.jpg',
  },
];

export const blogPosts_ar: BlogPost[] = [
  {
    id: 'b1',
    title: 'مستقبل تلبية التجارة الإلكترونية: السرعة تلتقي مع القابلية للتوسع',
    date: '11 أبريل 2026',
    category: 'الخدمات اللوجستية',
    thumbnail: '/assets/images/insight_ecomm_fulfillment_1781188110531.jpg',
  },
  {
    id: 'b2',
    title: 'تقليل وقت التوقف عن العمل في العمليات الصناعية الثقيلة',
    date: '10 أبريل 2026',
    category: 'العمليات',
    thumbnail: '/assets/images/insight_industrial_downtime_1781188125937.jpg',
  },
  {
    id: 'b3',
    title: 'كيف يحول التشغيل الآلي المستودعات الحديثة',
    date: '9 أبريل 2026',
    category: 'الأتمتة',
    thumbnail: '/assets/images/insight_warehouse_automation_1781188140312.jpg',
  },
];
