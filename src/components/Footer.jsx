import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-midnight-charcoal text-white/70 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="font-display text-white text-lg">
          Multiser <span className="brand-gradient-text">Versailles</span>
        </p>
        <p>{t.hoursContact.address} · (786) 474-1311</p>
        <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
      </div>
    </footer>
  )
}
