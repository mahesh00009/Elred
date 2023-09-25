
import React, { useCallback, useState } from 'react'
import "./MyBio.css"

import { FaRegEdit, FaReceipt, FaAngleRight } from 'react-icons/fa';
import { AiFillDelete } from "react-icons/ai";

import Nav from './Nav';
import { useGlobalState } from '../ContextProvider/GlobalStateContext';
import { useNavigate } from 'react-router-dom';


const MyBio = () => {

  const navigate = useNavigate()

  const [myBio, setMyBio] = useState({ aboutUser: "", resume: "", bloodGroup: "" })
  const { state, dispatch } = useGlobalState()

  const editHandler = () => {
    navigate("/bioEdit")
  }
  const resumeClickHandler = () => {

    if(!state?.myBio?.resume) return

    else{
      navigate('/displayResume')
    }

  }
  console.log(state)
  return (
    <div className='bioContainer'>

      <Nav />
      <div className='dflex'>
        <h4>About Me</h4>
        <FaRegEdit onClick={editHandler} style={{fontSize: "1.5rem", cursor:"pointer"}} />

      </div>

      <input type="text" className='textarea' placeholder='No about me added yet' value={state?.myBio?.aboutUser} disabled />

      <div className="dflex">
        <h4>Blood group</h4>
        <h4>{state?.myBio?.bloodGroup}</h4>
      </div>

      <div className="dflex myResumeContainer "  onClick={resumeClickHandler}>
        <div>
          
            <div className='dflex' style={{ gap: "15px" }}>
              <FaReceipt />
              <div className='dflex'>
                <h4> {state?.myBio?.resume ? "Myresume.pdf" : "Resume"} </h4>
              </div>
            </div>
          
        </div>
        {!myBio.resume && <FaAngleRight />}
      </div>

    </div>
  )
}

export default MyBio