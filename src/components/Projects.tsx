import { motion } from 'motion/react';
import { projects, projects_ar } from '../data';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Projects() {
  const { t, language } = useLanguage();
  const currentProjects = language === 'ar' ? projects_ar : projects;

  return (
    <section id="capabilities" className="py-32 bg-industrial-gray/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <p className="text-[13px] font-sans font-bold tracking-widest uppercase text-industrial-blue mb-4">{t('projects.tagline')}</p>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <h2 className="text-[clamp(1.75rem,4vw,3.25rem)] font-bold leading-tight tracking-tighter uppercase max-w-2xl">
              {t('projects.title')}
            </h2>
            <div className="flex gap-2">
              <button className="px-6 py-2 border border-industrial-accent bg-white text-[11px] font-bold uppercase tracking-widest hover:border-industrial-blue transition-colors">{t('common.all')}</button>
              <button className="px-6 py-2 border border-industrial-accent bg-transparent text-[11px] font-bold uppercase tracking-widest hover:border-industrial-blue transition-colors">Aerospace</button>
              <button className="px-6 py-2 border border-industrial-accent bg-transparent text-[11px] font-bold uppercase tracking-widest hover:border-industrial-blue transition-colors">EV</button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-industrial-accent">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square group overflow-hidden bg-white border-r border-b border-industrial-accent"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-industrial-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                <p className="text-[10px] font-sans tracking-widest uppercase text-industrial-blue mb-2 font-bold">// {project.category}</p>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-6">{project.title}</h3>
                
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-white/60">{t('projects.view_spec')}</span>
                  <div className="w-12 h-12 bg-industrial-blue flex items-center justify-center text-white">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
