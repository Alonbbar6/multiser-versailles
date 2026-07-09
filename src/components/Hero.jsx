import { motion } from 'framer-motion'
import { PhoneIcon, ClockIcon, StarIcon } from '@heroicons/react/24/solid'
import { useLanguage } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-[position:75%_center]"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-shop.webp)` }}
        aria-hidden="true"
      />
      <div className="brand-gradient absolute inset-0 opacity-80 mix-blend-multiply" aria-hidden="true" />
      <div className="absolute inset-0 bg-midnight-charcoal/55" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
            <StarIcon className="h-4 w-4 text-chrome-gold" />
            {t.hero.badge}
          </div>

          <p className="mt-5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/70">
            {t.hero.fullName}
          </p>

          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-display leading-[1.1] text-white">
            {t.hero.headline}
          </h1>

          <p className="mt-6 text-lg text-white/90 max-w-xl">{t.hero.body}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+17864741311"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-ink shadow-lg transition-all hover:scale-[1.03] hover:shadow-xl min-h-11"
            >
              <PhoneIcon className="h-5 w-5 text-ignition-red" />
              {t.hero.callCta}
            </a>
            <a
              href="#estimate"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10 min-h-11"
            >
              {t.hero.estimateCta}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-white/80 text-sm">
            <ClockIcon className="h-5 w-5" />
            {t.hero.hoursLine}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
