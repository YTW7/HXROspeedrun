import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Homepage from '@/components/Homepage'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   
   <Homepage/>

   <section className='grid grid-cols-2 '>
   <div className='bg-emerald-300 h-56 rounded-xl my-5 mx-5 flex items-center justify-center'>
    <div>
    <h1 className='text-center text-6xl font-bold mb-3'>Parimutuel SDK</h1> 
    <p>Learn to build a dual-outcome parimutuel market <br/> for a custom time frame.</p>
    <button className='bg-emerald-500 px-3 py-3 rounded-full mt-2 font-bold'>
      Let's Go Buidl!
    </button>
    </div>
   </div>

   <div className='bg-pink-300 h-56 rounded-xl my-5 mx-5 flex items-center justify-center'>
    <div>
    <h1 className='text-center text-6xl font-bold mb-3'>Dexterity SDK</h1> 
    <p>Learn to build a dual-outcome parimutuel market <br/> for a custom time frame.</p>
    <button className='bg-pink-500 px-3 py-3 rounded-full mt-2 font-bold'>
      Let's Go Buidl!
    </button>
    </div>
   </div>
   </section>
   
  
   </>
  )
}
