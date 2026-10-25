import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { handleContactSubmission } from './api/contactHandler.js'

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

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    contactApiPlugin(),
  ],
})
