import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Award, Users, Wrench, ShieldCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function OverOnsPage() {
  const highlights = [
    {
      icon: Award,
      title: "Perustettu 1989",
      description: "Yli 30 vuoden kokemus autojen huollosta ja korjauksesta Mikkelissä.",
    },
    {
      icon: Wrench,
      title: "Monimerkkikorjaamo",
      description: "Huollot ja korjaukset autoille merkistä ja iästä riippumatta.",
    },
    {
      icon: ShieldCheck,
      title: "AD-ketjun lisäturva",
      description: "24 kuukauden kansainvälinen lisäturva AD-korjaamoissa tehdyille töille ja asennetuille osille.",
    },
    {
      icon: Users,
      title: "Paikallinen ja kokenut tiimi",
      description: "Luotettava yrittäjävetoinen tiimi ja laaja käytännön osaaminen.",
    },
  ]

  const services = [
    "Määräaikaishuollot ja huollot myös uusiin autoihin",
    "Diagnostiikkatyöt ja autosähkötyöt",
    "Jarrujen huolto ja korjaus",
    "Alustatyöt ja iskunvaimentimien vaihdot",
    "Jakopään vaihtotyöt",
    "Ilmastoinnin täyttöhuollot ja korjaukset",
    "Sähkö- ja hybridiautojen huollot",
    "Ohjauskulmien mittaus ja nelipyöräsuuntaus",
    "Automaattivaihteistojen öljynvaihtohuollot",
    "Katsastuspalvelut",
    "Vetokoukkujen myynti ja asennukset",
    "Renkaiden vaihto ja tasapainotus",
  ]

 

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

     <section className="relative pt-32 pb-20 overflow-hidden">
  <div className="absolute inset-0 z-0">
  <Image
    src="/images/rasa.png"
    alt="Autokorjaamo Rasa & Väänänen"
    fill
    className="object-cover opacity-60"
    priority
  />
  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-zinc-900/50 to-zinc-900/70" />
  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 via-transparent to-transparent" />
</div>

  <div className="relative z-10 container mx-auto px-4 text-center">
    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Meistä</h1>
    <p className="text-xl text-zinc-300 max-w-3xl mx-auto text-balance leading-relaxed">
      Autokorjaamo Rasa &amp; Väänänen on Mikkelissä toimiva AD-ketjuun kuuluva monimerkkikorjaamo,
      joka on palvellut autoilijoita vuodesta 1989.
    </p>
  </div>
</section>

      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.35fr_0.65fr] gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Paikallinen korjaamo, laaja palveluvalikoima</h2>
              <div className="space-y-5 text-zinc-300 leading-relaxed text-lg">
                <p>
                  Autokorjaamo Rasa &amp; Väänänen huoltaa ja korjaa autoja merkistä ja iästä riippumatta.
                  Korjaamo toimii osana AD-ketjua, mikä tuo toimintaan laajan palveluverkoston sekä
                  AD:n lisäpalvelut ja lisäturvan.
                </p>
                <p>
                  Korjaamollamme tehdään niin määräaikaishuoltoja, vianetsintää ja korjauksia kuin
                  rengas-, ilmastointi-, jarru-, alusta- ja autosähkötöitäkin. Palveluihimme 
                  kuuluvat myös esimerkiksi sähkö- ja hybridiautojen huollot,
                  nelipyöräsuuntaus, automaattivaihteiston öljynvaihtohuollot, katsastuspalvelut
                  sekä vetokoukkujen myynti ja asennukset.
                </p>
                <p>
                  Lisäksi myymme myös renkaita tilauksesta. Tämä tekee palvelusta käytännöllisen
                  asiakkaille, jotka haluavat hoitaa huollot, korjaukset ja rengasasiat samassa paikassa.
                </p>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="border-l border-orange-600 pl-6">
                <h3 className="text-xl font-semibold text-white mb-5">Perustiedot</h3>
                <dl className="space-y-4 text-zinc-300">
                  <div>
                    <dt className="text-zinc-500 text-sm uppercase tracking-wide">Yritys</dt>
                    <dd className="text-base">Autokorjaamo Rasa &amp; Väänänen avoin yhtiö</dd>
                  </div>
                  <div>
                    <dt className="text-zinc-500 text-sm uppercase tracking-wide">Perustettu</dt>
                    <dd className="text-base">1989</dd>
                  </div>
                  <div>
                    <dt className="text-zinc-500 text-sm uppercase tracking-wide">Osoite</dt>
                    <dd className="text-base">Porrassalmenkatu 48, 50100 Mikkeli</dd>
                  </div>
                  <div>
                    <dt className="text-zinc-500 text-sm uppercase tracking-wide">Puhelin</dt>
                    <dd className="text-base">044 783 5032</dd>
                  </div>
                  <div>
                    <dt className="text-zinc-500 text-sm uppercase tracking-wide">Aukioloajat</dt>
                    <dd className="text-base">ma–pe 8–16.30, muulloin sopimuksen mukaan</dd>
                  </div>
                  <div>
                    <dt className="text-zinc-500 text-sm uppercase tracking-wide">Ketju</dt>
                    <dd className="text-base">AD Autokorjaamo</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="border-t border-zinc-700 pt-6">
                <item.icon className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Mitä teemme</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-3xl">
              Teemme huollot, korjaukset ja
              tekniset työt nykyaikaisille sekä vanhemmille autoille.
            </p>

            <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
              {services.map((service, index) => (
                <div key={index} className="border-b border-zinc-800 pb-3">
                  <p className="text-zinc-300 leading-relaxed">{service}</p>
                </div>
              ))}
            </div>

            <p className="text-zinc-400 text-base leading-relaxed mt-8">
              Huoltoihimme kuuluvat myös uudet autot, ja määräaikaishuolloissa
              takuu säilyy samalla tavalla kuin merkkiliikkeessäkin huollettuna.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="border-l-4 border-orange-600 pl-6 md:pl-8">
              <p className="text-orange-500 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                AD-lisäturva
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                2 vuoden kansainvälinen lisäturva töille ja asennetuille osille
              </h2>
              <div className="space-y-5 text-zinc-300 leading-relaxed text-lg">
                <p>
                  AD-huollon 24 kuukauden kansainvälinen lisäturva kuuluu AD-autokorjaamoissa henkilöautoille
                  tehtyihin työsuoritteisiin ja asennettuihin osiin. Lisäturva tulee automaattisesti
                  ja veloituksetta.
                </p>
                <p>
                  Lisäturva koskee työvirheitä sekä osien raaka-aine- ja valmistusvikoja.
                  Käytännössä tämä tuo asiakkaalle lisävarmuutta korjauksen ja huollon jälkeen myös matkan päällä.
                </p>
                <p>
                  Säilytäthän laskun vähintään 24 kuukauden ajan, koska se toimii todisteena siitä,
                  että työ on tehty AD-autokorjaamossa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Tarvitsetko luotettavan monimerkkikorjaamon Mikkelissä?
          </h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Ota yhteyttä tai jätä tarjouspyyntö suoraan AD:n huoltovaraukseen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8">
              <Link href="https://www.autokorjaamo.fi/embed-reservation/ad-autokorjaamo-rasa-vaananen-166?theme=ad">
                Pyydä tarjous
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-zinc-600 text-white hover:bg-zinc-800 text-lg px-8 bg-transparent"
            >
              <Link href="/contact">Ota yhteyttä</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
