import React, { useEffect, useState } from 'react'
export const SubAssembly = () => {
  const [data, setData ]= useState([]);  


  useEffect(() => {
   
    const data = fetch('https://catfact.ninja/fact').
    then((data)=>data.json()).
    then(data=> {
      // setData(data)
    })

    setData([
      {
          "assemblyId": "SAWM3031",
          "endDate": "2020-07-02 00:00:00.000000",
          "id": 1,
          "itemId": "T101",
          "machineId": "FA_WM124",
          "processs": "Transmission Assembly",
          "startDate": "2020-05-23 00:00:00.000000"
      },
      {
          "assemblyId": "SAWM3032",
          "endDate": "2020-08-15 00:00:00.000000",
          "id": 2,
          "itemId": "T102",
          "machineId": "FA_WM124",
          "processs": "Electrical Assembly",
          "startDate": "2020-06-14 00:00:00.000000"
      },])

  }, [])

    
  return (
    <div >
      
      <h3 className="text-center my-3">Sub Assembly Domain data</h3>
    <table className="table">
      
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Assembly Id</th>
            <th scope="col">Item Id</th>
            <th scope="col">ID</th>
            <th scope="col">Machine Id</th>
            <th scope="col">Process</th>
            <th scope="col">Start date</th>
            <th scope="col">End Date</th>              
        </tr>
        </thead>

        <tbody>
          {
            data.map((item,i)=>{
              console.log(i)
              return(
                
              <tr>
              <th scope="row" key={i}>{i}</th>
              <td >{item.assemblyId}</td>
              <td  >{item.itemId}</td>
              <td >{item.id}</td>
              <td >{item.machineId}</td>
              <td >{item.processs}</td>
              <td >{item.startDate}</td>          
              <td >{item.endDate}</td>          
              </tr>
              )
            })
          }    
        </tbody>
        </table>
        </div>
  )
}