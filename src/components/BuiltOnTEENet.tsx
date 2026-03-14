import Link from 'next/link'
import { ContentData } from '@/content/types'
import { Locale } from '@/lib/i18n'
import RuntimeDiagram from './mockups/RuntimeDiagram'

interface BuiltOnTEENetProps {
  content: ContentData['builtOnTEENet']
  locale: Locale
}

export default function BuiltOnTEENet({ content, locale }: BuiltOnTEENetProps) {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Diagram */}
          <div className="flex justify-center">
            <RuntimeDiagram />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              {content.title}
            </h2>

            <ul className="space-y-3">
              {content.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>

            <p className="font-semibold text-gray-900 mt-6 italic">
              {content.closingPhrase}
            </p>

            <Link
              href={`/${locale}/teenet`}
              className="inline-block mt-4 text-gray-500 hover:text-gray-700 underline text-sm transition-colors"
            >
              {content.learnMoreText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
