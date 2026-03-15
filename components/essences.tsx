"use client"

import { useRef } from "react"
import Image from "next/image"
import { FadeIn } from "@/components/fade-in"

const essences = [
  {
    number: "01",
    text: "1日3名限定。完全個室で、自分だけのひととき。",
  },
  {
    number: "02",
    text: "幹細胞のチカラで、髪と頭皮にエイジングケア",
  },
  {
    number: "03",
    text: "プロ専用ドライヤー＆電気バリブラシで結果を追求",
  },
  {
    number: "04",
    text: "唯一無二の世界観と四季が彩る非日常空間",
  },
  {
    number: "05",
    text: "ホットストーン＆スチームで、深部からほぐす。",
  },
  {
    number: "06",
    text: "照明・温度・香り・音まで、五感設計のスパ体験",
  },
  {
    number: "07",
    text: "店舗前に2台分の駐車場完備でストレスフリー",
  },
  {
    number: "08",
    text: "ヘッドスパ歴15年以上。匠による、確かな技術。",
  },
  {
    number: "09",
    text: "国家資格×美容所登録。ホンモノの信頼と安心。",
  },
  {
    number: "10",
    text: "感動を重ねるチケット 通いやすさも贅沢に",
  },
]

export function Essences() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.querySelector("[data-essence-card]")?.clientWidth ?? 280
    const gap = 16
    const amount = (cardWidth + gap) * (direction === "left" ? -1 : 1)
    el.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <section id="essences" className="bg-secondary py-24 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-16 flex flex-col items-center lg:mb-20">
            <span className="text-base tracking-[0.5em] text-gold/80 sm:text-lg">
              10 ESSENCES
            </span>
            <span className="mt-2 text-base tracking-[0.2em] text-white sm:text-lg">
              〜こだわり〜
            </span>
          </div>
        </FadeIn>

        {/* スマホ: 横スライド＋矢印 / タブレット以上: 2列グリッド */}
        <div className="relative sm:static">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:snap-none"
          >
            {essences.map((item, index) => (
              <div
                key={item.number}
                data-essence-card
                className="flex-shrink-0 w-[85vw] max-w-[340px] snap-center sm:w-full sm:max-w-none"
              >
                <FadeIn delay={index * 0.04}>
                  <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-zinc-800">
                    <Image
                      src={`/images/essence-${item.number}.png`}
                      alt={item.text}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 85vw, 50vw"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>

          {/* 左右矢印（スマホの横スライド時のみ表示） */}
          <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-between px-0 sm:hidden" aria-hidden>
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold/30 bg-background/90 text-gold transition-all hover:bg-gold hover:text-background"
              aria-label="前へ"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold/30 bg-background/90 text-gold transition-all hover:bg-gold hover:text-background"
              aria-label="次へ"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
