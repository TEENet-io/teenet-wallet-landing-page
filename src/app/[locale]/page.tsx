import { getContent, Locale, LOCALES } from '@/lib/i18n'
import PageClient from './PageClient'

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const validatedLocale: Locale = LOCALES.includes(locale as Locale)
    ? (locale as Locale)
    : 'en'
  const content = getContent(validatedLocale)

  return <PageClient content={content} locale={validatedLocale} />
}
