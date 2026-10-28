export function getAssetPath(path) {
  if (!path) return ''
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path
  }
  const isGitHubPages = typeof window !== 'undefined' && window.location.hostname.includes('github.io')
  const base = isGitHubPages ? '/USoft/' : (import.meta.env.BASE_URL || '/')
  const cleanBase = base.endsWith('/') ? base : `${base}/`
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${cleanBase}${cleanPath}`
}

export default getAssetPath
