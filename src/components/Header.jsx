import { useState } from 'react'
import { PhoneIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Get an Estimate', href: '#estimate' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Hours & Location', href: '#contact' },
]

const PHONE_DISPLAY = '(786) 474-1311'
const PHONE_HREF = 'tel:+17864741311'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-mist shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-display text-lg sm:text-xl text-ink">
            Multiser <span className="brand-gradient-text">Versailles</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-muted hover:text-ink transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-garage-teal after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-ignition-red px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.03] hover:shadow-lg"
            >
              <PhoneIcon className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-garage-teal"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-mist bg-white">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-mist min-h-11 flex items-center"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONE_HREF}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ignition-red px-5 py-3 text-base font-semibold text-white min-h-11"
            >
              <PhoneIcon className="h-5 w-5" />
              Call {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
