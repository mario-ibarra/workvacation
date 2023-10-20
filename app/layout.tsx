import type { Metadata } from 'next'

import './globals.css'


export const metadata: Metadata = {
  title: 'Marios trenning',
  description: 'What is new in Tailwind 3.1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  )
}
