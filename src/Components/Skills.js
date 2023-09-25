

import React, { useEffect, useState } from 'react'
import "./Skills.css"
import { useNavigate } from 'react-router-dom'
import { useGlobalState } from '../ContextProvider/GlobalStateContext'

const Skills = () => {
    const [editSkills, setEditSkills] = useState(false)
    const navigate = useNavigate()
    const {state, dispatch} = useGlobalState()

    console.log(state.allSkills[0])
  return (
    <>
    <div className='skillsContainer'>

        <div >
              <h4 onClick={() => navigate("/selectSkills")}> Skills</h4>

              <div className="selectSkills showSkills">
                
                {state?.allSkills[0].length > 0 ? 
                state?.allSkills[0][0].map((elem, i) => {
                  console.log(elem.value)
                 return <button>{elem.value}</button>

                })
                : "Select Skills"}
                  </div>
            
        </div>
        
    <div className="skills" onClick={() => navigate("/selectHobbies")}>
      <h4>Select Hobbies</h4>
</div>
<div className="skills" onClick={() => navigate("/selectSubject")}>
      <h4>Select Subjects</h4>
</div>
</div>
    </>
  )
}

export default Skills