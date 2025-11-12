"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calculator, TrendingUp, DollarSign, Users, Target } from "lucide-react"
import { SectionDivider } from "@/components/section-divider"

export function ROICalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(50000)
  const [conversionRate, setConversionRate] = useState(2)
  const [averageDealSize, setAverageDealSize] = useState(10000)
  const [costPerLead, setCostPerLead] = useState(50)

  // Calculations
  const leadsNeeded = Math.ceil(monthlyRevenue / averageDealSize)
  const qualifiedLeadsNeeded = Math.ceil(leadsNeeded / (conversionRate / 100))
  const monthlyCost = qualifiedLeadsNeeded * costPerLead
  const annualCost = monthlyCost * 12
  const annualRevenue = monthlyRevenue * 12
  const roi = annualCost > 0 ? ((annualRevenue - annualCost) / annualCost) * 100 : 0
  const roiMultiplier = annualCost > 0 ? (annualRevenue / annualCost).toFixed(2) : 0

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <SectionDivider />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Calculate Your ROI
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            See how the ZalesMachine System can transform your revenue operations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 w-full"
        >
          <div className="mx-auto max-w-5xl rounded-[40px] border border-black/5 dark:border-white/20 p-2 shadow-sm">
            <div className="relative mx-auto overflow-hidden rounded-[38px] border border-black/5 dark:border-white/20 bg-primary p-8 md:p-12 shadow-sm">
              {/* Subtle radial glow from center */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255, 64, 23, 0.1), transparent 70%)",
                }}
              />

              {/* Film grain overlay */}
              <div
                className="absolute inset-0 z-0 opacity-[0.02]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              />

              <div className="relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Inputs Section */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                      <Calculator className="w-6 h-6" />
                      Your Current Metrics
                    </h3>

                    {/* Monthly Revenue Target */}
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2 flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        Monthly Revenue Target
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60">$</span>
                        <input
                          type="number"
                          value={monthlyRevenue}
                          onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                          className="w-full pl-8 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                          placeholder="50000"
                        />
                      </div>
                    </div>

                    {/* Conversion Rate */}
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Conversion Rate (%)
                      </label>
                      <input
                        type="number"
                        value={conversionRate}
                        onChange={(e) => setConversionRate(Number(e.target.value))}
                        step="0.1"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                        placeholder="2"
                      />
                    </div>

                    {/* Average Deal Size */}
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2 flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        Average Deal Size
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60">$</span>
                        <input
                          type="number"
                          value={averageDealSize}
                          onChange={(e) => setAverageDealSize(Number(e.target.value))}
                          className="w-full pl-8 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                          placeholder="10000"
                        />
                      </div>
                    </div>

                    {/* Cost Per Lead */}
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Current Cost Per Lead
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60">$</span>
                        <input
                          type="number"
                          value={costPerLead}
                          onChange={(e) => setCostPerLead(Number(e.target.value))}
                          className="w-full pl-8 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                          placeholder="50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Results Section */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                      <TrendingUp className="w-6 h-6" />
                      Your ROI Results
                    </h3>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Leads Needed (Monthly)</span>
                        <span className="text-2xl font-bold text-white">{leadsNeeded.toLocaleString()}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Qualified Leads Needed</span>
                        <span className="text-2xl font-bold text-white">{qualifiedLeadsNeeded.toLocaleString()}</span>
                      </div>

                      <div className="h-px bg-white/10 my-4" />

                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Monthly Investment</span>
                        <span className="text-2xl font-bold text-white">${monthlyCost.toLocaleString()}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Annual Investment</span>
                        <span className="text-2xl font-bold text-white">${annualCost.toLocaleString()}</span>
                      </div>

                      <div className="h-px bg-white/10 my-4" />

                      <div className="bg-gradient-to-r from-[#FF6B35]/20 to-[#FF6B35]/10 border border-[#FF6B35]/30 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white/80 font-medium">Annual Revenue</span>
                          <span className="text-3xl font-bold text-white">${annualRevenue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white/60 text-sm">ROI</span>
                          <span className="text-2xl font-bold text-[#FF6B35]">{roi.toFixed(0)}%</span>
                        </div>
                        <div className="mt-2 text-center">
                          <span className="text-white/60 text-sm">Every $1 invested returns </span>
                          <span className="text-white font-bold">${roiMultiplier}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <div className="flex items-center justify-center">
                        <div className="group border-border bg-secondary/70 flex h-[64px] cursor-pointer items-center gap-2 rounded-full border p-[11px] w-full max-w-sm">
                          <div className="border-border bg-white/10 flex h-[43px] items-center justify-center rounded-full border flex-1">
                            <p className="mr-3 ml-2 flex items-center justify-center gap-2 font-medium tracking-tight text-white">
                              Schedule a call
                            </p>
                          </div>
                          <div className="border-border flex size-[26px] items-center justify-center rounded-full border-2 transition-all ease-in-out group-hover:ml-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-arrow-right transition-all ease-in-out group-hover:rotate-45"
                              aria-hidden="true"
                            >
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

