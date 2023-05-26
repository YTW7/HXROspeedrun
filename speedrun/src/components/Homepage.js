import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Homepage() {
  return (
   <>
   <div  className="flex justify-center">
   <img src='/logofinal.png'/>
   </div>
   </>
  )
}
