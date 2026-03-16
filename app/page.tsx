import type { SVGProps } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Wrench, Cog, Target, Droplet, Hammer, ShoppingCart, CheckCircle, Clock, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MonthlyPromo } from "@/components/monthly-promo"


function TireIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 312 384"
      aria-hidden="true"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M140 1 L117 11 L97 30 L78 61 L65 96 L53 167 L53 216 L61 272 L82 330 L97 353 L117 372 L146 383 L224 382 L245 373 L268 351 L285 323 L298 289 L311 208 L310 160 L304 118 L282 54 L264 27 L248 12 L218 0 Z M205 11 L220 11 L236 17 L266 48 L287 95 L300 166 L298 236 L283 300 L273 323 L254 351 L236 366 L220 372 L205 372 L186 364 L159 335 L136 281 L125 214 L127 147 L142 83 L157 51 L172 31 L186 19 Z M209 69 L196 74 L183 86 L169 112 L158 157 L156 204 L161 244 L177 288 L193 307 L204 313 L216 314 L229 309 L242 297 L256 271 L267 227 L269 179 L264 139 L248 95 L232 76 Z M189 99 L199 118 L207 149 L210 210 L202 256 L188 285 L178 265 L170 235 L167 173 L175 127 Z M208 80 L223 83 L238 99 L252 134 L258 173 L258 211 L250 256 L236 287 L217 303 L208 303 L196 295 L213 256 L221 204 L216 139 L208 112 L196 89 Z M144 11 L177 12 L163 25 L146 31 L134 29 L125 36 L150 43 L142 55 L125 61 L109 56 L103 66 L118 72 L135 68 L131 84 L116 91 L95 85 L90 97 L97 96 L109 102 L125 99 L123 113 L107 121 L85 115 L83 124 L100 132 L118 127 L117 147 L103 154 L79 148 L78 159 L96 165 L115 161 L113 182 L94 187 L77 181 L77 192 L89 197 L100 198 L113 193 L115 212 L100 219 L82 213 L77 215 L78 224 L90 229 L116 226 L116 246 L100 250 L81 244 L82 255 L96 260 L120 257 L122 278 L106 282 L88 276 L90 286 L102 292 L128 290 L135 310 L125 316 L100 310 L105 321 L118 327 L139 321 L152 345 L139 348 L120 342 L143 358 L160 354 L176 372 L136 370 L119 360 L103 343 L88 318 L75 283 L64 221 L66 144 L82 79 L107 35 L126 18 Z M94 0 L75 5 L58 16 L40 36 L25 62 L6 123 L0 209 L10 278 L22 314 L36 341 L47 356 L71 376 L87 382 L111 383 L98 372 L84 370 L67 360 L82 353 L76 344 L63 348 L51 343 L42 330 L42 326 L51 327 L64 321 L61 313 L45 316 L34 311 L26 292 L39 293 L52 287 L50 279 L33 282 L22 277 L17 258 L37 260 L45 255 L43 245 L27 250 L16 245 L13 236 L14 227 L28 230 L41 224 L40 214 L21 219 L11 213 L11 195 L31 197 L39 192 L40 182 L27 187 L12 182 L12 161 L23 165 L36 163 L41 159 L42 150 L24 154 L15 149 L16 129 L38 131 L45 127 L47 117 L34 121 L21 117 L23 99 L47 101 L55 87 L37 91 L28 83 L36 67 L45 72 L62 67 L67 55 L52 61 L41 57 L52 38 L75 41 L85 25 L73 31 L63 27 L79 15 L98 11 L111 0 Z"
      />
    </svg>
  )
}

