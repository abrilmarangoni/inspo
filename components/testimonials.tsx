"use client"

import { useEffect } from "react"
import Script from "next/script"
import { SectionDivider } from "@/components/section-divider"

declare global {
  interface Window {
    Senja?: {
      init: () => void
    }
  }
}

export function TestimonialsSection() {
  useEffect(() => {
    // Senja widget will auto-initialize when script loads
    const initWidget = () => {
      // Check if Senja script has loaded and initialize embed
      if (typeof window !== "undefined" && window.Senja) {
        window.Senja.init()
      }
    }

    // Run after a delay to ensure script has loaded
    const timer = setTimeout(initWidget, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Script
        src="https://widget.senja.io/widget/7120adc0-7e87-438f-bf7d-435059d4728c/platform.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Senja widget script loaded successfully")
          // Initialize Senja after script loads
          if (typeof window !== "undefined" && window.Senja) {
            window.Senja.init()
          }
        }}
        onError={(e) => {
          console.error("Error loading Senja widget:", e)
        }}
      />
      <section id="testimonials" className="mb-24 relative overflow-hidden pt-16">
        <SectionDivider />
        <div className="mx-auto max-w-7xl mt-12">
          <div className="mx-auto max-w-[540px]">
            <div className="flex justify-center">
              <button
                type="button"
                className="group relative z-[60] mx-auto rounded-full border border-white/20 bg-white/5 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
              >
                <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#e78a53] to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
                <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#e78a53] to-transparent shadow-2xl transition-all duration-500 group-hover:h-px"></div>
                <span className="relative text-white">Testimonials</span>
              </button>
            </div>
            <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] __className_bb4e88 relative z-10">
              What our users say
            </h2>

            <p className="mt-5 relative z-10 text-center text-lg text-zinc-500">
              From intuitive design to powerful features, our app has become an essential tool for users around the world.
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
