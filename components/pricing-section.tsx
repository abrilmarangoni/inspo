"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SectionDivider } from "@/components/section-divider"
import { useLanguage } from "@/contexts/language-context"

export function PricingSection() {
  const { t } = useLanguage()
  
  const pricingPlans = [
    {
      name: t("pricing.inhouse.name"),
      setupPrice: 9300,
      monthlyPrice: 3100,
      months: 3,
      description: t("pricing.inhouse.description"),
      features: [
        t("pricing.inhouse.feature1"),
        t("pricing.inhouse.feature2"),
        t("pricing.inhouse.feature3"),
        t("pricing.inhouse.feature4"),
        t("pricing.inhouse.feature5"),
        t("pricing.inhouse.feature6"),
        t("pricing.inhouse.feature7"),
        t("pricing.inhouse.feature8"),
      ],
      approach: t("pricing.inhouse.approach"),
      popular: false,
      cta: t("pricing.inhouse.cta"),
    },
    {
      name: t("pricing.agency.name"),
      monthlyPrice: 3000,
      description: t("pricing.agency.description"),
      features: [
        t("pricing.agency.feature1"),
        t("pricing.agency.feature2"),
        t("pricing.agency.feature3"),
        t("pricing.agency.feature4"),
        t("pricing.agency.feature5"),
        t("pricing.agency.feature6"),
        t("pricing.agency.feature7"),
        t("pricing.agency.feature8"),
      ],
      approach: t("pricing.agency.approach"),
      popular: true,
      cta: t("pricing.agency.cta"),
    },
    {
      name: t("pricing.custom.name"),
      price: t("pricing.custom.name"),
      description: t("pricing.custom.description"),
      features: [
        t("pricing.custom.feature1"),
        t("pricing.custom.feature2"),
        t("pricing.custom.feature3"),
        t("pricing.custom.feature4"),
        t("pricing.custom.feature5"),
        t("pricing.custom.feature6"),
        t("pricing.custom.feature7"),
        t("pricing.custom.feature8"),
        t("pricing.custom.feature9"),
      ],
      approach: t("pricing.custom.approach"),
      popular: false,
      cta: t("pricing.custom.cta"),
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <SectionDivider />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className={cn(
              "via-foreground mb-12 mt-4 bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[70px]",
              geist.className,
            )}
          >
            {t("pricing.title")}
          </h2>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent mb-4">
            {t("pricing.subtitle")}
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {t("pricing.description")}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative"
            >
              {plan.popular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30"
                  initial={{ opacity: 0, y: -10, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <motion.div 
                    className="bg-white/30 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full border-2 border-white/40 shadow-lg shadow-[#FF6B35]/30"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    {t("pricing.popular")}
                  </motion.div>
                </motion.div>
              )}
              <motion.div 
                className="mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`relative overflow-hidden rounded-2xl p-8 pt-12 shadow-2xl backdrop-blur-xl ${
                  plan.popular 
                    ? "bg-gradient-to-br from-[#FF6B35] via-[#FF6B35]/95 to-[#FF6B35]/90 shadow-[#FF6B35]/20" 
                    : "bg-gradient-to-b from-secondary/40 to-secondary/10 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset]"
                }`}>
                  {/* Animated grid pattern */}
                  <div 
                    className="absolute inset-0 z-0 opacity-10"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                      backgroundSize: "20px 20px",
                    }}
                  />

                  {/* Animated radial glow */}
                  <motion.div
                    className="absolute inset-0 z-0"
                    animate={{
                      background: plan.popular 
                        ? [
                            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(255, 255, 255, 0.2), transparent 70%)",
                            "radial-gradient(ellipse 60% 40% at 30% 70%, rgba(255, 255, 255, 0.15), transparent 70%)",
                            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(255, 255, 255, 0.2), transparent 70%)",
                          ]
                        : [
                            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(255, 255, 255, 0.2), transparent 70%)",
                            "radial-gradient(ellipse 60% 40% at 70% 30%, rgba(255, 255, 255, 0.15), transparent 70%)",
                            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(255, 255, 255, 0.2), transparent 70%)",
                          ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 z-0"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      background: "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.15) 50%, transparent 70%)",
                      backgroundSize: "200% 200%",
                    }}
                  />

                  {/* Film grain overlay */}
                  <div
                    className="absolute inset-0 z-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                  />



                  <motion.div 
                    className="relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  >
                    <div className="text-center mb-6">
                      <motion.h3 
                        className="text-2xl font-bold text-white mb-3 drop-shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                      >
                        {plan.name}
                      </motion.h3>
                      <motion.div 
                        className="flex flex-col items-center justify-center gap-2 mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                      >
                        {plan.price ? (
                          <span className="text-4xl font-bold text-white">{plan.price}</span>
                        ) : plan.setupPrice ? (
                          <>
                            <div className="flex items-baseline justify-center gap-1">
                              <span className="text-3xl font-bold text-white">${plan.setupPrice.toLocaleString()}</span>
                              <span className="text-white/70 text-sm">{t("pricing.setup")}</span>
                            </div>
                            <div className="flex items-baseline justify-center gap-1">
                              <span className="text-3xl font-bold text-white">${plan.monthlyPrice?.toLocaleString()}</span>
                              <span className="text-white/70 text-sm">{t("pricing.month")} ({plan.months} {t("pricing.months")})</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <span className="text-4xl font-bold text-white">${plan.monthlyPrice?.toLocaleString()}</span>
                            <span className="text-white/70 text-lg">{t("pricing.month")}</span>
                          </>
                        )}
                      </motion.div>
                      <motion.p 
                        className="text-white/70 text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
                      >
                        {plan.description}
                      </motion.p>
                    </div>

                    <ul className="space-y-2.5 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-start gap-2 group/item"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.05 }}
                        >
                          <div className={`p-0.5 rounded-full ${
                            plan.popular ? "bg-[#FF6B35]" : "bg-primary"
                          }`}>
                            <Check className="w-3.5 h-3.5 text-white flex-shrink-0" />
                          </div>
                          <span className="text-white/95 text-sm group-hover/item:text-white transition-colors">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {plan.approach && (
                      <motion.div 
                        className="mb-6 p-5 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-lg border border-white/10 relative overflow-hidden"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.7 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        <div className="flex items-start gap-3 relative z-10">
                          <div className={`mt-0.5 flex-shrink-0 w-1 h-1 rounded-full ${
                            plan.popular ? "bg-[#FF6B35]" : "bg-white/60"
                          }`} />
                          <div className="flex-1">
                            <p className="text-white/80 text-sm leading-relaxed">
                              <span className="font-semibold text-white/95 mr-1.5">{t("pricing.approach")}:</span>
                              {plan.approach}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <motion.button
                      className={`group relative w-full overflow-hidden rounded-xl px-6 py-4 font-semibold text-white transition-all duration-300 ${
                        plan.popular
                          ? "bg-white/20 hover:bg-white/25 shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/30"
                          : "bg-white/10 hover:bg-white/15 shadow-md hover:shadow-lg"
                      } backdrop-blur-sm border border-white/20 hover:border-white/30`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.8 }}
                    >
                      <div className="relative z-10 flex items-center justify-center gap-2">
                        <span className="text-base">{plan.cta}</span>
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-arrow-right"
                          initial={{ x: 0 }}
                          animate={{ x: [0, 4, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </motion.svg>
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ${
                        plan.popular ? "via-[#FF6B35]/20" : ""
                      }`} />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
