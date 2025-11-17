"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { DataFlowDiagram } from "@/components/data-flow-diagram"
import { useLanguage } from "@/contexts/language-context"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <section className="relative overflow-hidden min-h-screen flex flex-col">
        <div className="container mx-auto px-4 pt-12 sm:pt-16 pb-24 sm:pb-32 relative z-10 flex-1 flex flex-col">
          <div className="mx-auto max-w-5xl lg:max-w-6xl text-center flex-1 flex flex-col justify-start">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
              style={{ marginTop: "30px" }}
            >
              <h1 id="main-title" className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                {t("hero.title")}{" "}
                <img 
                  src="/logo.png" 
                  alt="ZalesMachine" 
                  className="h-12 sm:h-16 lg:h-20 inline-block align-middle"
                />
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-4 max-w-4xl lg:max-w-5xl text-lg text-muted-foreground space-y-6"
            >
              <p>
                {t("hero.description1")}
              </p>
              <p>
                {t("hero.description2")}
              </p>
            </motion.div>

            {/* Flow Diagram */}
            <DataFlowDiagram />

            {/* Book a call button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center gap-6 mt-8"
            >
              <div className="flex items-center justify-center gap-2">
                <a href="/docs/components/theme-toggle-animations">
                  <div className="group cursor-pointer bg-primary h-[44px] rounded-lg flex items-center justify-center text-primary-foreground px-5 shadow-lg">
                    <p className="font-medium tracking-tight flex items-center gap-2 justify-center text-sm">
                      {t("hero.schedule")}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right transition-transform duration-200 group-hover:rotate-45"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  )
}
