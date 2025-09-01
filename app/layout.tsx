import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AirMed Emergency - Critical Care Transport Services',
  description: 'When every second counts, our medical flight teams deliver critical care in the air',
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