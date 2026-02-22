"use client"

import Image from "next/image"
import { FadeIn } from "@/components/fade-in"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

const cards = [
  {
    title: "～ヘッドスパ×育毛～",
    text: "医師が通う程の高品質ヒト幹細胞×専門技術で、頭皮から美しさを底上げ。",
    buttons: ["御予約", "メニュー"],
    image: "/images/menu-scalp.png",
  },
  {
    title: "～御新規様特典～",
    text: "数量限定ではございますが、ご新規様特典をご用意しております。この機会をぜひお見逃しなく。",
    buttons: ["御予約", "特典詳細"],
    image: "/images/card-2-newcomer.png",
  },
  {
    title: "～ Customer Voices ～",
    text: "お客様より頂いた声を一部掲載。今後とも一人一人のお客様に誠心誠意対応して参ります。",
    buttons: ["御予約", "お問い合わせ"],
    image: "/images/card-3-voices.png",
  },
  {
    title: "～ギフトカード～",
    text: "大切な方へ、誕生日・記念日・お礼に最適な特別な一枚です。",
    buttons: ["詳細", "お問い合わせ"],
    image: "/images/card-4-giftcard.png",
  },
  {
    title: "～DRY HEADSPA ONLY～",
    text: "ついに大阪の地へ。皆様のご期待にお応えできますよう、心を込めてお迎えいたします。",
    buttons: ["御予約", "公式HP"],
    image: "/images/card-5-osaka.png",
  },
  {
    title: "～ONLINE STORE～",
    text: "Members Only Online Store 入場にはPASSが必要です。詳細はお問い合わせくださいませ。",
    buttons: ["お問い合わせ", "ONLINE STORE"],
    image: "/images/menu-color.png",
  },
  {
    title: "～ネット予約システム～",
    text: "当店は前日までに満席になります。至福の時間は、どうぞお早めに。24時間、オンラインにて受付中。",
    buttons: ["御予約", "お問い合わせ"],
    image: "/images/card-7-booking.png",
  },
]

export function InformationCarousel() {
  return (
    <section id="information" className="bg-background py-16 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-16 flex flex-col items-center">
            <span className="mb-3 text-[10px] tracking-[0.5em] text-gold/80">
              INFORMATION
            </span>
            <div className="mt-4 h-px w-14 bg-gold/40" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mx-auto w-full max-w-5xl"
          >
            <CarouselContent className="-ml-4">
              {cards.map((card, index) => (
                <CarouselItem key={index} className="basis-[85%] pl-4 sm:basis-[60%] md:basis-[45%] lg:basis-[35%]">
                  <div className="flex h-full flex-col border border-border/50 bg-card transition-all duration-500 hover:border-gold/20">
                    {/* カルーセルカード画像 */}
                    <div className="relative aspect-[4/3] w-full bg-zinc-800">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 85vw, (max-width: 768px) 60vw, (max-width: 1024px) 45vw, 35vw"
                        onError={(e) => {
                          e.currentTarget.style.display = "none"
                        }}
                      />
                    </div>

                    {/* Card content */}
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="mb-4 text-sm leading-relaxed tracking-[0.15em] text-foreground">
                        {card.title}
                      </h3>
                      <p className="mb-6 flex-1 text-[11px] leading-[2.2] tracking-[0.03em] text-muted-foreground">
                        {card.text}
                      </p>
                      <div className="flex gap-3">
                        {card.buttons.map((btn) => (
                          <a
                            key={btn}
                            href={btn === "御予約" ? "https://coubic.com/yuheadspa/services" : "#"}
                            target={btn === "御予約" ? "_blank" : undefined}
                            rel={btn === "御予約" ? "noopener noreferrer" : undefined}
                            className="border border-gold/40 px-4 py-2 text-[9px] tracking-[0.15em] text-gold transition-all duration-300 hover:bg-gold hover:text-background"
                          >
                            {btn}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 border-gold/30 bg-background text-gold hover:bg-gold hover:text-background" />
            <CarouselNext className="right-0 border-gold/30 bg-background text-gold hover:bg-gold hover:text-background" />
          </Carousel>
        </FadeIn>
      </div>
    </section>
  )
}
