  import React from 'react'
import MainScreen from '../components/MainScreen';
import { Form, Button, } from "react-bootstrap";
// import {  Button } from "react-bootstrap";
import "./RegisterScreen.css"
import{useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ErrorMessage from '../components/errormessage';
import Loading from '../components/loading';
// import axios from "axios";
import {register} from "../actions/userActions"
import { useDispatch } from "react-redux";
import { useSelector} from "react-redux"

// import {login} from "../actions/userActions"


const Registerpage = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [pic, setPic] = useState(
    "https://register.wyfegypt.com/images/form-wizard-login.jpg"
  );
  // const [picMessage, setPicMessage] = useState();

      const dispatch = useDispatch();

  // const userLogin = useSelector((state) => state.userLogin);
  // const { loading, error, userInfo } = userLogin;
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

    // useEffect(() => {
    //   if (userInfo) {
    //     navigate("/mynotes");
    //   }
    // }, [navigate, userInfo]);
  
  useEffect(() => {
    if (userInfo) {
      navigate("/mynotes");
    }
  }, [navigate, userInfo]);

  const submitHandler = () => {
    console.log(email)
    if (password !== confirmpassword) {
      setMessage("Passwords do not match")
    } else dispatch(register(name, email, password,pic));
  };
  
    
  




// export default Registerpage

// const Registerpage = () => {
//   // const navigate=useNavigate();
  // const [email, setEmail] = useState("");
//   // const [pic, setPic] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg");
  // const [password, setPassword] = useState("");
 
//   // const [picMessage, setpicMessage]=useState(null)
//   // const [error, setError] = useState(false);
//   // const [loading, setLoading] = useState(false);

//   // const dispatch = useDispatch();

//   // const userRegister = useSelector((state) => state.userRegister);
//   // const { loading, error, userInfo } = userRegister;
  
//   useEffect(() => {
// console.log("i am use effect")
//     }
//   );  

//   const submitHandler=()=>{
    
//       if (password !== confirmpassword) {
//       setMessage("Passwords do not match");
//       console.log("hello dad  jai")
//     } else{
//       // dispatch(register(name, email, password, pic))
//       console.log("hii jai")
//     } }
  
// //   if (password !== confirmpassword) {
// //     setMessage("Passwords do not match");
// //   } else {
// //     setMessage(null)
// //     try{
// //       const config={
// //         headers:{
// //           "content-type":"application/json"
// //         }
// //       };
// //       setLoading(true);
// //       const{data}=await axios.post("/api/users",
// //       {name,email,password},
// //       config
// //       );
// //       setLoading(false);
// //       localStorage.setItem("userInfo",JSON.stringify(data))


// //     }catch(error){
// // setError(error.response.data.message)
// //     }
// //   };

  return (
    <MainScreen title="REGISTER">
       <div className="loginContainer">
       {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>} */}
        {/* {loading && <Loading />} */}
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}> 
       
                  <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmpassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
           {/* <Form.Group controlId="pic">
            <Form.Label>Profile Picture</Form.Label>
             <Form.Select
              // onChange={(e) => setPic("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg")}
              id="custom-file"
              type="image/png"
              label="Upload Profile Picture"
              custom
            /> 
          </Form.Group>  */}
            
            <Button variant="primary" type="submit">
            Register
          </Button>
           </Form>

       
        </div>
      
    </MainScreen>
  );

 }
export default Registerpage
