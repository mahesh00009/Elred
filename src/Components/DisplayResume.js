import React from 'react';
import { useGlobalState } from '../ContextProvider/GlobalStateContext';
import Nav from './Nav';

const DisplayResume = () => {
  const { state } = useGlobalState();
  const { myBio } = state; 

  if (myBio && myBio.resume) {
    return (
      <div >
        <Nav Title = "Resume"/>
        <iframe
        style={{marginTop:"30px"}}
          src={URL.createObjectURL(myBio.resume)}
          type="application/pdf"
          width="100%"
          height="600px"
        />
      </div>
    );
  } else {
    return (
      <div>
        <p>No resume available.</p>
      </div>
    );
  }
};

export default DisplayResume;
