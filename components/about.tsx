"use client"

import Image from "next/image"
import { FadeIn } from "@/components/fade-in"

export function About() {
  return (
    <section id="about" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <FadeIn>
          <div className="mb-12 flex justify-center">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border border-gold/30 lg:h-32 lg:w-32">
              <Image
                src="/images/about-portrait.png"
                alt="ヘッドスパ専門店ゆう"
                fill
                className="object-contain"
                sizes="128px"
              />
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="mb-6 flex flex-col items-center">
            <span className="text-sm tracking-[0.5em] text-gold/80 sm:text-base">
              ABOUT
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-20 text-center">
            <p className="mb-4 text-sm tracking-[0.2em] text-white sm:text-base">
              {'～当店について～'}
            </p>
            <div className="mt-4 flex flex-col gap-8">
              <p className="text-sm leading-[2.6] tracking-[0.08em] text-foreground/70 lg:text-[15px]">
                福岡市西区豊浜にて
                <br />
                1日限定3名様の
                <br />
                完全予約制ヘッドスパ専門店を運営しております。
              </p>
              <p className="text-sm leading-[2.6] tracking-[0.08em] text-foreground/70 lg:text-[15px]">
                専門店ならではの技術と知識を活かし
                <br />
                {'癒しのその先――'}
                <br />
                頭皮や髪のエイジングケア
                <br />
                育毛に特化したスパメニューを取り揃えております。
              </p>
              <p className="text-sm leading-[2.6] tracking-[0.08em] text-foreground/70 lg:text-[15px]">
                日常の中で心の拠り所となる場所でありますよう
                <br />
                お一人おひとりに寄り添い丁寧に心を込めて施術いたします。
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div
            id="reservation"
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="https://coubic.com/yuheadspa/services"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault()
                window.open("https://coubic.com/yuheadspa/services", "_blank", "noopener,noreferrer")
              }}
              className="flex min-h-[44px] w-full items-center justify-center border border-gold bg-gold px-12 py-3.5 text-center text-xs tracking-[0.25em] text-background transition-all duration-300 hover:bg-transparent hover:text-gold sm:w-auto"
            >
              御予約
            </a>
            <a
              href="#"
              className="flex min-h-[44px] w-full items-center justify-center border border-foreground/20 px-12 py-3.5 text-center text-xs tracking-[0.25em] text-foreground transition-all duration-300 hover:border-gold/50 hover:text-gold sm:w-auto"
            >
              お問い合わせ
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
