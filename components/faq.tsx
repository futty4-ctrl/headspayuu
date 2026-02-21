"use client"

import { FadeIn } from "@/components/fade-in"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "駐車場はありますか？",
    a: "サロンの目の前に駐車場が御座います。",
  },
  {
    q: "2人同時に施術を受けることはできますか？",
    a: "当店は、お一人様毎のご案内をさせて頂いております。完全個室にてお一人おひとりに寄り添い、丁寧に施術を行っております。",
  },
  {
    q: "ロング料金はありますか？",
    a: "当店では、ロング料金は頂いておりません。",
  },
  {
    q: "スタイリング剤は、つけて来てもいいですか？",
    a: "はい、ウエットスパがメインのため、つけて来て頂いて大丈夫です。",
  },
  {
    q: "ヒト幹細胞上清液は、どのタイミングで使いますか？",
    a: "当店では、必ずシャンプー後に使用します。清潔な頭皮に直接塗布することで、より高い効果が期待できます。",
  },
  {
    q: "髪の毛は生えてきますか？",
    a: "育毛には個人差があります。しかし、当店での実績におきまして、実感頂いているお客様が大多数を占めております。",
  },
  {
    q: "事前の予約が必要ですか？",
    a: "当店は完全予約制で御座います。1日限定3名様の施術を行っております。前日までに満席になることが多いため、お早めのご予約をおすすめいたします。",
  },
  {
    q: "ヒト幹細胞上清液は安全ですか？",
    a: "安心の国内製造であり、当店は育毛実績が御座います。厳しい品質管理のもと製造された安全な製品を使用しております。",
  },
  {
    q: "施術後に気をつけることは？",
    a: "カラーやパーマは24時間後が安心。睡眠等生活習慣を見直すことも大事です。",
  },
  {
    q: "トータルで、どのくらいの時間がかかりますか？",
    a: "ご来店〜お帰りいただくまで2時間を目安とさせていただいております。カウンセリングや頭皮診断のお時間も含まれます。",
  },
  {
    q: "カラーやパーマなどをした次の日に、ヘッドスパはできますか？",
    a: "一週間を目安に、お時間をあけて頂くことをおすすめいたします。頭皮への負担を軽減し、より効果的な施術を行うためです。",
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-3xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-16 flex flex-col items-center">
            <span className="mb-3 text-[10px] tracking-[0.5em] text-gold/80">
              FAQ
            </span>
            <h2 className="text-2xl font-light tracking-[0.2em] text-foreground lg:text-3xl">
              よくあるご質問
            </h2>
            <div className="mt-6 h-px w-14 bg-gold/40" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border/30"
              >
                <AccordionTrigger className="py-5 text-left text-sm tracking-[0.05em] text-foreground/80 hover:text-gold hover:no-underline md:py-6 lg:text-[15px]">
                  <span className="flex items-start gap-3">
                    <span className="shrink-0 text-[11px] tracking-[0.1em] text-gold/60">Q.</span>
                    <span>{faq.q}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-6 text-xs leading-[2.2] tracking-[0.03em] text-muted-foreground md:pl-7 lg:text-[13px]">
                  <span className="mr-2 shrink-0 text-[11px] tracking-[0.1em] text-gold/40">A.</span>
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  )
}
