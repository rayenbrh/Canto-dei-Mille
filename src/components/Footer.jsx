import { useI18n } from '../context/LanguageContext.jsx'

export function Footer() {
  const { t, messages } = useI18n()
  const cols = messages.footer.cols

  return (
    <footer className="border-t border-ash/40 bg-obsidian px-6 py-16 text-silk dark:border-ash/40">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl text-gold-mid">Canto dei Mille</p>
            <p className="mt-1 font-body text-[8px] font-light uppercase tracking-[0.35em] text-stone">{t('footer.tagline')}</p>
          </div>
          <div className="flex flex-wrap gap-6 font-body text-[11px] font-light uppercase tracking-[0.2em] text-stone">
            <a href="#" className="hover:text-gold-mid">
              {t('footer.social.instagram')}
            </a>
            <a href="#" className="hover:text-gold-mid">
              {t('footer.social.facebook')}
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-4">
          <div>
            <p className="font-body text-[10px] font-light uppercase tracking-widest text-stone">{cols.about.title}</p>
            <a href="#about" className="mt-3 block font-body text-sm font-light hover:text-gold-mid">
              {cols.about.link}
            </a>
          </div>
          <div>
            <p className="font-body text-[10px] font-light uppercase tracking-widest text-stone">{cols.rooms.title}</p>
            <a href="#rooms" className="mt-3 block font-body text-sm font-light hover:text-gold-mid">
              {cols.rooms.link}
            </a>
          </div>
          <div>
            <p className="font-body text-[10px] font-light uppercase tracking-widest text-stone">{cols.location.title}</p>
            <a href="#location" className="mt-3 block font-body text-sm font-light hover:text-gold-mid">
              {cols.location.link}
            </a>
          </div>
          <div>
            <p className="font-body text-[10px] font-light uppercase tracking-widest text-stone">{cols.contact.title}</p>
            <a href="#contact" className="mt-3 block font-body text-sm font-light hover:text-gold-mid">
              {cols.contact.link}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ash/30 pt-10 text-center font-body text-[11px] font-light text-stone md:flex-row md:justify-between md:text-left">
          <p>{t('footer.legal')}</p>
          <p>{t('footer.license')}</p>
          <p>{t('footer.languages')}</p>
        </div>

        <p className="mt-12 text-center font-displayItalic text-[13px] font-light italic text-stone">
          &ldquo;{t('footer.quote')}&rdquo;
        </p>
      </div>
    </footer>
  )
}
