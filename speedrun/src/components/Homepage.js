import Image from 'next/image'
import { Inter } from 'next/font/google'
import { animateScroll as scroll } from 'react-scroll';
const inter = Inter({ subsets: ['latin'] })
import { useEffect } from 'react';
import {AiOutlineEnter} from 'react-icons/ai'

export default function Homepage() {
  const scrollOne = () => {
    scroll.scrollTo(750, {
      duration: 1000, // Adjust the duration as needed
      smooth: 'easeInOutQuart', // Adjust the easing function as needed
    });
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        // Call your function here
        console.log('Enter key pressed!');
        scrollOne();
        // Call your function or perform any desired action
        // ...
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
   <>
   <div style={{height:'100vh'}} >
   <div  className="flex justify-center items-center">
   <img src='/logofinal.png' className='h-106'/>
   
   </div>
   <div  className="flex justify-center">
   {/* <button className='bg-cyan-400 px-3 py-3 rounded-full mt-2 font-bold '>
      Hit the Throttle!
    </button> */}

{/* <input type="text" onKeyDown={handleKeyPress} /> */}

    <button onClick={scrollOne} href="#_" className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
<span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-white rounded-md group-hover:mt-0 group-hover:ml-0"></span>
<span className="absolute inset-0 w-full h-full bg-cyan-400 rounded-md "></span>
<span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-white rounded-md opacity-0 group-hover:opacity-100 "></span>
<span className="relative text-white transition-colors duration-200 ease-in-out delay-100 group-hover:text-cyan-400 font-bold">Press "Enter ⏎ " to Continue...</span>
</button>

    </div>
    </div>
   </>
  )
}
