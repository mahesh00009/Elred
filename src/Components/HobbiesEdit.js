

import React, { useEffect, useState } from 'react'
import "./SkillsEdit.css"
import axios from 'axios'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'
import { useGlobalState } from '../ContextProvider/GlobalStateContext'

const HobbiesEdit = () => {
  
  const [skills, setSkills] = useState([])
  const [selectedSkills, setSelectedSkills] = useState([])
  const {state, dispatch} = useGlobalState()
  const navigate = useNavigate();

const handleRemoveSkill = (skillIdToRemove) => {
const updatedSelectedResult = selectedSkills.filter((s) => s._id !== skillIdToRemove._id);
setSelectedSkills(updatedSelectedResult);

const skillToAddBack = skills.find((s) => s._id === skillIdToRemove._id);

if (skillToAddBack) {
  setSkills((prevSkills) => [...prevSkills, skillToAddBack]);
}

};

const handleSkills = () => {
console.log("clicked")
dispatch({type : "SKILLS" , payload : selectedSkills})
navigate("/")

}


console.log(state)

    const handleSkillClick = (skill) => {
      const updatedSkills = skills.filter((s) => s._id !== skill._id);
      setSkills(updatedSkills);
      setSelectedSkills([...selectedSkills, skill]);
    };
  console.log(skills)

  useEffect(() => {
      axios.get("https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetProfessionalSkillsResponse.json")
      .then(res => setSkills(res?.data?.result[0]?.skills))
      .catch(error => console.error("Error fetching skills data: ", error));

  }, [])

  console.log(selectedSkills, skills.length)

return (
  <div className='skills'>
      <Nav Title = "Skills"/>


              {
              selectedSkills.length > 0 ?  <>
              <h4 className='skillTitle'> I am incredible at these skills</h4>
      <div className="displaySkills">

              {
              selectedSkills?.map((elem, id) => {
                     return <div className='selectSkills selectedSkills'>
                     <button>{elem.value} <p className='btnSkills' onClick={handleRemoveSkill.bind(this, elem)}>X</p> </button>
                     </div>
                     })} </div></>  : <h4>Please Select some skills</h4>
              }

{selectedSkills.length > 0  && <button
    style={{
      color: "white",
      backgroundColor: "blue",
      width: "120px",
      borderRadius: "10px",
      border: "none",
      padding: "10px",
      fontSize: "1rem",
      cursor: "pointer", 
      marginLeft: "auto"
    }}
    onClick={handleSkills}
  >
  Save Skills
  </button>

  }
      <div className='selectSkills'>

      {
          skills?.map((elem, id) => {
              return <button key = {id} onClick={handleSkillClick.bind(this, elem)}>{elem.value}</button>
          })
      }

</div>

  </div>
)
}

export default HobbiesEdit