import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useLanguage } from '../i18n/LanguageContext'

export default function Testimonials() {
  const { t } = useLanguage()
  const reviews = t.testimonials.reviews
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [reviews])

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 6000)
    return () => clearInterval(id)
  }, [reviews])

  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length)
  const next = () => setIndex((i) => (i + 1) % reviews.length)

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-mist">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center gap-1 text-chrome-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-5 w-5" />
            ))}
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl text-ink">{t.testimonials.title}</h2>
          {t.testimonials.translationNote && (
            <p className="mt-1 text-xs text-muted">{t.testimonials.translationNote}</p>
          )}
        </div>

        <div className="mt-10 relative">
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-mist min-h-[200px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="p-8 sm:p-10 text-center w-full"
              >
                <p className="text-lg text-ink leading-relaxed">"{reviews[index].quote}"</p>
                <footer className="mt-4 text-sm font-medium text-muted">— {reviews[index].name}</footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label={t.testimonials.prevAria}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-ink hover:bg-mist transition-colors focus-visible:ring-2 focus-visible:ring-garage-teal"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label={t.testimonials.nextAria}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-ink hover:bg-mist transition-colors focus-visible:ring-2 focus-visible:ring-garage-teal"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-6 bg-garage-teal' : 'w-2 bg-muted/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
