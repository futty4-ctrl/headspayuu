"use client"

import { FadeIn } from "@/components/fade-in"

export function AccessMap() {
  return (
    <section id="access" className="bg-background py-24 lg:py-36">
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
              〒810-0001 福岡県福岡市中央区天神X-X-X
              <br />
              ○○ビル 3F
            </p>
            <p className="mt-3 text-[11px] tracking-[0.08em] text-muted-foreground">
              {'西鉄福岡（天神）駅より徒歩5分'}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="overflow-hidden border border-border/40">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.526178667564!2d130.3988!3d33.5902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541918f1a6e0001%3A0x0!2zMzPCsDM1JzI0LjciTiAxMzDCsDIzJzU1LjciRQ!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
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
                10:00 - 19:00
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
