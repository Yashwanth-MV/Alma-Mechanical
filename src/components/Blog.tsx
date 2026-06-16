import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { blogPosts, blogPosts_ar } from '../data';
import { useLanguage } from '../contexts/LanguageContext';

export default function Blog() {
  const { t, language } = useLanguage();
  const currentPosts = language === 'ar' ? blogPosts_ar : blogPosts;

  return (
    <section id="insights" className="bg-white py-32">
      <div className="max-w-[1440px] mx-auto px-10 lg:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div className="max-w-4xl">
            <p className="text-[11px] font-sans font-bold tracking-[0.4em] uppercase text-industrial-blue mb-8">
              {t('blog.tagline')}
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-industrial-black">
              {t('blog.title1')} <br/> <span className="text-industrial-blue">{t('blog.title2')}</span>
            </h2>
          </div>
          <button className="bg-industrial-blue text-white px-8 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-all rounded-full whitespace-nowrap">
            {language === 'ar' ? 'مشاهدة جميع المقالات' : 'View All Articles'}
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group cursor-pointer bg-gray-50 rounded-[32px] overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] h-full flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img 
                    src={post.thumbnail} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-[11px] font-sans font-bold tracking-widest text-industrial-blue uppercase mb-4">
                    {post.date}
                  </p>
                  <h3 className="text-2xl font-bold leading-tight tracking-tight text-industrial-black mb-8 group-hover:text-industrial-blue transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-industrial-blue mt-auto group-hover:text-industrial-navy transition-colors">
                    {t('common.read_more')}
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
