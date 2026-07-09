import { PhoneIcon } from '@heroicons/react/24/solid'

export default function StickyCallButton() {
  return (
    <a
      href="tel:+17864741311"
      className="md:hidden fixed bottom-4 inset-x-4 z-40 inline-flex items-center justify-center gap-2 rounded-full bg-ignition-red px-6 py-3.5 text-base font-semibold text-white shadow-xl min-h-11"
    >
      <PhoneIcon className="h-5 w-5" />
      Call Now — (786) 474-1311
    </a>
  )
}
