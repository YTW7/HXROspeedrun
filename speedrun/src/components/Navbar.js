import Image from 'next/image'
import { Inter } from 'next/font/google'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
const inter = Inter({ subsets: ['latin'] })
import { PublicKey } from '@solana/web3.js';
require('@solana/wallet-adapter-react-ui/styles.css')

export default function Navbar() {
  return (
   <>
   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">

    <button className="ml-5 inline-flex items-center bg-gradient-to-tr from-pink-300 via-blue-300 to-emerald-400 border-0 py-3 px-3 focus:outline-none hover:bg-gradient-to-br from-pink-300 via-blue-300 to-emerald-400 rounded text-white font-bold mt-4 md:mt-0">Leaderboard
       
       </button>
   <button className="ml-2 inline-flex items-center bg-gradient-to-tr from-pink-300 via-blue-300 to-emerald-400 border-0 py-3 px-3 focus:outline-none hover:bg-gradient-to-br from-pink-300 via-blue-300 to-emerald-400 rounded text-white font-bold mt-4 md:mt-0">Project Submissions
         
       </button>
      
      
    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      <span className=" text-xl text-white "></span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
    
      <WalletMultiButton className='bg-gradient-to-tr from-pink-300 via-blue-300 to-emerald-400 hover:bg-gradient-to-br from-pink-300 via-blue-300 to-emerald-400'/>
    
    
    </div>
  </div>
   </>
  )
}
