"use client"

import { FadeIn } from "@/components/fade-in"

export function SiteFooter() {
  return (
    <footer className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-10 flex flex-col items-center">
            <span className="mb-1.5 text-[10px] tracking-[0.4em] text-foreground/40">
              ヘッドスパ専門店
            </span>
            <span className="text-lg tracking-[0.3em] text-gold-light/80 lg:text-2xl">
              ゆう
            </span>
            <p className="mt-3 text-[9px] tracking-[0.25em] text-foreground/25">
              {'～日常に静かな贅沢を～'}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mb-10 flex flex-col items-center gap-2 text-center">
            <p className="text-[10px] leading-[2] tracking-[0.1em] text-foreground/30 lg:text-xs">
              福岡県福岡市西区豊浜2丁目20-20-2
            </p>
            <p className="text-[10px] leading-[2] tracking-[0.1em] text-foreground/30 lg:text-xs">
              営業時間 9:00～17:30（不定休）
            </p>
          </div>
        </FadeIn>

        <div className="border-t border-border/20 pt-8 text-center">
          <p className="text-[9px] tracking-[0.2em] text-foreground/20">
            &copy; {new Date().getFullYear()} HEAD SPA YUU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
