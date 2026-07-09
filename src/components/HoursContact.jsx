import { motion } from 'framer-motion'
import { ClockIcon, MapPinIcon, PhoneIcon, CreditCardIcon } from '@heroicons/react/24/outline'

const HOURS = [
  { day: 'Monday – Friday', time: '8:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 5:00 PM' },
  { day: 'Sunday', time: '8:00 AM – 3:00 PM' },
]

export default function HoursContact() {
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
              <h2 className="text-2xl text-ink font-sans font-semibold">Hours</h2>
            </div>
            <dl className="mt-6 space-y-3">
              {HOURS.map((h) => (
                <div key={h.day} className="flex justify-between text-sm border-b border-mist pb-3 last:border-0">
                  <dt className="text-muted">{h.day}</dt>
                  <dd className="font-medium text-ink">{h.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs text-muted">Walk-ins welcome — no appointment needed.</p>
          </div>

          <div className="rounded-2xl border border-mist p-8">
            <div className="flex items-center gap-3">
              <MapPinIcon className="h-6 w-6 text-garage-teal" />
              <h2 className="text-2xl text-ink font-sans font-semibold">Visit or Call</h2>
            </div>
            <p className="mt-6 text-ink font-medium">3231 SW 8th St, Miami, FL 33135</p>
            <p className="text-sm text-muted mt-1">Little Havana, wheelchair-accessible entrance</p>

            <a
              href="tel:+17864741311"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ignition-red px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.03] min-h-11"
            >
              <PhoneIcon className="h-4 w-4" />
              (786) 474-1311
            </a>

            <div className="mt-6 flex items-center gap-2 text-sm text-muted">
              <CreditCardIcon className="h-5 w-5" />
              All major credit & debit cards accepted
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
