"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-zinc-900/95 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-white">
            AD Rasa Väänänen
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/palvelut" className="text-zinc-300 hover:text-white transition-colors">
              Palvelut
            </Link>
            <Link href="/rengaspalvelut" className="text-zinc-300 hover:text-white transition-colors">
              Rengaspalvelut
            </Link>
            <Link href="/meista" className="text-zinc-300 hover:text-white transition-colors">
              Meistä
            </Link>
            <Link href="/contact" className="text-zinc-300 hover:text-white transition-colors">
              Yhteys
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button asChild className="hidden sm:inline-flex bg-orange-600 hover:bg-orange-700 text-white">
              <Link href="https://www.autokorjaamo.fi/embed-reservation/ad-autokorjaamo-rasa-vaananen-166?theme=ad">
                Varaa aika
              </Link>
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-3 hover:bg-zinc-800 rounded-lg transition-colors"
              aria-label="Avaa valikko"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-20 bg-black/60 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      <div
        className={`fixed top-20 right-0 bottom-0 w-[85vw] max-w-sm bg-zinc-950 shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-8 gap-8">
          <Link
            href="/palvelut"
            className="text-white hover:text-zinc-200 transition-colors text-2xl font-semibold"
            onClick={closeMobileMenu}
          >
            Palvelut
          </Link>

          <Link
            href="/rengaspalvelut"
            className="text-white hover:text-zinc-200 transition-colors text-2xl font-semibold"
            onClick={closeMobileMenu}
          >
            Rengaspalvelut
          </Link>

          <Link
            href="/meista"
            className="text-white hover:text-zinc-200 transition-colors text-2xl font-semibold"
            onClick={closeMobileMenu}
          >
            Meistä
          </Link>

          <Link
            href="/contact"
            className="text-white hover:text-zinc-200 transition-colors text-2xl font-semibold"
            onClick={closeMobileMenu}
          >
            Yhteys
          </Link>

          <div className="border-t border-zinc-700 pt-8 flex flex-col gap-4">
            <Button
              asChild
              variant="outline"
              className="w-full h-12 border-zinc-600 text-white hover:bg-zinc-800 bg-transparent text-base"
            >
              <Link href="/contact" onClick={closeMobileMenu}>
                Ota yhteyttä
              </Link>
            </Button>

            <Button asChild className="w-full h-12 bg-orange-600 hover:bg-orange-700 text-white text-base">
              <a
                href="https://www.autokorjaamo.fi/embed-reservation/ad-autokorjaamo-rasa-vaananen-166?theme=ad"
                onClick={closeMobileMenu}
              >
                Varaa aika
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}