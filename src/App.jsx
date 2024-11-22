 import React from 'react'
 
import NavBar from './Componets/NavBar/NavBar'
import Home from './Componets/Home/Home'
import About from './Componets/About/About'
import Project from './Componets/Project/Project'
import Contex from './Componets/Contect/Contex'
import Footer from './Componets/Footer/Footer'
 
 const App = () => {
   return (
     <div>
       <NavBar/>
       <Home/>
       <About/> 
       <Project/>
       <Contex/>
        <Footer/>
       
     </div>
   )
 }
 
 export default App
 