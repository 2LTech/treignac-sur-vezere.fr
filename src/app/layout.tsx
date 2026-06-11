import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import ConfigProvider from 'antd/es/config-provider'
import { AntdRegistry } from '@ant-design/nextjs-registry'

import theme from '@/defs/theme'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Treignac-sur-Vézère',
  description: 'Petite cité de caractère',
  other: {
    'google-adsense-account': 'ca-pub-2305699088219296',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='fr'>
      <head>
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2305699088219296'
          crossOrigin='anonymous'
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          <ConfigProvider theme={theme}>
            <div className='background'></div>
            <div className='globalContent'>
              <div className='content'>{children}</div>
            </div>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}
