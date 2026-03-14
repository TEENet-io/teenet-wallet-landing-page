'use client'

import { useState, useEffect, useRef, useCallback, FormEvent } from 'react'
import { ContentData } from '@/content/types'
import { Locale } from '@/lib/i18n'
import { trackEvent } from '@/lib/analytics'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const AUTO_CLOSE_DELAY = 3000

type FormState = 'idle' | 'submitting' | 'success' | 'error'

interface BetaSignupFormProps {
  content: ContentData['betaForm']
  locale: Locale
  isOpen: boolean
  onClose: () => void
}

export default function BetaSignupForm({
  content,
  locale,
  isOpen,
  onClose,
}: BetaSignupFormProps) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<FormState>('idle')
  const inputRef = useRef<HTMLInputElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Track open event
  useEffect(() => {
    if (isOpen) {
      trackEvent('beta_signup_start', { locale })
      setState('idle')
      setEmail('')
    }
  }, [isOpen, locale])

  // Focus trap
  useEffect(() => {
    if (!isOpen) return

    // Focus input on open
    inputRef.current?.focus()

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'input, button, [tabindex]:not([tabindex="-1"])'
        )
        if (focusable.length === 0) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Auto-close on success
  useEffect(() => {
    if (state === 'success') {
      closeTimerRef.current = setTimeout(() => {
        onClose()
      }, AUTO_CLOSE_DELAY)
    }
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current)
      }
    }
  }, [state, onClose])

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()

      if (!EMAIL_REGEX.test(email)) {
        setState('error')
        return
      }

      setState('submitting')
      trackEvent('beta_signup_submit', { locale })

      const url = process.env.NEXT_PUBLIC_BETA_SIGNUP_URL
      if (url) {
        try {
          const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, locale }),
          })
          if (!res.ok) throw new Error('Request failed')
          setState('success')
        } catch {
          setState('error')
        }
      } else {
        console.log('[beta-signup]', { email, locale })
        setState('success')
      }
    },
    [email, locale]
  )

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-label={content.title}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-md mx-4 rounded-2xl bg-white p-8 shadow-xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label={content.close}
          type="button"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          {content.title}
        </h2>

        {state === 'success' ? (
          <p className="text-green-600 text-sm">{content.success}</p>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <input
              ref={inputRef}
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (state === 'error') setState('idle')
              }}
              placeholder={content.placeholder}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors"
              disabled={state === 'submitting'}
              aria-invalid={state === 'error'}
              aria-describedby={state === 'error' ? 'beta-signup-error' : undefined}
            />

            {state === 'error' && (
              <p id="beta-signup-error" role="alert" className="mt-2 text-sm text-red-600">{content.error}</p>
            )}

            <button
              type="submit"
              disabled={state === 'submitting'}
              className="mt-4 w-full rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {state === 'submitting' ? '...' : content.submit}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
