import React, { useState } from "react";
import { AiFillTwitterCircle } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { useQuery, useMutation, useQueryClient } from "react-query"
import { getUser, getUsers, updateUser } from "../../../lib/helper"

export default function UserProfileModal(props) {

  const [modal, setModal] = useState(true);
  const [name, setName]=useState('');
  const [pic, setPic]=useState('');



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

  const { username, pubKey, avatar, points, P1T1, P1T2, P1T3, P1T4, P1T5, P1T6, P1T7 } = data;
 //  const [firstname, lastname] = name ? name.split(' ') : formData

  const handleSubmit = async (e) => {
   e.preventDefault();
   // let userName = `${formData.firstname ?? firstname} ${formData.lastname ?? lastname}`;
   if(name.length == 0 || pic.length == 0 ) return console.log("Don't have Form Data");

   let updated = Object.assign({}, data, {username: name}, { avatar: pic})
   await UpdateMutation.mutate(updated)
  }

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
      

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="text-center font-bold text-emerald-500 text-2xl mb-2">Edit User Profile</h2>
            <div className="flex justify-center w-200">
            </div>
            <button className="close-modal  rounded-lg hover:text-white font-bold" onClick={toggleModal}>
            <ImCross size={25}/>
            </button>
            <div className="input-type">
                <input type="text" onChange={(e) => setName(e.target.value)}  name="username" className="border w-full px-5 py-3 focus:outline-none rounded-full mb-1" placeholder="Username" />
            </div>
            <div className="input-type">
                <input type="text" onChange={(e) => setPic(e.target.value)} name="profilepicture" className="border w-full px-5 py-3 focus:outline-none rounded-full mb-1" placeholder="Profile Picture URL( use Twitter/Github one )" />
            </div>
            <div className="flex justify-center">
            <button className=" bg-emerald-300 rounded-full hover:text-white font-bold px-3 py-2 mt-4 mb-2" onClick={handleSubmit}>
              Save Changes
            </button>
            {/* <button className=" bg-emerald-300 rounded-full hover:text-white font-bold px-3 py-2 mt-8 mb-2" onClick={toggleModal}>
              SUBMIT
            </button> */}
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