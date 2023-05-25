import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Homepage from '@/components/Homepage'
import ProjectData from '@/components/ProjectData'
const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
  return (
   <>
   <h1 className='text-white text-6xl font-bold ml-5 mb-4'>Projects</h1>
   <hr/>
   <ProjectData/>
   </>
  )
}
