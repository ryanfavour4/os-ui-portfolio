import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ryan Favour Chukwuka | Windows UI Replica',
  description: 'Windows OS UI replica, Your Play Virtual PC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
