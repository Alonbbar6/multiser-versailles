import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useLanguage } from '../i18n/LanguageContext'

// ⚠️ PLACEHOLDER PRICING — these ranges are AI-estimated, not real prices
// from the shop. Confirm actual figures with Miguel before launch; wrong
// numbers here directly undercut the site's "no surprise charges" promise.
const SERVICE_PRICES = {
  'brakes-front': { min: 120, max: 260 },
  'brakes-full': { min: 220, max: 420 },
  'tune-up': { min: 90, max: 280 },
  'oil-change': { min: 45, max: 95 },
  diagnostic: { min: 0, max: 60 },
}

const VEHICLE_FACTORS = {
  compact: 1,
  suv: 1.15,
  truck: 1.25,
}

function formatCurrency(n) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

export default function EstimateCalculator() {
  const { t } = useLanguage()
  const [serviceId, setServiceId] = useState(t.estimate.serviceOptions[0].id)
  const [vehicleId, setVehicleId] = useState(t.estimate.vehicleOptions[0].id)
  const [submitted, setSubmitted] = useState(false)

  const price = SERVICE_PRICES[serviceId]
  const factor = VEHICLE_FACTORS[vehicleId]

  const { low, high } = useMemo(() => {
    return {
      low: Math.round((price.min * factor) / 5) * 5,
      high: Math.round((price.max * factor) / 5) * 5,
    }
  }, [price, factor])

  return (
    <section id="estimate" className="py-16 sm:py-20 bg-deep-steel">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white">{t.estimate.title}</h2>
          <p className="mt-3 text-white/70">{t.estimate.subtitle}</p>
        </div>

        <div className="mt-10 rounded-2xl bg-white p-6 sm:p-8 shadow-xl">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-ink mb-2">
                {t.estimate.serviceLabel}
              </label>
              <select
                id="service"
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
                className="w-full rounded-lg border border-mist bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-garage-teal focus:ring-2 focus:ring-garage-teal/30 min-h-11"
              >
                {t.estimate.serviceOptions.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="vehicle" className="block text-sm font-semibold text-ink mb-2">
                {t.estimate.vehicleLabel}
              </label>
              <select
                id="vehicle"
                value={vehicleId}
                onChange={(e) => setVehicleId(e.target.value)}
                className="w-full rounded-lg border border-mist bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-garage-teal focus:ring-2 focus:ring-garage-teal/30 min-h-11"
              >
                {t.estimate.vehicleOptions.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-mist p-6 text-center">
            <p className="text-sm font-medium text-muted">{t.estimate.rangeLabel}</p>
            <p className="mt-1 text-4xl font-display text-ink">
              {formatCurrency(low)} – {formatCurrency(high)}
            </p>
            <p className="mt-2 text-xs text-muted">{t.estimate.rangeNote}</p>
          </div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.button
                key="cta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                type="button"
                onClick={() => setSubmitted(true)}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-ignition-red px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-lg min-h-11"
              >
                {t.estimate.ctaButton}
              </motion.button>
            ) : (
              <motion.div
                key="confirmed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-success/10 px-6 py-3.5 text-success font-semibold"
              >
                <CheckCircleIcon className="h-5 w-5" />
                {t.estimate.confirmedText}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
