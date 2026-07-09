import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const SERVICE_OPTIONS = [
  { id: 'brakes-front', label: 'Brake Repair (front)', min: 120, max: 260 },
  { id: 'brakes-full', label: 'Brake Repair (front + rear)', min: 220, max: 420 },
  { id: 'tune-up', label: 'Tune-Up', min: 90, max: 280 },
  { id: 'oil-change', label: 'Oil Change', min: 45, max: 95 },
  { id: 'diagnostic', label: 'Check-Engine Diagnostic', min: 0, max: 60 },
]

const VEHICLE_MULTIPLIERS = [
  { id: 'compact', label: 'Compact / Sedan', factor: 1 },
  { id: 'suv', label: 'SUV / Crossover', factor: 1.15 },
  { id: 'truck', label: 'Truck / Van', factor: 1.25 },
]

function formatCurrency(n) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

export default function EstimateCalculator() {
  const [serviceId, setServiceId] = useState(SERVICE_OPTIONS[0].id)
  const [vehicleId, setVehicleId] = useState(VEHICLE_MULTIPLIERS[0].id)
  const [submitted, setSubmitted] = useState(false)

  const service = SERVICE_OPTIONS.find((s) => s.id === serviceId)
  const vehicle = VEHICLE_MULTIPLIERS.find((v) => v.id === vehicleId)

  const { low, high } = useMemo(() => {
    return {
      low: Math.round((service.min * vehicle.factor) / 5) * 5,
      high: Math.round((service.max * vehicle.factor) / 5) * 5,
    }
  }, [service, vehicle])

  return (
    <section id="estimate" className="py-16 sm:py-20 bg-deep-steel">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white">Know the range before you drive over</h2>
          <p className="mt-3 text-white/70">
            A real, honest estimate — not a teaser number that changes once you're in the chair.
          </p>
        </div>

        <div className="mt-10 rounded-2xl bg-white p-6 sm:p-8 shadow-xl">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-ink mb-2">
                What does your car need?
              </label>
              <select
                id="service"
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
                className="w-full rounded-lg border border-mist bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-garage-teal focus:ring-2 focus:ring-garage-teal/30 min-h-11"
              >
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="vehicle" className="block text-sm font-semibold text-ink mb-2">
                Vehicle type
              </label>
              <select
                id="vehicle"
                value={vehicleId}
                onChange={(e) => setVehicleId(e.target.value)}
                className="w-full rounded-lg border border-mist bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-garage-teal focus:ring-2 focus:ring-garage-teal/30 min-h-11"
              >
                {VEHICLE_MULTIPLIERS.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-mist p-6 text-center">
            <p className="text-sm font-medium text-muted">Estimated range</p>
            <p className="mt-1 text-4xl font-display text-ink">
              {formatCurrency(low)} – {formatCurrency(high)}
            </p>
            <p className="mt-2 text-xs text-muted">
              Final price confirmed in person before any work starts — never changes after.
            </p>
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
                Hold this estimate — call to book
              </motion.button>
            ) : (
              <motion.div
                key="confirmed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-success/10 px-6 py-3.5 text-success font-semibold"
              >
                <CheckCircleIcon className="h-5 w-5" />
                Give us a call at (786) 474-1311 to lock in this estimate
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
