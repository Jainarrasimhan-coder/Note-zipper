import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './screens/LandingPage';
// import {Route, Routes } from 'react-router-dom';
import{useState} from "react"
import MyNotes from './screens/MyNotes';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Loginpage from './screens/Loginpage';
import Registerpage from './screens/Registerpage.js';
import CreateNote from './screens/CreateNote';
import SingleNote from './screens/SingleNote';
// import {BrowserRouter,Route}from 'react-router-dom'
// import MyNotes from './screens/MyNotes';
const App = ()=>{
  const [search,setSearch] = useState("")
  return (
    <BrowserRouter> 
      <Header setSearch={setSearch}/>
     
     <Routes>
     
  <Route path="/" element={<LandingPage/>} />
  <Route path="/mynotes" element={<MyNotes search={search}/>}/>
  <Route path="/register" element={<Registerpage/>} />
  <Route path="/createnote" element={<CreateNote/>} />
  <Route path="/note/:id" element={<SingleNote/>} />
  <Route path="/login" element={<Loginpage/>}/> 
  
     </Routes>
  
  
     
     
    
     <Footer/>
     </BrowserRouter>
     
  
    
    );
}


export default App;
