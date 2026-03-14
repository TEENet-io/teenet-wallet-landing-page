import { ContentData } from '@/content/types'

interface TrustSectionProps {
  content: ContentData['trustSection']
}

export default function TrustSection({ content }: TrustSectionProps) {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
          {content.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {content.cards.map((card, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-md transition"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <div className="w-5 h-5 rounded-sm bg-gray-400" />
              </div>
              <h3 className="font-semibold text-gray-900">{card.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{card.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-lg font-semibold text-gray-900 text-center">
          {content.closingLine}
        </p>
      </div>
    </section>
  )
}
