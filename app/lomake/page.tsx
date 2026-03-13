"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Upload } from "lucide-react"


export default function OffertePage() {
  const [showOtherService, setShowOtherService] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).slice(0, 5)
      setSelectedFiles(filesArray)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted")
  }

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Pyydä maksuton tarjous</h1>
            <p className="text-zinc-400 text-lg">
              Täytä tiedot ja kuvaile auton tarve, niin arvioimme työn hinnan mahdollisimman tarkasti.
            </p>
          </div>

          <Card className="bg-zinc-100 border-zinc-300">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Yhteystiedot</h2>

                  <div>
                    <Label htmlFor="name" className="text-zinc-900">
                      Nimi
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      className="bg-white border-zinc-300 text-zinc-900"
                      placeholder="Etu- ja sukunimi"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-zinc-900">
                      Sähköposti
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="bg-white border-zinc-300 text-zinc-900"
                      placeholder="nimi@esimerkki.fi"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-zinc-900">
                      Puhelinnumero
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      className="bg-white border-zinc-300 text-zinc-900"
                      placeholder="040 123 4567"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Tarpeen tiedot</h2>

                  <div>
                    <Label className="text-zinc-900 mb-3 block">Valitse sopiva palvelu</Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="poedercoaten" />
                        <label htmlFor="poedercoaten" className="text-zinc-900 cursor-pointer">
                          Määräaikaishuolto
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cnc" />
                        <label htmlFor="cnc" className="text-zinc-900 cursor-pointer">
                          Vikadiagnostiikka
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="richten" />
                        <label htmlFor="richten" className="text-zinc-900 cursor-pointer">
                          Jarrutyöt
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="ontlakken" />
                        <label htmlFor="ontlakken" className="text-zinc-900 cursor-pointer">
                          Moottori- tai alustakorjaus
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="reparatie" />
                        <label htmlFor="reparatie" className="text-zinc-900 cursor-pointer">
                          Rengastyöt
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="anders" onCheckedChange={(checked) => setShowOtherService(checked as boolean)} />
                        <label htmlFor="anders" className="text-zinc-900 cursor-pointer">
                          Muu
                        </label>
                      </div>
                      {showOtherService && (
                        <Input
                          type="text"
                          className="bg-white border-zinc-300 text-zinc-900 mt-2"
                          placeholder="Kuvaile tarvitsemasi työ"
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Auton tiedot</h2>

                  <div>
                    <Label htmlFor="aantal" className="text-zinc-900">
                      Kuinka pian työ olisi ajankohtainen?
                    </Label>
                    <Select>
                      <SelectTrigger id="aantal" className="bg-white border-zinc-300 text-zinc-900">
                        <SelectValue placeholder="Valitse ajankohta" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Mahdollisimman pian</SelectItem>
                        <SelectItem value="2">Tämän viikon aikana</SelectItem>
                        <SelectItem value="3">1-2 viikon sisällä</SelectItem>
                        <SelectItem value="4">Ei kiirettä</SelectItem>
                        <SelectItem value="anders">Muu ajankohta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="maat" className="text-zinc-900">
                      Auton merkki ja malli
                    </Label>
                    <Input
                      id="maat"
                      type="text"
                      className="bg-white border-zinc-300 text-zinc-900"
                      placeholder="Esim. Toyota Corolla 1.8 Hybrid"
                    />
                  </div>

                  <div>
                    <Label htmlFor="merk" className="text-zinc-900">
                      Rekisterinumero tai lisätiedot (valinnainen)
                    </Label>
                    <Input
                      id="merk"
                      type="text"
                      className="bg-white border-zinc-300 text-zinc-900"
                      placeholder="Esim. ABC-123 tai viimeisin huolto tehty 11/2025"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Lisää kuvia</h2>

                  <div>
                    <Label htmlFor="photos" className="text-zinc-900">
                      Lataa kuvia viasta, huoltotarpeesta tai autosta (enintään 5 kuvaa)
                    </Label>
                    <div className="mt-2">
                      <label
                        htmlFor="photos"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-zinc-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-zinc-50 transition-colors"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-10 h-10 mb-2 text-zinc-500" />
                          <p className="mb-2 text-sm text-zinc-700">
                            <span className="font-semibold">Lataa tiedostot klikkaamalla</span> tai vedä kuvat tähän
                          </p>
                          <p className="text-xs text-zinc-500">PNG, JPG tai JPEG (max. 5 tiedostoa)</p>
                        </div>
                        <input
                          id="photos"
                          type="file"
                          className="hidden"
                          multiple
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                    {selectedFiles.length > 0 && (
                      <div className="mt-2">
                        <p className="text-sm text-zinc-700">{selectedFiles.length} tiedosto(a) valittu:</p>
                        <ul className="text-xs text-zinc-600 mt-1">
                          {selectedFiles.map((file, index) => (
                            <li key={index}>{file.name}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <p className="text-sm text-zinc-600 mt-2">Selkeät kuvat nopeuttavat tarkan arvion tekemistä.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Kuvaus</h2>

                  <div>
                    <Label htmlFor="description" className="text-zinc-900">
                      Kuvaile vika, oire tai toivottu työ mahdollisimman tarkasti
                    </Label>
                    <Textarea
                      id="description"
                      rows={5}
                      className="bg-white border-zinc-300 text-zinc-900"
                      placeholder="Esim. moottorin vikavalo syttyi, jarrut pitävät ääntä tai haluan tarjouksen vuosihuollosta..."
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-6">
                  Lähetä tarjouspyyntö
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
