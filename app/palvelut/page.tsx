import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import {
  Wrench,
  Cog,
  Target,
  Droplet,
  Hammer,
  ShoppingCart,
  CheckCircle,
  ShieldCheck,
  Zap,
  Snowflake,
  Gauge,
  CarFront,
  ScanSearch,
  Wind,
  Settings,
  Fuel,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DienstenPage() {
  const huollot = [
    {
  icon: ShieldCheck,
  title: "Määräaikaishuollot ja huollot uusiin autoihin",
  price: "alk. 159 €",
  description:
    "Teemme määräaikaishuollot niin uusiin kuin vanhempiinkin autoihin valmistajan huolto-ohjelman mukaisesti takuun säilyttäen.",
  features: [
    "Huollot valmistajan huolto-ohjelman mukaan",
    "Huollot myös uusiin ja takuualaisiin autoihin",
    "Oikeat öljyt, suodattimet ja tarvikkeet",
    "Huoltokirjan merkinnät huollon yhteydessä",
    "Huolto-ohjelman mukaiset tarkastukset",
  ],
},
    {
      icon: ScanSearch,
      title: "Diagnostiikkatyöt",
      description: "Vaativat vianetsinnät auton sähköjärjestelmästä diagnoosilaitteen avulla.",
      features: [
        "Vikakoodien luku ja tulkinta",
        "Mittausarvojen seuranta testilaitteella",
        "Sähköjärjestelmän vianhaku",
        "Korjausehdotus jatkotoimista",
      ],
    },
    {
      icon: Zap,
      title: "Autosähkötyöt",
      description: "Auton yleiset sähkötyöt, joissa ei välttämättä tarvita diagnoosilaitetta.",
      features: [
        "Valo- ja sähkölaitteiden vianetsintä",
        "Akkuihin ja lataukseen liittyvät työt",
        "Sulakkeiden ja johtovikojen tarkistus",
        "Yleisten sähkövikojen korjaukset ja vianhaku",
      ],
    },
    {
      icon: Fuel,
      title: "Öljynvaihto",
      price: "alk. 120 € sis. 4 l moottoriöljyä",
      description: "Auton moottorin öljynvaihto.",
      features: [
        "Moottoriöljyn vaihto",
        "Öljynsuodattimen vaihto",
        "Huoltovälin nollaus tarvittaessa",
        "Silmävarainen tarkistus mahdollisille vuodoille",
      ],
    },
    {
  icon: Wrench,
  title: "Alusta- ja jousitustyöt",
  description:
    "Alustan, jousituksen ja pyöräntuennan osien vaihto sekä ilmajousitukseen liittyvät tarkastus- ja korjaustyöt.",
  features: [
    "Nivelten, kumihelojen ja muiden alustan osien vaihdot",
    "Iskunvaimentimien (suositus vaihtaa pareittain)",
    "Ilmajousituksen osien tarkastus ja korjaustyöt",
    "Kiinnitysten, yläpään osien ja pyöräntuennan tarkastus",
    "Tarvittaessa suuntaustarpeen arviointi",
  ],
},
    {
      icon: Settings,
      title: "Jakopään vaihtotyöt",
      description: "Jakopään vaihtotyöt auton valmistajan ohjeilla ja erikoistyökaluilla.",
      features: [
        "Valmistajan ohjeiden mukainen työ",
        "Kiristimien ja rullien uusiminen tarpeen mukaan",
        "Vesipumpun vaihto tarvittaessa",
      ],
    },
    {
      icon: Target,
      title: "Jarrujen huolto ja korjaus",
      description: "Jarrujen herkistykset sekä osien vaihto.",
      features: [
        "Jarrujen herkistys ja tarkastus",
        "Jarrupalojen ja levyjen vaihto",
        "Liukutappien ja liikkuvien osien huolto",
        "Jarrujen toiminnan tarkistus",
      ],
    },
    {
      icon: Cog,
      title: "Kytkimen huolto ja korjaus",
      description: "Kytkimien vaihto.",
      features: [
        "Kytkimen vaihto",
        "Painelaakerin tarkastus tai vaihto",
        "Tarvittaessa vauhtipyörän kunnon arviointi",
        "Voimansiirron toiminnan tarkistus",
      ],
    },
    {
      icon: Gauge,
      title: "Päästömittaus Bensiini",
      description: "Bensiinimoottoristen autojen päästömittaus.",
      features: [
        "Bensiiniautojen päästömittaus",
        "Mittaus katsastusta varten",
        "Tyhjäkäynnin ja kierrosluvun mukaiset mittaukset",
        "Tulosten läpikäynti asiakkaan kanssa",
      ],
    },
    {
      icon: Snowflake,
      title: "Ilmastoinnin täyttöhuollot",
      description:
        "Auton ilmastointijärjestelmän täyttöhuolto. ",
      features: [
        "Kylmäaineen talteenotto ja täyttö",
        "Järjestelmän alipaineistus",
        "Ilmastointilaitteen vianhaku ja korjaus",
        "Täyttöhuolto Tukes-luvan mukaisesti",
      ],
    },
    
    {
      icon: CarFront,
      title: "Ohjauskulmien mittaus ja nelipyöräsuuntaus",
      price: "alk. 89 € / h sis. 1 h työtä",
      description:
        "Ohjauskulmien oikeat arvot vaikuttavat voimakkaasti auton ajettavuuteen ja renkaiden tasaiseen kulumiseen.",
      features: [
        "Ohjauskulmien mittaus",
        "Nelipyöräsuuntaus tarvittaessa",
        "Ajettavuuden parantaminen",
        "Renkaiden tasaisen kulumisen tukeminen",
      ],
    },
    {
      icon: ShieldCheck,
      title: "ABS- ja ajonhallintajärjestelmien vianhaku ja korjaus",
      description:
        "Vianhaku ja korjaus ABS-jarrujärjestelmistä ja ajonvakautusjärjestelmästä.",
      features: [
        "ABS- ja ajonvakautusjärjestelmän vikakoodien luku",
        "Anturi- ja johtovikojen paikannus",
        "Järjestelmän toiminnan testaus",
        "Tarvittavat korjaukset ja osien vaihdot",
      ],
    },
    {
      icon: Cog,
      title: "Automaattivaihteistojen öljynvaihtohuollot",
      description: "Automaattivaihteistojen öljynvaihdot ja vianhaku.",
      features: [
        "Öljynvaihto sekä vianhaku",
        "Huollamme monimutakisemmatkin vaihteistot",
        "Öljymäärän tarkastus",
        
      ],
    },
  ]

  const muutPalvelut = [
    {
  icon: ShoppingCart,
  title: "Renkaiden vaihto ja tasapainotus",
  description: "Renkaiden vaihto vanteille sekä koneellinen tasapainotus.",
  features: [
    "Renkaiden asennus vanteille",
    "Koneellinen tasapainotus",
    "Kausivaihdot",
    "Rengaspaineiden tarkastus",
  ],
  link: "/rengaspalvelut",
},
    {
      icon: CheckCircle,
      title: "Katsastuttamispalvelut",
      description:
        "Katsastuskelpoisuuden tarkistus ja katsastuksessa käyttö puolestasi.",
      features: [
        "Katsastuksen valmistelu",
        "Katsastus puolestasi",
        "Mahdollisten puutteiden läpikäynti ja korjaus",
      ],
    },
    {
      icon: Droplet,
      title: "Moottorin sisähuuhtelut",
      description: "Moottorin kemialliset huuhtelut.",
      features: [
        "Kemiallinen moottorin sisähuuhtelu",
        "Soveltuvuus arvioidaan tapauskohtaisesti",
      ],
    },
    {
      icon: Zap,
      title: "Autolämpöasennukset sähkökäyttöiset",
      description: "Sähkökäyttöisten Defa- tai Calix-moottorinlämmittimien asennus.",
      features: [
        "Defa- ja Calix-järjestelmien asennus",
        "Moottorinlämmittimen asennus",
        "Tarvittaessa sisätilanlämmittimen kytkennät",
        "Toiminnan tarkistus asennuksen jälkeen",
      ],
    },
    {
      icon: Hammer,
      title: "Opetuspolkimien asennukset",
      description:
        "Opetusluvalla ajettavan ajokortin vaatima asennuspolkimien asentaminen.",
      features: [
        "Opetuspolkimien asennus opetuslupaa varten",
        "Asennus vaatimusten mukaisesti",
        "Polkimien toiminnan tarkistus",
      ],
    },
    {
      icon: Wrench,
      title: "Vetokoukkujen myynti ja asennukset",
      description: "Vetokoukun ja sähkösarjojen myynti ja asennus.",
      features: [
        "Vetokoukun myynti automallin mukaan",
        "Sähkösarjan asennus",
        "Vetokoukun mekaaninen asennus",
        "Toiminnan tarkistus luovutuksen yhteydessä",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Renkaiden myynti",
      description:
        "Renkaiden myynti kuuluu meille myöskin. Myymme pääsääntöisesti Bridgestone-, Kumho- ja Toyo-renkaita.",
      features: [
        "Kesä- ja talvirenkaat",
        "Bridgestone, Kumho ja Toyo",
        "Auton käyttöön sopiva rengassuositus",
        "Asennus ja tasapainotus saman käynnin yhteydessä",
      ],
    },
  ]

  const renderServices = (services: Array<(typeof huollot)[number] & { link?: string }>) =>
  services.map((service, index) => (
    <Card key={`${service.title}-${index}`} className="bg-zinc-800 border-zinc-700 overflow-hidden">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-3 gap-6 p-8">
          <div className="md:col-span-1">
            <service.icon className="w-16 h-16 text-orange-600 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-zinc-400 leading-relaxed">{service.description}</p>
          </div>

          <div className="md:col-span-2 flex flex-col h-full">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Mitä palvelu sisältää:</h4>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {(service.price || service.link) && (
              <div className="mt-6 md:mt-auto md:flex md:justify-end md:items-end">
                {service.price && (
                  <div className="text-xl font-semibold text-orange-500 whitespace-nowrap">
                    {service.price}
                  </div>
                )}

                {service.link && (
                  <Button
                    asChild
                    size="sm"
                    className="bg-orange-600 hover:bg-orange-700 text-white md:ml-4"
                  >
                    <Link href={service.link}>Lue lisää rengaspalveluistamme</Link>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  ))

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/oljyvalutus.jpg"
            alt="Autokorjaamon palvelut"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/45 via-zinc-900/30 to-zinc-900/55" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Palvelumme</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto text-balance leading-relaxed">
            Korjaamo tarjoaa kattavat huollot ja korjaukset saman katon alta. Teemme vain tarpeelliset työt ja
            kerromme aina etukäteen, mitä autollesi suositellaan.
          </p>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Huollot</h2>
            <p className="text-zinc-400 text-lg">
              Kaikki yleisimmät huollot ja korjaukset saman katon alta ammattitaidolla.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">{renderServices(huollot)}</div>

          <div className="max-w-6xl mx-auto mt-16 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Muut palvelut</h2>
            <p className="text-zinc-400 text-lg">
              Lisäksi saat meiltä useita autoilun lisäpalveluita asennuksista rengasmyyntiin.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">{renderServices(muutPalvelut)}</div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Tarvitsetko huoltoa tai korjausta?</h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Pyydä tarjous, niin palaamme asiaan mahdollisimman pian.
          </p>
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8">
            <Link href="https://www.autokorjaamo.fi/embed-reservation/ad-autokorjaamo-rasa-vaananen-166?theme=ad">Pyydä tarjous</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}