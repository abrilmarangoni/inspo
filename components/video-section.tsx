"use client"

import { motion } from "framer-motion"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SectionDivider } from "@/components/section-divider"
import { useLanguage } from "@/contexts/language-context"

export function VideoSection() {
  const { t } = useLanguage()
  
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <SectionDivider />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className={cn(
              "via-foreground mb-8 bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[70px]",
              geist.className,
            )}
          >
            {t("video.title")}
          </h2>

          <p className="text-lg text-white/60 max-w-3xl mx-auto mb-12">
            {t("video.description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div
            className="relative rounded-lg overflow-hidden"
            style={{
              boxShadow: "0 25px 80px -10px rgba(181, 126, 220, 0.5), 0 0 40px -5px rgba(181, 126, 220, 0.4), 0 10px 20px -5px rgba(181, 126, 220, 0.3)",
            }}
          >
            <iframe
              width="1120"
              height="630"
              src="https://www.youtube.com/embed/lnvnm-xrBPs?si=fBG1Ve1gXMEVDTtB"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full max-w-5xl aspect-video rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

