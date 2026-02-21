"use client"

import { useState, useRef, useCallback } from "react"
import Image from "next/image"
import { FadeIn } from "@/components/fade-in"

function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setSliderPosition((x / rect.width) * 100)
  }, [])

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    handleMove(e.clientX)
  }

  const handleTouchStart = () => {
    isDragging.current = true
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[3/2] w-full cursor-ew-resize select-none overflow-hidden border border-border/30 md:aspect-[4/3]"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleTouchMove}
      role="slider"
      aria-label="施術前後の比較スライダー"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
    >
      {/* After (右側) - /images/after.jpg を配置 */}
      <div className="absolute inset-0 bg-zinc-700">
        <Image
          src="/images/after.jpg"
          alt="施術後の頭皮・髪"
          fill
          className="object-cover object-left"
          sizes="(max-width: 640px) 100vw, 512px"
          onError={(e) => {
            e.currentTarget.style.display = "none"
          }}
        />
      </div>

      {/* Before (左側) - /images/before.jpg を配置 */}
      <div
        className="absolute inset-0 overflow-hidden bg-zinc-800"
        style={{ width: `${sliderPosition}%` }}
      >
        <Image
          src="/images/before.jpg"
          alt="施術前の頭皮・髪"
          fill
          className="object-cover object-left"
          sizes="(max-width: 640px) 100vw, 512px"
          onError={(e) => {
            e.currentTarget.style.display = "none"
          }}
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 z-10 w-0.5 bg-gold/80"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-gold/60 bg-background/90 text-gold">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 8L1 5M4 8L1 11M4 8H1M12 8L15 5M12 8L15 11M12 8H15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="absolute left-4 top-4 z-20 bg-background/80 px-2 py-1 text-[9px] tracking-[0.25em] text-foreground/80 md:px-3 md:py-1.5">
        BEFORE
      </div>
      <div className="absolute right-4 top-4 z-20 bg-background/80 px-2 py-1 text-[9px] tracking-[0.25em] text-foreground/80 md:px-3 md:py-1.5">
        AFTER
      </div>
    </div>
  )
}

export function Evidence() {
  return (
    <section id="evidence" className="bg-secondary py-24 lg:py-36">
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
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
          <div className="mx-auto max-w-xl">
            <BeforeAfterSlider />
          </div>
          <p className="mt-4 text-center text-[10px] tracking-[0.1em] text-muted-foreground/60">
            {'※効果には個人差がございます。'}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
