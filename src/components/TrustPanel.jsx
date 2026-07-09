import { motion } from 'framer-motion'
import { CheckBadgeIcon, ChatBubbleLeftRightIcon, CreditCardIcon } from '@heroicons/react/24/solid'

const ITEMS = [
  {
    icon: CheckBadgeIcon,
    title: 'The price we quote is the price you pay',
    body: "We show you the worn part and write the number down before we touch your car. What's on the slip at pickup matches what we told you at drop-off. No exceptions.",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Plain English, not sales talk',
    body: "Miguel walks you through what's actually wrong — not what sounds expensive. If it doesn't need fixing, we tell you that too.",
  },
  {
    icon: CreditCardIcon,
    title: 'Accessible, easy to work with',
    body: 'Walk-ins welcome, wheelchair-accessible shop, and we accept all major credit and debit cards.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function TrustPanel() {
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
          <h2 className="text-3xl sm:text-4xl text-ink">No surprises. Ever.</h2>
          <p className="mt-3 text-muted">
            We know what it feels like to get quoted one price and charged another. That's not
            how we run this shop.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid gap-6 sm:grid-cols-3"
        >
          {ITEMS.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={item}
              className="rounded-2xl bg-white p-6 shadow-sm border border-mist transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-garage-teal/10">
                <Icon className="h-6 w-6 text-garage-teal" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink font-sans">{title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
