import { en } from '@/content/en'
import { zh } from '@/content/zh'
import { ContentData } from '@/content/types'

export type Locale = 'en' | 'zh'

export const LOCALES: Locale[] = ['en', 'zh']

export function getContent(locale: Locale): ContentData {
  return locale === 'zh' ? zh : en
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'zh' : 'en'
}
