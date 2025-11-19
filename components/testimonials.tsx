"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { useLanguage } from "@/contexts/language-context"
import { interTight } from "@/lib/fonts"

declare global {
  interface Window {
    Senja?: {
      init: () => void
    }
  }
}

export function TestimonialsSection() {
  const { t } = useLanguage()
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    // Senja widget will auto-initialize when script loads
    const initWidget = () => {
      // Check if Senja script has loaded and initialize embed
      if (typeof window !== "undefined" && window.Senja && typeof window.Senja.init === "function") {
        try {
          window.Senja.init()
        } catch (error) {
          console.error("Error initializing Senja widget:", error)
        }
      }
    }

    if (scriptLoaded) {
      // Try multiple times for Safari compatibility
      const timer1 = setTimeout(initWidget, 500)
      const timer2 = setTimeout(initWidget, 1500)
      const timer3 = setTimeout(initWidget, 3000)
      
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
      }
    }
  }, [scriptLoaded])

  return (
    <>
      <Script
        src="https://widget.senja.io/widget/7120adc0-7e87-438f-bf7d-435059d4728c/platform.js"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        onLoad={() => {
          console.log("Senja widget script loaded successfully")
          setScriptLoaded(true)
          // Initialize Senja after script loads
          if (typeof window !== "undefined" && window.Senja && typeof window.Senja.init === "function") {
            try {
              window.Senja.init()
            } catch (error) {
              console.error("Error initializing Senja widget:", error)
            }
          }
        }}
        onError={(e) => {
          console.error("Error loading Senja widget:", e)
          // Continue even if script fails to load
        }}
        onReady={() => {
          setScriptLoaded(true)
        }}
      />
      <section id="testimonials" className="mb-24 relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl mt-12">
          <div className="mx-auto max-w-[540px]">
            <h2 className={`${interTight.className} bg-gradient-to-r from-[#e0c5f0] to-[#b3d5ff] bg-clip-text text-center text-4xl font-extralight tracking-tight text-transparent md:text-[54px] md:leading-[60px] relative z-10`}>
              {t("testimonials.title")}
            </h2>

            <p className="mt-5 relative z-10 text-center text-lg text-zinc-500">
              {t("testimonials.description")}
            </p>
          </div>

          <div className="my-16 flex justify-center w-full">
            <div 
              className="senja-embed" 
              data-id="7120adc0-7e87-438f-bf7d-435059d4728c"
              data-mode="shadow"
              data-lazyload="false"
              style={{ width: "100%", maxWidth: "1200px", minHeight: "400px" }}
            />
          </div>
        </div>
      </section>
    </>
  )
}
