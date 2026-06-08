import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ThutoTech | AI-Augmented Education for South Africa',
  description: 'A Reggie Express Company - Empowering teachers, guiding learners, bridging education and innovation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
