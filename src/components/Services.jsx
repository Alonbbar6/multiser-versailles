import { motion } from 'framer-motion'
import {
  WrenchScrewdriverIcon,
  BeakerIcon,
  CogIcon,
  MagnifyingGlassCircleIcon,
  TruckIcon,
} from '@heroicons/react/24/outline'
import { useLanguage } from '../i18n/LanguageContext'

const ICONS = [WrenchScrewdriverIcon, CogIcon, BeakerIcon, MagnifyingGlassCircleIcon, TruckIcon]

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl text-ink">{t.services.title}</h2>
          <p className="mt-3 text-muted">{t.services.subtitle}</p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, i) => {
            const Icon = ICONS[i]
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
                className="group rounded-2xl border border-mist p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-garage-teal/40"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-deep-steel text-white transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink font-sans">{service.name}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{service.desc}</p>
                <p className="mt-4 text-sm font-semibold text-garage-teal">{service.priceRange}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
