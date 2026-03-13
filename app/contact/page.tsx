import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { MapPin, Clock, Contact } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/high-end-luxury-car-wheel-close-up-dark-automotive.jpg" alt="Yhteystiedot" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-900" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Ota yhteyttä</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto text-balance leading-relaxed">
            Kysy huollosta, varaa aika tai pyydä tarjous. Vastaamme nopeasti.
          </p>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Osoite</h3>
                      <p className="text-zinc-300 leading-relaxed">
                        Porrassalmenkatu 48
                        <br />
                        50100 Mikkeli
                        <br />
                        Suomi
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Contact className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Yhteystiedot</h3>
                      <div className="space-y-2">
                        <a href="mailto:adrasavaananen@gmail.com" className="block text-zinc-300 hover:text-orange-600 transition-colors">
                          adrasavaananen@gmail.com
                        </a>
                        <a href="tel:0447835032" className="block text-zinc-300 hover:text-orange-600 transition-colors">
                          0447835032
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Aukioloajat</h3>
                      <div className="text-zinc-300 space-y-1">
                        <p>Ma - Pe: 08.00 - 16.30</p>
                        <p>La: Suljettu</p>
                        <p>Su: Suljettu</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 flex justify-center">
                <Link
                  href="https://wa.me/358447835032"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Avaa WhatsApp ja ota yhteyttä"
                  className="group inline-flex h-12 items-center gap-3 rounded-full bg-[#25D366] px-5 shadow-lg shadow-black/30 ring-1 ring-white/10 transition hover:bg-[#1EBE5D] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  <svg
                    viewBox="0 0 32 32"
                    className="h-7 w-7 shrink-0 text-white"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="currentColor"
                      transform="translate(1.5 -0)"
                      d="M19.11 17.53c-.28-.14-1.65-.81-1.9-.9-.26-.1-.45-.14-.64.14-.18.28-.74.9-.9 1.08-.17.18-.33.2-.6.06-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.66-1.56-1.94-.17-.28-.02-.43.13-.57.13-.13.28-.33.42-.49.14-.17.18-.28.28-.46.1-.18.05-.35-.02-.49-.07-.14-.64-1.55-.87-2.12-.23-.56-.46-.49-.64-.49h-.55c-.2 0-.49.07-.74.35-.26.28-.97.95-.97 2.32 0 1.37 1 2.69 1.14 2.88.14.18 1.97 3 4.77 4.2.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.65-.67 1.88-1.32.23-.64.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33z"
                    />
                    <path
                      fill="currentColor"
                      d="M16.01 3.2c-7.03 0-12.75 5.7-12.75 12.7 0 2.23.6 4.41 1.73 6.33L3.2 28.8l6.75-1.77a12.8 12.8 0 0 0 6.06 1.54c7.03 0 12.75-5.7 12.75-12.7S23.04 3.2 16.01 3.2zm0 23.12c-1.93 0-3.82-.52-5.47-1.5l-.39-.23-4.01 1.05 1.07-3.9-.25-.4a10.51 10.51 0 0 1-1.61-5.57c0-5.8 4.75-10.52 10.66-10.52 5.9 0 10.66 4.72 10.66 10.52 0 5.8-4.76 10.55-10.66 10.55z"
                    />
                  </svg>

                  <span className="flex flex-col leading-[1.05]">
                    <span className="font-sans text-[15px] font-semibold tracking-tight text-white">
                      WhatsApp
                    </span>
                    <span className="font-sans text-[13px] font-semibold tracking-tight text-white/95 tabular-nums">
                      +358 44 783 5032
                    </span>
                  </span>
                </Link>
              </div>
            </div>

            <div className="lg:sticky lg:top-24 h-fit">
              <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square lg:aspect-auto lg:h-[600px]">
                    <iframe
                      src="https://maps.google.com/maps?q=Porrassalmenkatu%2048,%2050100%20Mikkeli,%20Suomi&z=16&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Rasa Väänänen sijainti"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}