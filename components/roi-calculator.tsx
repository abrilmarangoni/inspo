"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calculator, TrendingUp, DollarSign, Users, Target, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { interTight } from "@/lib/fonts"

export function ROICalculator() {
  const { t } = useLanguage()
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
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`${interTight.className} bg-gradient-to-r from-[#e0c5f0] to-[#b3d5ff] bg-clip-text text-center text-4xl font-extralight tracking-tight text-transparent md:text-[54px] md:leading-[60px] mb-4`}>
            {t("roi.title")}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t("roi.description")}
          </p>
        </motion.div>

        {/* Single Quadrant Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#b57edc]/20 via-[#4ca1f5]/15 to-[#b57edc]/20 backdrop-blur-sm border-2 border-[#b57edc]/40 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#4ca1f5]/10 to-transparent opacity-50"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#b57edc]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4ca1f5]/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-start">
            {/* Left Side - Inputs */}
            <div className="space-y-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-[#b57edc] to-[#4ca1f5] rounded-xl shadow-lg">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-extralight text-white">{t("roi.metrics")}</h3>
              </div>

              <div className="space-y-5 flex-1">
                <div>
                  <label className="block text-sm font-semibold text-white/90 mb-2 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#b57edc]" />
                    {t("roi.monthlyRevenue")}
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b57edc] text-lg font-bold">$</span>
                    <input
                      type="number"
                      value={monthlyRevenue}
                      onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border-2 border-[#b57edc]/30 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#b57edc]/50 focus:border-[#b57edc] transition-all backdrop-blur-sm hover:bg-white/15"
                      placeholder="50000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white/90 mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#4ca1f5]" />
                    {t("roi.conversionRate")}
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={conversionRate}
                      onChange={(e) => setConversionRate(Number(e.target.value))}
                      step="0.1"
                      className="w-full px-4 py-3 bg-white/10 border-2 border-[#4ca1f5]/30 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#4ca1f5]/50 focus:border-[#4ca1f5] transition-all backdrop-blur-sm hover:bg-white/15"
                      placeholder="2"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4ca1f5] text-sm font-bold">%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white/90 mb-2 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#b57edc]" />
                    {t("roi.dealSize")}
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b57edc] text-lg font-bold">$</span>
                    <input
                      type="number"
                      value={averageDealSize}
                      onChange={(e) => setAverageDealSize(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border-2 border-[#b57edc]/30 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#b57edc]/50 focus:border-[#b57edc] transition-all backdrop-blur-sm hover:bg-white/15"
                      placeholder="10000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white/90 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#4ca1f5]" />
                    {t("roi.costPerLead")}
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4ca1f5] text-lg font-bold">$</span>
                    <input
                      type="number"
                      value={costPerLead}
                      onChange={(e) => setCostPerLead(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border-2 border-[#4ca1f5]/30 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#4ca1f5]/50 focus:border-[#4ca1f5] transition-all backdrop-blur-sm hover:bg-white/15"
                      placeholder="50"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Results */}
            <div className="space-y-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-[#4ca1f5] to-[#b57edc] rounded-xl shadow-lg">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-extralight text-white">{t("roi.results")}</h3>
              </div>

              <div className="bg-white/10 rounded-xl p-5 border border-white/20 flex-1 flex flex-col">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm font-medium">{t("roi.leadsNeeded")}</span>
                    <span className="text-xl font-bold text-[#4ca1f5]">{leadsNeeded.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm font-medium">{t("roi.qualifiedLeads")}</span>
                    <span className="text-xl font-bold text-[#4ca1f5]">{qualifiedLeadsNeeded.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm font-medium">{t("roi.monthlyCost")}</span>
                    <span className="text-lg font-bold text-white">${monthlyCost.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm font-medium">{t("roi.annualCost")}</span>
                    <span className="text-lg font-bold text-white">${annualCost.toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#b57edc]/40 to-[#4ca1f5]/40 rounded-xl p-4 border-2 border-white/30 mt-auto">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold text-sm">{t("roi.annualRevenue")}</span>
                    <span className="text-2xl font-bold text-white">${annualRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/90 text-sm">{t("roi.roi")}</span>
                    <span className="text-2xl font-bold text-white">{roi.toFixed(0)}%</span>
                  </div>
                  <div className="pt-2 border-t border-white/20 text-center">
                    <span className="text-white/80 text-xs">{t("roi.investmentReturn")} </span>
                    <span className="text-lg font-bold text-white">${roiMultiplier}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button - Bottom Center */}
          <div className="flex items-center justify-center mt-10">
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-[#b57edc] via-[#4ca1f5] to-[#b57edc] text-white font-semibold py-4 px-10 rounded-full transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-[#b57edc]/50 flex items-center gap-3"
              style={{
                backgroundSize: "200% 100%",
              }}
            >
              <span>{t("hero.schedule")}</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
