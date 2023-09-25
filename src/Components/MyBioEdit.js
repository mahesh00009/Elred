// import React, { useCallback, useRef, useState, useMemo } from 'react';
// import Nav from './Nav';
// import './MyBioEdit.css';
// import Button from './Button';
// import { useNavigate } from 'react-router-dom';
// import { useGlobalState } from '../ContextProvider/GlobalStateContext';
// import { AiFillDelete } from 'react-icons/ai';
// import DeletePrompt from './DeletePrompt';

// const MyBioEdit = () => {
//   const fileInputRef = useRef(null);
//   const [myBio, setMyBio] = useState({ aboutUser: '', resume: '', bloodGroup: '' });
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [deleteResume, setDeleteResume] = useState(false)
//   const navigate = useNavigate()
//   const { state, dispatch } = useGlobalState()

  

//   const deleteHandler = (id) => {
//     setDeleteResume(true)
//   }

//   const handleMainContainer = () => {
//     setDeleteResume(false);

//   }

//   const handleDelete = (e) => {
//     if (e.target.name === "yes") {
//       setMyBio((prev) => ({ ...prev, resume: "" }));
//       setSelectedFile(null);
//       setDeleteResume(false);
      
//       if (fileInputRef.current) {
//         fileInputRef.current.value = "";
//       }
//     } else {
//       setDeleteResume(false);
//     }
//   };
  

//   const handleFileChange = useCallback((e) => {
//     const file = e.target.files[0];
//     if (file && file.type === 'application/pdf') {
//       setSelectedFile(file);
//       setMyBio((prev) => ({ ...prev, resume: file }));
//     }
//   }, []);

//   const handleChange = (e) => {
//     setMyBio({ ...myBio, [e.target.name]: e.target.value });
//   };

//   const handleClick = () => {
//     console.log("helo")
//      dispatch({type : "SAVEBIO", payload : myBio})
//      navigate("/")
//   };  

//   const validateFields = () => {
//         return myBio.aboutUser === '' || myBio.aboutUser.length <= 3 || myBio.resume === '' || myBio.bloodGroup === '';
//   };

//   console.log(validateFields())

//   const pdfPreview = useMemo(() => {
//     if (selectedFile) {
//       return <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
//       <iframe
//         src={URL.createObjectURL(selectedFile)}
//         type="application/pdf"
//         width="100%"
//         height="100%"
//       />
//     </div>
//     }
//     return null;
//   }, [selectedFile]);
  

//   return (
//     <div className="bioContainer">
//       <Nav />
//       <div>
//         <h4>Write something about yourself</h4>
//         <textarea
//           className="aboutmeText"
//           name="aboutUser"
//           placeholder="Write something here.."
//           onChange={handleChange}
//           value={myBio.aboutUser}
//         />
//         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//           <p style={{ color: 'red' }}>
//             {myBio.aboutUser === ''
//               ? 'Field should not be empty'
//               : myBio.aboutUser.length < 4
//               ? 'This should be more than 3'
//               : ''}
//           </p>
//           {myBio.aboutUser.length}/500
//         </div>
//       </div>
      
//       <div
//         style={{
//           width: '100%',
//           height: '200px',
//           backgroundColor: '#e0e0e0',
//           cursor: 'pointer',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           overflow: 'hidden',
//         }}
//         onClick={() => fileInputRef.current.click()}
//       >
//         <input
//           type="file"
//           accept=".pdf"
//           ref={fileInputRef}
//           style={{ display: 'none' }}
//           onChange={handleFileChange}
//         />
//         {pdfPreview ||<>

//             <img src="https://icon-library.com/images/gallery-icon-png/gallery-icon-png-8.jpg" width="100px" alt="" />
//            <p>Click to Upload PDF</p> 
        
//         </>}

//       </div>


//       {myBio.resume &&  <div className='dflex'>
//                 <p> myresume.pdf </p>
//                 <AiFillDelete className='deleteIcon' onClick={deleteHandler} />
//               </div>      }

//       <label htmlFor="bloodGroup">Blood group:</label>
//       <select id="bloodGroup" name="bloodGroup" onChange={handleChange} value={myBio.bloodGroup}>
//         <option value="">Select</option>
//         <option value="A+">A positive (A+)</option>
//         <option value="A-">A negative (A-)</option>
//         <option value="B+">B positive (B+)</option>
//         <option value="B-">B negative (B-)</option>
//         <option value="AB+">AB positive (AB+)</option>
//         <option value="AB-">AB negative (AB-)</option>
//         <option value="O+">O positive (O+)</option>
//         <option value="O-">O negative (O-)</option>
//       </select>


// <button
//       style={{
//         color: "white",
//         backgroundColor: "red",
//         width: "100%",
//         borderRadius: "10px",
//         border: "none",
//         padding: "10px",
//         fontSize: "1.2rem",
//         cursor: "pointer"
//       }}
//       onClick={handleClick}
//       disabled={validateFields()}
//     >
//       {"Save"}
//     </button>

