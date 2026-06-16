import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { blogPosts, blogPosts_ar } from '../data';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, Clock, Tag, Share2 } from 'lucide-react';
import { useEffect } from 'react';

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  
  const posts = language === 'ar' ? blogPosts_ar : blogPosts;
  const post = posts.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-industrial-navy text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/" className="text-industrial-blue hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar darkText={true} />
      
      <main className="pt-40 pb-32">
        {/* Header Section */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 mb-12">
          <Link 
            to="/#insights" 
            className="inline-flex items-center gap-3 text-industrial-blue font-bold text-[11px] uppercase tracking-[0.3em] mb-12 hover:text-industrial-navy transition-all group"
          >
            <ArrowLeft size={16} className="transform group-hover:-translate-x-2 transition-transform" />
            {language === 'ar' ? 'العودة للاكتشافات' : 'Back to Insights'}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-12"
            >
              <div className="flex flex-wrap items-center gap-6 mb-10 text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400">
                <span className="flex items-center gap-2 text-industrial-blue px-4 py-1.5 bg-industrial-blue/5 rounded-full">
                  <Tag size={12} />
                  {post.category}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={14} />
                  {post.date}
                </span>
                <span className="w-1 bg-gray-200 h-1 rounded-full hidden sm:block"></span>
                <span className="text-gray-400">5 MIN READ</span>
              </div>
              
              <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1] tracking-tight text-industrial-black mb-0 max-w-6xl">
                {post.title}
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Hero Illustration / Image */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="aspect-[21/10] overflow-hidden rounded-[32px] md:rounded-[60px] bg-gray-100 shadow-2xl shadow-industrial-navy/10"
          >
            <img 
              src={post.thumbnail} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Left Column: Post Info */}
            <aside className="lg:col-span-3">
              <div className="sticky top-40 space-y-12">
                <div className="pb-10 border-b border-gray-100">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 mb-6">
                    {language === 'ar' ? 'المؤلف' : 'Written By'}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-industrial-navy flex items-center justify-center text-white font-bold text-lg">
                      AM
                    </div>
                    <div>
                      <p className="font-bold text-industrial-black">Alma Editorial</p>
                      <p className="text-sm text-gray-400">Tech Lead</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 mb-6">
                    {language === 'ar' ? 'مشاركة' : 'Share Article'}
                  </p>
                  <div className="flex gap-3">
                    <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-industrial-blue hover:border-industrial-blue hover:text-white transition-all group">
                      <Share2 size={18} className="group-hover:scale-110 transition-transform" />
                    </button>
                    <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-industrial-blue hover:border-industrial-blue hover:text-white transition-all">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Column: Article Body */}
            <article className="lg:col-span-7">
              <div className="prose prose-2xl prose-slate max-w-none">
                <p className="text-3xl lg:text-4xl text-industrial-navy leading-tight font-bold mb-12 tracking-tight">
                  {language === 'ar' 
                    ? 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.'
                    : 'The future of industrial automation depends on the delicate balance between high-performance hardware and intelligent, resilient software systems.'}
                </p>

                <p className="text-xl text-gray-600 leading-relaxed mb-10">
                  {language === 'ar'
                    ? 'من الناحية التقنية، تتيح الحلول المبتكرة التي نقدمها في ألما للميكانيكا للشركات إمكانية مراقبة الأداء في الوقت الفعلي وتحديد الاختناقات التشغيلية قبل أن تؤدي إلى فترات توقف مكلفة. هذا النهج الاستباقي للصيانة مدعوم بتقنيات القياس عن بُعد المتقدمة والتحليلات التنبؤية، مما يضمن عمل المصانع بأقصى كفاءة ممكنة.'
                    : 'Technically, the innovative solutions provided at Alma Mechanical allow companies to monitor performance in real-time and identify operational bottlenecks before they lead to expensive downtime. This proactive approach to maintenance is powered by advanced telemetry and predictive analytics, ensuring factories run at peak efficiency.'}
                </p>

                <h2 className="text-4xl font-bold text-industrial-black mt-20 mb-8 tracking-tighter">
                  {language === 'ar' ? 'التحول الرقمي في المصانع' : 'Operational Resilience at Scale'}
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed mb-10">
                  {language === 'ar'
                    ? 'في نهاية المطاف، سيتم تحديد الفائزين في السوق الصناعي من خلال قدرتهم على التكيف مع التقنيات الجديدة مع الحفاظ على معايير السلامة والموثوقية التي يطلبها العملاء.'
                    : 'Ultimately, market leaders in the industrial sector will be defined by their ability to adapt to new technologies while maintaining the high standards of safety and reliability that clients demand. We have observed that organizations adopting a "digital-first" mentality see a 30% reduction in maintenance costs.'}
                </p>

                <div className="my-20 p-12 lg:p-20 bg-industrial-black rounded-[48px] text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-industrial-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-industrial-blue/20 transition-colors" />
                  <p className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight relative z-10 mb-8">
                    {language === 'ar'
                      ? '"الابتكار ليس مجرد كلمة رنانة، بل هو جوهر مرونتنا التشغيلية في الظروف القاسية."'
                      : '"Innovation is not just a buzzword; it is the core of our operational resilience in extreme conditions."'}
                  </p>
                  <p className="text-industrial-blue font-bold tracking-widest text-sm uppercase">
                    — Alma Mechanical Strategy Board
                  </p>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed mb-10">
                  {language === 'ar'
                    ? 'في ألما، نحن ملتزمون بتوفير الأدوات اللازمة لعملائنا ليس فقط للبقاء ولكن لتصدر المشهد الصناعي.'
                    : 'At Alma, we are committed to providing our clients with the tools necessary to not just survive, but to lead the industrial landscape. Our focus remains on durable engineering that withstands the test of time and the harshest environments on Earth.'}
                </p>
              </div>

              {/* Tag Footer */}
              <div className="mt-20 pt-16 border-t border-gray-100 flex flex-wrap gap-4">
                {['Automation', 'Industrial Future', 'Engineering', 'Alma Insights'].map((tag) => (
                  <span key={tag} className="px-6 py-2.5 bg-gray-50 border border-gray-100 rounded-full text-[11px] font-bold text-gray-400 uppercase tracking-widest hover:border-industrial-blue hover:text-industrial-blue transition-all cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
