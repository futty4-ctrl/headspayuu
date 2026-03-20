import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { menus } from "@/lib/menu-data"

export function generateStaticParams() {
  return menus.map((menu) => ({ id: menu.id }))
}

export default async function MenuDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const menu = menus.find((m) => m.id === id)
  if (!menu) notFound()

  return (
    <main className="min-h-screen bg-background">
      {/* Hero image */}
      <div className={`relative w-full overflow-hidden ${menu.image ? "h-screen" : "h-[30vh] bg-zinc-900"}`}>
        {menu.image && (
          <Image
            src={menu.image}
            alt={menu.tab}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        {/* Back link */}
        <div className="absolute left-5 top-8 z-10 lg:left-10">
          <Link
            href="/#menu"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] text-white/60 transition-colors hover:text-gold"
          >
            ← MENU へ戻る
          </Link>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="mb-3 text-[10px] tracking-[0.4em] text-gold/80">
            MENU
          </span>
          <h1 className="mb-2 text-xl tracking-[0.2em] text-white lg:text-3xl">
            {menu.tab}
          </h1>
          <p className="text-[11px] tracking-[0.15em] text-white/60">
            {menu.enTitle}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16 lg:px-10 lg:py-24">
        {/* Description */}
        <div className="mb-14">
          <div className="mx-auto h-px w-10 bg-gold/30" />
          <div className="mt-10 space-y-5 text-center text-[13px] leading-[2.4] tracking-[0.04em] text-muted-foreground lg:text-sm">
            {menu.descriptionParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-14 border border-border/30 bg-card">
          <div className="border-b border-border/20 px-6 py-5 text-center">
            <span className="text-[10px] tracking-[0.3em] text-gold/60">
              PRICE
            </span>
          </div>
          {menu.items.map((item, idx) => (
            <div
              key={item.name}
              className={`flex flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row ${
                idx < menu.items.length - 1 ? "border-b border-border/20" : ""
              }`}
            >
              <div className="text-center sm:text-left">
                <p className="text-sm tracking-[0.08em] text-foreground">
                  {item.name}
                </p>
                {item.detail && (
                  <p className="mt-1 text-[10px] tracking-[0.05em] text-muted-foreground">
                    ({item.detail})
                  </p>
                )}
              </div>
              <div className="flex shrink-0 items-baseline gap-2">
                <span className="text-[10px] tracking-[0.1em] text-muted-foreground/60">
                  {item.duration}/
                </span>
                <span className="text-2xl font-light tracking-[0.05em] text-gold">
                  {item.price}
                </span>
                <span className="text-[9px] text-muted-foreground/50">
                  (税込)
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Treatment steps */}
        <div className="mb-14">
          <p className="mb-6 text-center text-[10px] tracking-[0.3em] text-gold/60">
            施術内容
          </p>
          <div className="grid grid-cols-2 gap-px bg-border/20 sm:grid-cols-3 lg:grid-cols-4">
            {menu.steps.map((step, idx) => (
              <div
                key={step}
                className="flex items-center justify-center bg-card px-3 py-4 text-center"
              >
                <span className="mr-2 text-[9px] text-muted-foreground/40">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-[11px] tracking-[0.08em] text-foreground/70">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://coubic.com/yuheadspa/services"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[44px] w-full items-center justify-center border border-gold bg-gold px-10 py-3 text-center text-[11px] tracking-[0.2em] text-background transition-all duration-300 hover:bg-transparent hover:text-gold sm:w-auto"
          >
            御予約
          </a>
          <Link
            href="/#menu"
            className="flex min-h-[44px] w-full items-center justify-center border border-foreground/20 px-10 py-3 text-center text-[11px] tracking-[0.2em] text-foreground transition-all duration-300 hover:border-gold/50 hover:text-gold sm:w-auto"
          >
            メニュー一覧へ
          </Link>
        </div>
      </div>
    </main>
  )
}
