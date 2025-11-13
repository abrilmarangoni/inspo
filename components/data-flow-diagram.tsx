"use client"

import { useEffect, useState } from "react"
import { Database, Server, Cloud, Activity, HardDrive, Network } from "lucide-react"

interface FlowParticle {
  id: number
  delay: number
  duration: number
}

export function DataFlowDiagram() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Input sources (left side)
  const inputSources = [
    { icon: Database, label: "Database", color: "text-chart-1" },
    { icon: Cloud, label: "Cloud", color: "text-chart-2" },
    { icon: Server, label: "Servers", color: "text-chart-3" },
  ]

  // Output destinations (right side)
  const outputDestinations = [
    { icon: Activity, label: "Analytics", color: "text-chart-1" },
    { icon: Network, label: "Network", color: "text-chart-2" },
    { icon: HardDrive, label: "Storage", color: "text-secondary" },
  ]

  // Generate flowing particles with random delays
  const generateParticles = (count: number): FlowParticle[] => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
    }))
  }

  const leftParticles = generateParticles(9)
  const rightParticles = generateParticles(9)

  if (!mounted) {
    return null
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="relative flex items-center justify-center gap-12 lg:gap-24">
        {/* Left Side - Input Sources */}
        <div className="flex flex-col gap-4 lg:gap-6 flex-1 items-end">
          {inputSources.map((source, index) => (
            <div
              key={index}
              className="flex items-center justify-end gap-4 group"
              style={{
                animation: "fadeIn 0.6s ease-out",
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "backwards",
              }}
            >
              <div className="text-right">
                <div className={`text-sm font-mono ${source.color} group-hover:brightness-125 transition-all`}>
                  {source.label}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {"{"}
                  {index + 1}
                  {"}"}
                </div>
              </div>
              <div
                className={`${source.color} p-3 rounded-lg bg-card border-2 border-current/20 group-hover:border-current/40 transition-all group-hover:scale-110`}
              >
                <source.icon className="w-6 h-6 lg:w-7 lg:h-7" />
              </div>
              {/* Connection line to center */}
              <div className="hidden lg:block relative w-48 h-0.5">
                <div className={`absolute inset-0 bg-gradient-to-r from-current/40 to-transparent ${source.color}`} />
                {leftParticles.slice(index * 3, (index + 1) * 3).map((particle) => (
                  <div
                    key={particle.id}
                    className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${source.color}`}
                    style={{
                      animation: `flow-to-center ${particle.duration}s ease-in-out infinite`,
                      animationDelay: `${particle.delay}s`,
                      boxShadow: "0 0 10px currentColor",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Center - ZM Power Core */}
        <div className="relative flex items-center justify-center flex-shrink-0">
          {/* Outer rotating ring */}
          <div
            className="absolute w-32 h-32 lg:w-36 lg:h-36 rounded-full border-2 border-primary/30"
            style={{ animation: "rotate-center 20s linear infinite" }}
          />
          {/* Middle rotating ring */}
          <div
            className="absolute w-24 h-24 lg:w-28 lg:h-28 rounded-full border-2 border-accent/30"
            style={{ animation: "rotate-center 15s linear infinite reverse" }}
          />
          {/* Pulsing glow effect */}
          <div
            className="absolute w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-primary/20 blur-2xl"
            style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
          />
          {/* Core container */}
          <div className="relative z-10 flex flex-col items-center justify-center w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-card border-4 border-primary shadow-[0_0_50px_rgba(124,58,237,0.5)]">
            <div className="text-2xl lg:text-3xl font-bold font-mono text-primary tracking-wider">ZM</div>
            <div className="absolute -bottom-8 text-xs text-muted-foreground font-mono">POWER CORE</div>
          </div>
          {/* Corner accents */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary/50" />
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary/50" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-primary/50" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary/50" />
        </div>

        {/* Right Side - Output Destinations */}
        <div className="flex flex-col gap-4 lg:gap-6 flex-1 items-start">
          {outputDestinations.map((dest, index) => (
            <div
              key={index}
              className="flex items-center gap-4 group"
              style={{
                animation: "fadeIn 0.6s ease-out",
                animationDelay: `${index * 0.1 + 0.2}s`,
                animationFillMode: "backwards",
              }}
            >
              {/* Connection line from center */}
              <div className="hidden lg:block relative w-48 h-0.5">
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent to-current/40 ${dest.color}`} />
                {rightParticles.slice(index * 3, (index + 1) * 3).map((particle) => (
                  <div
                    key={particle.id}
                    className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${dest.color}`}
                    style={{
                      animation: `flow-from-center ${particle.duration}s ease-in-out infinite`,
                      animationDelay: `${particle.delay}s`,
                      boxShadow: "0 0 10px currentColor",
                    }}
                  />
                ))}
              </div>
              <div
                className={`${dest.color} p-3 rounded-lg bg-card border-2 border-current/20 group-hover:border-current/40 transition-all group-hover:scale-110`}
              >
                <dest.icon className="w-6 h-6 lg:w-7 lg:h-7" />
              </div>
              <div className="text-left">
                <div className={`text-sm font-mono ${dest.color} group-hover:brightness-125 transition-all`}>
                  {dest.label}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {"<"}
                  {index + 1}
                  {"/>"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
