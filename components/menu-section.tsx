"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { FadeIn } from "@/components/fade-in"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const menus = [
  {
    id: "relaxation",
    tab: "リラクゼーション",
    enTitle: "Relaxation Head Spa",
    description: (
      <>
        オールハンドで頭・首・額の筋膜を丹念にほぐし、
        <br />
        アロマクリームバス・スチーム・ホットストーンで血流とリンパを極上に活性化。
        <br />
        <br />
        電気バリブラシと頭皮化粧水で頭皮を整え、眼精疲労を解き放ち、フェイスラインと頭皮を優美にリフトアップ。
        <br />
        五感すべてに響く、唯一無二の至福体験をお届けします。
      </>
    ),
    items: [
      {
        name: "Relaxation Head Spa",
        detail: "",
        duration: "90min",
        price: "¥16,000",
      },
    ],
    steps: [
      "ブラッシング",
      "足湯",
      "カッサ",
      "アロマクリームスパ",
      "ホットストーン",
      "ホットスチーム",
      "濃密泡シャンプー",
      "高保水Wトリートメント",
      "頭皮保湿",
      "電気バリブラシ",
      "ヘアドライ",
    ],
  },
  {
    id: "scalp",
    tab: "育毛×ヘッドスパ",
    enTitle: "Scalp Care Head Spa",
    description: (
      <>
        【Scalp Care Head Spa】
        <br />
        お客様指名No.1として支持される、
        <br />
        頭皮と髪を根本から整えるラグジュアリーな育毛ヘッドスパ。
        <br />
        <br />
        医師も推奨する上質なヒト臍帯由来幹細胞上清液を贅沢に使用し、
        <br />
        頭皮環境を健やかに整え、ハリ・コシのある美しい髪へ導きます。
        <br />
        <br />
        頭皮・髪・心まで満たされる、
        <br />
        至福のスパ体験をご提供いたします。
      </>
    ),
    items: [
      {
        name: "Scalp Care | Level 3",
        detail: "ヒト臍帯由来Premium",
        duration: "90min",
        price: "¥35,000",
      },
      {
        name: "Scalp Care | Level 2",
        detail: "ヒト臍帯由来Base",
        duration: "90min",
        price: "¥21,000",
      },
      {
        name: "Scalp Care | Level 1",
        detail: "ヒト臍帯由来Light",
        duration: "90min",
        price: "¥18,000",
      },
    ],
    steps: [
      "頭皮マイクロスコープ",
      "ブラッシング",
      "足湯",
      "カッサ",
      "アロマクリームスパ",
      "ホットストーン",
      "ホットスチーム",
      "ヒト幹細胞配合シャンプー",
      "高保水Wトリートメント",
      "ヒト幹細胞塗布",
      "電気バリブラシ",
      "ヘアドライ",
    ],
  },
  {
    id: "color",
    tab: "ヘアカラー×ヘッドスパ",
    enTitle: "Hair Color Head Spa",
    description: (
      <>
        ゼロテクニックカラーで頭皮への刺激を最小限に抑えながら、
        <br />
        ダメージを防ぎつつ、美しいカラーデザインとスカルプケアを同時に実現する贅沢なハイブリッドメニューです。
        <br />
        <br />
        アロマクリームバスを用いて血流・リンパ・神経バランスに丁寧にアプローチ。
        <br />
        ※ブリーチは使用しておりません。
      </>
    ),
    items: [
      {
        name: "Hair Color Head Spa + Scalp Care",
        detail: "ヒト臍帯由来Base使用",
        duration: "90min",
        price: "¥26,000",
      },
      {
        name: "Hair Color Head Spa",
        detail: "",
        duration: "90min",
        price: "¥21,000",
      },
    ],
    steps: [
      "ブラッシング",
      "頭皮保護",
      "ゼロテクカラー",
      "アロマクリームスパ",
      "濃密泡シャンプー",
      "高保水Wトリートメント",
      "頭皮保湿",
      "電気バリブラシ",
      "残留ジアミン除去",
      "ヘアドライ",
    ],
  },
]

