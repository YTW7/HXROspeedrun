import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import data from 'leadData'
import { useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

export default function LeadData() {

  const sortedData = [...data].sort((a, b) => b.points - a.points);
  const updatedData = sortedData.map((obj, index) => ({ ...obj, rank: index + 1 }));
  const { connected, publicKey } = useWallet()

//   useEffect(() => {
//     updatedData.map((obj, i) => <Tr {...obj} key={i} />)
 

// }, [connected, publicKey]);
  return (
   <>
      <table className="min-w-full table-auto mt-5 rounded-xl">
            {/* <thead>
                <tr className="bg-gray-800 ">
                    <th className="px-16 py-2">
                        <span className="text-gray-200 rounded-tl-xl">Rank</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Username</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Points</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200 rounded-tr-xl">Wallet</span>
                    </th>
                </tr>

            </thead> */}
              <tbody className="bg-gray-200">
              {
                       updatedData.map((obj, i) => <Tr {...obj} key={i} />)
  
            }
              </tbody>
        </table>
   </>
  )
}

// function Tr({rank, username, points, publicKey }){
//   return(
//       <tr className="bg-gray-50 text-center">
//       {/* <td className="px-16 py-2 flex flex-row items-center">
//           <img src={avatar || '#'} alt="" />
//           <span className="text-center ml-2 font-semibold">{name || "Unknown"}</span>
//       </td> */}
//       <td className="px-16 py-2">
//           <span>{rank || "Unknown"}</span>
//       </td>
//       <td className="px-16 py-2">
//           <span>{username || "Unknown"}</span>
//       </td>
//       <td className="px-16 py-2">
//           <span>{points || "Unknown"}</span>
//       </td>
//       <td className="px-16 py-2">
//           <button className="cursor"><span className=" px-5 py-1 ">{publicKey || "Unknown"}</span></button>
//       </td>
//   </tr>

//   )
// }
function Tr({rank, username, points, publicKey }){
    return(
        <tr className="bg-gray-50 flex bg-black">
         <div class="flex flex-wrap w-full">
      <div class="p-2 w-full ">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <h2 class="text-gray-900 title-font font-medium mr-2 text-white">Rank {rank}</h2>
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
          <div class="flex-grow">
            <h2 class="title-font font-medium text-emerald-300">{username}</h2>
            <p class="text-pink-300">{points} Points</p>
            <p class="text-gray-500">{publicKey}</p>
          </div>
        </div>
      </div>
      </div>
    </tr>
  
    )
  }
  
