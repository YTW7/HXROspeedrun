import Image from 'next/image'
import { Inter } from 'next/font/google'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Link from "next/link";
require('@solana/wallet-adapter-react-ui/styles.css')
import { useWallet } from '@solana/wallet-adapter-react'
// import data from '../database/leadData';
import { useEffect, useState, useReducer } from 'react';
import { AiFillHome } from 'react-icons/ai';
import UserProfileModal from './Modals/UserProfileModal';
import generateUsername from '@/functions/username_generator';
import Success from './Success';
import Bug from './Bug';
import { useQuery } from 'react-query';
import { addUser, getUsers } from '../../lib/helper';

import { useQueryClient, useMutation } from "react-query"
import CheckWallet from './CheckWallet';
import SuccessModal from './Modals/SuccessModal';
import { getAvatarUrl } from '@/functions/gravatar';
// import { getUsers } from "../../lib/helper"

const formReducer = (state, event) => {
  return {
      ...state,
      [event.target.name]: event.target.value
  }
}



export default function Navbar() {
     const { isLoading, isError, data, error } = useQuery('users', getUsers)
     const { connected, publicKey } = useWallet()
     const [profileModal, setProfileModal]=useState(false);

     const pkey = connected ? publicKey.toString() : '';
    //  console.log(data);
    //  console.log(CheckWallet);
     const publicKeyExists = data?.some(obj => Object.keys(obj)?.some(key => obj[key] === pkey));

     const desiredObject = data?.find(obj => obj.pubKey === pkey);
     const avatarUrl=desiredObject?.avatar;
     const formId=desiredObject?._id;
    //  console.log(publicKeyExists);
     
    //  console.log(publicKeyExists);
     
     

     const queryClient = useQueryClient()
    //  const [leaderboardData, setLeaderboardData] = useState(data);
     const [formData, setFormData] = useReducer(formReducer, {})
     const addMutation = useMutation(addUser, {
     onSuccess : () => {
                queryClient.prefetchQuery('users', getUsers)
            }
        })

    const handleSubmit = (e) => {
      // e.preventDefault();
      // if(Object.keys(formData).length == 0) return console.log("Don't have Form Data");
      let { username, pubKey, avatar, points } = formData;
    
      const model = {
          username : generateUsername(),
          pubKey: pkey,
          points: 0,
          avatar: getAvatarUrl(pkey),
          P1T1:true,
          P1T2:false,
          P1T3:false,
          P1T4:false,
          P1T5:false,
          P1T6:false,
          P1T7:false,
          P1NFT:false,
          P1Milestone:''   
      }

        addMutation.mutate(model)
      }
//&& !publicKeyExists
      useEffect(() => {
        if (connected ) {
          if(publicKeyExists===false){
          handleSubmit();
          }
        }
      }, [connected, publicKeyExists]);

      if(addMutation.isLoading) return <div>Loading!</div>
      if(addMutation.isError) return <Bug message={addMutation.error.message}></Bug>
      // if(addMutation.isSuccess) return console.log('Added Successfully');
      // if(addMutation.isSuccess) return <Success message={"Added Successfully"}></Success>
      // if(addMutation.isSuccess) return <SuccessModal message={"Added Successfully"}/>
      let suc=false;
      if(addMutation.isSuccess) {suc=true;}
  


  return (
   <>
   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <button className='bg-gradient-to-tr from-pink-300 via-blue-300 to-emerald-400 hover:bg-gradient-to-br from-pink-300 via-blue-300 to-emerald-400 rounded py-2 px-2'>
     <Link href="/"><AiFillHome color='white' size={30}/></Link>
     </button>
    <button className="ml-5 inline-flex items-center bg-gradient-to-tr from-pink-300 via-blue-300 to-emerald-400 border-0 py-3 px-3 focus:outline-none hover:bg-gradient-to-br from-pink-300 via-blue-300 to-emerald-400 rounded text-white font-bold mt-4 md:mt-0">
    <Link href="/Leaderboard">Leaderboard</Link>
       </button>
   <button className="ml-2 inline-flex items-center bg-gradient-to-tr from-pink-300 via-blue-300 to-emerald-400 border-0 py-3 px-3 focus:outline-none hover:bg-gradient-to-br from-pink-300 via-blue-300 to-emerald-400 rounded text-white font-bold mt-4 md:mt-0">
   <Link href="/Projects">Project Submissions</Link>
       </button>
      
      
    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      <span className=" text-xl text-white "></span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
    
      <WalletMultiButton  className='bg-gradient-to-tr from-pink-300 via-blue-300 to-emerald-400 hover:bg-gradient-to-br from-pink-300 via-blue-300 to-emerald-400'/>
      {/* <img alt="team" class="w-12 h-12 bg-gradient-to-tr from-pink-300 via-blue-300 to-emerald-400 hover:bg-gradient-to-br from-pink-300 via-blue-300 to-emerald-400 object-cover object-center flex-shrink-0 rounded-md ml-2" src={avatarUrl}/> */}
      {connected? publicKeyExists ? <img alt="team" className="w-12 h-12 bg-gradient-to-tr from-pink-300 via-blue-300 to-emerald-400 hover:bg-gradient-to-br from-pink-300 via-blue-300 to-emerald-400 object-cover object-center flex-shrink-0 rounded-md ml-2" src={avatarUrl} onClick={()=>setProfileModal(!profileModal)}/>:'':''}
      
      {/* {connected? publicKeyExists ? '':<button onClick={handleSubmit} className='ml-2 inline-flex items-center bg-gradient-to-tr from-pink-300 via-blue-300 to-emerald-400 border-0 py-3 px-3 focus:outline-none hover:bg-gradient-to-br from-pink-300 via-blue-300 to-emerald-400 rounded text-white font-bold mt-4 md:mt-0'>Create Profile</button>:''} */}
    </div>
    {suc && <SuccessModal message={"Profile Created Successfully"}/>}
    {profileModal && <UserProfileModal formId={formId}/>}
  </div>
     
   </>
  )
}
