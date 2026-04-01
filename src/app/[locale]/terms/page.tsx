import type { Metadata } from 'next'
import Link from 'next/link'
import { LOCALES, Locale } from '@/lib/i18n'
import { getTermsPageContent } from '@/content/legal-pages'

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const content = getTermsPageContent(locale)
  return {
    title: content.meta.title,
    description: content.meta.description,
  }
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const validatedLocale: Locale = LOCALES.includes(locale as Locale)
    ? (locale as Locale)
    : 'en'
  const content = getTermsPageContent(validatedLocale)

  return (
    <main className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href={`/${validatedLocale}`}
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            {content.backLink}
          </Link>
          <Link
            href={`/${validatedLocale === 'en' ? 'zh' : 'en'}/terms`}
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            {validatedLocale === 'en' ? '中文' : 'EN'}
          </Link>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {content.title}
        </h1>
        <p className="text-sm text-gray-400 mb-12">
          {content.effectiveDate}
        </p>

        {content.sections.map((section, i) => (
          <section key={i} className="mb-10">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              {section.heading}
            </h2>
            {section.paragraphs.map((p, j) => (
              <p key={j} className="text-gray-700 leading-relaxed mb-3">
                {p}
              </p>
            ))}
          </section>
        ))}
      </article>
    </main>
  )
}
