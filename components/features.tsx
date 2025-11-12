"use client"

import type React from "react"

import { useTheme } from "next-themes"
import Earth from "./ui/globe"
import ScrambleHover from "./ui/scramble"
import { FollowerPointerCard } from "./ui/following-pointer"
import { motion, useInView } from "framer-motion"
import { Suspense, useEffect, useRef, useState } from "react"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { theme } = useTheme()
  const [isHovering, setIsHovering] = useState(false)
  const [isCliHovering, setIsCliHovering] = useState(false)
  const [isFeature3Hovering, setIsFeature3Hovering] = useState(false)
  const [isFeature4Hovering, setIsFeature4Hovering] = useState(false)
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0)

  const countries = ["Argentina", "México", "USA", "Europa", "Colombia", "Chile", "España", "Brasil"]

  const [baseColor, setBaseColor] = useState<[number, number, number]>([0.906, 0.541, 0.325]) // #e78a53 in RGB normalized
  const [glowColor, setGlowColor] = useState<[number, number, number]>([0.906, 0.541, 0.325]) // #e78a53 in RGB normalized

  const [dark, setDark] = useState<number>(theme === "dark" ? 1 : 0)

  useEffect(() => {
    setBaseColor([0.906, 0.541, 0.325]) // #e78a53
    setGlowColor([0.906, 0.541, 0.325]) // #e78a53
    setDark(theme === "dark" ? 1 : 0)
  }, [theme])

  useEffect(() => {
    // Solo rotar países cuando hay hover
    if (!isHovering) {
      // Resetear a Argentina cuando no hay hover
      setCurrentCountryIndex(0)
      return
    }

    // Rotar países cada 2 segundos cuando hay hover
    const interval = setInterval(() => {
      setCurrentCountryIndex((prev) => (prev + 1) % countries.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [isHovering, countries.length])

  return (
    <section id="features" className="text-foreground relative overflow-hidden py-12 sm:py-24 md:py-32">
      <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none"></div>
      <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent transition-all ease-in-out"></div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="container mx-auto flex flex-col items-center gap-6 sm:gap-12"
      >
        <h2
          className={cn(
            "via-foreground mb-8 bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]",
            geist.className,
          )}
        >
          Features
        </h2>
        <FollowerPointerCard
          title={
            <div className="flex items-center gap-2">
              <span>ZalesMachine</span>
            </div>
          }
        >
          <div className="cursor-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1400px] mx-auto">
              {/* AI RevOps Agents */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-8 shadow-xl transition-all ease-in-out"
                style={{ transform: "translateY(0px)" }}
                onMouseEnter={() => setIsCliHovering(true)}
                onMouseLeave={() => setIsCliHovering(false)}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(231, 138, 83, 0.6)",
                  boxShadow: "0 0 30px rgba(231, 138, 83, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-6 mb-6">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">AI RevOps Agents</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-4 text-sm">
                    <p className="leading-relaxed">
                      Sophisticated AI Agents that capture insights, update the CRM, route leads instantly, trigger next steps, and escalate exceptions—end to end.
                    </p>
                    <p className="leading-relaxed">
                      Outcomes: Faster speed-to-lead, a cleaner CRM, consistent follow-up, fewer manual hours per rep, and a more reliable pipeline.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none flex grow items-center justify-center select-none relative mt-4">
                  <div
                    className="relative w-full h-[400px] rounded-xl overflow-hidden"
                    style={{ borderRadius: "20px" }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src="https://framerusercontent.com/images/UjqUIiBHmIcSH9vos9HlG2BF4bo.png"
                        alt="AI RevOps Agents"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>

                    {/* Animated SVG Connecting Lines */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={isCliHovering ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg width="100%" height="100%" viewBox="0 0 121 94" className="absolute">
                        <motion.path
                          d="M 60.688 1.59 L 60.688 92.449 M 60.688 92.449 L 119.368 92.449 M 60.688 92.449 L 1.414 92.449"
                          stroke="rgb(255,222,213)"
                          fill="transparent"
                          strokeDasharray="2 2"
                          initial={{ pathLength: 0 }}
                          animate={isCliHovering ? { pathLength: 1 } : { pathLength: 0 }}
                          transition={{
                            duration: 2,
                            ease: "easeInOut",
                          }}
                        />
                      </svg>
                      <svg width="100%" height="100%" viewBox="0 0 121 94" className="absolute">
                        <motion.path
                          d="M 60.688 92.449 L 60.688 1.59 M 60.688 1.59 L 119.368 1.59 M 60.688 1.59 L 1.414 1.59"
                          stroke="rgb(255,222,213)"
                          fill="transparent"
                          strokeDasharray="2 2"
                          initial={{ pathLength: 0 }}
                          animate={isCliHovering ? { pathLength: 1 } : { pathLength: 0 }}
                          transition={{
                            duration: 2,
                            delay: 0.5,
                            ease: "easeInOut",
                          }}
                        />
                      </svg>
                    </motion.div>

                    {/* Animated Purple Blur Effect */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 w-16 h-16 bg-purple-500 rounded-full blur-[74px] opacity-65 transform -translate-x-1/2 -translate-y-1/2"
                      initial={{ scale: 1 }}
                      animate={isCliHovering ? { scale: [1, 1.342, 1, 1.342] } : { scale: 1 }}
                      transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: isCliHovering ? Number.POSITIVE_INFINITY : 0,
                        repeatType: "loop",
                      }}
                    />

                    {/* Main Content Container with Deliverables */}
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                            <motion.div
                        className="flex flex-col gap-4 p-6 bg-black/60 backdrop-blur-md rounded-xl max-w-lg w-full border border-white/10 shadow-2xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isCliHovering ? { opacity: 1, scale: 1 } : { opacity: 0.8, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-white">Deliverables</h4>
                          <span className="text-xs text-white/60 font-medium">20 items</span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-white/90 max-h-[200px] overflow-y-auto pr-2">
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Custom AI Agents</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>AI Agent Calendar</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>SDRs Enablement</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>AEs Enablement</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>TAL Creation</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Lead Routing</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Lead Scoring</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Signal Tracking</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Phone Numbers</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Sequences</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Slack Notifications</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>CRM Workflows</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>CRM Clean-Up</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>CRM Enrichment</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Inbound Enrichment</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Job-Change Tracking</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Data Formatting</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Product Analytics</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Lifecycle Stages</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Analytics Reports</span>
                              </div>
                        </div>
                        <a
                          href="#"
                          className="mt-2 inline-flex items-center justify-center rounded-md font-medium transition-all bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2 text-sm pointer-events-auto shadow-lg hover:shadow-xl hover:scale-105"
                        >
                          Explore Capabilities
                        </a>
                            </motion.div>
                    </div>

                    {/* Animated Circular Border */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={isCliHovering ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg width="350" height="350" viewBox="0 0 350 350" className="opacity-40">
                        <motion.path
                          d="M 175 1.159 C 271.01 1.159 348.841 78.99 348.841 175 C 348.841 271.01 271.01 348.841 175 348.841 C 78.99 348.841 1.159 271.01 1.159 175 C 1.159 78.99 78.99 1.159 175 1.159 Z"
                          stroke="rgba(255, 255, 255, 0.38)"
                          strokeWidth="1.16"
                          fill="transparent"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0, rotate: 0 }}
                          animate={isCliHovering ? { pathLength: 1, rotate: 360 } : { pathLength: 0, rotate: 0 }}
                          transition={{
                            pathLength: { duration: 3, ease: "easeInOut" },
                            rotate: {
                              duration: 20,
                              repeat: isCliHovering ? Number.POSITIVE_INFINITY : 0,
                              ease: "linear",
                            },
                          }}
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Content Machine */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-8 shadow-xl transition-all ease-in-out"
                style={{ transform: "translateY(8px)" }}
                onMouseEnter={() => setIsFeature4Hovering(true)}
                onMouseLeave={() => setIsFeature4Hovering(false)}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(231, 138, 83, 0.6)",
                  boxShadow: "0 0 30px rgba(231, 138, 83, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-6 mb-6">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Content Machine</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-4 text-sm">
                    <p className="leading-relaxed">
                      A ZalesMachine-built platform that transforms call transcripts, technical YouTube videos, Reddit threads, and podcasts into high-quality technical posts that position you as the go-to authority in your niche.
                    </p>
                    <p className="leading-relaxed">
                      Sophisticated systems designed to transform your revenue operations through intelligent automation.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none flex grow items-center justify-center select-none relative mt-4">
                  <div
                    className="relative w-full h-[400px] rounded-xl overflow-hidden"
                    style={{ borderRadius: "20px" }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src="https://framerusercontent.com/images/UjqUIiBHmIcSH9vos9HlG2BF4bo.png"
                        alt="Content Machine"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>

                    {/* Animated SVG Connecting Lines */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={isFeature4Hovering ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg width="100%" height="100%" viewBox="0 0 121 94" className="absolute">
                        <motion.path
                          d="M 60.688 1.59 L 60.688 92.449 M 60.688 92.449 L 119.368 92.449 M 60.688 92.449 L 1.414 92.449"
                          stroke="rgb(255,222,213)"
                          fill="transparent"
                          strokeDasharray="2 2"
                          initial={{ pathLength: 0 }}
                          animate={isFeature4Hovering ? { pathLength: 1 } : { pathLength: 0 }}
                          transition={{
                            duration: 2,
                            ease: "easeInOut",
                          }}
                        />
                      </svg>
                      <svg width="100%" height="100%" viewBox="0 0 121 94" className="absolute">
                        <motion.path
                          d="M 60.688 92.449 L 60.688 1.59 M 60.688 1.59 L 119.368 1.59 M 60.688 1.59 L 1.414 1.59"
                          stroke="rgb(255,222,213)"
                          fill="transparent"
                          strokeDasharray="2 2"
                          initial={{ pathLength: 0 }}
                          animate={isFeature4Hovering ? { pathLength: 1 } : { pathLength: 0 }}
                          transition={{
                            duration: 2,
                            delay: 0.5,
                            ease: "easeInOut",
                          }}
                        />
                      </svg>
                    </motion.div>

                    {/* Animated Purple Blur Effect */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 w-16 h-16 bg-purple-500 rounded-full blur-[74px] opacity-65 transform -translate-x-1/2 -translate-y-1/2"
                      initial={{ scale: 1 }}
                      animate={isFeature4Hovering ? { scale: [1, 1.342, 1, 1.342] } : { scale: 1 }}
                      transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: isFeature4Hovering ? Number.POSITIVE_INFINITY : 0,
                        repeatType: "loop",
                      }}
                    />

                    {/* Main Content Container with Deliverables */}
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <motion.div
                        className="flex flex-col gap-4 p-6 bg-black/60 backdrop-blur-md rounded-xl max-w-lg w-full border border-white/10 shadow-2xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isFeature4Hovering ? { opacity: 1, scale: 1 } : { opacity: 0.8, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-white">Deliverables</h4>
                          <span className="text-xs text-white/60 font-medium">14 items</span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-white/90 max-h-[200px] overflow-y-auto pr-2">
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Graph CMS Distribution</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>LinkedIn Distribution</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Team Interviews</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Customer Interviews</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Strategic Ideation</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Content Calendar</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Creative Design</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Case Study Creation</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Analytics Reports</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Attribution Setup</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>LinkedIn Profile Optimization</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Sales Enablement</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Lifecycle Sequences</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Directory Listings</span>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="mt-2 inline-flex items-center justify-center rounded-md font-medium transition-all bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2 text-sm pointer-events-auto shadow-lg hover:shadow-xl hover:scale-105"
                        >
                          Explore Capabilities
                        </a>
                      </motion.div>
                    </div>

                    {/* Animated Circular Border */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={isFeature4Hovering ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg width="350" height="350" viewBox="0 0 350 350" className="opacity-40">
                        <motion.path
                          d="M 175 1.159 C 271.01 1.159 348.841 78.99 348.841 175 C 348.841 271.01 271.01 348.841 175 348.841 C 78.99 348.841 1.159 271.01 1.159 175 C 1.159 78.99 78.99 1.159 175 1.159 Z"
                          stroke="rgba(255, 255, 255, 0.38)"
                          strokeWidth="1.16"
                          fill="transparent"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0, rotate: 0 }}
                          animate={isFeature4Hovering ? { pathLength: 1, rotate: 360 } : { pathLength: 0, rotate: 0 }}
                          transition={{
                            pathLength: { duration: 3, ease: "easeInOut" },
                            rotate: {
                              duration: 20,
                              repeat: isFeature4Hovering ? Number.POSITIVE_INFINITY : 0,
                              ease: "linear",
                            },
                          }}
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Outbound Machine */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-8 shadow-xl transition-all ease-in-out"
                style={{ transform: "translateY(-4px)" }}
                onMouseEnter={() => setIsFeature3Hovering(true)}
                onMouseLeave={() => setIsFeature3Hovering(false)}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(231, 138, 83, 0.6)",
                  boxShadow: "0 0 30px rgba(231, 138, 83, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-6 mb-6">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Outbound Machine</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-4 text-sm">
                    <p className="leading-relaxed">
                      A proven-system created by ZalesMachine that automates prospecting end-to-end — from ICP definition and TAM build to enrichment, multichannel outreach, and booked calls.
                    </p>
                    <p className="leading-relaxed">
                      Sophisticated systems designed to transform your revenue operations through intelligent automation.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none flex grow items-center justify-center select-none relative mt-4">
                  <div
                    className="relative w-full h-[400px] rounded-xl overflow-hidden"
                    style={{ borderRadius: "20px" }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src="https://framerusercontent.com/images/UjqUIiBHmIcSH9vos9HlG2BF4bo.png"
                        alt="Outbound Machine"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>

                    {/* Animated SVG Connecting Lines */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={isFeature3Hovering ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg width="100%" height="100%" viewBox="0 0 121 94" className="absolute">
                        <motion.path
                          d="M 60.688 1.59 L 60.688 92.449 M 60.688 92.449 L 119.368 92.449 M 60.688 92.449 L 1.414 92.449"
                          stroke="rgb(255,222,213)"
                          fill="transparent"
                          strokeDasharray="2 2"
                          initial={{ pathLength: 0 }}
                          animate={isFeature3Hovering ? { pathLength: 1 } : { pathLength: 0 }}
                          transition={{
                            duration: 2,
                            ease: "easeInOut",
                          }}
                        />
                      </svg>
                      <svg width="100%" height="100%" viewBox="0 0 121 94" className="absolute">
                        <motion.path
                          d="M 60.688 92.449 L 60.688 1.59 M 60.688 1.59 L 119.368 1.59 M 60.688 1.59 L 1.414 1.59"
                          stroke="rgb(255,222,213)"
                          fill="transparent"
                          strokeDasharray="2 2"
                          initial={{ pathLength: 0 }}
                          animate={isFeature3Hovering ? { pathLength: 1 } : { pathLength: 0 }}
                          transition={{
                            duration: 2,
                            delay: 0.5,
                            ease: "easeInOut",
                          }}
                        />
                            </svg>
                    </motion.div>

                    {/* Animated Purple Blur Effect */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 w-16 h-16 bg-purple-500 rounded-full blur-[74px] opacity-65 transform -translate-x-1/2 -translate-y-1/2"
                      initial={{ scale: 1 }}
                      animate={isFeature3Hovering ? { scale: [1, 1.342, 1, 1.342] } : { scale: 1 }}
                      transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: isFeature3Hovering ? Number.POSITIVE_INFINITY : 0,
                        repeatType: "loop",
                      }}
                    />

                    {/* Main Content Container with Deliverables */}
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <motion.div
                        className="flex flex-col gap-4 p-6 bg-black/60 backdrop-blur-md rounded-xl max-w-lg w-full border border-white/10 shadow-2xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isFeature3Hovering ? { opacity: 1, scale: 1 } : { opacity: 0.8, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-white">Deliverables</h4>
                          <span className="text-xs text-white/60 font-medium">17 items</span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-white/90 max-h-[200px] overflow-y-auto pr-2">
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Graph Email Prospecting</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>LinkedIn Prospecting</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>ICP Modeling</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>TAM Map</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Email Infrastructure</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Plays Selection</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Tools Selection</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>List Building</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Contact Sourcing</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Data Enrichment</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Lead Scoring</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Personalized Copywriting</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>ICP Connection Requests</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>AI Reply Drafts</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>CRM Workflows</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>CRM Sync</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Analytics Reports</span>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="mt-2 inline-flex items-center justify-center rounded-md font-medium transition-all bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2 text-sm pointer-events-auto shadow-lg hover:shadow-xl hover:scale-105"
                        >
                          Explore Capabilities
                        </a>
                      </motion.div>
                    </div>

                    {/* Animated Circular Border */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={isFeature3Hovering ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg width="350" height="350" viewBox="0 0 350 350" className="opacity-40">
                        <motion.path
                          d="M 175 1.159 C 271.01 1.159 348.841 78.99 348.841 175 C 348.841 271.01 271.01 348.841 175 348.841 C 78.99 348.841 1.159 271.01 1.159 175 C 1.159 78.99 78.99 1.159 175 1.159 Z"
                          stroke="rgba(255, 255, 255, 0.38)"
                          strokeWidth="1.16"
                          fill="transparent"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0, rotate: 0 }}
                          animate={isFeature3Hovering ? { pathLength: 1, rotate: 360 } : { pathLength: 0, rotate: 0 }}
                          transition={{
                            pathLength: { duration: 3, ease: "easeInOut" },
                            rotate: {
                              duration: 20,
                              repeat: isFeature3Hovering ? Number.POSITIVE_INFINITY : 0,
                              ease: "linear",
                            },
                          }}
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Globally Usable */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-8 shadow-xl transition-all ease-in-out"
                style={{ transform: "translateY(4px)" }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 1.25 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(231, 138, 83, 0.6)",
                  boxShadow: "0 0 30px rgba(231, 138, 83, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-6 mb-6">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Globally Usable</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-4 text-sm">
                    <p>
                      We work globally, serving clients across multiple countries and regions. Our proven system delivers results regardless of location.
                    </p>
                  </div>
                </div>
                <div className="flex min-h-[300px] grow items-start justify-center select-none">
                  <h1 className="mt-8 text-center text-5xl leading-[100%] font-semibold sm:leading-normal lg:mt-12 lg:text-6xl">
                    <span className='bg-background relative mt-3 inline-block w-fit rounded-md border px-1.5 py-0.5 before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-full before:bg-[url("/noise.gif")] before:opacity-[0.09] before:content-[""]'>
                      <ScrambleHover
                        text={countries[currentCountryIndex]}
                        scrambleSpeed={150}
                        maxIterations={20}
                        useOriginalCharsOnly={false}
                        className="cursor-pointer bg-gradient-to-t from-[#e78a53] to-[#e78a53] bg-clip-text text-transparent"
                        isHovering={isHovering}
                        setIsHovering={setIsHovering}
                        characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;':\,./<>?"
                      />
                    </span>
                  </h1>
                  <div className="absolute top-64 z-10 flex items-center justify-center">
                    <div className="w-[400px] h-[400px]">
                      <Suspense
                        fallback={
                          <div className="bg-secondary/20 h-[400px] w-[400px] animate-pulse rounded-full"></div>
                        }
                      >
                        <Earth baseColor={baseColor} markerColor={[0, 0, 0]} glowColor={glowColor} dark={dark} />
                      </Suspense>
                    </div>
                  </div>
                  <div className="absolute top-1/2 w-full translate-y-20 scale-x-[1.2] opacity-70 transition-all duration-1000 group-hover:translate-y-8 group-hover:opacity-100">
                    <div className="from-primary/50 to-primary/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                    <div className="from-primary/30 to-primary/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </FollowerPointerCard>
      </motion.div>
    </section>
  )
}
