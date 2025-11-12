"use client"

import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SectionDivider } from "@/components/section-divider"

const pricingPlans = [
  {
    name: "In-House",
    setupPrice: 9300,
    monthlyPrice: 3100,
    months: 3,
    description: "Best for teams that want 100% ownership of their GTM processes",
    features: [
      "New Company Asset",
      "You acquire the ZalesMachine System",
      "Same Capabilities",
      "As Agency model, delivered in-house",
      "3-Month Implementation",
      "Complete setup and training",
      "Team Training",
      "In-house team training included",
    ],
    approach: "You get all our know-how and experience, implemented in a system that works",
    popular: false,
    cta: "Learn More",
  },
  {
    name: "Agency",
    monthlyPrice: 3000,
    description: "Best for teams that want more qualified leads with no extra effort",
    features: [
      "Cold Email Infrastructure",
      "Complete email setup and automation",
      "Outbound Machine",
      "Automated lead generation system",
      "Content Machine",
      "30-40 ready-to-post LinkedIn posts",
      "Software Included",
      "$1,500+ in tools (Clay, Trigify, etc.)",
    ],
    approach: "We take care of the whole process; you just join the call.",
    popular: true,
    cta: "Learn More",
  },
  {
    name: "Custom",
    price: "Custom",
    description: "Best for sales, marketing and growth teams stuck doing repetitive, manual work",
    features: [
      "AI + automation solutions",
      "AI Lead-Qualification Bot",
      "WhatsApp agent that auto-qualifies leads",
      "Post-Meeting Workflow",
      "CRM-driven flows with smart analysis",
      "Database Enrichment",
      "Custom system to enrich existing databases",
      "Meeting Intelligence",
      "Notetaker integration for call analysis",
    ],
    approach: "Free part of your team from ops to focus on real value — and hit this quarter's goals.",
    popular: false,
    cta: "Learn More",
  },
]

export function PricingSection() {

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
            Pricing
          </h2>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent mb-4">
            Choose your transformation path
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Three different approaches to scaling your sales operations
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl p-8 backdrop-blur-sm border transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-[#e78a53]/10 to-transparent border-[#e78a53]/30 shadow-lg shadow-[#e78a53]/10"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#e78a53] to-[#e78a53]/80 text-white text-sm font-medium px-4 py-2 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex flex-col items-center justify-center gap-1 mb-2">
                  {plan.price ? (
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                  ) : plan.setupPrice ? (
                    <>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-3xl font-bold text-white">${plan.setupPrice.toLocaleString()}</span>
                        <span className="text-white/60 text-sm">setup</span>
                      </div>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-3xl font-bold text-white">${plan.monthlyPrice?.toLocaleString()}</span>
                        <span className="text-white/60 text-sm">/month ({plan.months} months)</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-white">${plan.monthlyPrice?.toLocaleString()}</span>
                      <span className="text-white/60 text-lg">/month</span>
                    </>
                  )}
                </div>
                <p className="text-white/60 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#e78a53] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.approach && (
                <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-white/70 text-sm italic">
                    <span className="font-semibold text-white/90">Approach:</span> {plan.approach}
                  </p>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#e78a53] to-[#e78a53]/80 text-white shadow-lg shadow-[#e78a53]/25 hover:shadow-[#e78a53]/40"
                    : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
