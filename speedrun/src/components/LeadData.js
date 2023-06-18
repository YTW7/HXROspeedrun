import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
// import data from '../database/leadData'
import { useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { getAvatarUrl } from "../functions/gravatar"
import { useQuery } from 'react-query';
import { getUsers } from '../../lib/helper';

export default function LeadData() {

  const { isLoading, isError, data, error } = useQuery('users', getUsers)
  // console.log(data);
    if(isLoading) return <div>Data is Loading...</div>;
    if(isError) return <div>Got Error {error}</div>

  // const sortedData = [...data].sort((a, b) => b.points - a.points);
  // const updatedData = sortedData.map((obj, index) => ({ ...obj, rank: index + 1 }));

  // function publicKeyExists(pubKey) {
  //   let flag=0;
  //   for (let i = 0; i < data.length; i++) {
  //     // console.log(data[i].pubKey);
  //     if (pubKey==data[i].pubKey) {
  //       let flag=1;
  //     }
  //   }
  //   if(flag==1) return true;
  //   return false;
  // }
  // console.log(publicKeyExists("6yS5QcX9oMmmyG5x5gAJ2zjS2spTBtoUsnvEBAov6zAN")); 
  // const pubKey="6yS5QcX9oMmmyG5x5gAJ2zjS2spTBtoUsnvEBAov6zAN"
  // const publicKeyExists = data.some(obj => Object.keys(obj).some(key => obj[key] === pubKey));
  // console.log(publicKeyExists); 

  
  return (
   <>
      <table className="min-w-full table-auto mt-5 rounded-xl">
              <tbody className="bg-gray-200">
              {
                      data.map((obj, i) => <Tr {...obj} key={i} />)
                      // Object.keys(data).map((key, i) => <Tr {...data[key]} key={i} />)
                      // Object.values(data).map((value, i) => <Tr {...value} key={i} />)
              }
              </tbody>
        </table>
   </>
  )
}

function Tr({_id, username, pubKey, points }){
    return(
        <tr className="flex bg-black">
         <div class="flex flex-wrap w-full">
      <div class="p-2 w-full ">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        {/* <h2 class="text-gray-900 title-font font-medium mr-2 text-white">Rank {rank}</h2> */}
          {/* <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={getAvatarUrl(pubKey)}/> */}
          <div class="flex-grow">
            <h2 class="title-font font-medium text-emerald-300">{username}</h2>
            <p class="text-pink-300">{points} Points</p>
            <p class="text-blue-300">{pubKey}</p>
          </div>
        </div>
      </div>
      </div>
    </tr>
  
    )
  }
  
