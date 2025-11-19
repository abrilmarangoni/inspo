'use client'

import { useEffect, useState, useRef } from 'react'
import { interTight } from '@/lib/fonts'

const emailText = `Subject: Typical Cold Email

The kind that gets deleted

GENERIC OPENING

"Hi [First Name], I hope this email finds you well..."

VAGUE VALUE PROPOSITION

"We help companies like yours increase efficiency..."

PUSHY CALL-TO-ACTION

"Can we schedule a quick 15-minute call this week?"

NO CREDIBILITY

"Trust me, you'll find this valuable..."`

const results = [
  { label: 'Response Rate', value: '2%' },
  { label: 'Conversion', value: '0.1%' },
  { label: 'Deleted', value: '95%' }
]

export default function EmailGeneratorSection() {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [showResults, setShowResults] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const sectionRef = useRef<HTMLElement>(null)

  // Intersection Observer para detectar cuando la sección está visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    // Solo iniciar la animación si la sección está visible
    if (!isInView) return

    if (currentIndex < emailText.length) {
      const char = emailText[currentIndex]
      
      let delay = Math.random() * 20 + 15 // 15-35ms
      
      if (currentIndex > 0 && emailText[currentIndex - 1] === '\n') {
        delay = Math.random() * 150 + 150 // 150-300ms
      }
      
      timeoutRef.current = setTimeout(() => {
        setDisplayedText((prev) => prev + char)
        setCurrentIndex((prev) => prev + 1)
      }, delay)
    } else {
      setShowResults(true)
      setTimeout(() => {
        setDisplayedText('')
        setCurrentIndex(0)
        setShowResults(false)
      }, 6000)
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [currentIndex, isInView])

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} className={`relative bg-black py-20 md:py-28 px-6 md:px-12 lg:px-20 ${interTight.className}`}>
      <div className="mx-auto max-w-[1100px]">
        <div className="text-center mb-20">
          <h1 className={`${interTight.className} bg-gradient-to-r from-[#e0c5f0] to-[#b3d5ff] bg-clip-text text-center text-4xl font-extralight tracking-tight text-transparent md:text-[54px] md:leading-[60px]`}>
            Why Most Outbounds Fail?
          </h1>
        </div>
        <div className="grid gap-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 items-center">
          {/* Left Column - Email Generator */}
          <div className="relative">
            <div className="email-generator-container relative overflow-hidden rounded-2xl bg-[#151515] p-8 shadow-[0_0_60px_rgba(0,0,0,0.6)] border border-white/5">
              {/* Subtle glare effect */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              {/* Editor Header */}
              <div className="mb-6 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-violet-400/60" />
                  <div className="h-3 w-3 rounded-full bg-violet-400/60" />
                  <div className="h-3 w-3 rounded-full bg-violet-400/60" />
                </div>
                <span className="ml-4 text-sm text-white/40">Failed Cold Email</span>
              </div>
              {/* Email Content */}
              <div className="font-mono text-[15px] leading-tight text-white/90">
                <pre className="whitespace-pre-wrap">
                  {displayedText.split('\n').map((line, index) => {
                    const isAllCaps = line.trim().length > 0 && line.trim() === line.trim().toUpperCase() && /^[A-Z\s:]+$/.test(line.trim());
                    return (
                      <span key={index} className={isAllCaps ? 'text-red-500' : ''}>
                        {line}
                        {index < displayedText.split('\n').length - 1 && '\n'}
                      </span>
                    );
                  })}
                </pre>
                {showResults && (
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
                    {results.map((result, index) => (
                      <span key={index}>
                        <span className="text-red-500 font-semibold">{result.value}</span>
                        <span className="text-white/70"> {result.label}</span>
                        {index < results.length - 1 && <span className="text-white/40 ml-3">|</span>}
                      </span>
                    ))}
                  </div>
                )}
                <span className={`inline-block ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
              </div>
            </div>
          </div>
          {/* Right Column - Title & CTA */}
          <div className="space-y-8 sticky top-0 self-start">
            <div className="space-y-6">
              <h2 className={`${interTight.className} text-3xl leading-none font-extralight tracking-tight text-white`}>
                The anatomy of failed outreach
              </h2>
              
              <div className="space-y-2">
                <p className={`${interTight.className} text-sm md:text-base text-white/65 leading-relaxed font-extralight`}>
                  — Generic templates that feel robotic
                </p>
                <p className={`${interTight.className} text-sm md:text-base text-white/65 leading-relaxed font-extralight`}>
                  — Vague value propositions that don't resonate
                </p>
                <p className={`${interTight.className} text-sm md:text-base text-white/65 leading-relaxed font-extralight`}>
                  — Pushy CTAs that trigger instant delete
                </p>
                <p className={`${interTight.className} text-sm md:text-base text-white/65 leading-relaxed font-extralight`}>
                  — No social proof or credibility signals
                </p>
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                className={`${interTight.className} cursor-pointer bg-white h-[44px] rounded-lg flex items-center justify-center px-6 shadow-lg hover:bg-gray-50 transition-colors`}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById("full-stack-ai-solutions")
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
                <p className="font-extralight tracking-tight flex items-center gap-2 justify-center text-sm text-gray-900">
                  How we solve it?
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
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

