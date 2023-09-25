import { useEffect } from 'react';
import './App.css';
import WebFont from 'webfontloader'
import MyBio from './Components/MyBio';
import MyBioEdit from './Components/MyBioEdit';
import { Routes, Route } from 'react-router-dom';
import SkillsEdit from './Components/SkillsEdit';
import HobbiesEdit from './Components/HobbiesEdit';
import SubjectEdit from './Components/SubjectEdit';
import Skills from './Components/Skills';
import DisplayResume from './Components/DisplayResume';

function App() {
    
useEffect(() => {
  WebFont.load({
    google : {
      families : ['Roboto', 'Droid sans', 'Chilanka']
    }
  })

}, [])


  return (
    <div className="container">
      <Routes>
        <Route index element = {<>
          <MyBio/>
          <Skills/>
        </>} />
        <Route index element = {<Skills/>} />
        <Route path = "/edit" element = {<MyBioEdit/>} />
        <Route path = "/displayResume" element = {<DisplayResume/>} />


        <Route path = "/bioEdit" element = {<MyBioEdit/>} />
        <Route path = "/selectSkills" element = {<SkillsEdit/>} />
        <Route path = "/selectHobbies" element = {<HobbiesEdit/>} />
        <Route path = "/selectSubject" element = {<SubjectEdit/>} />

      </Routes>
    </div>
  );
}

export default App;
