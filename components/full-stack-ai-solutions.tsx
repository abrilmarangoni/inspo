'use client'

import { useState } from 'react'
import { interTight } from '@/lib/fonts'

type SolutionId = 'warm' | 'intent-event' | 'cold'

interface Solution {
  id: SolutionId
  title: string
  description: string
}

const solutions: Solution[] = [
  {
    id: 'warm',
    title: 'Warm Outbound:',
    description:
      'Prospects interact with your Social Media Content. Based on that, we developed a framework that allows you to scrape all the personal information and run email + LinkedIn campaigns automatically',
  },
  {
    id: 'intent-event',
    title: 'Intent–Event Outbound:',
    description:
      'Prospects attend or sponsor an event. We have developed a system that allows you to gather all the information related to the event and automate campaigns to reach all the sponsors, speakers, and attendees of the event.',
  },
  {
    id: 'cold',
    title: 'Cold Outbound:',
    description:
      'Prospects will be reached based on ICP, Buyer Persona, Industry, Company Size, etc. We developed the strategy for how to acquire leads that are relevant to your value proposition, and we set up automated LinkedIn + email campaigns',
  },
]

export default function FullStackAISolutions() {
  const [hoveredId, setHoveredId] = useState<SolutionId | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height
    setMousePosition({ x, y })
  }

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8" style={{ backgroundColor: '#000000' }}>
      <div className="mb-20 text-center">
        <h2 className={`${interTight.className} text-4xl font-extralight bg-gradient-to-r from-[#e0c5f0] to-[#b3d5ff] bg-clip-text text-transparent lg:text-5xl`}>
          What we developed
        </h2>
        <p className={`${interTight.className} mt-6 text-lg font-extralight text-white/60`}>
          Three automated frameworks to scale your outbound
        </p>
      </div>
      <div className="grid gap-20 lg:grid-cols-2 lg:gap-24">
        {/* Left Column - Text Blocks */}
        <div className="space-y-16">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="group cursor-pointer transition-all duration-300 ease-out"
              onMouseEnter={() => setHoveredId(solution.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`border-b pb-12 transition-all duration-300 ease-out ${
                  hoveredId === solution.id
                    ? 'translate-x-1 border-white/30 opacity-100 brightness-125'
                    : 'border-white/20 opacity-85'
                }`}
              >
                <h3
                  className={`${interTight.className} mb-5 text-2xl font-extralight transition-colors duration-300 ${
                    hoveredId === solution.id
                      ? 'text-white'
                      : 'text-white/85'
                  }`}
                >
                  {solution.title}
                </h3>
                <p
                  className={`${interTight.className} text-base font-extralight leading-relaxed transition-colors duration-300 ${
                    hoveredId === solution.id
                      ? 'text-white/95'
                      : 'text-white/70'
                  }`}
                >
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Right Column - 3D Graph */}
        <div className="relative flex items-center justify-center">
          <div
            className="relative h-[500px] w-full max-w-[500px] transition-transform duration-300 ease-out"
            onMouseMove={handleMouseMove}
            style={{
              transform: hoveredId
                ? `rotateX(${mousePosition.y * 2}deg) rotateY(${-mousePosition.x * 2}deg) scale(1.02)`
                : 'rotateX(0deg) rotateY(0deg) scale(1)',
            }}
          >
            {/* Base Graph Container */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zinc-900 to-black shadow-2xl" 
                 style={{ 
                   transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)',
                   transformStyle: 'preserve-3d'
                 }}>
              {/* Grid Background */}
              <div className="absolute inset-0 rounded-2xl opacity-20"
                   style={{
                     backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
                     backgroundSize: '40px 40px'
                   }} />
              
              {/* Warm Outbound Layer - Top */}
              <div
                className={`absolute left-1/2 top-[15%] -translate-x-1/2 transition-all duration-300 ease-out ${
                  hoveredId === 'warm'
                    ? 'opacity-100 scale-110'
                    : 'opacity-40'
                }`}
                style={{
                  filter: hoveredId === 'warm'
                    ? 'drop-shadow(0 0 20px rgba(146, 135, 255, 0.5))'
                    : 'drop-shadow(0 0 8px rgba(146, 135, 255, 0.15))',
                }}
              >
                <div className="flex gap-6">
                  <IconBlock color="violet" icon="⚡" />
                  <IconBlock color="violet" icon="🎯" />
                  <IconBlock color="violet" icon="🔧" />
                </div>
              </div>
              {/* Intent–Event Outbound Layer - Middle */}
              <div
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
                  hoveredId === 'intent-event'
                    ? 'opacity-100 scale-110'
                    : 'opacity-40'
                }`}
                style={{
                  filter: hoveredId === 'intent-event'
                    ? 'drop-shadow(0 0 20px rgba(124, 199, 255, 0.5))'
                    : 'drop-shadow(0 0 8px rgba(124, 199, 255, 0.15))',
                }}
              >
                <div className="flex gap-6">
                  <IconBlock color="cyan" icon="🧠" />
                  <IconBlock color="cyan" icon="🚀" />
                  <IconBlock color="cyan" icon="⚙️" />
                  <IconBlock color="cyan" icon="💎" />
                </div>
              </div>
              {/* Cold Outbound Layer - Bottom */}
              <div
                className={`absolute bottom-[15%] left-1/2 -translate-x-1/2 transition-all duration-300 ease-out ${
                  hoveredId === 'cold'
                    ? 'opacity-100 scale-110'
                    : 'opacity-40'
                }`}
                style={{
                  filter: hoveredId === 'cold'
                    ? 'drop-shadow(0 0 20px rgba(146, 135, 255, 0.5))'
                    : 'drop-shadow(0 0 8px rgba(146, 135, 255, 0.15))',
                }}
              >
                <div className="flex gap-6">
                  <IconBlock color="violet" icon="🔒" />
                  <IconBlock color="cyan" icon="📊" />
                  <IconBlock color="violet" icon="🗄️" />
                  <IconBlock color="cyan" icon="🔐" />
                  <IconBlock color="violet" icon="📈" />
                </div>
              </div>
              {/* Connecting Lines */}
              {hoveredId && (
                <svg className="absolute inset-0 h-full w-full opacity-30" style={{ pointerEvents: 'none' }}>
                  <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(146, 135, 255, 0.6)" />
                      <stop offset="100%" stopColor="rgba(124, 199, 255, 0.6)" />
                    </linearGradient>
                  </defs>
                  <line
                    x1="50%"
                    y1="25%"
                    x2="50%"
                    y2="75%"
                    stroke="url(#line-gradient)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="animate-pulse"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Buttons */}
      <div className="flex items-center justify-center gap-6 mt-16">
        <a 
          href="#pricing"
          className={`${interTight.className} cursor-pointer bg-white h-[44px] rounded-lg flex items-center justify-center px-6 shadow-lg hover:bg-gray-50 transition-colors`}
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
          <p className="font-extralight tracking-tight flex items-center gap-2 justify-center text-sm text-gray-900">
            Book a call
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
        </a>
      </div>
    </section>
  )
}

function IconBlock({ color, icon }: { color: 'violet' | 'cyan'; icon: string }) {
  return (
    <div
      className={`flex h-16 w-16 items-center justify-center rounded-lg border text-2xl transition-all duration-300 ${
        color === 'violet'
          ? 'border-purple-500/30 bg-purple-500/10'
          : 'border-cyan-500/30 bg-cyan-500/10'
      }`}
    >
      {icon}
    </div>
  )
}

