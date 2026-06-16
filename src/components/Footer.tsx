import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t, language, isRtl } = useLanguage();

  return (
    <footer className="bg-industrial-blue text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Giant Logo Section */}
        <div className="px-6 md:px-10 lg:px-20 pt-10">
          <h1 className="text-[8.5vw] lg:text-[112px] font-black leading-[0.75] uppercase -ml-[0.05em] select-none flex justify-between gap-x-8 md:gap-x-12">
            <div className="flex justify-between flex-[0.7] md:flex-[0.8] lg:flex-[1]">
              {language === 'en' ? (
                <>
                  <span>A</span><span>L</span><span>M</span><span>A</span>
                </>
              ) : (
                <span>{t('company.name.split1')}</span>
              )}
            </div>
            <div className={`flex justify-between ${language === 'en' ? 'flex-[1.6] md:flex-[1.9] lg:flex-[2.5]' : 'flex-1'}`}>
              {language === 'en' ? (
                <>
                  <span>M</span><span>E</span><span>C</span><span>H</span><span>A</span><span>N</span><span>I</span><span>C</span><span>A</span><span>L</span>
                </>
              ) : (
                <span>{t('company.name.split2')}</span>
              )}
            </div>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 mt-10">
          {/* Left Column: Description */}
          <div className="lg:col-span-4 p-10 lg:p-20 border-white/20 text-left">
            <h3 className="text-3xl font-black uppercase mb-10 leading-tight max-w-[280px]">
              {t('footer.discover')}
            </h3>
            <p className="text-white/60 text-sm max-w-[320px] leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Middle Columns: Links */}
          <div className="lg:col-span-5 grid grid-cols-2 p-10 lg:p-20 border-b lg:border-b-0 border-white/20 gap-10">
            <div className="text-left">
              <div className="mb-14">
                <p className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-white/40 mb-8">{t('footer.company')}</p>
                <ul className="flex flex-col gap-4 text-[13px] font-bold">
                  <li><a href="/about" className="hover:text-white/60 transition-colors">{t('footer.about')}</a></li>
                  <li><a href="#" className="hover:text-white/60 transition-colors">{t('footer.leadership')}</a></li>
                  <li><a href="#" className="hover:text-white/60 transition-colors">{t('footer.clients')}</a></li>
                  <li><a href="#" className="hover:text-white/60 transition-colors">{t('footer.pricing')}</a></li>
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-white/40 mb-8">{t('footer.info')}</p>
                <ul className="flex flex-col gap-4 text-[13px] font-bold">
                  <li><a href="#" className="hover:text-white/60 transition-colors">{t('footer.leasing')}</a></li>
                  <li><a href="#" className="hover:text-white/60 transition-colors">{t('footer.industries')}</a></li>
                  <li><a href="#" className="hover:text-white/60 transition-colors">{t('footer.projects')}</a></li>
                  <li><a href="#" className="hover:text-white/60 transition-colors">{t('footer.faq')}</a></li>
                </ul>
              </div>
            </div>
            <div className="text-left">
              <div className="mb-14">
                <p className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-white/40 mb-8">{t('footer.products')}</p>
                <ul className="flex flex-col gap-4 text-[13px] font-bold">
                  <li><a href="#" className="hover:text-white/60 transition-colors">{t('footer.forklifts')}</a></li>
                  <li><a href="#" className="hover:text-white/60 transition-colors">{t('footer.loaders')}</a></li>
                  <li><a href="#" className="hover:text-white/60 transition-colors">{t('footer.cranes')}</a></li>
                  <li><a href="#" className="hover:text-white/60 transition-colors">{t('footer.pallet')}</a></li>
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-white/40 mb-8">{t('footer.services')}</p>
                <ul className="flex flex-col gap-4 text-[13px] font-bold">
                  <li><a href="#solutions" className="hover:text-white/60 transition-colors">{t('footer.design')}</a></li>
                  <li><a href="#" className="hover:text-white/60 transition-colors">{t('footer.support')}</a></li>
                  <li><a href="#" className="hover:text-white/60 transition-colors">{t('footer.custom')}</a></li>
                  <li><a href="#" className="hover:text-white/60 transition-colors">{t('footer.system')}</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Contact */}
          <div className="lg:col-span-3 p-10 lg:p-20 flex flex-col items-end justify-between text-right">
            <div className="flex flex-col items-end">
              <address className="not-italic text-white font-bold text-base leading-relaxed mb-8">
                {t('footer.address').split(', ').map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </address>
              <a href="mailto:info@example.com" className="text-white font-bold text-base mb-2 hover:text-white/60 transition-colors">
                info@example.com
              </a>
              <a href="tel:+15551234567" className="text-white font-bold text-base hover:text-white/60 transition-colors">
                +1 (555) 123-4567
              </a>
            </div>

            <div className="flex gap-4 mt-20">
              <a href="#" className="w-11 h-11 bg-white/10 flex items-center justify-center hover:bg-white hover:text-industrial-blue transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-11 h-11 bg-white/10 flex items-center justify-center hover:bg-white hover:text-industrial-blue transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-11 h-11 bg-white/10 flex items-center justify-center hover:bg-white hover:text-industrial-blue transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center px-10 lg:px-20 py-10 border-t border-white/20 gap-4">
          <p className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-white/40">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
