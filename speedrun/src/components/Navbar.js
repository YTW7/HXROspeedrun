import Image from 'next/image'
import { Inter } from 'next/font/google'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
const inter = Inter({ subsets: ['latin'] })
import { PublicKey } from '@solana/web3.js';
import Link from "next/link";
require('@solana/wallet-adapter-react-ui/styles.css')
import { useWallet } from '@solana/wallet-adapter-react'
import data from '../database/leadData';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [leaderboardData, setLeaderboardData] = useState(data);
  const { connected, publicKey } = useWallet()

  useEffect(() => {
    if (connected) {
      const newPublicKey = publicKey.toString();

      // Check if the publicKey already exists in the data
      const publicKeyExists = leaderboardData.some(obj => obj.publicKey === newPublicKey);

      if (!publicKeyExists) {
        // Create a new object with the publicKey
        const newLeaderboardData = [
          ...leaderboardData,
          {
            publicKey: newPublicKey,
            // Add other relevant properties
          }
        ];

        // Update the leaderboard data
        setLeaderboardData(newLeaderboardData);

        // Save the updated JSON data to storage or update the state as required
      }
    }
  }, [connected, publicKey]);


  return (
   <>
   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">

    <button className="ml-5 inline-flex items-center bg-gradient-to-tr from-pink-300 via-blue-300 to-emerald-400 border-0 py-3 px-3 focus:outline-none hover:bg-gradient-to-br from-pink-300 via-blue-300 to-emerald-400 rounded text-white font-bold mt-4 md:mt-0">
    <Link href="/Leaderboard">Leaderboard</Link>
       </button>
   <button className="ml-2 inline-flex items-center bg-gradient-to-tr from-pink-300 via-blue-300 to-emerald-400 border-0 py-3 px-3 focus:outline-none hover:bg-gradient-to-br from-pink-300 via-blue-300 to-emerald-400 rounded text-white font-bold mt-4 md:mt-0">
   <Link href="/Projects">Project Submissions</Link>
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
