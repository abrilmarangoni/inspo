"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { DataFlowDiagram } from "@/components/data-flow-diagram"
import { useLanguage } from "@/contexts/language-context"
import { interTight } from "@/lib/fonts"

export default function MobileHero() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex flex-col pt-0">
      <div className="container mx-auto px-4 pt-8 pb-12 relative z-10 flex-1 flex flex-col">
        <div className="mx-auto max-w-full text-center flex-1 flex flex-col justify-start">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
            style={{ marginTop: "20px" }}
          >
            <h1 className="text-3xl font-extralight tracking-tight text-foreground px-2">
              {t("hero.title")} <span className="bg-gradient-to-r from-[#e0c5f0] to-[#b3d5ff] bg-clip-text text-transparent" style={{ fontWeight: 200, fontFamily: 'inherit', fontSize: 'inherit', letterSpacing: 'inherit' }}>ZalesMachine</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-6 max-w-full text-base text-muted-foreground space-y-4 px-4"
          >
            <p className="text-sm leading-relaxed">
              {t("hero.description1")}
            </p>
            <p className="text-sm leading-relaxed">
              {t("hero.description2")}
            </p>
          </motion.div>

          {/* Flow Diagram - Simplified for mobile */}
          <div className="mb-6 px-2">
            <DataFlowDiagram />
          </div>

          {/* Book a call and Learn more buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-4 mt-4 px-4"
          >
            <div className="flex flex-col items-center justify-center gap-4 w-full">
              {/* Book a call button */}
              <a href="#pricing" className="group w-full max-w-xs">
                <div className={`${interTight.className} cursor-pointer bg-white h-[44px] rounded-lg flex items-center justify-center px-6 shadow-lg active:bg-gray-50 transition-colors w-full`}>
                  <p className="font-extralight tracking-tight flex items-center gap-2 justify-center text-sm text-gray-900">
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
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </p>
                </div>
              </a>
              {/* Learn more button */}
              <a href="#features" className="group">
                <div className={`${interTight.className} cursor-pointer flex items-center justify-center`}>
                  <p className="font-extralight tracking-tight flex items-center gap-2 justify-center text-sm text-gray-300 active:text-white transition-colors">
                    Learn more
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
                      className="transition-transform duration-200 group-hover:translate-x-1"
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
  )
}

