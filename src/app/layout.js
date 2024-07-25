import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footeri from './components/Footers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GameGrid',
  description: 'GameGrid a platfom for gaming lovers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-main-background bg-no-repeat bg-cover">
        <div>
          <Header />
        </div>
        {children}
        <div>
          <Footeri />
        </div>
      </body>
    </html>
  )
}
