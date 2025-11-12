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
    <section className="relative py-12 sm:py-16 md:py-24 px-4 overflow-hidden">
      <SectionDivider />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Calculate Your ROI
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            See how the ZalesMachine System can transform your revenue operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Inputs Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#FF6B35]/20 rounded-lg">
                <Calculator className="w-5 h-5 text-[#FF6B35]" />
              </div>
              <h3 className="text-xl font-semibold text-white">Your Current Metrics</h3>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-[#FF6B35]" />
                  Monthly Revenue Target
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60">$</span>
                  <input
                    type="number"
                    value={monthlyRevenue}
                    onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/50 focus:border-[#FF6B35]/50 transition-all"
                    placeholder="50000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#FF6B35]" />
                  Conversion Rate (%)
                </label>
                <input
                  type="number"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  step="0.1"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/50 focus:border-[#FF6B35]/50 transition-all"
                  placeholder="2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-[#FF6B35]" />
                  Average Deal Size
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60">$</span>
                  <input
                    type="number"
                    value={averageDealSize}
                    onChange={(e) => setAverageDealSize(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/50 focus:border-[#FF6B35]/50 transition-all"
                    placeholder="10000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#FF6B35]" />
                  Current Cost Per Lead
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60">$</span>
                  <input
                    type="number"
                    value={costPerLead}
                    onChange={(e) => setCostPerLead(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/50 focus:border-[#FF6B35]/50 transition-all"
                    placeholder="50"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#FF6B35]/20 rounded-lg">
                <TrendingUp className="w-5 h-5 text-[#FF6B35]" />
              </div>
              <h3 className="text-xl font-semibold text-white">Your ROI Results</h3>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <div className="flex justify-between items-center py-2">
                <span className="text-white/70 text-sm">Leads Needed (Monthly)</span>
                <span className="text-xl font-bold text-white">{leadsNeeded.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="text-white/70 text-sm">Qualified Leads Needed</span>
                <span className="text-xl font-bold text-white">{qualifiedLeadsNeeded.toLocaleString()}</span>
              </div>

              <div className="h-px bg-white/10 my-4" />

              <div className="flex justify-between items-center py-2">
                <span className="text-white/70 text-sm">Monthly Investment</span>
                <span className="text-xl font-bold text-white">${monthlyCost.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="text-white/70 text-sm">Annual Investment</span>
                <span className="text-xl font-bold text-white">${annualCost.toLocaleString()}</span>
              </div>

              <div className="h-px bg-white/10 my-4" />

              <div className="bg-gradient-to-br from-[#FF6B35]/20 to-[#FF6B35]/10 border border-[#FF6B35]/30 rounded-lg p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white/90 font-medium">Annual Revenue</span>
                  <span className="text-3xl font-bold text-white">${annualRevenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white/70 text-sm">ROI</span>
                  <span className="text-2xl font-bold text-[#FF6B35]">{roi.toFixed(0)}%</span>
                </div>
                <div className="pt-3 border-t border-white/10 text-center">
                  <span className="text-white/70 text-sm">Every $1 invested returns </span>
                  <span className="text-white font-bold">${roiMultiplier}</span>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="pt-4"
            >
              <div className="flex items-center justify-center">
                <div className="group border border-white/20 bg-white/5 hover:bg-white/10 flex h-12 cursor-pointer items-center gap-2 rounded-full px-6 w-full max-w-sm transition-all">
                  <p className="flex items-center justify-center gap-2 font-medium text-white text-sm">
                    Schedule a call
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right text-white transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
