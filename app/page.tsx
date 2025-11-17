"use client"
import { useState, useEffect } from "react"
import { Globe } from "lucide-react"
import Hero from "@/components/home/hero"
import Features from "@/components/features"
import { VideoSection } from "@/components/video-section"
import { TestimonialsSection } from "@/components/testimonials"
import { NewReleasePromo } from "@/components/new-release-promo"
import { FAQSection } from "@/components/faq-section"
import { PricingSection } from "@/components/pricing-section"
import { ROICalculator } from "@/components/roi-calculator"
import { StickyFooter } from "@/components/sticky-footer"
import { LanguageProvider, useLanguage } from "@/contexts/language-context"

function HomeContent() {
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
        const headerOffset = 120 // Account for sticky header height + margin
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
    <div className="min-h-screen w-full relative bg-black">
      {/* Pearl Mist Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(226, 232, 240, 0.12), transparent 60%), #000000",
        }}
      />

      {/* Desktop Header */}
      <header
        className={`sticky top-6 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-lg bg-background/95 md:flex backdrop-blur-md border border-border/50 shadow-lg transition-all duration-300 ${
          isScrolled ? "max-w-3xl px-4" : "max-w-5xl px-6"
        } py-4`}
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          perspective: "1000px",
        }}
      >
        <div
          className={`z-50 flex items-center justify-center gap-2 transition-all duration-300 ${
            isScrolled ? "ml-6" : "ml-6"
          }`}
        >
          <img 
            src="/image11.png" 
            alt="ZalesMachine" 
            className={`transition-all duration-300 ${
              isScrolled ? "h-8" : "h-10"
            } object-contain`}
          />
        </div>

        <div className={`absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-base font-medium text-muted-foreground transition duration-200 hover:text-foreground md:flex md:space-x-2 ${
          isScrolled ? "px-32" : "px-40"
        }`}>
          <a
            className="relative px-3 py-2 text-muted-foreground hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("features")
              if (element) {
                const headerOffset = 120 // Account for sticky header height + margin
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }
            }}
          >
            <span className="relative z-20 text-inherit">{t("nav.features")}</span>
          </a>
          <a
            className="relative px-3 py-2 text-muted-foreground hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("pricing")
              if (element) {
                const headerOffset = 120 // Account for sticky header height + margin
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }
            }}
          >
            <span className="relative z-20 text-inherit">{t("nav.pricing")}</span>
          </a>
          <a
            className="relative px-3 py-2 text-muted-foreground hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("testimonials")
              if (element) {
                const headerOffset = 120 // Account for sticky header height + margin
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }
            }}
          >
            <span className="relative z-20 text-inherit">{t("nav.testimonials")}</span>
          </a>
          <a
            className="relative px-3 py-2 text-muted-foreground hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("faq")
              if (element) {
                const headerOffset = 120 // Account for sticky header height + margin
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }
            }}
          >
            <span className="relative z-20 text-inherit">{t("nav.faq")}</span>
          </a>
        </div>

        <div className="flex items-center gap-3 relative z-50">
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setLanguage(language === "en" ? "es" : "en")
            }}
            className={`flex items-center gap-2 rounded-md border border-border/50 bg-background/50 hover:bg-background/80 transition-colors font-medium text-foreground cursor-pointer whitespace-nowrap ${
              isScrolled ? "px-3 py-1.5 text-sm" : "px-4 py-2.5 text-base"
            }`}
            aria-label="Change language"
            type="button"
          >
            <Globe className={`${isScrolled ? "w-4 h-4" : "w-5 h-5"}`} />
            <span>{language === "en" ? "EN" : "ES"}</span>
          </button>
          <a
            href="#pricing"
            className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-5 py-2.5 text-base"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("pricing")
              if (element) {
                const headerOffset = 120
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }
            }}
          >
            {t("nav.contact")}
          </a>
        </div>
      </header>

      <header className="sticky top-6 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-lg bg-background/95 backdrop-blur-md border border-border/50 shadow-lg md:hidden px-5 py-4">
        <div className="flex items-center justify-center gap-2 ml-4">
          <img 
            src="/image11.png" 
            alt="ZalesMachine" 
            className="h-10 object-contain"
          />
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-background/50 border border-border/50 transition-colors hover:bg-background/80"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden">
          <div className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl p-6">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleMobileNavClick("features")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                {t("nav.features")}
              </button>
              <button
                onClick={() => handleMobileNavClick("pricing")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                {t("nav.pricing")}
              </button>
              <button
                onClick={() => handleMobileNavClick("testimonials")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                {t("nav.testimonials")}
              </button>
              <button
                onClick={() => handleMobileNavClick("faq")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                {t("nav.faq")}
              </button>
              <div className="border-t border-border/50 pt-4 mt-4 flex flex-col space-y-3">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setLanguage(language === "en" ? "es" : "en")
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-3 text-lg font-medium border border-border/50 bg-background/50 hover:bg-background/80 transition-colors rounded-lg text-foreground relative z-50 cursor-pointer"
                  aria-label="Change language"
                  type="button"
                >
                  <Globe className="w-5 h-5" />
                  <span>{language === "en" ? "English" : "Español"}</span>
                </button>
                <a
                  href="#pricing"
                  className="px-4 py-3 text-lg font-bold text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground rounded-lg shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMobileMenuOpen(false)
                    setTimeout(() => {
                      const element = document.getElementById("pricing")
                      if (element) {
                        const headerOffset = 120
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
      <Hero />

      {/* Features Section */}
      <div id="features" className="py-16 md:py-24">
        <Features />
      </div>

      {/* Video Section */}
      <div className="py-16 md:py-24">
        <VideoSection />
      </div>

      {/* ROI Calculator Section */}
      <div className="py-16 md:py-24">
        <ROICalculator />
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-16 md:py-24">
        <PricingSection />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="py-16 md:py-24">
        <TestimonialsSection />
      </div>

      <div className="py-16 md:py-24">
        <NewReleasePromo />
      </div>

      {/* FAQ Section */}
      <div id="faq" className="py-16 md:py-24">
        <FAQSection />
      </div>

      {/* Sticky Footer */}
      <StickyFooter />
    </div>
  )
}

export default function Home() {
  const [language, setLanguage] = useState<"en" | "es">("en")
  
  const handleLanguageChange = (newLang: "en" | "es") => {
    setLanguage(newLang)
  }
  
  return (
    <LanguageProvider language={language} setLanguage={handleLanguageChange}>
      <HomeContent />
    </LanguageProvider>
  )
}
