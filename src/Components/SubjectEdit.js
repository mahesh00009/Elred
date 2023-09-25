

import React, { useEffect, useState } from 'react'
import "./SkillsEdit.css"
import axios from 'axios'
import Nav from './Nav'

const SubjectEdit = () => {

    const [skills, setSkills] = useState([])
    const [selectedSkills, setSelectedSkills] = useState([])

const handleRemoveSkill = (skillIdToRemove) => {
  const updatedSelectedResult = selectedSkills.filter((s) => s._id !== skillIdToRemove._id);
  setSelectedSkills(updatedSelectedResult);

  const skillToAddBack = skills.find((s) => s._id === skillIdToRemove._id);

  if (skillToAddBack) {
    setSkills((prevSkills) => [...prevSkills, skillToAddBack]);
  }
};
  
  console.log(skills.length)

      const handleSkillClick = (skill) => {
        const updatedSkills = skills.filter((s) => s._id !== skill._id);
        setSkills(updatedSkills);
        setSelectedSkills([...selectedSkills, skill]);
      };
    console.log(skills)

    useEffect(() => {
        axios.get("https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetSubjectsResponse.json")
        .then(res => setSkills(res?.data?.result[0].subjects))
        .catch(error => console.error("Error fetching skills data: ", error));

    }, [])

    console.log(selectedSkills, skills.length)

  return (
    <div className='skills'>
        <Nav Title = "Subject"/>

        <div className="displaySkills">

                {
                selectedSkills.length > 0 ?  <>
                <h4 className='skillTitle'> I am incredible at these skills</h4>
                {
                selectedSkills?.map((elem, id) => {
                       return <button key = {id} className='individualSkills btnSkills'>{elem.value} <button className='btnSkills' onClick={handleRemoveSkill.bind(this, elem)}>X</button> </button>
                    })} </>  : <h4>Please Select some skills</h4>
                }
        </div>

        <div>

        {
            skills?.map((elem, id) => {
                return <button className = "btnSkills" key = {id} onClick={handleSkillClick.bind(this, elem)}>{elem.value}</button>
            })
        }

</div>

    </div>
  )
}

export default SubjectEdit