import { Inter,Roboto_Mono, Rajdhani } from 'next/font/google'
import Header from './components/topBar'
import Footer from './components/bottomBar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const roboto_mono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono',})
const rajdhani = Rajdhani({ subsets: ['latin'], weight: '300', variable: '--font-rajdhani', })

export const metadata = {
  title: 'GameGrid',
  description: 'GameGrid a platfom for gaming lovers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-main-background bg-no-repeat bg-cover'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
