"use client"

import { FadeIn } from "@/components/fade-in"

const links: { label: string; sectionId: string }[] = [
  { label: "ABOUT", sectionId: "about" },
  { label: "MENU", sectionId: "menu" },
  { label: "ACCESS", sectionId: "access" },
  { label: "FAQ", sectionId: "faq" },
]

function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId)
  if (el) {
    window.history.pushState(null, "", `#${sectionId}`)
    el.scrollIntoView({ behavior: "smooth" })
  }
}

export function CategoryLinks() {
  return (
    <section id="category" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-2xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-16 flex flex-col items-center">
            <span className="mb-2 text-sm font-medium tracking-[0.5em] text-gold/80 sm:text-base">
              CATEGORY
            </span>
            <h2 className="text-sm font-light tracking-[0.2em] text-foreground/80 lg:text-base">
              各種リンク
            </h2>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-2">
          {links.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.04}>
              <a
                href={`#${item.sectionId}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.sectionId)
                }}
                className="group flex min-h-[44px] items-center justify-between rounded-sm border border-border/40 bg-card px-5 py-5 transition-all duration-500 hover:border-gold/30 md:px-6"
              >
                <span className="text-sm tracking-[0.12em] text-foreground/80 transition-colors duration-500 group-hover:text-gold">
                  {item.label}
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
