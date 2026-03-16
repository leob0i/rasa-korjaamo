"use client"

import { useEffect, useState } from "react"

const PROMO_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR4XKCh0GZ-v5T-K7Y3jpDXZzoiIFrV2gAs5vi58quwOH7UXTknMeGNx26GdzP0XSKP-e0pFybpMzBE/pub?output=csv"

const fallbackPromo = {
  title: "Autohuoltoa ja rengaspalvelua nopeasti Mikkelissä",
  text: "Tarvitsetko huoltoa, korjausta tai renkaiden vaihtoa? Hoidamme määräaikaishuollot, vikadiagnostiikan, jarrutyöt ja rengaspalvelut nopeasti ja luotettavasti. Soita ja varaa aika.",
}

function parseCsvLine(line: string) {
  const result: string[] = []
  let current = ""
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
    } else if (char === "," && !inQuotes) {
      result.push(current.trim())
      current = ""
    } else {
      current += char
    }
  }

  result.push(current.trim())
  return result
}

export function MonthlyPromo() {
  const [promo, setPromo] = useState(fallbackPromo)

  useEffect(() => {
    let cancelled = false

    async function loadPromo() {
      try {
        const res = await fetch(PROMO_CSV_URL, { cache: "no-store" })
        const raw = await res.text()
        const normalized = raw.replace(/^\uFEFF/, "")
        const rows = normalized
          .split(/\r?\n/)
          .filter(Boolean)
          .map(parseCsvLine)

        const data = rows.slice(1).reduce<Record<string, string>>((acc, row) => {
          const [key, value] = row
          if (key && value) acc[key] = value
          return acc
        }, {})

        if (!cancelled) {
          setPromo({
            title: data.title || fallbackPromo.title,
            text: data.text || fallbackPromo.text,
          })
        }
      } catch {
        // fallback jää käyttöön
      }
    }

    loadPromo()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className="py-6 sm:py-8 bg-zinc-950 border-t border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-orange-600/30 bg-gradient-to-br from-orange-600/10 via-zinc-900 to-zinc-950 px-4 py-4 sm:px-5 sm:py-5 shadow-lg shadow-orange-600/10">
            <p className="text-sm uppercase tracking-wider text-orange-500 font-semibold mb-3">
              Ajankohtaista
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              {promo.title}
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-4xl">
              {promo.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}