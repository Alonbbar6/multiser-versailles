import { motion } from 'framer-motion'
import { ClockIcon, MapPinIcon, PhoneIcon, CreditCardIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '../i18n/LanguageContext'

const DIRECTIONS_HREF = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  '3231 SW 8th St, Miami, FL 33135'
)}`

export default function HoursContact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 lg:grid-cols-2"
        >
          <div className="rounded-2xl border border-mist p-8">
            <div className="flex items-center gap-3">
              <ClockIcon className="h-6 w-6 text-garage-teal" />
              <h2 className="text-2xl text-ink font-sans font-semibold">{t.hoursContact.hoursTitle}</h2>
            </div>
            <dl className="mt-6 space-y-3">
              {t.hoursContact.days.map((h) => (
                <div key={h.day} className="flex justify-between text-sm border-b border-mist pb-3 last:border-0">
                  <dt className="text-muted">{h.day}</dt>
                  <dd className="font-medium text-ink">{h.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs text-muted">{t.hoursContact.walkins}</p>
          </div>

          <div className="rounded-2xl border border-mist p-8">
            <div className="flex items-center gap-3">
              <MapPinIcon className="h-6 w-6 text-garage-teal" />
              <h2 className="text-2xl text-ink font-sans font-semibold">{t.hoursContact.visitTitle}</h2>
            </div>
            <p className="mt-6 text-ink font-medium">{t.hoursContact.address}</p>
            <p className="text-sm text-muted mt-1">{t.hoursContact.addressNote}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+17864741311"
                className="inline-flex items-center gap-2 rounded-full bg-ignition-red px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.03] min-h-11"
              >
                <PhoneIcon className="h-4 w-4" />
                (786) 474-1311
              </a>
              <a
                href={DIRECTIONS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-mist px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-garage-teal hover:text-garage-teal min-h-11"
              >
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                {t.hoursContact.directions}
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-muted">
              <CreditCardIcon className="h-5 w-5" />
              {t.hoursContact.cardsNote}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
