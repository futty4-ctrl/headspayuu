"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "INFORMATION", href: "#information" },
  { label: "当店について", href: "#about" },
  { label: "メニュー", href: "#menu" },
  { label: "EVIDENCE", href: "#evidence" },
  { label: "FAQ", href: "#faq" },
  { label: "CATEGORY", href: "#category" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md py-3 shadow-2xl shadow-black/30"
            : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
          {/* Left: Hamburger menu */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-foreground/80 transition-colors hover:text-gold"
            aria-label="メニューを開く"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Center: Reservation button - white bg, rounded, black text */}
          <a
            href="#reservation"
            className="rounded-full bg-foreground px-6 py-2 text-[10px] tracking-[0.15em] text-background transition-all duration-300 hover:bg-gold hover:text-background"
          >
            45秒で予約
          </a>

          {/* Right: Logo placeholder */}
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted" aria-label="店舗ロゴ">
            <span className="sr-only">ゆう</span>
          </div>
        </div>
      </header>

      {/* Fullscreen overlay menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-[60] bg-background/[0.98] backdrop-blur-xl"
          >
            <div className="flex h-full flex-col items-center justify-center">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute right-5 top-5 text-foreground/60 transition-colors hover:text-gold"
                aria-label="メニューを閉じる"
              >
                <X className="h-6 w-6" />
              </button>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-12 flex flex-col items-center"
              >
                <span className="text-[10px] tracking-[0.4em] text-foreground/40">
                  ヘッドスパ専門店
                </span>
                <span className="mt-1 text-xl tracking-[0.3em] text-gold-light">ゆう</span>
              </motion.div>

              <nav className="flex flex-col items-center gap-7">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-sm tracking-[0.25em] text-foreground/80 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-14 flex flex-col items-center gap-3"
              >
                <a
                  href="#reservation"
                  onClick={() => setIsMenuOpen(false)}
                  className="border border-gold bg-gold px-12 py-3.5 text-xs tracking-[0.2em] text-background transition-all duration-300 hover:bg-transparent hover:text-gold"
                >
                  御予約はこちら
                </a>
                <span className="text-[9px] tracking-[0.15em] text-foreground/30">
                  24時間ネット予約受付中
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
