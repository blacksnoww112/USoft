import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')
const docsDir = path.resolve(__dirname, '../docs')

if (!fs.existsSync(distDir)) {
  console.error('[copy-docs] dist directory not found. Please run vite build first.')
  process.exit(1)
}

if (fs.existsSync(docsDir)) {
  fs.rmSync(docsDir, { recursive: true, force: true })
}

fs.cpSync(distDir, docsDir, { recursive: true })

// Add .nojekyll in docs to prevent Jekyll processing on GitHub Pages
fs.writeFileSync(path.join(docsDir, '.nojekyll'), '')

console.log('[copy-docs] Successfully copied dist/ to docs/ for GitHub Pages.')
