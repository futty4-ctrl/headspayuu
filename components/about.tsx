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
            <span className="text-base tracking-[0.5em] text-gold/80 sm:text-lg">
              当店について
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-20 text-center">
<div className="relative mx-auto mb-8 aspect-[4/3] w-full max-w-xl overflow-hidden rounded-sm border border-border/30">
              <Image
                src="/images/about-interior.png"
                alt="当店の施術ルーム"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 576px"
              />
            </div>
            <div className="mt-4 flex flex-col gap-8">
              <p className="text-sm leading-[2.6] tracking-[0.08em] text-foreground/70 lg:text-[15px]">
                福岡市西区豊浜の完全個室ヘッドスパ専門店。<br />
                ヘッドスパ歴15年の技術で、疲労・眼精疲労・<br />
                頭皮ケア・育毛ケアを丁寧にサポートいたします。<br />
                1日3名様限定、完全予約制。<br />
                落ち着いた空間で、ゆっくりお過ごしください。
              </p>

              {/* 動画 */}
              <div className="mx-auto mt-4 w-full max-w-xl overflow-hidden rounded-sm border border-border/30">
                <video
                  src="/videos/about.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full object-cover"
                />
              </div>
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
