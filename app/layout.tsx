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
  title: 'ヘッドスパ専門店 ゆう｜福岡市西区豊浜・完全個室・1日3名限定',
  description: '福岡市西区豊浜のヘッドスパ専門店「ゆう」。完全個室・1日3名様限定の完全予約制。ヒト幹細胞×専門技術による育毛・頭皮ケア・エイジングケアに特化したラグジュアリーヘッドスパ。',
  keywords: 'ヘッドスパ, 福岡, 西区, 豊浜, 育毛, 頭皮ケア, 完全個室, ヒト幹細胞, エイジングケア',
  openGraph: {
    title: 'ヘッドスパ専門店 ゆう｜福岡市西区豊浜',
    description: '完全個室・1日3名様限定。ヒト幹細胞×専門技術による育毛・頭皮ケアの専門店。',
    url: 'https://www.yuheadspa.net',
    siteName: 'ヘッドスパ専門店 ゆう',
    locale: 'ja_JP',
    type: 'website',
  },
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'ヘッドスパ専門店 ゆう',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '豊浜2丁目20-20-2',
      addressLocality: '福岡市西区',
      addressRegion: '福岡県',
      addressCountry: 'JP',
    },
    telephone: '092-284-9392',
    email: 'info@yuheadspa.net',
    url: 'https://www.yuheadspa.net',
    openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 09:00-17:30',
    description:
      '福岡市西区豊浜の完全個室・1日3名限定のヘッドスパ専門店。ヒト幹細胞×専門技術による育毛・頭皮ケアに特化。',
    priceRange: '¥¥¥',
  }

  return (
    <html lang="ja" className={notoSerifJP.variable}>
      <body className="font-serif antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
