import { motion } from 'framer-motion'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { useI18n } from '../context/LanguageContext.jsx'
import { Toast } from './ui/Toast.jsx'

const viewport = { once: true, margin: '-100px' }

const field =
  'peer block w-full border-0 border-b border-ash/60 bg-transparent py-3 font-body text-[15px] font-light text-carbon outline-none transition-colors focus:border-gold-mid dark:border-ash/50 dark:text-silk'

const label =
  'pointer-events-none absolute left-0 top-3 origin-left font-body text-[15px] font-light text-stone transition-all duration-300 peer-focus:-translate-y-6 peer-focus:text-[11px] peer-focus:text-gold-mid peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-gold-mid dark:text-ash'

export function Contact() {
  const { t, messages } = useI18n()
  const [toast, setToast] = useState(false)
  const bookingLinks = messages.contact.bookingLinks

  function onSubmit(e) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const data = Object.fromEntries(fd.entries())
    console.log(data)
    setToast(true)
    window.setTimeout(() => setToast(false), 4000)
  }

  return (
    <section id="contact" className="bg-ivory dark:bg-ink">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-6 py-24 md:grid-cols-2 md:gap-20 md:px-10 lg:px-14 lg:py-32">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            className="font-body text-[11px] font-light uppercase tracking-[0.25em] text-gold-mid"
          >
            {t('contact.eyebrow')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: 0.2 }}
            className="mt-4 font-display text-[clamp(40px,6vw,72px)] font-normal tracking-[-0.02em] text-carbon dark:text-silk"
          >
            {t('contact.title')}
          </motion.h2>

          <ul className="mt-12 space-y-6 font-body text-[15px] font-light text-stone dark:text-silk">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-mid" strokeWidth={1.25} />
              <a href="tel:+39055576528" className="hover:text-gold-mid">
                +39 055 576528
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-mid" strokeWidth={1.25} />
              <a href="tel:+393280073854" className="hover:text-gold-mid">
                +39 328 0073854
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-mid" strokeWidth={1.25} />
              <a href="mailto:cantodeimille@gmail.com" className="hover:text-gold-mid">
                cantodeimille@gmail.com
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-mid" strokeWidth={1.25} />
              <span>{t('contact.address')}</span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-mid" strokeWidth={1.25} />
              <span>{t('contact.hours')}</span>
            </li>
          </ul>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
            {bookingLinks.map((site) => (
              <a
                key={site}
                href="#"
                className="font-body text-[11px] font-light uppercase tracking-[0.2em] text-gold-mid transition-colors hover:text-gold-bright"
              >
                {site} →
              </a>
            ))}
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          onSubmit={onSubmit}
          className="space-y-8"
        >
          <div className="relative">
            <input id="name" name="name" type="text" placeholder=" " required className={field} />
            <label htmlFor="name" className={label}>
              {t('contact.form.name')}
            </label>
          </div>
          <div className="relative">
            <input id="email" name="email" type="email" placeholder=" " required className={field} />
            <label htmlFor="email" className={label}>
              {t('contact.form.email')}
            </label>
          </div>
          <div className="relative">
            <input id="phone" name="phone" type="tel" placeholder=" " className={field} />
            <label htmlFor="phone" className={label}>
              {t('contact.form.phone')}
            </label>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="relative">
              <input id="checkin" name="checkin" type="date" placeholder=" " className={field} />
              <label htmlFor="checkin" className={label}>
                {t('contact.form.checkin')}
              </label>
            </div>
            <div className="relative">
              <input id="checkout" name="checkout" type="date" placeholder=" " className={field} />
              <label htmlFor="checkout" className={label}>
                {t('contact.form.checkout')}
              </label>
            </div>
          </div>
          <div className="relative">
            <textarea id="message" name="message" rows={4} placeholder=" " className={`${field} resize-none`} />
            <label htmlFor="message" className={`${label} top-4 peer-focus:-translate-y-7`}>
              {t('contact.form.message')}
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-gold-mid py-4 font-body text-[13px] font-normal uppercase tracking-[0.25em] text-obsidian transition-colors hover:bg-gold-bright"
          >
            {t('contact.form.submit')}
          </button>
        </motion.form>
      </div>

      <Toast open={toast} onClose={() => setToast(false)} message={t('contact.toast')} closeLabel={t('contact.toastClose')} />
    </section>
  )
}
