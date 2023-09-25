




import React from 'react'

import "./DeletePrompt.css"

const DeletePrompt = ({ handleMainContainer, handleDelete}) => {
    
  const deleteContainerHandler = (e) => {
    e.stopPropagation()
  }
  return (

    <div className={`mainContainer`} onClick={handleMainContainer}>
        
            <div 
           className={`deleteContainer`} 
            
            onClick={deleteContainerHandler}>

            <h4>Are You sure You want To Delete the resume?</h4>

            <div className="buttons">
                <button name = "yes" onClick={handleDelete}>Yes</button>
                <button name = "no" onClick={handleDelete}>No</button>
            </div>

    </div>
    </div>


  )
}

export default DeletePrompt