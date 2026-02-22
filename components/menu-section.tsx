"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FadeIn } from "@/components/fade-in"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const menus = [
  {
    id: "scalp",
    tab: "育毛×ヘッドスパ",
    enTitle: "Scalp Care Head Spa",
    description: (
      <>
        お客様指名No.1として名高い、
        <br />
        頭皮と髪を根本からリセットするラグジュアリーな育毛ヘッドスパ。
        <br />
        <br />
        医師も推奨する上質なヒト脂肪由来幹細胞上清液から、
        <br />
        最先端のヒト臍帯由来幹細胞上清液まで、
        <br />
        グレードに応じたスペシャルケアをご提供。
        <br />
        <br />
        頭皮・髪・心まで満たす至福のスパ体験をお届けします。
      </>
    ),
    items: [
      {
        name: "Scalp Care | Level 3",
        detail: "ヒト臍帯由来",
        duration: "90min",
        price: "¥35,000",
      },
      {
        name: "Scalp Care | Level 2",
        detail: "ヒト臍帯由来",
        duration: "90min",
        price: "¥21,000",
      },
      {
        name: "Scalp Care | Level 1",
        detail: "ヒト脂肪由来",
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
        detail: "",
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
      "ヘアドライ",
    ],
  },
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
]

export function MenuSection() {
  const [activeTab, setActiveTab] = useState("scalp")
  const activeMenu = menus.find((m) => m.id === activeTab)!

  return (
    <section id="menu" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        {/* Section heading */}
        <FadeIn>
          <div className="mb-14 flex flex-col items-center lg:mb-20">
            <span className="mb-3 text-[10px] tracking-[0.5em] text-gold/80">
              MENU
            </span>
            <h2 className="text-2xl font-light tracking-[0.2em] text-foreground lg:text-3xl">
              メニュー詳細と施術内容
            </h2>
            <div className="mt-6 h-px w-14 bg-gold/40" />
          </div>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={0.1}>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full items-center"
          >
            <TabsList className="mb-12 flex h-auto w-full flex-col gap-0 rounded-none bg-transparent p-0 sm:flex-row sm:gap-0 lg:mb-16">
              {menus.map((menu, idx) => (
                <TabsTrigger
                  key={menu.id}
                  value={menu.id}
                  className="relative h-auto w-full rounded-none border-b border-border/30 bg-transparent px-3 py-4 text-[11px] tracking-[0.15em] text-foreground/40 transition-all duration-500 data-[state=active]:border-b-gold data-[state=active]:bg-transparent data-[state=active]:text-gold data-[state=active]:shadow-none sm:w-auto sm:flex-1 sm:py-5 lg:text-xs"
                >
                  <span className="mr-2 text-[9px] opacity-40">
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
            {/* Dark placeholder background */}
            <div className="relative">
              <div
                className="absolute inset-0 -m-4 bg-zinc-900/40 lg:-m-6"
                aria-hidden="true"
              />

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
