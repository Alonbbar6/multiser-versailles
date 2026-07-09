import { motion } from 'framer-motion'
import { PhoneIcon, ClockIcon, StarIcon } from '@heroicons/react/24/solid'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="brand-gradient absolute inset-0 opacity-95" aria-hidden="true" />
      <div className="absolute inset-0 bg-midnight-charcoal/40" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
            <StarIcon className="h-4 w-4 text-chrome-gold" />
            4.6 out of 5 — Little Havana's trusted repair shop
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-display leading-[1.1] text-white">
            We show you the problem. We quote you one price. That's it.
          </h1>

          <p className="mt-6 text-lg text-white/90 max-w-xl">
            Brakes, tune-ups, oil changes and general repairs in Little Havana — done at a fair
            price, explained in plain English, by the same guy who answers the phone. No
            surprise charges at pickup, ever.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+17864741311"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-ink shadow-lg transition-all hover:scale-[1.03] hover:shadow-xl min-h-11"
            >
              <PhoneIcon className="h-5 w-5 text-ignition-red" />
              Call (786) 474-1311
            </a>
            <a
              href="#estimate"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10 min-h-11"
            >
              Get a Free Estimate
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-white/80 text-sm">
            <ClockIcon className="h-5 w-5" />
            Open 7 days · Mon–Fri 8am–7pm · Sat 8am–5pm · Sun 8am–3pm · Walk-ins welcome
          </div>
        </motion.div>
      </div>
    </section>
  )
}
