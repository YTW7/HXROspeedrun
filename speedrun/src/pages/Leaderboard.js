
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import LeadData from '@/components/LeadData'

export default function Leaderboard() {
  return (
   <>
   <h1 className='text-white text-6xl font-bold ml-5 mb-4'>Leaderboard</h1>
   <hr/>
   <LeadData/>
   </>
  )
}
