"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"

export function FloatingReserve() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 280)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2"
        >
          <div className="flex items-center gap-2 rounded-md border border-gold/40 bg-[#5c4a3d] px-4 py-2.5 shadow-lg">
            <a
              href={COUBIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault()
                window.open(COUBIC_URL, "_blank", "noopener,noreferrer")
              }}
              className="text-[11px] font-medium tracking-[0.12em] text-white transition-opacity hover:opacity-90"
            >
              空き状況を見る
            </a>
            <span className="text-white/80">｜</span>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault()
                window.open(LINE_URL, "_blank", "noopener,noreferrer")
              }}
              className="text-[11px] font-medium tracking-[0.12em] text-white transition-opacity hover:opacity-90"
            >
              LINEで相談
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
