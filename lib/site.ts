/**
 * Canonical origin for metadata, the sitemap and robots.txt.
 *
 * Set NEXT_PUBLIC_SITE_URL once a custom domain is attached. Until then this
 * falls back to the deployment's own production URL, so canonical links and the
 * OG image resolve against the host actually serving the page.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit.replace(/\/$/, '')

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL
  if (vercelProduction) return `https://${vercelProduction}`

  return 'https://astradite.com'
}

export const siteUrl = resolveSiteUrl()
