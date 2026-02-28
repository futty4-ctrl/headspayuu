"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { FadeIn } from "@/components/fade-in"

const slides = Array.from({ length: 26 }, (_, i) => ({
  src: `/images/evidence-${String(i + 1).padStart(2, "0")}.png`,
  alt: `ビフォーアフター ${i + 1}枚目`,
}))

export function Evidence() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX.current
    const threshold = 50
    if (diff > threshold) next()
    else if (diff < -threshold) prev()
  }

  return (
    <section id="evidence" className="bg-secondary py-24 lg:py-36">
      <div className="mx-auto max-w-2xl px-5 lg:px-10">
        {/* セクションヘッダー */}
        <FadeIn>
          <div className="mb-16 flex flex-col items-center">
            <span className="mb-3 text-[10px] tracking-[0.5em] text-gold/80">
              EVIDENCE
            </span>
            <h2 className="text-2xl font-light tracking-[0.2em] text-foreground lg:text-3xl">
              ビフォーアフター
            </h2>
            <div className="mt-6 h-px w-14 bg-gold/40" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative">
            {/* スライド画像 */}
            <div
              className="relative mx-auto w-full max-w-md overflow-hidden border border-border/30 bg-zinc-800"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {slides.map((slide, i) => (
                  <div key={i} className="relative w-full shrink-0 aspect-[3/4]">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 448px"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 左右ボタン（1枚以上ある場合のみ表示） */}
            {slides.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-0 top-1/2 flex h-10 w-10 -translate-x-3 -translate-y-1/2 items-center justify-center border border-gold/30 bg-background/90 text-gold transition-all hover:bg-gold hover:text-background"
                  aria-label="前へ"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M15 18l-6-6 6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="absolute right-0 top-1/2 flex h-10 w-10 translate-x-3 -translate-y-1/2 items-center justify-center border border-gold/30 bg-background/90 text-gold transition-all hover:bg-gold hover:text-background"
                  aria-label="次へ"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M9 18l6-6-6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* ドットインジケーター */}
          {slides.length > 1 && (
            <div className="mt-6 flex justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-gold" : "w-1.5 bg-foreground/20"
                  }`}
                  aria-label={`${i + 1}枚目`}
                />
              ))}
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  )
}
