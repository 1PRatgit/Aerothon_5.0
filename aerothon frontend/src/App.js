import './App.css';
import Header from './MyComponents/Header'
import { Fabrication } from './MyComponents/Fabrication';
import { SubAssembly } from './MyComponents/SubAssembly';
import { AddFabrication } from './MyComponents/AddFabrication';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {ViewData} from './MyComponents/ViewData';
import { useState } from 'react';
function App() {
  let viewdata =[
    {
      item:"tub",
      itemId:1,
      rawmaterial:"sheetsteel",
      quantity:"10sqft",

    }
  ]
  return (
    <>
    <Header/>
    <ViewData viewdata = {viewdata} />
    {/* <Fabrication/>
    <AddFabrication/> */}
    <Router>
      <Routes>
          <Route exact path="/" render={()=>{
            return(
            <>
            <ViewData viewdata = {viewdata} />
            
            </>)
          }}> 
          </Route>
          {/* <Route exact path="/Fabrication" element={<Fabrication/>}/>
          <Route exact path="/SubAssembly" element={<SubAssembly/>}/> */}
          
         
        </Routes> 
        
        
        
        
      
    </Router>
    
    </>

    

  );
}

export default App; 
