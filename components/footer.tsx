import Link from "next/link"

type FooterProps = {
  description?: string
  addressLines?: [string, string]
  email?: string
  compact?: boolean
}

const DEFAULT_DESCRIPTION = "Olemme monimerkkikorjaamo Mikkelissä, joka kuuluu valtakunnallisesti tunnettuun AD-ketjuun. Autoja yrityksemme on korjannut jo yli 30 vuotta. Huollamme ja korjaamme kaiken merkkisiä autoja."
const DEFAULT_ADDRESS_LINES: [string, string] = ["Porrassalmenkatu 48", "50100 Mikkeli"]
const DEFAULT_EMAIL = "info@rasakorjaamo.fi"

export function Footer({
  description = DEFAULT_DESCRIPTION,
  addressLines = DEFAULT_ADDRESS_LINES,
  email = DEFAULT_EMAIL,
  compact = false,
}: FooterProps) {
  const footerClassName = compact ? "bg-zinc-950 border-t border-zinc-800 py-8 sm:py-12" : "bg-zinc-950 border-t border-zinc-800 py-12"
  const containerClassName = compact ? "container mx-auto px-4 sm:px-6" : "container mx-auto px-4"
  const gridClassName = compact
    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
    : "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
  const brandTitleClassName = compact ? "text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4" : "text-2xl font-bold text-white mb-4"
  const headingClassName = compact ? "text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4" : "text-lg font-semibold text-white mb-4"
  const bodyTextClassName = compact ? "text-sm sm:text-base text-zinc-400 leading-relaxed" : "text-zinc-400 leading-relaxed"
  const linkClassName = compact
    ? "text-sm sm:text-base text-zinc-400 hover:text-orange-600 transition-colors"
    : "text-zinc-400 hover:text-orange-600 transition-colors"
  const contactTextClassName = compact ? "space-y-2 text-sm sm:text-base text-zinc-400" : "space-y-2 text-zinc-400"
  const copyrightClassName = compact
    ? "border-t border-zinc-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-zinc-500"
    : "border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-500"
  const firstColumnClassName = compact ? "sm:col-span-2 lg:col-span-1" : undefined

  return (
    <footer className={footerClassName}>
      <div className={containerClassName}>
        <div className={gridClassName}>
          <div className={firstColumnClassName}>
            <h3 className={brandTitleClassName}>Rasa Väänänen</h3>
            <p className={bodyTextClassName}>{description}</p>
          </div>

          <div>
            <h4 className={headingClassName}>Sivukartta</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/palvelut" className={linkClassName}>
                  Palvelut
                </Link>
              </li>
              <li>
                <Link href="/rengaspalvelut" className={linkClassName}>
                  Rengaspalvelut
                </Link>
              </li>
              <li>
                <Link href="/meista" className={linkClassName}>
                  Meistä
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkClassName}>
                  Yhteys
                </Link>
              </li>
             
            </ul>
          </div>

          <div>
            <h4 className={headingClassName}>Yhteystiedot</h4>
            <div className={contactTextClassName}>
              <p>
                <span className="font-semibold text-white">Osoite:</span>
                <br />
                {addressLines[0]}
                <br />
                {addressLines[1]}
              </p>
              <p>
                <span className="font-semibold text-white">Sähköposti:</span>
                <br />
                <a href={`mailto:${email}`} className="hover:text-orange-600 transition-colors break-all">
                  {email}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className={copyrightClassName}>
          <p>&copy; {new Date().getFullYear()} Rasa Väänänen. Kaikki oikeudet pidätetään.</p>
        </div>
      </div>
    </footer>
  )
}
