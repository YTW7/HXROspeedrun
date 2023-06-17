import '@/styles/globals.css'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import { QueryClientProvider, QueryClient } from 'react-query';
const WalletConnectionProvider = dynamic(() => import('../context/WalletConnectionProvider'), {
  ssr: false,
})

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
            <WalletConnectionProvider>
              <Navbar/>
                <Component {...pageProps} />
            </WalletConnectionProvider>
    </QueryClientProvider>

  )
 
}