export function MenuSection() {
  const [activeTab, setActiveTab] = useState("relaxation")
  const activeMenu = menus.find((m) => m.id === activeTab)!

  return (
    <section id="menu" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        {/* Section heading */}
        <FadeIn>
          <div className="mb-14 flex flex-col items-center lg:mb-20">
            <span className="text-base tracking-[0.5em] text-gold/80 sm:text-lg">
              MENU
            </span>
          </div>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={0.1}>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full items-center"
          >
            <TabsList className="mb-12 flex h-auto w-full flex-col gap-px rounded-lg border border-border/40 bg-card/50 p-1 sm:flex-row sm:gap-0 sm:rounded-none sm:border-0 sm:border-b sm:border-border/30 sm:bg-transparent sm:p-0 lg:mb-16">
              {menus.map((menu, idx) => (
                <TabsTrigger
                  key={menu.id}
                  value={menu.id}
                  className="relative h-auto w-full rounded-md border-0 border-b-0 py-4 text-sm font-medium tracking-[0.15em] text-foreground/70 transition-all duration-500 data-[state=active]:border-b-2 data-[state=active]:border-gold data-[state=active]:bg-gold/10 data-[state=active]:text-gold data-[state=active]:shadow-none sm:rounded-none sm:border-b sm:border-border/30 sm:bg-transparent sm:px-3 sm:py-5 sm:text-[11px] sm:font-normal sm:text-foreground/40 sm:data-[state=active]:border-b-gold sm:data-[state=active]:bg-transparent lg:text-xs"
                >
                  <span className="mr-2 text-[10px] opacity-50 sm:text-[9px] sm:opacity-40">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {menu.tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </FadeIn>

        {/* Tab content with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* リラクゼーション時はキャンドル画像背景、それ以外はダーク背景 */}
            <div className="relative">
              {activeTab === "relaxation" ? (
                <div className="absolute inset-0 -m-4 overflow-hidden rounded-sm lg:-m-6" aria-hidden="true">
                  <Image
                    src="/images/relaxation-bg.png"
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                  <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
                </div>
              ) : (
                <div
                  className="absolute inset-0 -m-4 bg-zinc-900/40 lg:-m-6"
                  aria-hidden="true"
                />
              )}

              <div className="relative border border-border/40 bg-card p-6 lg:p-10">
                {/* Title */}
                <div className="mb-8 text-center lg:mb-10">
                  <h3 className="mb-2 text-lg tracking-[0.15em] text-foreground lg:text-xl">
                    {"【"}
                    {activeMenu.enTitle}
                    {"】"}
                  </h3>
                  <div className="mx-auto mt-4 h-px w-10 bg-gold/30" />
                </div>

                {/* Description */}
                <p className="mx-auto mb-10 max-w-2xl text-center text-xs leading-[2.4] tracking-[0.03em] text-muted-foreground lg:text-left lg:text-[13px]">
                  {activeMenu.description}
                </p>

                {/* Pricing items */}
                <div className="mb-10 border-t border-border/30">
                  {activeMenu.items.map((item, idx) => (
                    <div
                      key={item.name}
                      className={`flex flex-col items-center justify-between gap-3 py-6 sm:flex-row ${
                        idx < activeMenu.items.length - 1
                          ? "border-b border-border/20"
                          : ""
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
                      <div className="flex shrink-0 items-baseline gap-3">
                        <span className="text-[10px] tracking-[0.1em] text-muted-foreground/60">
                          {item.duration}/
                        </span>
                        <span className="text-xl font-light tracking-[0.05em] text-gold lg:text-2xl">
                          {item.price}
                        </span>
                        <span className="text-[9px] text-muted-foreground/50">
                          (税込)
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Treatment steps grid */}
                <div className="mb-10">
                  <p className="mb-5 text-center text-[10px] tracking-[0.3em] text-gold/60">
                    施術内容
                  </p>
                  <div className="grid grid-cols-2 gap-px bg-border/20 sm:grid-cols-3">
                    {activeMenu.steps.map((step) => (
                      <div
                        key={step}
                        className="flex items-center justify-center bg-card px-3 py-3 text-center"
                      >
                        <span className="text-[11px] tracking-[0.08em] text-foreground/60">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <a
                    href="https://coubic.com/yuheadspa/services"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault()
                      window.open("https://coubic.com/yuheadspa/services", "_blank", "noopener,noreferrer")
                    }}
                    className="flex min-h-[44px] w-full items-center justify-center border border-gold bg-gold px-10 py-3 text-center text-[11px] tracking-[0.2em] text-background transition-all duration-300 hover:bg-transparent hover:text-gold sm:w-auto"
                  >
                    御予約
                  </a>
                  <a
                    href="#"
                    className="flex min-h-[44px] w-full items-center justify-center border border-foreground/20 px-10 py-3 text-center text-[11px] tracking-[0.2em] text-foreground transition-all duration-300 hover:border-gold/50 hover:text-gold sm:w-auto"
                  >
                    お問い合わせ
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
