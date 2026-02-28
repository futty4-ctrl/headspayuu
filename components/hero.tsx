"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const ease = [0.25, 0.1, 0.25, 1]

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Hero background - /images/hero.jpg を配置 */}
      <div className="absolute inset-0 bg-zinc-800" aria-hidden="true">
        <Image
          src="/images/hero.jpg"
          alt="ヘッドスパ専門店ゆうの店内"
          fill
          className="object-contain"
          sizes="100vw"
          onError={(e) => {
            e.currentTarget.style.display = "none"
          }}
        />
      </div>
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="mb-6 text-[11px] tracking-[0.5em] text-gold/80 sm:text-[10px]"
        >
          {'【ヘッドスパ専門店ゆう】'}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="mb-8 text-base tracking-[0.3em] text-gold-light md:text-lg"
        >
          {'～日常に静かな贅沢を～'}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease }}
          className="mb-10 flex flex-col items-center gap-2 text-center text-sm leading-[2.2] tracking-[0.2em] text-foreground/90 md:text-base"
        >
          <span>完全個室・1日3名様限定</span>
          <span>熟練のオールハンドで行う</span>
          <span>ヘッドスパ専門店</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0, ease }}
          className="flex flex-row gap-4"
        >
          <a
            href="https://coubic.com/yuheadspa/services"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault()
              window.open("https://coubic.com/yuheadspa/services", "_blank", "noopener,noreferrer")
            }}
            className="flex min-h-[44px] items-center justify-center border border-foreground/40 px-6 py-3 text-[11px] tracking-[0.2em] text-foreground transition-all duration-300 hover:border-gold hover:text-gold"
          >
            今すぐ予約
          </a>
          <a
            href="#about"
            className="flex min-h-[44px] items-center justify-center border border-foreground/40 px-6 py-3 text-[11px] tracking-[0.2em] text-foreground transition-all duration-300 hover:border-gold hover:text-gold"
          >
            初めての方へ
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[11px] tracking-[0.4em] text-foreground/40 sm:text-[9px]">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-foreground/25"
          />
        </div>
      </motion.div>
    </section>
  )
}
