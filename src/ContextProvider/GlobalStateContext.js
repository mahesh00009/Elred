import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
    myBio : {aboutUser: "", resume : "", bloodGroup: ""}, 

    allSkills : [[], [], []], 
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'MYBIO':{
      return { ...state, myBio : {...state.myBio, [action.payload.name] : action.payload.value}};
    }
    
    case "BIOBACKBUTTON" : {
      break;
    }

    case "SAVEBIO": {
      return { ...state, myBio: { ...state.myBio, ...action.payload } };
    }

    case "SKILLS": {
      return {
        ...state,
        allSkills: state.allSkills.map((elem, i) =>
          i === 0 ? [action.payload, ...elem] : elem
        )
      };
    }
    
    case "HOBBIES" :{
      return {...state, allSkills : [...state.allSkills[1], action.payload]}
    }   
     case "SUBJECT" :{
      return {...state, allSkills : [...state.allSkills[2], action.payload]}
    }
    default:
      return state;
  }
};

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Create a custom hook to easily access the global state and dispatch functions
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};
