import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { useWallet } from '@solana/wallet-adapter-react';
import { useQuery } from 'react-query';
import { getUsers } from '../../lib/helper';

export default function ProjectData() {


  const { isLoading, isError, data, error } = useQuery('users', getUsers)
  // console.log(data);
    if(isLoading) return <div>Data is Loading...</div>;
    if(isError) return <div>Got Error {error}</div>

  const sortedData = [...data].sort((a, b) => b.points - a.points);
  return (
   <>
   <table className="min-w-full table-auto mt-5 rounded-xl">
              <tbody className="bg-gray-200">
              {
                      sortedData.map((obj, i) => <Tr {...obj} key={i} />)
                      // Object.keys(data).map((key, i) => <Tr {...data[key]} key={i} />)
                      // Object.values(data).map((value, i) => <Tr {...value} key={i} />)
              }
              </tbody>
        </table>
   
   </>
  )
}

function Tr({_id, username, pubKey, avatar, points, P1Milestone }){
  return(
      <tr className="flex bg-black">
       <div class="flex flex-wrap w-full">
    <div class="p-2 w-full ">
      <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
      <iframe src={P1Milestone} className='rounded-md mr-5'></iframe>
      {/* <h2 class="text-gray-900 title-font font-medium mr-2 text-white">Rank {rank}</h2> */}
      
        <div class="flex-grow">
        <p className='text-white mb-2 text-2xl font-bold'>Submitted By</p>
          <div class="flex-grow flex items-center">
        <img alt="team" class="w-16 h-16 bg-gradient-to-tr from-pink-300 via-blue-300 to-emerald-400 hover:bg-gradient-to-br from-pink-300 via-blue-300 to-emerald-400 object-cover object-center flex-shrink-0 rounded-md mr-4" src={avatar}/>
          <h2 class="title-font font-medium text-emerald-300 text-2xl">{username}</h2>
          </div>
          <p class="text-blue-300 mt-2"><b>Wallet :</b> {pubKey}</p>
          
        </div>
        {/* <div class="flex-grow flex items-center">
  <p className='text-white mb-2 text-2xl font-bold'>Submitted By</p>
  <img alt="team" class="w-16 h-16 bg-gradient-to-tr from-pink-300 via-blue-300 to-emerald-400 hover:bg-gradient-to-br from-pink-300 via-blue-300 to-emerald-400 object-cover object-center flex-shrink-0 rounded-md mr-4" src={avatar}/>
  <div class="flex flex-col">
    <h2 class="title-font font-medium text-emerald-300">{username}</h2>
    <p class="text-blue-300">{pubKey}</p>
  </div>
</div> */}
        
        
      </div>
    </div>
    </div>
  </tr>

)
}

