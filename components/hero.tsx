"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const ease = [0.25, 0.1, 0.25, 1]

export function Hero() {
  return (
    <section className="relative h-[110vh] overflow-hidden md:h-screen">
      {/* 写真コンテナ: relative にして、この中にテキストを重ねる */}
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-zinc-800">
        {/* Hero background */}
        <div className="relative h-full w-full">
          <Image
            src="/images/hero.jpg"
            alt="ヘッドスパ専門店ゆうの店内"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            onError={(e) => {
              e.currentTarget.style.display = "none"
            }}
          />
        </div>

        {/* 写真の上に重ねるテキスト（中央やや下寄せ） */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[12vh] z-10 flex justify-center px-6 text-center">
          <div className="pointer-events-auto flex max-w-xl flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="mb-2 text-sm tracking-[0.4em] text-foreground/70 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] sm:text-base"
        >
          ヘッドスパ専門店
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease }}
          className="mb-2 text-base tracking-[0.3em] text-gold-light/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] sm:text-lg"
        >
          ゆう
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease }}
          className="mb-8 text-base tracking-[0.3em] text-gold-light/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] md:text-lg"
        >
          {'～日常に静かな贅沢を～'}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease }}
          className="flex flex-col items-center gap-2 text-center text-sm leading-[2.2] tracking-[0.2em] text-foreground/90 md:text-base"
        >
          <span>完全個室・1日3名様限定</span>
          <span>熟練のオールハンドで行う</span>
          <span>ヘッドスパ専門店</span>
        </motion.h1>
          </div>
        </div>
      </div>
    </section>
  )
}
