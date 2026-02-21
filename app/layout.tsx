import type { Metadata, Viewport } from 'next'
import { Noto_Serif_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ヘッドスパ専門店 ゆう｜福岡市西区・完全個室・1日3名様限定',
  description: '福岡市西区豊浜のヘッドスパ専門店ゆう。完全個室・1日3名様限定。熟練のオールハンドで行うヘッドスパ。頭皮や髪のエイジングケア、育毛に特化したスパメニューを取り揃えております。',
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={notoSerifJP.variable}>
      <body className="font-serif antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
