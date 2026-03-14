import { getContent, Locale } from '@/lib/i18n'

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const content = getContent(locale as Locale)

  return (
    <main>
      <section className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">{content.hero.headline}</h1>
          <p className="mt-4 text-lg text-gray-600">{content.hero.subheadline}</p>
        </div>
      </section>
    </main>
  )
}
