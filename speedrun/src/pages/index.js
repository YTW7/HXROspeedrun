import Image from 'next/image'
import { Inter } from 'next/font/google'
import Homepage from '@/components/Homepage'
import ParimutuelJourney from '@/pages/ParimutuelJourney'
const inter = Inter({ subsets: ['latin'] })
import Link from "next/link";
export default function Home() {
  return (
   <>
   
   <Homepage/>
   
   <div style={{height:'100vh'}}>
    <h1 className='text-center text-6xl font-bold text-white my-12'>Choose a Journey 🚀</h1>
   <section className='grid grid-cols-2 '>
   <div className='bg-emerald-300 h-96 rounded-xl my-5 mx-5 flex items-center justify-center'>
    <div>
    <h1 className='text-center text-6xl font-bold mb-3'>Parimutuel SDK</h1> 
    <p className='mb-3'>Learn to build a data-retrieval script from dual-outcome <br/>parimutuel markets using Typescript  for custom time frames.</p>
    <button className='bg-emerald-500 px-3 py-3 rounded-full mt-2 font-bold '>
      
      <Link href="/ParimutuelJourney">Let's Go Buidl!</Link>
    </button>
    </div>
   </div>
   

   <div className='bg-pink-300 h-96 rounded-xl my-5 mx-5 flex items-center justify-center'>
    <div>
    <h1 className='text-center text-6xl font-bold mb-3'>Dexterity SDK</h1> 
    <p className='mb-3'>Learn how to connect to and use Hxro’s Dexterity Protocol <br/></p>
    <button className='bg-pink-500 px-3 py-3 rounded-full mt-2 font-bold'>
    <Link href="/DexterityJourney">Let's Go Buidl!</Link>
    </button>
    </div>
   </div>

   <div className='bg-emerald-300 h-96 rounded-xl my-5 mx-5 flex items-center justify-center'>
    <div>
    <h1 className='text-center text-6xl font-bold mb-3'>Parimutuel + React</h1> 
    <p className='mb-3'>Learn how to build a dAPP UI that allows users to place positions, and <br/>various other interactions.</p>
    <button className='bg-emerald-500 px-3 py-3 rounded-full mt-2 font-bold'>
      Let's Go Buidl!
    </button>
    </div>
   </div>

    <div className='bg-blue-300 h-96 rounded-xl my-5 mx-5 flex items-center justify-center'>
    <div>
    <h1 className='text-center text-6xl font-bold mb-3'>Coming Soon!</h1> 
    <p className='mb-3'>Learn to build [redacted] only on SpeedrunHXRO<br/> and stay ahead of the curve</p>
    <button className='bg-blue-400 px-3 py-3 rounded-full mt-2 font-bold'>
      
      <Link href="/ParimutuelJourney">Get Instant Updates!</Link>
    </button>
    </div>
   </div>
   </section>
   </div>

   
  
   </>
  )
}
