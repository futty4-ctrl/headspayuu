"use client"

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
  return (
    <section id="essences" className="bg-secondary py-24 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-16 flex flex-col items-center lg:mb-20">
            <span className="mb-3 text-[10px] tracking-[0.5em] text-gold/80">
              10 ESSENCES
            </span>
            <h2 className="text-2xl font-light tracking-[0.2em] text-foreground lg:text-3xl">
              当店の10のこだわり
            </h2>
            <div className="mt-6 h-px w-14 bg-gold/40" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {essences.map((item, index) => (
            <FadeIn key={item.number} delay={index * 0.04}>
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-800">
                {/* 画像 */}
                <Image
                  src={`/images/essence-${item.number}.png`}
                  alt={item.text}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />

                {/* 暗めのグラデーションオーバーレイ */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* テキスト（左下に配置） */}
                <div className="absolute bottom-0 left-0 p-5">
                  <span className="mb-1 block font-serif text-2xl font-light text-gold/80">
                    {item.number}
                  </span>
                  <p className="text-sm leading-[1.8] tracking-[0.08em] text-white/90">
                    {item.text}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
