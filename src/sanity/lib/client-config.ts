import { createClient } from '@sanity/client'

// Read-only client for frontend
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-22',
  useCdn: true,
})

// Client with write access for API routes
export const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-22',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false, // Set to false for real-time data
}) 