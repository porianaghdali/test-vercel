import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
// import { raviFaNum, raavi } from "../lib/font"
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const metadata: Metadata = {
  title: "مرجع هوشمند بازارهای مالی و فارکس|حسنیکال",
  description:"حسنیکال با ارائه آموزش‌های گام‌به‌گام، تحلیل‌های جامع و جامعه‌ای از معامله‌گران، در بازارهای مالی و فارکس در کنار شما می باشد.",
  icons: {
    icon: '/images/Logo.svg',
    shortcut: '/images/Logo.svg',
    apple: '/images/Logo.svg',
    other: {
      rel: 'icon',
      url: '/images/Logo.svg',
    },
  },
  openGraph: {
    title: "مرجع هوشمند بازارهای مالی و فارکس|حسنیکال",
    description: "حسنیکال با ارائه آموزش‌های گام‌به‌گام، تحلیل‌های جامع و جامعه‌ای از معامله‌گران، در بازارهای مالی و فارکس در کنار شما می باشد.",
    url: "https://hesnical.com",
    siteName: "حسنیکال",
    images: [
      {
        url: `${siteUrl}/images/Logo.svg`,
        width: 1200,
        height: 630,
        alt: "حسنیکال|مرجع هوشمند بازارهای مالی و فارکس",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // Ensures a large preview image
    title: "مرجع هوشمند بازارهای مالی و فارکس|حسنیکال",
    description: "حسنیکال با ارائه آموزش‌های گام‌به‌گام، تحلیل‌های جامع و جامعه‌ای از معامله‌گران، در بازارهای مالی و فارکس در کنار شما می باشد.",
    images: [`${siteUrl}/images/Logo.svg`],
  },
  verification: {
    google: "fmmy0XVJY4UhNk35DMBF_CxiB-Oz5NSDQvxC71N4mFo",
  },
};

const raviFaNum = localFont({
  src: [
    { path: '../lib/font/Pro/RaviFaNum-Black.ttf', weight: '900', style: 'normal' },
    { path: '../lib/font/Pro/RaviFaNum-ExtraBlack.ttf', weight: '800', style: 'normal' },
    { path: '../lib/font/Pro/RaviFaNum-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../lib/font/Pro/RaviFaNum-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../lib/font/Pro/RaviFaNum-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../lib/font/Pro/RaviFaNum-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../lib/font/Pro/RaviFaNum-Light.ttf', weight: '300', style: 'normal' },
    { path: '../lib/font/Pro/RaviFaNum-Thin.ttf', weight: '100', style: 'normal' },
  ],
  variable: '--font-ravifanum',
  display: 'swap',
  preload: true,
})

const raavi = localFont({
  src: [
    { path: '../lib/font/Pro/Ravi-Black.ttf', weight: '900', style: 'normal' },
    { path: '../lib/font/Pro/Ravi-ExtraBlack.ttf', weight: '800', style: 'normal' },
    { path: '../lib/font/Pro/Ravi-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../lib/font/Pro/Ravi-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../lib/font/Pro/Ravi-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../lib/font/Pro/Ravi-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../lib/font/Pro/Ravi-Light.ttf', weight: '300', style: 'normal' },
    { path: '../lib/font/Pro/Ravi-Thin.ttf', weight: '100', style: 'normal' },
  ],
  variable: '--font-raavi',
  display: 'swap',
  preload: true,
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
    dir="rtl" 
    lang="fa" 
    className={`${raviFaNum.variable} ${raavi.variable} scroll-smooth antialiased`}
  >
    <body className="font-raavi overflow-x-hidden min-h-screen">
      {children}
    </body>
  </html>
  );
}
