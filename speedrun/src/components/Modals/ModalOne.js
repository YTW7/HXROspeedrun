import React, { useState } from "react";
import { AiFillTwitterCircle } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
export default function Modal() {
  const [modal, setModal] = useState(false);

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
            <div className="flex justify-center w-200">
            <p>
             1. Make a new git branch,<br/> 2. With the step number and <br/>3. Submit the branch link here: 
            </p>
            </div>
            <button className="close-modal  rounded-lg hover:text-white font-bold" onClick={toggleModal}>
            <ImCross size={25}/>
            </button>
            <div className="flex justify-center w-300">
            <input className=" rounded-md px-2 py-1 " placeholder="git branch link"></input>
            
            </div>
            <div className="flex justify-center">
            <button className=" bg-emerald-300 rounded-full hover:text-white font-bold px-3 py-2 mt-8 mb-2" onClick={toggleModal}>
              SUBMIT
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