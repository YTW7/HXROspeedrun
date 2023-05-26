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
            <thead>
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

            </thead>
              <tbody className="bg-gray-200">
              {
                       updatedData.map((obj, i) => <Tr {...obj} key={i} />)
  
            }
              </tbody>
        </table>
   </>
  )
}

function Tr({rank, username, points, publicKey }){
  return(
      <tr className="bg-gray-50 text-center">
      {/* <td className="px-16 py-2 flex flex-row items-center">
          <img src={avatar || '#'} alt="" />
          <span className="text-center ml-2 font-semibold">{name || "Unknown"}</span>
      </td> */}
      <td className="px-16 py-2">
          <span>{rank || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
          <span>{username || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
          <span>{points || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
          <button className="cursor"><span className=" px-5 py-1 ">{publicKey || "Unknown"}</span></button>
      </td>
  </tr>

  )
}
