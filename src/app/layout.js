import { Inter } from 'next/font/google'
import Header from './components/topBar'
import Footer from './components/bottomBar'
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
        <div className="bg-gradient-to-r from-teal-700 to-blue-900 shadow-lg">
          <Header />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
