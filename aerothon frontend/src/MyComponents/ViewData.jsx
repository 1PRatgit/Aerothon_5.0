import React, { useState } from 'react'
// import {Fabricatiton} from "./MyComponents/Fabrication";
import {Fabrication} from './Fabrication';
import { Link,useNavigate } from "react-router-dom";
import { SubAssembly } from './SubAssembly';
import { AddFabrication } from './AddFabrication';
import { Assembly } from './Assembly';
import { AddSubAssembly } from './AddSubAssembly';
import { AddAssembly } from './AddAssembly';

export const ViewData = (props) => {

  const [isFabVisible,setIsFabVisible] = useState(false)
  const [isSubAssVisible,setIsSubAssVisible] = useState(false)
  const [IsAssVisible,setIsAssVisible] = useState(false)
  const [isCreateFabVisible, setIsCreateFabVisible] = useState(false)
  const [isCreateSubAssVisible, setIsCreateSubAssVisible] = useState(false)
  const [isCreateAssVisible, setIsCreateAssVisible] = useState(false)


  // let isFabVisible = false;
  // let isSubAssVisible = false;
  // let isAssVisible = false;
  // const navigate= useNavigate();

    return (
        <div className="container">
        <h3 className="text-center my-3"> Domains </h3>
        {props.viewdata.map((viewdata)=>{
            return (
              <>
                <table className="table">
                {/* <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Domain</th>
                    <th scope="col">actions</th>
                    
                  </tr>
                </thead> */}
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>fabrication</td>
                    <td>
                        <button type="button" className="btn btn-info" onClick={()=>{setIsFabVisible(!isFabVisible); setIsSubAssVisible(false); setIsAssVisible(false); }}>view</button>
                        <button type="button" className="btn btn-info" onClick={()=> {setIsCreateFabVisible(!isCreateFabVisible)}}>Create</button></td>
                    <th scope="row">2</th>
                    <td>sub-assembly</td>
                    <td><button type="button" className="btn btn-info"onClick={()=>{setIsSubAssVisible(!isSubAssVisible); setIsFabVisible(false); setIsAssVisible(false);}}>View</button>
                    <button type="button" className="btn btn-info"onClick={()=>{setIsCreateSubAssVisible(!isCreateSubAssVisible)}}>Create</button></td>
                    
                    <th scope="row">3</th>
                    <td>assembly</td>
                    <td><button type="button" className="btn btn-info" onClick={()=>{setIsAssVisible(!IsAssVisible); setIsFabVisible(false); setIsSubAssVisible(false); }}>View</button>
                    <button type="button" className="btn btn-info"onClick={()=>{setIsCreateAssVisible(!isCreateAssVisible)}}>Create</button></td>
                    
                  </tr>
                </tbody>
                <br></br>
                <br></br>
              </table>
              {isFabVisible && <Fabrication/>}
              {isSubAssVisible && <SubAssembly/>}
              {IsAssVisible && <Assembly/>}
              {isCreateFabVisible && <AddFabrication/>}
              {isCreateSubAssVisible && <AddSubAssembly/>}
              {isCreateAssVisible && <AddAssembly/>}
              </>
              
            )
        })}
        
        </div>
    )
}