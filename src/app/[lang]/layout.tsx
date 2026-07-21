import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import ConfigProvider from "antd/es/config-provider";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import theme from "@/defs/theme";
import { defaultLocale, isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { I18nProvider } from "@/i18n/provider";

import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://treignac-sur-vezere.fr";

/**
 * Static params (one per locale)
 */
export const generateStaticParams = () => locales.map((lang) => ({ lang }));

/**
 * Localized metadata
 */
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> => {
  const { lang } = await params;
  const dictionary = isLocale(lang) ? getDictionary(lang) : getDictionary("fr");
  return {
    metadataBase: new URL(siteUrl),
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    alternates: {
      canonical: `/${defaultLocale}`,
    },
    other: {
      "google-adsense-account": "ca-pub-2305699088219296",
    },
  };
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2305699088219296"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          <ConfigProvider theme={theme}>
            <I18nProvider locale={lang}>
              <div className="background"></div>
              <div className="globalContent">
                <div className="content">{children}</div>
              </div>
            </I18nProvider>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
