import '@/styles/globals.css'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
const WalletConnectionProvider = dynamic(() => import('../context/WalletConnectionProvider'), {
  ssr: false,
})

export default function App({ Component, pageProps }) {
  return (

            <WalletConnectionProvider>
              <Navbar/>
                <Component {...pageProps} />
            </WalletConnectionProvider>

  )
 
}
