"use client"

import { FadeIn } from "@/components/fade-in"

export function AccessMap() {
  return (
    <section id="access" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-16 flex flex-col items-center">
            <span className="mb-3 text-[10px] tracking-[0.5em] text-gold/80">
              ACCESS
            </span>
            <h2 className="text-2xl font-light tracking-[0.2em] text-foreground lg:text-3xl">
              アクセス
            </h2>
            <div className="mt-6 h-px w-14 bg-gold/40" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-10 flex flex-col items-center text-center">
            <p className="mb-1 text-sm tracking-[0.12em] text-foreground/80">
              ヘッドスパ専門店 ゆう
            </p>
            <p className="text-xs leading-[2.4] tracking-[0.08em] text-muted-foreground">
              福岡県福岡市西区豊浜2丁目20-20-2
            </p>
            <p className="mt-3 text-[11px] tracking-[0.08em] text-muted-foreground">
              TEL: 092-284-9392
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="overflow-hidden border border-border/40">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6647.109643438461!2d130.33487757515678!3d33.590906141950285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541936d028cb64d%3A0xf4531f4c7f531b6c!2z44OY44OD44OJ44K544OR5bCC6ZaA5bqX44KG44GG!5e0!3m2!1sja!2sjp!4v1771765599477!5m2!1sja!2sjp"
              width="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ヘッドスパ専門店 ゆう アクセスマップ"
              className="h-[300px] w-full grayscale transition-all duration-700 hover:grayscale-0 md:h-[400px]"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-8 grid grid-cols-2 gap-px border border-border/40 bg-border/40 text-center">
            <div className="bg-card px-3 py-4 md:px-4 md:py-5">
              <p className="mb-1 text-[10px] tracking-[0.2em] text-gold/70">
                OPEN
              </p>
              <p className="text-xs tracking-[0.1em] text-foreground/80">
                9:00 - 17:30
              </p>
            </div>
            <div className="bg-card px-3 py-4 md:px-4 md:py-5">
              <p className="mb-1 text-[10px] tracking-[0.2em] text-gold/70">
                CLOSED
              </p>
              <p className="text-xs tracking-[0.1em] text-foreground/80">
                不定休
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
