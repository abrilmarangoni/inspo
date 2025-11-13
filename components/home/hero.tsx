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
        <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10 flex-1 flex flex-col">
          <div className="mx-auto max-w-4xl text-center flex-1 flex flex-col justify-center">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <h1 id="main-title" className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                {t("hero.title")}{" "}
                <img 
                  src="/logo.png" 
                  alt="ZalesMachine" 
                  className="h-12 sm:h-16 lg:h-20 inline-block align-middle"
                  style={{ filter: "drop-shadow(0 0 8px rgba(255, 107, 53, 0.9))" }}
                />
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground space-y-4"
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center gap-6 mt-12 md:mt-16"
            >
              {/* Schedule a call button */}
              <div className="flex items-center justify-center">
                <a href="/docs/components/theme-toggle-animations">
                  <div className="group cursor-pointer border border-border bg-card gap-2 h-[60px] flex items-center p-[10px] rounded-full">
                    <div className="border border-border bg-primary h-[40px] rounded-full flex items-center justify-center text-primary-foreground">
                      <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
                        {t("hero.schedule")}
                      </p>
                    </div>
                    <div className="text-muted-foreground size-[24px] flex items-center justify-center rounded-full border-2 border-border">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
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
