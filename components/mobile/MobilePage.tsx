'use client'

import { useState, useEffect } from "react"
import { Globe } from "lucide-react"
import { inter, interTight } from "@/lib/fonts"
import { LanguageProvider, useLanguage } from "@/contexts/language-context"
import { SectionDivider } from "@/components/section-divider"

// Importar componentes móviles (los crearemos después)
import MobileHero from "./MobileHero"
import MobileEmailGenerator from "./MobileEmailGenerator"
import MobileFeatures from "./MobileFeatures"
import MobileFullStackAI from "./MobileFullStackAI"
import MobileVideoSection from "./MobileVideoSection"
import MobileROI from "./MobileROI"
import MobilePricing from "./MobilePricing"
import MobileTestimonials from "./MobileTestimonials"
import MobileFAQ from "./MobileFAQ"
import { StickyFooter } from "@/components/sticky-footer"

function MobileContent() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMobileNavClick = (elementId: string) => {
    setIsMobileMenuOpen(false)
    setTimeout(() => {
      const element = document.getElementById(elementId)
      if (element) {
        const headerOffset = 100
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  return (
    <>
      <div className="min-h-screen w-full relative bg-black">
        {/* Mobile Header */}
        <header className="fixed top-4 left-4 right-4 z-[9999] flex w-auto flex-row items-center justify-between rounded-lg bg-background/80 backdrop-blur-sm border border-border/40 shadow-lg px-4 py-4">
          <div className="flex items-center justify-center gap-2">
            <img 
              src="/image13.png" 
              alt="ZalesMachine" 
              className="h-8 object-contain"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setLanguage(language === "en" ? "es" : "en")
              }}
              className={`${interTight.className} flex items-center gap-1.5 rounded-md border border-border/50 bg-background/50 hover:bg-background/80 transition-colors font-extralight text-foreground cursor-pointer px-2 py-1 text-xs`}
              aria-label="Change language"
              type="button"
            >
              <Globe className="w-3 h-3" />
              <span>{language === "en" ? "EN" : "ES"}</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-background/50 border border-border/50 transition-colors hover:bg-background/80"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col items-center justify-center w-4 h-4 space-y-0.5">
                <span
                  className={`block w-3 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1" : ""}`}
                ></span>
                <span
                  className={`block w-3 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`block w-3 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""}`}
                ></span>
              </div>
            </button>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm">
            <div className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl p-6">
              <nav className="flex flex-col space-y-3">
                <button
                  onClick={() => handleMobileNavClick("features")}
                  className={`${interTight.className} text-left px-4 py-3 text-base font-extralight text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50`}
                >
                  {t("nav.features")}
                </button>
                <button
                  onClick={() => handleMobileNavClick("pricing")}
                  className={`${interTight.className} text-left px-4 py-3 text-base font-extralight text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50`}
                >
                  {t("nav.pricing")}
                </button>
                <button
                  onClick={() => handleMobileNavClick("testimonials")}
                  className={`${interTight.className} text-left px-4 py-3 text-base font-extralight text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50`}
                >
                  {t("nav.testimonials")}
                </button>
                <button
                  onClick={() => handleMobileNavClick("faq")}
                  className={`${interTight.className} text-left px-4 py-3 text-base font-extralight text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50`}
                >
                  {t("nav.faq")}
                </button>
                <a
                  href="/team"
                  className={`${interTight.className} text-left px-4 py-3 text-base font-extralight text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.team")}
                </a>
                <div className="border-t border-border/50 pt-4 mt-4">
                  <a
                    href="#pricing"
                    className={`${interTight.className} block px-4 py-3 text-base font-extralight text-center text-white rounded-lg transition-all duration-200 cursor-pointer`}
                    style={{
                      background: "linear-gradient(to bottom, rgba(181, 126, 220, 0.9), rgba(181, 126, 220, 0.8))",
                      boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.6), 0 0 20px rgba(181, 126, 220, 0.3)",
                    }}
                    onClick={(e) => {
                      e.preventDefault()
                      setIsMobileMenuOpen(false)
                      setTimeout(() => {
                        const element = document.getElementById("pricing")
                        if (element) {
                          const headerOffset = 100
                          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                          const offsetPosition = elementPosition - headerOffset

                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth",
                          })
                        }
                      }, 100)
                    }}
                  >
                    {t("nav.contact")}
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <div className="relative w-full pt-24">
          <MobileHero />
        </div>

        {/* Email Generator Section */}
        <div>
          <MobileEmailGenerator />
        </div>

        {/* Section Divider */}
        <div className="relative w-full">
          <SectionDivider />
        </div>

        {/* Features Section */}
        <div id="features" className="py-12" style={{ backgroundColor: '#171717' }}>
          <MobileFeatures />
        </div>

        {/* Section Divider */}
        <div className="relative w-full">
          <SectionDivider />
        </div>

        {/* Full Stack AI Solutions Section */}
        <div id="full-stack-ai-solutions">
          <MobileFullStackAI />
        </div>

        {/* Video Section */}
        <div className="py-12">
          <MobileVideoSection />
        </div>

        {/* Section Divider */}
        <div className="relative w-full">
          <SectionDivider />
        </div>

        {/* ROI Calculator Section */}
        <div className="py-12" style={{ backgroundColor: '#171717' }}>
          <MobileROI />
        </div>

        {/* Section Divider */}
        <div className="relative w-full">
          <SectionDivider />
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="py-12">
          <MobilePricing />
        </div>

        {/* Section Divider */}
        <div className="relative w-full">
          <SectionDivider />
        </div>

        {/* Testimonials Section */}
        <div id="testimonials" className="py-12" style={{ backgroundColor: '#171717' }}>
          <MobileTestimonials />
        </div>

        {/* Section Divider */}
        <div className="relative w-full">
          <SectionDivider />
        </div>

        {/* FAQ Section */}
        <div id="faq" className="py-12" style={{ backgroundColor: '#000000' }}>
          <MobileFAQ />
        </div>

        {/* Sticky Footer */}
        <StickyFooter />
      </div>
    </>
  )
}

export default function MobilePage() {
  const [language, setLanguage] = useState<"en" | "es">("en")
  
  const handleLanguageChange = (newLang: "en" | "es") => {
    setLanguage(newLang)
  }
  
  return (
    <LanguageProvider language={language} setLanguage={handleLanguageChange}>
      <MobileContent />
    </LanguageProvider>
  )
}

