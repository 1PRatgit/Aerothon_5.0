import React, { useEffect, useState } from 'react'
export const Assembly = () => {
  const [data, setData ]= useState([]);  


  useEffect(() => {
   
    const data = fetch('https://catfact.ninja/fact').
    then((data)=>data.json()).
    then(data=> {
      // setData(data)
    })

    setData([
      {
          "assemblyEndDate": "2020-12-09 00:00:00.000000",
          "assemblyMachineId": "MAII1017ECME3020079",
          "assemblyProcess": "Component Integration",
          "assemblyStartDate": "2020-10-22 00:00:00.000000",
          "id": 1,
          "processsId": "SAWM3036_FA_WM128"
      },
      {
          "assemblyEndDate": "2021-01-01 00:00:00.000000",
          "assemblyMachineId": "MAII1017ECME3020080",
          "assemblyProcess": "Electrical Testing",
          "assemblyStartDate": "2020-10-02 00:00:00.000000",
          "id": 2,
          "processsId": "SAWM3042_FA_WM134"
      },])

  }, [])

    
  return (
    <div >
      
      <h3 className="text-center my-3">Assembly Domain data</h3>
    <table className="table">
      
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Process Id</th>
            <th scope="col">Assembly Process</th>
            <th scope="col">Assembly Machine Id</th>
            <th scope="col">Assembly Start date</th>
            <th scope="col">Assembly End Date</th>              
        </tr>
        </thead>

        <tbody>
          {
            data.map((item,i)=>{
              console.log(i)
              return(
                
              <tr>
              <th scope="row" key={i}>{i}</th>
              <td >{item.id}</td>
              <td  >{item.processsId}</td>
              <td >{item.assemblyProcess}</td>
              <td >{item.assemblyMachineId}</td>
              <td >{item.assemblyStartDate}</td>          
              <td >{item.assemblyEndDate}</td>          
              </tr>
              )
            })
          }    
        </tbody>
        </table>
        </div>
  )
}