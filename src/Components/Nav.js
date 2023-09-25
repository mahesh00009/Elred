

import React from 'react'
import "./Nav.css"
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Nav = ({goBack = true , Title = "My Bio",  setEdit = () => {}}) => {
    const navigate = useNavigate()

    const handleClose = () => {
       setEdit(false) 
       navigate("/")

      }
    return<nav>
    {
        goBack && <FaAngleLeft className='btnBack' onClick={handleClose}/>

    }

        <h5>{Title}</h5>    
    </nav>

}

export default Nav