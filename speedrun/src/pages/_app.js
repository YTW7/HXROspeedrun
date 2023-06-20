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
    <>
              <Head>
               <title>SpeedrunHXRO</title> 
               <link rel='icon' href='/icon.png'/> 
              </Head>
              <QueryClientProvider client={queryClient}>
                      <WalletConnectionProvider>
                        <Navbar/>
                          <Component {...pageProps} />
                      </WalletConnectionProvider>
              </QueryClientProvider>
    </>

  )
 
}
