'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    const lang = navigator.language || 'en'
    const locale = lang.startsWith('zh') ? 'zh' : 'en'
    router.replace(`/${locale}`)
  }, [router])

  return (
    <html lang="en">
      <body>
        <noscript>
          <meta httpEquiv="refresh" content="0;url=/en" />
        </noscript>
      </body>
    </html>
  )
}
