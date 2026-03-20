"use client"

import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/fade-in"
import { menus } from "@/lib/menu-data"

export function MenuSection() {
  return (
    <section id="menu" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-14 flex flex-col items-center lg:mb-20">
            <span className="text-base tracking-[0.5em] text-gold/80 sm:text-lg">
              メニュー
            </span>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-6 lg:gap-8">
          {menus.map((menu, idx) => (
            <FadeIn key={menu.id} delay={idx * 0.1}>
              <Link href={`/menu/${menu.id}`} className="group block">
                <div className="relative overflow-hidden border border-border/30 bg-card transition-all duration-500 hover:border-gold/40">
                  <div className="flex flex-col sm:flex-row">
                    {/* Image */}
                    {menu.image && (
                      <div className="relative h-56 w-full shrink-0 overflow-hidden sm:h-auto sm:w-64 lg:w-80">
                        <Image
                          src={menu.image}
                          alt={menu.tab}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, 320px"
                        />
                        <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/20" />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex flex-1 flex-col justify-between p-6 lg:p-8">
                      <div>
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <div>
                            <span className="mb-1 block text-[10px] tracking-[0.3em] text-gold/60">
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                            <h3 className="text-base tracking-[0.15em] text-foreground lg:text-lg">
                              {menu.tab}
                            </h3>
                            <p className="mt-1 text-[11px] tracking-[0.1em] text-muted-foreground">
                              {menu.enTitle}
                            </p>
                          </div>
                          <span className="mt-1 shrink-0 text-gold/60 transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </div>

                        <p className="mb-5 text-[12px] leading-[2] tracking-[0.03em] text-muted-foreground line-clamp-3">
                          {menu.descriptionParagraphs[0]}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="border-t border-border/20 pt-4">
                        {menu.items.map((item) => (
                          <div
                            key={item.name}
                            className="flex items-baseline justify-between gap-3 py-1"
                          >
                            <span className="text-[11px] tracking-[0.05em] text-foreground/60">
                              {item.name}
                              {item.detail && (
                                <span className="ml-1 text-[10px] text-muted-foreground">
                                  ({item.detail})
                                </span>
                              )}
                            </span>
                            <div className="flex shrink-0 items-baseline gap-1.5">
                              <span className="text-[10px] text-muted-foreground/50">
                                {item.duration}/
                              </span>
                              <span className="text-base font-light tracking-[0.05em] text-gold">
                                {item.price}
                              </span>
                              <span className="text-[9px] text-muted-foreground/40">
                                税込
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
