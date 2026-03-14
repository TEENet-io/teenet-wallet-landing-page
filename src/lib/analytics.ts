export function trackEvent(name: string, props?: Record<string, string>) {
  if (typeof window !== 'undefined') {
    console.debug('[analytics]', name, props)
  }
}
