

import React, { useState } from "react";
import { AiFillTwitterCircle } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { useQuery, useMutation, useQueryClient } from "react-query"
import { getUser, getUsers, updateUser } from "../../../lib/helper"
import { useWallet } from '@solana/wallet-adapter-react';
import validateWebsiteLink from "@/functions/validateWebsiteLink";



export default function ModalP1T1(props) {
  const [modal, setModal] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [validationError, setValidationError] = useState('');

  const handleInputChange = (event) => {
    // setUserInput(event.target.value);
    // setValidationError(''); // Clear any previous validation error
    // console.log(validateWebsiteLink(userInput))
    // if (validateWebsiteLink(userInput)==false) {
    //   setValidationError("Invalid URL");

    // }
    const inputValue = event.target.value;
    setUserInput(inputValue);
    setValidationError(''); // Clear any previous validation error
  
    if (!validateWebsiteLink(inputValue)) {
      setValidationError("Invalid URL! Kindly Check the Input");
    }
  };

    const queryClient = useQueryClient()

   const {isLoading, isError, data} = useQuery(['users', props.formId], () => getUser(props.formId))

    const UpdateMutation = useMutation((newData) => updateUser(props.formId, newData), {
        onSuccess : async (data) => {
            // queryClient.setQueryData('users', (old) => [data])
            queryClient.prefetchQuery('users', getUsers)
        }
    })

    if(isLoading) return <div>Loading...!</div>
    if(isError) return <div>Error</div>
   
   const { username, pubKey, points, P1T1, P1T2, P1T3, P1T4, P1T5, P1T6, P1T7, P1NFT } = data ; 
  //  const [firstname, lastname] = name ? name.split(' ') : formData

   const handleSubmit = async (e) => {
    e.preventDefault();
    // let userName = `${formData.firstname ?? firstname} ${formData.lastname ?? lastname}`;
    let updated = Object.assign({}, data, {points: (points + 10)} , { P1T2: true})
    await UpdateMutation.mutate(updated)
}

  // const { connected, publicKey } = useWallet();
  // let AllData={}
  // try{
  //   let AllData = useQuery('users', getUsers)
  // }
  // catch{

  // }
  
  // const pkey = connected ? publicKey.toString() : '';
  
//   let AllData={
//     "_id": "648ec145cecefb857b708e20",
//     "username": "YTW7",
//     "pubKey": "EA3BRi4wVfBS8bTEUd3UHSbfXVCk7CBEWpWSpVhNH6uE",
//     "points": 100,
//     "P1T1": true,
//     "P1T2": false,
//     "P1T3": false,
//     "P1T4": false,
//     "P1T5": false,
//     "P1T6": false,
//     "P1T7": false,
//     "__v": 0
// };
  // let formId = null;
  // for (let i = 0; i < AllData.length; i++) {
  //   if (AllData[i].pubKey === pkey) {
  //     formId = AllData[i]._id;
  //     break;
  //   }
  // }

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal bg-emerald-300 rounded-full font-bold">
        Submit Progress
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="text-center font-bold text-emerald-500 text-2xl">Submit Your Progress!</h2>
            <div className="flex justify-center ">
            <p>
             1. Make a new Git Branch with the step number,<br/>
             <code className='flex justify-center bg-emerald-200 rounded-md font-bold px-2 py-2'>
                //use these command to create a new branch<br/> //and shift to that branch<br/>
                git checkout -b {'<branch-name>'}<br/><br/>
                //create a remote branch<br/>
                git remote add {'<remote_name>'} {'<remote_url>'}<br/>
                git push {'<remote_name>'} {'<local_branch_name>'}
                </code><br/>
              2. Submit the Branch Link here: 
            </p>
            
            </div>
            
            <button className="close-modal  rounded-lg hover:text-white font-bold" onClick={toggleModal}>
            <ImCross size={25}/>
            </button>
            <div className="flex justify-center">
            <input
              className="rounded-md px-2 py-1 "
              style={{ width: "390px" }}
              placeholder="e.g. https://github.com/u_name/p_name/tree/branch"
              onChange={handleInputChange}
              value={userInput}
            />
            </div>
           
            
            {validationError && (
                                  <div className="flex justify-center">
                                    <p className="text-red-500">{validationError}</p>
                                  </div>
                                )}
            <div className="flex justify-center">
            <button className={`bg-emerald-300 rounded-full hover:text-white font-bold px-3 py-2 mt-8 mb-2 ${(validationError || userInput.length === 0) ? 'blur' : ''}`} onClick={handleSubmit} disabled={!!validationError && userInput.length === 0}>
              SUBMIT HERE
            </button>
            {/* <a href="http://twitter.com/home?status=I%20am%20happy%20to%20share%20that%20I've%20completed%20the%20first%20task%20on%20@SpeedrunHXRO%20for%20Parimutuel%20SDK.%20%20@HxroNetwork%20@RealHxroLabs%20@ThalesHXRO">
            <button className=" bg-emerald-300 rounded-full hover:text-white font-bold px-2 py-1 mt-8 mb-2 ml-2 ">
             <AiFillTwitterCircle/>
            </button>
            </a> */}
            </div>
          </div>
        </div>
      )}
      
    </>
  );
}