import { motion } from 'framer-motion'
import { CheckBadgeIcon, ChatBubbleLeftRightIcon, CreditCardIcon } from '@heroicons/react/24/solid'
import { useLanguage } from '../i18n/LanguageContext'

const ICONS = [CheckBadgeIcon, ChatBubbleLeftRightIcon, CreditCardIcon]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function TrustPanel() {
  const { t } = useLanguage()

  return (
    <section className="bg-mist py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl text-ink">{t.trust.title}</h2>
          <p className="mt-3 text-muted">{t.trust.subtitle}</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid gap-6 sm:grid-cols-3"
        >
          {t.trust.items.map((entry, i) => {
            const Icon = ICONS[i]
            return (
              <motion.div
                key={entry.title}
                variants={item}
                className="rounded-2xl bg-white p-6 shadow-sm border border-mist transition-all hover:shadow-md hover:-translate-y-1"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-garage-teal/10">
                  <Icon className="h-6 w-6 text-garage-teal" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink font-sans">{entry.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{entry.body}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
