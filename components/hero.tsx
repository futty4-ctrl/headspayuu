"use client"

import { motion } from "framer-motion"

const ease = [0.25, 0.1, 0.25, 1]

export function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden md:h-screen">
      {/* 写真コンテナ: relative にして、この中にテキストを重ねる */}
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-zinc-800">
        {/* Hero background */}
        <div className="relative h-full w-full">
          <video
            src="/videos/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* 写真の上に重ねるテキスト（中央より少し上） */}
        <div className="pointer-events-none absolute inset-x-0 top-[28%] z-10 flex justify-center px-6 text-center">
          <div className="pointer-events-auto flex max-w-xl flex-col items-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease }}
              className="mb-2 text-base tracking-[0.4em] text-foreground/70 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] sm:text-lg"
            >
              ヘッドスパ専門店
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease }}
              className="mb-3 text-2xl tracking-[0.3em] text-gold-light/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] sm:text-3xl"
            >
              ゆう
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.55, ease }}
              className="mb-10 text-lg tracking-[0.3em] text-gold-light/90 sm:text-xl"
              style={{ WebkitTextStroke: "1px black", paintOrder: "stroke fill" }}
            >
              {'贅沢を日常に'}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease }}
              className="flex flex-col items-center gap-2 text-center text-base leading-[2.2] tracking-[0.2em] text-foreground/90 sm:text-lg"
            >
              <span>完全個室・1日3名様限定の</span>
              <span>ヘッドスパ専門店</span>
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  )
}
