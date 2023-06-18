import { BiCheck } from 'react-icons/bi'
import React, { useState } from "react";
import { AiFillTwitterCircle } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';

// export default function Success({ message }){
//     return (
//         <div className="success container mx-auto">
//             <div className="flex justify-center mx-auto border border-yellow-200 bg-yellow-400 w-3/6 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5">
//                 {message} <BiCheck size={25} color={"rgb(34,197,94)"}></BiCheck>
//             </div>
//         </div>
//     )
// }

export default function SuccessModal({ message }) {

    const [modal, setModal] = useState(true);
  
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
        {/* <button onClick={toggleModal} className="btn-modal bg-emerald-300 rounded-full font-bold">
          Submit Progress
        </button> */}
  
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <div className="flex justify-center w-200">
              
              {message} <BiCheck size={25} color={"rgb(34,197,94)"}/>
              
              </div>
              <button className="close-modal  rounded-lg hover:text-white font-bold" onClick={toggleModal}>
              <ImCross size={25}/>
              </button>

            </div>
          </div>
        )}
        
      </>
    );
  }