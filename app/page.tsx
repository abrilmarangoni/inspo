"use client"
import { useState, useEffect } from "react"
import { Globe } from "lucide-react"
import { geist } from "@/lib/fonts"
import Hero from "@/components/home/hero"
import Features from "@/components/features"
import { VideoSection } from "@/components/video-section"
import OutboundFails from "@/components/outbound-fails"
import { TestimonialsSection } from "@/components/testimonials"
import { FAQSection } from "@/components/faq-section"
import { PricingSection } from "@/components/pricing-section"
import { ROICalculator } from "@/components/roi-calculator"
import { StickyFooter } from "@/components/sticky-footer"
import { LanguageProvider, useLanguage } from "@/contexts/language-context"
import { BootLoader } from "@/components/boot-loader/BootLoader"
import { AnimatePresence, motion } from "framer-motion"
import { SectionDivider } from "@/components/section-divider"

function HomeContent() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  
  // Boot loader state - aparece en cada reload
  const [showBoot, setShowBoot] = useState(true)

  const handleBootFinish = () => {
    setShowBoot(false)
  }

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
    <>
      <AnimatePresence>
        {showBoot && <BootLoader onFinish={handleBootFinish} />}
      </AnimatePresence>
      <div className={`min-h-screen w-full relative bg-black transition-opacity duration-500 ${showBoot ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      {/* Sección con fondo azul hasta el divisor */}
      <div className="relative w-full">
        {/* Fondo azul con sombra oscura - luz más ancha */}
        <div
          className="absolute inset-0 z-0 min-h-screen"
          style={{
            background: `
              radial-gradient(ellipse 90% 30% at 50% 0%, rgba(76, 161, 245, 0.22), rgba(76, 161, 245, 0.12) 35%, rgba(76, 161, 245, 0.04) 55%, transparent 70%),
              radial-gradient(ellipse 100% 35% at 50% 25%, rgba(76, 161, 245, 0.18), rgba(76, 161, 245, 0.08) 50%, transparent 70%),
              radial-gradient(ellipse 100% 60% at 50% 100%, rgba(0, 0, 0, 0.9), transparent 70%),
              #000000
            `,
          }}
        />
        {/* Capa adicional de luz azul - más ancha */}
        <div
          className="absolute inset-0 z-0 min-h-screen"
          style={{
            background: "radial-gradient(ellipse 100% 50% at 50% 15%, rgba(76, 161, 245, 0.12), transparent 60%)",
            pointerEvents: "none",
          }}
        />

        {/* Desktop Header */}
      <header
        className={`sticky top-6 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-lg bg-background/80 md:flex backdrop-blur-sm border border-border/40 shadow-lg transition-all duration-300 ${
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
            className={`flex items-center gap-1.5 rounded-md border border-border/50 bg-background/50 hover:bg-background/80 transition-colors font-medium text-foreground cursor-pointer whitespace-nowrap ${
              isScrolled ? "px-2 py-1 text-xs" : "px-2.5 py-1.5 text-sm"
            }`}
            aria-label="Change language"
            type="button"
          >
            <Globe className={`${isScrolled ? "w-3 h-3" : "w-3.5 h-3.5"}`} />
            <span>{language === "en" ? "EN" : "ES"}</span>
          </button>
          <a
            href="#pricing"
            className={`${geist.className} rounded-md font-medium relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center text-white px-5 py-2.5 text-base`}
            style={{
              background: "linear-gradient(to bottom, rgba(181, 126, 220, 0.9), rgba(181, 126, 220, 0.8))",
              boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.6), 0 0 20px rgba(181, 126, 220, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 6px 20px 0 rgba(0, 0, 0, 0.7), 0 0 30px rgba(181, 126, 220, 0.4)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 14px 0 rgba(0, 0, 0, 0.6), 0 0 20px rgba(181, 126, 220, 0.3)"
            }}
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

      <header className="sticky top-6 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-lg bg-background/80 backdrop-blur-sm border border-border/40 shadow-lg md:hidden px-5 py-4">
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
                  className="flex items-center justify-center gap-1.5 px-2.5 py-2 text-sm font-medium border border-border/50 bg-background/50 hover:bg-background/80 transition-colors rounded-lg text-foreground relative z-50 cursor-pointer"
                  aria-label="Change language"
                  type="button"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{language === "en" ? "English" : "Español"}</span>
                </button>
                <a
                  href="#pricing"
                  className={`${geist.className} px-4 py-3 text-lg font-medium text-center text-white rounded-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer`}
                  style={{
                    background: "linear-gradient(to bottom, rgba(181, 126, 220, 0.9), rgba(181, 126, 220, 0.8))",
                    boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.6), 0 0 20px rgba(181, 126, 220, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 6px 20px 0 rgba(0, 0, 0, 0.7), 0 0 30px rgba(181, 126, 220, 0.4)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 4px 14px 0 rgba(0, 0, 0, 0.6), 0 0 20px rgba(181, 126, 220, 0.3)"
                  }}
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
      </div>

      {/* Section Divider */}
      <div className="relative w-full">
        <SectionDivider />
      </div>

      {/* Features Section */}
      <div id="features" className="pt-8 pb-16 md:pt-12 md:pb-24" style={{ backgroundColor: '#171717' }}>
        <Features />
      </div>

      {/* Section Divider */}
      <div className="relative w-full">
        <SectionDivider />
      </div>

      {/* Outbound Fails Section */}
      <div id="outbound-fails">
        <OutboundFails />
      </div>

      {/* Video Section */}
      <div className="py-16 md:py-24">
        <VideoSection />
      </div>

      {/* Section Divider */}
      <div className="relative w-full">
        <SectionDivider />
      </div>

      {/* ROI Calculator Section */}
      <div className="py-16 md:py-24" style={{ backgroundColor: '#171717' }}>
        <ROICalculator />
      </div>

      {/* Section Divider */}
      <div className="relative w-full">
        <SectionDivider />
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-16 md:py-24">
        <PricingSection />
      </div>

      {/* Section Divider */}
      <div className="relative w-full">
        <SectionDivider />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="py-16 md:py-24" style={{ backgroundColor: '#171717' }}>
        <TestimonialsSection />
      </div>

      {/* Section Divider */}
      <div className="relative w-full">
        <SectionDivider />
      </div>

      {/* FAQ Section */}
      <div id="faq" className="py-16 md:py-24" style={{ backgroundColor: '#000000' }}>
        <FAQSection />
      </div>

      {/* Sticky Footer */}
      <StickyFooter />
    </div>
    </>
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
