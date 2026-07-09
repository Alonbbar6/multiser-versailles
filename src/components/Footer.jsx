export default function Footer() {
  return (
    <footer className="bg-midnight-charcoal text-white/70 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="font-display text-white text-lg">
          Multiser <span className="brand-gradient-text">Versailles</span>
        </p>
        <p>3231 SW 8th St, Miami, FL 33135 · (786) 474-1311</p>
        <p>&copy; {new Date().getFullYear()} Multiser Versailles, Inc.</p>
      </div>
    </footer>
  )
}
