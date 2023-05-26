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
import axios from 'axios';
import { AiFillHome } from 'react-icons/ai';


export default function Navbar() {
  const [leaderboardData, setLeaderboardData] = useState(data);
  const { connected, publicKey } = useWallet()

  useEffect(() => {
    if (connected) {
      const newPublicKey = publicKey.toString();

      // Check if the publicKey already exists in the data
      const publicKeyExists = leaderboardData.some(obj => obj.publicKey === newPublicKey);
      const maxValue = leaderboardData.reduce((max, obj) => (obj.rank > max ? obj.rank : max), -Infinity);
      if (!publicKeyExists) {
        // Create a new object with the publicKey
        const newLeaderboardData = [
          ...leaderboardData,
          {
           rank: maxValue+1,
            username: "newuser",
            publicKey: newPublicKey,
            points:0,
            step2: false
          }
        ];

        // Save the updated JSON data to storage or update the state as required
        const updateData = async () => {
          try {
            await axios.post('/api/updateData', { newLeaderboardData });
            console.log('data.json updated successfully');
          } catch (error) {
            console.error('Error updating data.json:', error);
          }
        };

        updateData();

        // Update the leaderboard data
        setLeaderboardData(newLeaderboardData);

        
      }
    }
  }, [connected, publicKey]);


  return (
   <>
   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <button className='bg-gradient-to-tr from-pink-300 via-blue-300 to-emerald-400 rounded py-2 px-2'>
     <Link href="/"><AiFillHome color='white' size={30}/></Link>
     </button>
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
