import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getContent, LOCALES, Locale } from '@/lib/i18n'

const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const content = getContent(locale as Locale)
  return {
    title: content.meta.title,
    description: content.meta.description,
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      images: ['/og-image.png'],
      locale: content.meta.ogLocale,
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const content = getContent(locale as Locale)

  return (
    <html lang={locale}>
      <head>
        <meta property="og:title" content={content.meta.title} />
        <meta property="og:description" content={content.meta.description} />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:locale" content={content.meta.ogLocale} />
        <meta name="description" content={content.meta.description} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
