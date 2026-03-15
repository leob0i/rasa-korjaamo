import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Rengaspalvelut Mikkeli | Renkaiden myynti, vannetyöt ja tasapainotus | Autokorjaamo Rasa & Väänänen",
  description:
    "Rengaspalvelut Mikkelissä: Bridgestone, Kumho ja Toyo -renkaat, renkaiden myynti, vannetyöt, tasapainotus, renkaan paikkaus ja venttiilityöt. Autokorjaamo Rasa & Väänänen.",
}

export default function ProjectenPage() {
  const featuredTires = [
    {
      title: "Bridgestone Turanza 6",
      subtitle: "Premium-kesärengas henkilöautoihin",
      price: "alk. 101,09 € / kpl",
      image: "/images/bridgestone.png",
      description:
        "Turanza 6 sopii kuljettajalle, joka haluaa rauhallisen ja laadukkaan ajotuntuman ilman turhaa meteliä. Se on vahva valinta etenkin arkiajoon ja pidemmille maantieosuuksille.",
    },
    {
      title: "Kumho Ecsta HS52",
      subtitle: "Tasapainoinen kesärengas hyvällä märkäpidolla",
      price: "alk. 61,53 € / kpl",
      image: "/images/kuhmo.png",
      description:
        "Ecsta HS52 on järkevä vaihtoehto, kun haetaan hyvää ajettavuutta ja varmaa tuntumaa märällä kohtuullisemmalla hintatasolla. Toimiva valinta monelle tavalliseen käyttöautoon.",
    },
    {
      title: "Toyo Proxes Comfort",
      subtitle: "Mukavuuspainotteinen kesärengas jokapäiväiseen ajoon",
      price: "alk. 79,23 € / kpl",
      image: "/images/toyo.png",
      description:
        "Proxes Comfort painottaa nimensä mukaisesti vakaata ja hiljaista etenemistä. Se sopii hyvin kuljettajalle, joka arvostaa pehmeämpää yleisfiilistä ja siistiä ajettavuutta.",
    },
  ]

  const moreTires = [
    {
      title: "FSR-802 FORTUNE",
      subtitle: "Edullinen kesärengas mukavaan arkiajoon",
      price: "alk. 51 € / kpl",
      image: "/images/fortune.jpg",
      description:
        "FSR-802 on suunnattu tavalliseen käyttöön, jossa arvostetaan rauhallista ajotuntumaa, vähäisempää rengasmelua ja varmaa yleisfiilistä. Se sopii hyvin kuljettajalle, joka hakee edullisempaa vaihtoehtoa päivittäiseen ajoon.",
    },
    {
      title: "Westlake ZuperEco Z-107",
      subtitle: "Taloudellinen touring-kesärengas henkilöautoihin",
      price: "alk. 52 € / kpl",
      image: "/images/westlake.jpg",
      description:
        "ZuperEco Z-107 on mukavuuspainotteinen kesärengas, jossa korostuvat tasainen ajotuntuma, hyvä märkäpidon perusvarmuus ja kevyempi vierintä arkiajossa. Toimiva vaihtoehto, kun haetaan järkevää hintaluokkaa ilman turhaa kikkailua.",
    },
  ]

  const tireServices = [

    {
    title: "Renkaiden vaihto",
    price: "alk. 40 €",
    description:
      "Vaihdamme renkaat nopeasti ja huolellisesti kauden mukaan. Ilmanpaineiden tarkastus kuuluu hintaan.",
  },
  {
    title: "Rengashotelli",
    price: "alk. 69 €",
    description:
      "Kausisäilytys helpottaa arkea, kun renkaille ei tarvitse etsiä tilaa kotona. Säilytämme renkaat asianmukaisesti seuraavaa kautta varten.",
  },
    {
      title: "Vannetyöt",
      price: "alk. 79 € / 4 kpl",
      description:
        "Renkaat vanteille tai vanteilta pois sisältäen tasapainotuksen. Sopii silloin, kun vaihdetaan itse rengas vanteelle eikä tehdä pelkkää kausivaihtoa.",
    },
    {
      title: "Renkaiden tasapainotus",
      price: "alk. 39 € / 4 kpl",
      description:
        "Tasapainotus auttaa pitämään ajon vakaana ja vähentää tärinää etenkin maantienopeuksissa. Hyvä lisäpalvelu myös silloin, kun huomaat ratissa epätasaisuutta.",
    },
    {
      title: "Vuotava rengas?",
      description:
        "Paikkaamme korjattavissa olevan vaurion, esimerkiksi naulan aiheuttaman reiän tai vuotavan venttiilin. Lopullinen korjattavuus varmistetaan aina renkaan kunnon perusteella.",
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/high-end-luxury-car-wheel-close-up-dark-automotive.jpg"
            alt="Renkaat ja rengaspalvelut"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-900" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              Renkaat ja rengaspalvelut
            </h1>

            <p className="text-xl text-zinc-300 leading-relaxed mb-10">
              Meiltä saat uudet renkaat sarjana tai joko yksittäin kaikkiin automalleihin.
              Teemme myös rengastyöt, tasapainotukset ja muut rengastyöt paikan päällä!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
  <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8">
    <Link href="/contact">Kysy tarjous</Link>
  </Button>

  <Button
    asChild
    size="lg"
    variant="outline"
    className="border-zinc-600 text-white hover:bg-zinc-800 text-lg px-8 bg-transparent"
  >
    <a href="#rengastyot">Rengastyöt</a>
  </Button>
</div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            {featuredTires.map((tire, index) => (
              <article
                key={index}
                className="overflow-hidden border border-zinc-800 bg-zinc-950/60 backdrop-blur-sm"
              >
                <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-0">
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <p className="text-sm uppercase tracking-[0.25em] text-orange-500 mb-3">{tire.subtitle}</p>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{tire.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 mb-5 text-sm">
                      <span className="px-3 py-1 bg-orange-600/15 text-orange-400 border border-orange-500/30 rounded-full">
                        {tire.price}
                      </span>
                    </div>
                    <p className="text-zinc-300 leading-relaxed mb-6">{tire.description}</p>
                    <p className="text-sm text-zinc-500 leading-relaxed mb-8">
                      Esimerkkihinta tässä kokoluokassa. Lopullinen hinta riippuu koosta, saatavuudesta ja
                      valitusta rengastyypistä.
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <Button
                        asChild
                        variant="outline"
                        className="border-zinc-700 text-white hover:bg-zinc-800 bg-transparent"
                      >
                        <a href="https://www.autokorjaamo.fi/embed-reservation/ad-autokorjaamo-rasa-vaananen-166?theme=ad">
                          Pyydä tarjous
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="relative min-h-[340px] bg-white overflow-hidden">
                    <Image
                      src={tire.image}
                      alt={`${tire.title} esimerkkirengas`}
                      fill
                      className="object-contain p-2 scale-110"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            <input id="more-tires-toggle" type="checkbox" className="peer sr-only" />

            <div className="flex justify-center pt-8 peer-checked:hidden">
  <label
    htmlFor="more-tires-toggle"
    className="inline-flex cursor-pointer items-center justify-center rounded-md border border-zinc-700 bg-transparent px-6 py-3 text-white transition-colors hover:bg-zinc-800"
  >
    Näytä lisää
  </label>
</div>

            <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-in-out peer-checked:mt-8 peer-checked:grid-rows-[1fr] peer-checked:opacity-100">
              <div className="overflow-hidden">
                <div className="grid grid-cols-1 gap-8">
                  {moreTires.map((tire, index) => (
                    <article
                      key={index}
                      className="overflow-hidden border border-zinc-800 bg-zinc-950/60 backdrop-blur-sm"
                    >
                      <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-0">
                        <div className="p-8 md:p-10 flex flex-col justify-center">
                          <p className="text-sm uppercase tracking-[0.25em] text-orange-500 mb-3">{tire.subtitle}</p>
                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{tire.title}</h3>
                          <div className="flex flex-wrap items-center gap-3 mb-5 text-sm">
                            <span className="px-3 py-1 bg-orange-600/15 text-orange-400 border border-orange-500/30 rounded-full">
                              {tire.price}
                            </span>
                          </div>
                          <p className="text-zinc-300 leading-relaxed mb-6">{tire.description}</p>
                          <p className="text-sm text-zinc-500 leading-relaxed mb-8">
                            Esimerkkihinta tässä kokoluokassa. Lopullinen hinta riippuu koosta, saatavuudesta ja
                            valitusta rengastyypistä.
                          </p>

                          <div className="flex flex-wrap gap-4">
                            <Button
                              asChild
                              variant="outline"
                              className="border-zinc-700 text-white hover:bg-zinc-800 bg-transparent"
                            >
                              <a href="https://www.autokorjaamo.fi/embed-reservation/ad-autokorjaamo-rasa-vaananen-166?theme=ad">
                                Pyydä tarjous
                              </a>
                            </Button>
                          </div>
                        </div>

                        <div className="relative min-h-[340px] bg-white overflow-hidden">
                          <Image
                            src={tire.image}
                            alt={`${tire.title} esimerkkirengas`}
                            fill
                            className="object-contain p-2 scale-110"
                          />
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="flex justify-center pt-8">
                  <label
                    htmlFor="more-tires-toggle"
                    className="inline-flex cursor-pointer items-center justify-center rounded-md border border-zinc-700 bg-transparent px-6 py-3 text-white transition-colors hover:bg-zinc-800"
                  >
                    Piilota
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rengastyot" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-balance">
              Kun rengas on valittu, hoidamme myös työn
            </h2>

            <div className="divide-y divide-zinc-800 border-t border-b border-zinc-800">
              {tireServices.map((service, index) => (
                <div key={index} className="py-8 md:py-10 grid md:grid-cols-[1fr_auto] gap-6 md:gap-10">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-zinc-300 leading-relaxed max-w-3xl">{service.description}</p>
                  </div>
                  <div className="md:text-right">
                    <div className="text-xl font-semibold text-orange-500 whitespace-nowrap">{service.price}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-zinc-500 mt-6 leading-relaxed">
              Hinnat ovat alkaen-hintoja. Lopullinen hinta määräytyy työn sisällön, koon, vanteen ja
              mahdollisten lisätöiden mukaan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-balance">
              Renkaat autoosi helposti samasta paikasta
            </h2>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                Autokorjaamo Rasa & Väänänen on palvellut autoilijoita Mikkelissä jo yli 30 vuoden
                kokemuksella. Olemme AD-ketjuun kuuluva monimerkkikorjaamo, ja meiltä saat renkaat
                autoosi merkistä riippumatta – olipa kyseessä henkilöauto, SUV tai muu tavallinen
                käyttöauto. Meille tärkeintä on, että asiakas saa autoon sopivat renkaat, selkeän
                palvelun ja työn, joka hoituu samasta paikasta ilman turhaa säätöä.
              </p>

              <p>
                Myymme pääsääntöisesti Bridgestone-, Kumho- ja Toyo-renkaita. Saat meiltä
                kesärenkaat, talvirenkaat, kitkarenkaat, yksittäiset renkaat sekä kokonaiset
                rengassarjat. Autamme oikean koon ja sopivan rengastyypin valinnassa. Säilytämme renkaitasi
                vaihtoon tarvittaessa meidän rengashotellissa.
              </p>

              <p>
                Renkaiden myynnin lisäksi teemme kokonaisvaltaiset rengastyöt paikan päällä. Meiltä
                onnistuvat renkaiden vaihdot, vannetyöt, renkaiden asennukset vanteille,
                tasapainotukset, renkaan paikkaukset sekä vuotavien venttiilien tarkistukset ja
                vaihdot. Palvelemme myös erikoiskokojen ja rengaspakettien kanssa, joten voit kysyä
                meiltä matalalla kynnyksellä myös silloin, kun kyse ei ole ihan tavallisimmasta
                rengaskoosta. 
              </p>

              <p>
                Jos etsit rengaspalvelua Mikkelissä, jossa saat sekä renkaat että asennuksen saman
                katon alta, ja vielä vanhat renkaat säilöön, ota yhteyttä. Kysy lisää rohkeasti
                puhelimitse, WhatsAppilla tai yhteydenottolomakkeemme kautta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="yhteys" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-orange-500 mb-4">Yhteydenotto</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Tarvitsetko renkaat tai haluatko kysyä sopivaa vaihtoehtoa?
          </h2>
          <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Soita, laita WhatsApp-viesti tai ota yhteyttä. Katsotaan auton tiedoilla sopiva koko, oikea
            rengastyyppi ja tarvittavat työt samalla kertaa.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8">
              <a href="tel:0447835032">Soita nyt</a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-zinc-600 text-white hover:bg-zinc-800 text-lg px-8 bg-transparent"
            >
              <a href="https://wa.me/358447835032" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-zinc-600 text-white hover:bg-zinc-800 text-lg px-8 bg-transparent"
            >
              <Link href="/contact">Yhteystiedot</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
