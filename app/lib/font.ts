import localFont from 'next/font/local'

export const raviFaNum = localFont({
  src: [
    { path: './font/Pro/RaviFaNum-Black.ttf', weight: '900', style: 'normal' },
    { path: './font/Pro/RaviFaNum-ExtraBlack.ttf', weight: '800', style: 'normal' },
    { path: './font/Pro/RaviFaNum-Bold.ttf', weight: '700', style: 'normal' },
    { path: './font/Pro/RaviFaNum-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './font/Pro/RaviFaNum-Medium.ttf', weight: '500', style: 'normal' },
    { path: './font/Pro/RaviFaNum-Regular.ttf', weight: '400', style: 'normal' },
    { path: './font/Pro/RaviFaNum-Light.ttf', weight: '300', style: 'normal' },
    { path: './font/Pro/RaviFaNum-Thin.ttf', weight: '100', style: 'normal' },
  ],
  variable: '--font-ravifanum',
  display: 'swap',
  preload: true,
})

export const raavi = localFont({
  src: [
    { path: './font/Pro/Ravi-Black.ttf', weight: '900', style: 'normal' },
    { path: './font/Pro/Ravi-ExtraBlack.ttf', weight: '800', style: 'normal' },
    { path: './font/Pro/Ravi-Bold.ttf', weight: '700', style: 'normal' },
    { path: './font/Pro/Ravi-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './font/Pro/Ravi-Medium.ttf', weight: '500', style: 'normal' },
    { path: './font/Pro/Ravi-Regular.ttf', weight: '400', style: 'normal' },
    { path: './font/Pro/Ravi-Light.ttf', weight: '300', style: 'normal' },
    { path: './font/Pro/Ravi-Thin.ttf', weight: '100', style: 'normal' },
  ],
  variable: '--font-raavi',
  display: 'swap',
  preload: true,
})
