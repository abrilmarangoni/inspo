"use client"

import { motion } from "framer-motion"
import { Search, TrendingUp, ArrowRight } from "lucide-react"

export function FlowDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="relative w-full max-w-5xl mx-auto my-16 px-4"
    >
      <div className="flex items-center justify-between gap-8 relative">
        {/* Left Node */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-3 z-10"
        >
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FF6B35]/20 to-[#FF6B35]/10 border border-[#FF6B35]/30 flex items-center justify-center backdrop-blur-sm">
            <Search className="w-7 h-7 text-[#FF6B35]" />
          </div>
          <p className="text-xs text-white/70 font-medium">Discovery</p>
        </motion.div>

        {/* Connecting Arrow */}
        <div className="flex-1 relative h-0.5">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/50 via-[#FF6B35] to-[#FF6B35]/50"
            style={{ transformOrigin: "left" }}
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
          >
            <div className="w-3 h-3 rounded-full bg-[#FF6B35] border-2 border-background" />
          </motion.div>
        </div>

        {/* Central Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative z-20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl min-w-[280px]"
        >
          <div className="flex items-start gap-3 mb-3">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-[#FF6B35]" />
              <div className="w-2 h-2 rounded-full bg-[#FF6B35]/60" />
              <div className="w-2 h-2 rounded-full bg-[#FF6B35]/40" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-1">LEAD QUALIFIED</h3>
              <p className="text-xs text-white/60">Pipeline data enriched</p>
            </div>
          </div>
        </motion.div>

        {/* Connecting Arrow */}
        <div className="flex-1 relative h-0.5">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/50 via-[#FF6B35] to-[#FF6B35]/50"
            style={{ transformOrigin: "left" }}
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
          >
            <ArrowRight className="w-4 h-4 text-[#FF6B35]" />
          </motion.div>
        </div>

        {/* Right Node */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-3 z-10"
        >
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FF6B35]/20 to-[#FF6B35]/10 border border-[#FF6B35]/30 flex items-center justify-center backdrop-blur-sm">
            <TrendingUp className="w-7 h-7 text-[#FF6B35]" />
          </div>
          <p className="text-xs text-white/70 font-medium">Results</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

