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

        {/* スマホ: 横スライド / タブレット以上: 2列グリッド */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:snap-none">
          {essences.map((item, index) => (
            <div
              key={item.number}
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
      </div>
    </section>
  )
}
