import { handleContactSubmission } from './contactHandler.js'

export default async function handler(req, res) {
  // Enable CORS so requests from GitHub Pages and localhost are allowed
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    await handleContactSubmission(data)
    return res.status(200).json({ success: true, message: 'Message sent successfully' })
  } catch (error) {
    console.error('Contact submission error on Vercel:', error)
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to send message',
    })
  }
}

