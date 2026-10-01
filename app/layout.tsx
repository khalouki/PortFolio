import type { Metadata } from 'next'
import './globals.css'
import { Providers } from "./providers"

export const metadata: Metadata = {
  title: 'Abdelkhalk Essaid | Software Engineer & Data Science Graduate',
  description:
    'Portfolio of Abdelkhalk Essaid, a software engineer and data science graduate building full-stack applications, backend systems, machine-learning solutions, and data-driven platforms.',
  openGraph: {
    title: 'Abdelkhalk Essaid | Software Engineer & Data Science Graduate',
    description:
      'Full-stack, backend, data science, and machine-learning projects by Abdelkhalk Essaid.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
       
      </body>
    </html>
  )
}