//       {
//         deleteResume && <DeletePrompt handleMainContainer={handleMainContainer} handleDelete = {handleDelete}/>
//       }
//     </div>
//   );
// };

// export default MyBioEdit;



import React, { useCallback, useRef, useState, useMemo, useEffect } from 'react';
import Nav from './Nav';
import './MyBioEdit.css';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from '../ContextProvider/GlobalStateContext';
import { AiFillDelete } from 'react-icons/ai';
import DeletePrompt from './DeletePrompt';

const MyBioEdit = () => {
  const fileInputRef = useRef(null);
  const [myBio, setMyBio] = useState({ aboutUser: '', resume: '', bloodGroup: '' });
  const [selectedFile, setSelectedFile] = useState(null);
  const [deleteResume, setDeleteResume] = useState(false);
  const navigate = useNavigate();
  const { state, dispatch } = useGlobalState();


  const deleteHandler = (id) => {
    setDeleteResume(true)
  }

  const handleMainContainer = () => {
    setDeleteResume(false);

  }

  const handleDelete = (e) => {
    if (e.target.name === "yes") {
      setMyBio((prev) => ({ ...prev, resume: "" }));
      setSelectedFile(null);
      setDeleteResume(false);
      
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } else {
      setDeleteResume(false);
    }
  };
  

  const handleFileChange = useCallback((e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      setMyBio((prev) => ({ ...prev, resume: file }));
    }
  }, []);

  const handleChange = (e) => {
    setMyBio({ ...myBio, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    console.log("helo")
     dispatch({type : "SAVEBIO", payload : myBio})
     navigate("/")
  };  

  const validateFields = () => {
        return myBio.aboutUser === '' || myBio.aboutUser.length <= 3 || myBio.resume === '' || myBio.bloodGroup === '';
  };

  console.log(validateFields())

  const pdfPreview = useMemo(() => {
    if (selectedFile) {
      return <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
      <iframe
        src={URL.createObjectURL(selectedFile)}
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </div>
    }
    return null;
  }, [selectedFile]);

  // Load existing data from state when the component mounts
  useEffect(() => {
    const existingMyBio = state.myBio;

    if (existingMyBio) {
      setMyBio(existingMyBio);
      setSelectedFile(existingMyBio.resume || null);
    }
  }, [state.myBio]);

  // Rest of your component remains unchanged
  // ...

  return (
    <div className="bioContainer">
      <Nav />
      <div>
        <h4>Write something about yourself</h4>
        <textarea
          className="aboutmeText"
          name="aboutUser"
          placeholder="Write something here.."
          onChange={handleChange}
          value={myBio.aboutUser}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ color: 'red' }}>
            {myBio.aboutUser === ''
              ? 'Field should not be empty'
              : myBio.aboutUser.length < 4
              ? 'This should be more than 3'
              : ''}
          </p>
          {myBio.aboutUser.length}/500
        </div>
      </div>

      <div
        style={{
          width: '100%',
          height: '200px',
          backgroundColor: '#e0e0e0',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
        onClick={() => fileInputRef.current.click()}
      >
        {/* Rest of your code for file input */}

        <input
          type="file"
          accept=".pdf"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        {pdfPreview ||<>

            <img src="https://icon-library.com/images/gallery-icon-png/gallery-icon-png-8.jpg" width="100px" alt="" />
           <p>Click to Upload PDF</p> 
        
        </>}
      </div>

      {myBio.resume && (
        <div className='dflex'>
          <p>myresume.pdf</p>
          <AiFillDelete className='deleteIcon' onClick={deleteHandler} />
        </div>
      )}

      <label htmlFor="bloodGroup">Blood group:</label>
       <select id="bloodGroup" name="bloodGroup" onChange={handleChange} value={myBio.bloodGroup}>
         <option value="">Select</option>
         <option value="A+">A positive (A+)</option>
         <option value="A-">A negative (A-)</option>
         <option value="B+">B positive (B+)</option>
         <option value="B-">B negative (B-)</option>
         <option value="AB+">AB positive (AB+)</option>
         <option value="AB-">AB negative (AB-)</option>
         <option value="O+">O positive (O+)</option>
         <option value="O-">O negative (O-)</option>
    </select>    

    <button
      style={{
        color: "white",
        backgroundColor: "red",
        width: "100%",
        borderRadius: "10px",
        border: "none",
        padding: "10px",
        fontSize: "1.2rem",
        cursor: "pointer"
      }}
      onClick={handleClick}
      disabled={validateFields()}
    >
      {"Save"}
    </button>

      {deleteResume && <DeletePrompt handleMainContainer={handleMainContainer} handleDelete={handleDelete} />}
    </div>
  );
};

export default MyBioEdit;