export default function Home() {
  const services = [
    {
  icon: Droplet,
  title: "Määräaikaishuollot",
  description: "Valmistajan huolto-ohjelman mukaiset huollot kaikkiin yleisiin automerkkeihin",
  price: "Alk. 159€",
},
    {
      icon: Cog,
      title: "Vikadiagnostiikka",
      description: "Moderni testauslaitteisto sähkövikojen, häiriövalojen ja toimintahäiriöiden selvittämiseen",
    },
    {
      icon: Target,
      title: "Jarrutyöt",
      description: "Jarrupalojen, levyjen ja jarrunesteen vaihdot turvallisesti ja nopeasti",
    },
    {
      icon: Wrench,
      title: "Moottori- ja alustakorjaukset",
      description: "Korjaukset pienistä vuodoista laajempiin mekaanisiin toimenpiteisiin",
    },
    {
      icon: Hammer,
      title: "Katsastuspalvelut",
      description: "Katsastustarkitukset ja katsastuksessa käyttäminen.",
    },
    {
  icon: TireIcon,
  title: "Renkaat ja rengaspalvelut",
  description: "Uudet renkaat, rengassarjat, tasapainotukset, vannetyöt ja muut rengaspalvelut samasta paikasta.",
  hasButton: true,
},
  ]

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
  src="/images/audi.jpg"
  alt="Autokorjaamon huoltotila"
  fill
  className="object-cover opacity-60"
  priority
/>
<div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-zinc-900/50 to-zinc-900/70" />
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-600/50 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 animate-fade-in-up">
            <Award className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
            <span className="text-orange-500 text-xs sm:text-sm font-semibold">Palvellut autoilijoita vuodesta 1989</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 text-balance animate-fade-in-up [animation-delay:100ms] px-2">
            Rasa & Väänänen
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-300 mb-6 sm:mb-8 max-w-3xl mx-auto text-balance animate-fade-in-up [animation-delay:200ms] px-4">
            Olemme monimerkkikorjaamo Mikkelissä, joka kuuluu valtakunnallisesti tunnettuun AD-ketjuun. Huollamme ja korjaamme kaiken merkkisiä autoja.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up [animation-delay:300ms] px-4">
            <Button
              asChild
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white text-base sm:text-lg px-6 sm:px-8 shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transition-all hover:scale-105 w-full sm:w-auto"
            >
              <Link href="https://www.autokorjaamo.fi/embed-reservation/ad-autokorjaamo-rasa-vaananen-166?theme=ad">Pyydä tarjous</Link>
            </Button>
            
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-y border-zinc-800">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
           <div className="text-center">
  <div className="flex items-center justify-center gap-2 mb-2">
    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
    <div className="text-3xl sm:text-4xl font-bold text-white">2 vuotta</div>
  </div>
  <p className="text-sm sm:text-base text-zinc-400">Kansainvälistä lisäturvaa</p>
</div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                <div className="text-3xl sm:text-4xl font-bold text-white">30+</div>
              </div>
              <p className="text-sm sm:text-base text-zinc-400">Vuotta kokemusta</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                <div className="text-3xl sm:text-4xl font-bold text-white">4.75 /5</div>
              </div>
              <p className="text-sm sm:text-base text-zinc-400">Keskiarvosana</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
         

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-zinc-800/50 backdrop-blur border-zinc-700 hover:border-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/20 hover:-translate-y-1 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-5 sm:p-6">
                  <div className="bg-orange-600/10 w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-orange-600/20 transition-colors">
                    <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-sm sm:text-base text-zinc-400 mb-4">{service.description}</p>
                  {service.price && (
  <div className="text-right text-sm sm:text-base font-semibold text-orange-500">
    {service.price}
  </div>
)}
                  {service.hasButton && (
  <Button
    asChild
    variant="outline"
    className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent transition-all w-full sm:w-auto"
  >
    <Link href="/rengaspalvelut">Katso rengaspalvelut</Link>
  </Button>
)}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

<MonthlyPromo />

            <section className="py-12 sm:py-16 lg:py-20 bg-zinc-950 ">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.9fr] gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
                Luotettavaa AD-autohuoltoa Mikkelissä
              </h2>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                AD-Autokorjaamo Rasa & Väänänen on Mikkelissä toimiva monimerkkikorjaamo,
                joka kuuluu valtakunnallisesti tunnettuun AD-ketjuun. Huollamme ja korjaamme
                kaikki automerkit – niin uudet kuin vanhatkin – yli 30 vuoden kokemuksella.
                Tarjoamme monipuoliset huolto-, korjaus- ja katsastuspalvelut saman katon alta,
                ja kauttamme saat myös kattavat rengaspalvelut sekä uusia renkaita eri tarpeisiin.
              </p>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mt-4">
                Meille laadukas työnjälki, mutkaton palvelu ja asiakastyytyväisyys ovat ykkösasioita.
                Kilpailukykyisen hinnoittelun lisäksi saat huoltokäynnin yhteydessä AD-ketjun
                2 vuoden kansainvälisen lisäturvan varaosille ja työsuoritteille.
                Myös uuden auton alkuperäinen takuu säilyy AD-autokorjaamossa huollettaessa.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-wider text-orange-500 font-semibold mb-2">
                  Osoite
                </p>
                <p className="text-white text-lg">
                  Porrassalmenkatu 48<br />
                  50100 Mikkeli
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-orange-500 font-semibold mb-2">
                  Aukioloajat
                </p>
                <p className="text-white text-lg">
                  ma–pe 8–16.30<br />
                  muulloin sopimuksen mukaan
                </p>
              </div>

              <div>
  <p className="text-sm uppercase tracking-wider text-orange-500 font-semibold mb-2">
    Puhelin
  </p>
  <p className="text-white text-lg">
    044 783 5032
  </p>

  <Link
    href="https://wa.me/358447835032"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Avaa WhatsApp ja ota yhteyttä"
    className="group mt-7 inline-flex h-12 items-center gap-3 rounded-full bg-[#25D366] px-5 shadow-lg shadow-black/30 ring-1 ring-white/10 transition hover:bg-[#1EBE5D] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
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
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-zinc-950">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-3 sm:mb-4 px-4">
        Mitä asiakkaat sanovat meistä
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
      <Card className="bg-zinc-800/50 backdrop-blur border-zinc-700 hover:border-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/20 hover:-translate-y-1">
        <CardContent className="p-5 sm:p-6">
          <div className="flex items-center gap-1 text-orange-500 text-lg mb-4">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            “Yksi parhaimmista autokorjaamoista, mitä tiedän. Aina on autoni saanut
            korjaus avun, lyhyelläkin varo ajalla. Kiitos siitä korjaamo osaaville
            autonasentajille.👍”
          </p>
        </CardContent>
      </Card>

      <Card className="bg-zinc-800/50 backdrop-blur border-zinc-700 hover:border-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/20 hover:-translate-y-1">
        <CardContent className="p-5 sm:p-6">
          <div className="flex items-center gap-1 text-orange-500 text-lg mb-4">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            “Ilmajousitus kuntoon kolmessa vartissa ja samalla alle puoleen hintaan
            verrattuna muihin yrityksiin!”
          </p>
        </CardContent>
      </Card>

      <Card className="bg-zinc-800/50 backdrop-blur border-zinc-700 hover:border-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/20 hover:-translate-y-1">
        <CardContent className="p-5 sm:p-6">
          <div className="flex items-center gap-1 text-orange-500 text-lg mb-4">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            “Ystävällinen ja edullinen palvelu. Osaavat tehdä hyvin työnsä.
            Suosittelen.”
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/korkki.jpg"
            alt="Korjaamon yhteydenottotausta"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-orange-900/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-balance">
            Tarvitseeko autosi <span className="text-orange-500">huoltoa</span> tai korjausta?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Ota yhteyttä ja pyydä arvio työstä ilman sitoumusta
          </p>
          <Button
            asChild
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white text-lg sm:text-xl px-8 sm:px-12 py-5 sm:py-6 shadow-2xl shadow-orange-600/40 hover:shadow-orange-600/60 transition-all hover:scale-105 w-full sm:w-auto mx-4"
          >
            <Link href="https://www.autokorjaamo.fi/embed-reservation/ad-autokorjaamo-rasa-vaananen-166?theme=ad">Aloita tarjouspyyntö</Link>
          </Button>
        </div>
      </section>

      <Footer compact />
    </div>
  )
}
