import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { handleContactSubmission } from './api/contactHandler.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function copy404Plugin() {
  return {
    name: 'copy-404-plugin',
    closeBundle() {
      const distIndex = path.resolve(__dirname, 'dist/index.html')
      const dist404 = path.resolve(__dirname, 'dist/404.html')
      if (fs.existsSync(distIndex)) {
        fs.copyFileSync(distIndex, dist404)
      }
    },
  }
}

function contactApiPlugin() {
  const handler = async (req, res) => {
    if (req.method !== 'POST') {
      res.statusCode = 405
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: 'Method Not Allowed' }))
      return
    }

    let body = ''
    req.on('data', (chunk) => {
      body += chunk
    })

    req.on('end', async () => {
      try {
        const data = JSON.parse(body || '{}')
        await handleContactSubmission(data)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ success: true, message: 'Email sent successfully' }))
      } catch (err) {
        console.error('Error handling contact form:', err)
        res.statusCode = 500
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ success: false, error: err.message }))
      }
    })
  }

  return {
    name: 'contact-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/contact', handler)
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/contact', handler)
    },
  }
}

function removeGhFallbackPlugin() {
  return {
    name: 'remove-gh-fallback-plugin',
    transformIndexHtml(html) {
      return html.replace(/<script id="gh-fallback">[\s\S]*?<\/script>\s*/i, '')
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    tailwindcss(),
    react(),
    removeGhFallbackPlugin(),
    contactApiPlugin(),
    copy404Plugin(),
  ],
})
