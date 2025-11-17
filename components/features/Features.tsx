"use client"

import React, { useEffect, useRef, useState } from "react"
import { FeatureCard } from "./FeatureCard"
import { useFeaturesData } from "./featuresData"

const countries = [
  "Argentina",
  "México",
  "USA",
  "Colombia",
  "Chile",
  "España",
  "Brasil",
  "Perú",
  "Ecuador",
  "Venezuela",
  "Uruguay",
  "Paraguay",
  "Bolivia",
  "Costa Rica",
  "Panamá",
  "Guatemala",
  "Honduras",
  "Francia",
  "Alemania",
  "Italia",
  "Reino Unido",
  "Portugal",
  "Países Bajos",
  "Bélgica",
  "Suiza",
  "Austria",
  "Suecia",
  "Noruega",
  "Dinamarca",
  "Polonia",
]

export default function Features() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const features = useFeaturesData()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return

      const cardsCount = features.length
      const viewportHeight = window.innerHeight
      const sectionHeight = cardsCount * viewportHeight

      const sectionTop = section.offsetTop
      const sectionBottom = sectionTop + sectionHeight
      const scrollY = window.scrollY

      if (scrollY <= sectionTop) {
        setActiveIndex(0)
        return
      }

      if (scrollY >= sectionBottom - viewportHeight) {
        setActiveIndex(cardsCount - 1)
        return
      }

      const usableScroll = sectionHeight - viewportHeight
      const internalScroll = scrollY - sectionTop
      const progress = internalScroll / usableScroll

      let index = Math.floor(progress * cardsCount)
      if (index < 0) index = 0
      if (index > cardsCount - 1) index = cardsCount - 1

      setActiveIndex(index)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative w-full"
      style={{ height: `${features.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div className="w-1/2 px-16 flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Features</p>
          <h2 className="text-4xl font-semibold text-zinc-50">ZalesMachine Features</h2>
          <p className="text-zinc-400 max-w-xl">
            While you scroll, the right-hand side cycles through our core systems—RevOps, Content, Outbound and
            Global enablement—without the page itself moving down.
          </p>
        </div>

        <div className="w-1/2 px-16 flex items-center justify-center">
          <div className="w-full max-w-2xl transition-all duration-400 ease-out">
            <FeatureCard
              feature={features[activeIndex]}
              countries={countries}
              accentColor={activeIndex % 2 === 0 ? "#4ca1f5" : "#b57edc"}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
