"use client"

import Image from "next/image"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useState } from "react"
import { title } from "process"

export default function Page() {
  const [activeSection, setActiveSection] = useState("portfolio")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const artworks = [
    {
      id: 1,
      src: "/Balaenoptera musculus2.jpg",
      title: "Phosphenes (series)",
      medium: "Ink and watercolours on paper",
      dimensions: "32 x 24 cm.",
      alt: "Phosphenes (series) Ink and watercolours on paper (32 x 24 cm.)",
    },
    {
      id: 2,
      src: "/Tousled.jpg",
      title: "Tousled (series)",
      medium: "Ink on paper",
      dimensions: "28 x 18 cm.",
      alt: "Abstract line pattern",
    },
    {
      id: 3,
      src: "/Convulsives2.jpg",
      title: "Convulsives 2 (series)",
      medium: "Charcoal and graphite on paper",
      dimensions: "59.4 x 42 cm.",
      alt: "Figure study",
    },
    {
      id: 4,
      src: "/Fibras2.jpg",
      title: "Fibras (series)",
      medium: "Ink and watercolours on paper",
      dimensions: "32 x 24 cm.",
      alt: "Line art with green accents",
    },
    {
      id: 5,
      src: "/Kraken.jpg",
      title: "Kraken",
      medium: "Ink and watercolours on paper",
      dimensions: "42 x 30 cm.",
      alt: "Drawing of a Kraken",
    },
    {
      id: 6,
      src: "/Limb.jpg",
      title: "Limb",
      medium: "Ink and watercolours on paper",
      dimensions: "21 x 29 cm.",
      alt: "Abstract floral line composition",
    },
    {
      id: 7,
      src: "/Limbless.jpg",
      title: "Limbless",
      medium: "Ink on paper",
      dimensions: "32 x 24 cm.",
      alt: "Ilustration of a snake",
    },
    {
      id: 8,
      src: "/Fiorire.jpg",
      title: "Fiorire",
      medium: "Ink on paper",
      dimensions: "21 x 29 cm.",
      alt: "Floral line art",
    },
    {
      id: 9,
      src: "/Educacion Vocacional1.jpg",
      title: "Educacion Vocacional (series)",
      medium: "Ink on paper",
      dimensions: "59.4 x 42 cm.",
      alt: "Illustration of a woman with text",
    },
    {
      id: 10,
      src: "/Tessuti.jpg",
      title: "Tessuti",
      medium: "Ink on paper",
      dimensions: "21 x 29 cm.",
      alt: "Floral line art",
    },
    {
      id: 11,
      src: "/Diga que le debo3.jpg",
      title: "Homenaje a Siniestro Total (series)",
      medium: "Graphite on paper",
      dimensions: "21 x 29 cm.",
      alt: "Drawing of a block of cheese",
    },
    {
      id: 12,
      src: "/Algal.jpg",
      title: "Algal",
      medium: "Ink and watercolours on paper",
      dimensions: "24 x 32 cm.",
      alt: "Illustration in blue watercolor",
    },
    {
      id: 13,
      src: "/Funghi.jpg",
      title: "Funghi",
      medium: "Ink on paper",
      dimensions: "32 x 24 cm.",
      alt: "Drawing of mushrooms",
    },
    {
      id: 14,
      src: "/Algae.jpg",
      title: "Algae (series)",
      medium: "Ink and watercolours on paper",
      dimensions: "24 x 32 cm.",
      alt: "Illustration in green watercolor",
    },
    {
      id: 15,
      src: "/Into the woods.jpg",
      title: "Into the woods (series)",
      medium: "Ink on paper",
      dimensions: "24 x 18 cm.",
      alt: "Illustration of wooden patherns",
    },
    {
      id: 16,
      src: "/Fans.jpg",
      title: "Fans",
      medium: "Ink on paper",
      dimensions: "24 x 18 cm.",
      alt: "Drawing of leaves",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <nav className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100" />
              <div>
                <h1 className="text-xl font-medium tracking-wide">CONNIE RAMIREZ</h1>
                <p className="text-sm text-gray-600">Visual Artist</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <button
                onClick={() => scrollToSection("portfolio")}
                className={`text-sm transition-colors ${activeSection === "portfolio" ? "text-black" : "text-gray-500 hover:text-gray-800"}`}
              >
                PORTFOLIO
              </button>
              <button
                onClick={() => scrollToSection("bio")}
                className={`text-sm transition-colors ${activeSection === "bio" ? "text-black" : "text-gray-500 hover:text-gray-800"}`}
              >
                BIO
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`text-sm transition-colors ${activeSection === "contact" ? "text-black" : "text-gray-500 hover:text-gray-800"}`}
              >
                CONTACT
              </button>
              <a
                href="https://instagram.com/connieram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4">
        <section id="portfolio" className="pt-32 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-max">
            {artworks.map((artwork) => (
              <div
                key={artwork.id}
                className="group relative aspect-square overflow-hidden bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <Image
                  src={artwork.src || "/placeholder.svg"}
                  alt={artwork.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
               <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-black text-center text-lg ">
                    <strong>{artwork.title}</strong><br />
                    <em>{artwork.medium}</em><br />
                    <span>{artwork.dimensions}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="bio" className="py-16 relative">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src="/selecionada.jpg"
                      alt="Background pattern"
                      fill
                      className="object-cover object-center opacity85"
                      priority
                    />
                  </div>
                  <div className="max-w-6xl mx-auto px-4 relative">
                    <div className="max-w-xl bg-white p-6 rounded-lg shadow-lg">
                      <h2 className="text-2xl font-medium mb-6">CONNIE RAMíREZ</h2>
                      <div className="space-y-4 text-gray-600">
                        <p>
                          I am a Colombian visual artist living in London. I have a BA in Visual Arts with an emphasis in
                          Plastic from Javeriana University in Bogota. I also have a Masters in Art History from the University
                          of Salamanca in Spain.
                        </p>
                        <p>
                          I have participated in several exhibitions in different countries like Colombia, USA, Spain, England,
                          Italy and Switzerland.
                        </p>
                        <p>
                          In the last few years I have been traveling the world capturing my experiences in photographs,
                          exploring different genres: landscapes, events and portraits.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

        <section id="testimonials" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-medium mb-12 text-center">What people say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="space-y-4">
                  <p className="text-gray-600 italic">
                    “ I first saw Connie's work on Instagram in short videos, I loved the way that she paints, with care and attention to detail but at the same time letting the creativity flow. I was lucky enough to purchase 2 of her art works and I truly love them, I love the lines and the colours.”
                  </p>
                  <div className="pt-4 border-t">
                    <p className="font-medium">Luana</p>
                    <p className="text-sm text-gray-500">UK</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="space-y-4">
                  <p className="text-gray-600 italic">
                    "I asked Connie to make a very special piece for my son's birthday. It was a portrait of him as baby. I could not be happier with the outcome, this was something very special and she made it beautifully. Thank you!"
                  </p>
                  <div className="pt-4 border-t">
                    <p className="font-medium">Tatiana</p>
                    <p className="text-sm text-gray-500">USA</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="space-y-4">
                  <p className="text-gray-600 italic">
                    "Connie's art is just wonderful! I have several of her works in my place and every time I have guests I receive comments about how beautiful and well made they look. Her artworks are unique, spontaneous, creative and varied."
                  </p>
                  <div className="pt-4 border-t">
                    <p className="font-medium">Marie</p>
                    <p className="text-sm text-gray-500">Canada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-medium mb-6">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input id="name" type="text" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </section>
        <footer className="py-16 text-center">
          <p className="text-gray-600 text-sm">© 2025 Connie Ramirez Visual Artist. London, UK. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}

