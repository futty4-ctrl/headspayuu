"use client"

import { FadeIn } from "@/components/fade-in"

const links = [
  "Scalp Care Head Spa",
  "Hair Color Head Spa",
  "Relaxation Head Spa",
  "EVIDENCE",
  "PRICE",
  "FAQ",
  "ONLINE STORE",
  "御新規様特典",
]

export function CategoryLinks() {
  return (
    <section id="category" className="bg-secondary py-24 lg:py-36">
      <div className="mx-auto max-w-2xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-16 flex flex-col items-center">
            <span className="mb-3 text-[10px] tracking-[0.5em] text-gold/80">
              CATEGORY
            </span>
            <h2 className="text-2xl font-light tracking-[0.2em] text-foreground lg:text-3xl">
              各種リンク
            </h2>
            <div className="mt-6 h-px w-14 bg-gold/40" />
          </div>
        </FadeIn>

        <div className="flex flex-col gap-2">
          {links.map((label, index) => (
            <FadeIn key={label} delay={index * 0.04}>
              <a
                href="#"
                className="group flex items-center justify-between rounded-sm border border-border/40 bg-card px-5 py-4 transition-all duration-500 hover:border-gold/30 md:px-6 md:py-5"
              >
                <span className="text-sm tracking-[0.12em] text-foreground/80 transition-colors duration-500 group-hover:text-gold">
                  {label}
                </span>
                <svg
                  className="h-4 w-4 text-foreground/30 transition-all duration-500 group-hover:translate-x-1 group-hover:text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
