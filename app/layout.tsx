import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Connie Visual Artist Portfolio',
  description: 'A portfolio showcasing the bidimensional artwork of Connie Ramirez',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
