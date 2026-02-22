"use client"

import { useEffect, useState } from "react"

export function FloatingReserve() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-5 z-50 flex flex-col items-center gap-2 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      {/* LINEで予約ボタン */}
      <a
        href="https://lin.ee/7hso3k1"
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#06C755] px-5 py-3 text-[11px] tracking-[0.15em] text-white shadow-lg shadow-black/30 transition-all duration-300 hover:bg-[#05b34c]"
      >
        {/* LINEアイコン */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.07 2 11.07c0 3.53 2.3 6.62 5.75 8.35l-.75 2.8 3.2-1.67c.9.25 1.86.38 2.8.38 5.52 0 10-4.07 10-9.07S17.52 2 12 2zm1.1 12.2l-2.1-2.25-4.1 2.25 4.5-4.8 2.15 2.25 4.05-2.25-4.5 4.8z" />
        </svg>
        LINEで予約
      </a>

      {/* 45秒で予約ボタン（サブ） */}
      <a
        href="#reservation"
        className="flex min-h-[44px] items-center justify-center rounded-full border border-gold/60 bg-background/90 px-5 py-2.5 text-[11px] tracking-[0.15em] text-gold backdrop-blur-sm shadow-md shadow-black/20 transition-all duration-300 hover:bg-gold hover:text-background"
      >
        45秒で予約
      </a>
    </div>
  )
}
