import React, { useEffect, useState } from 'react'
export const Fabrication = () => {
  const [data, setData ]= useState([]);  


  useEffect(() => {
   
    const data = fetch('https://catfact.ninja/fact').
    then((data)=>data.json()).
    then(data=> {
      // setData(data)
    })

    setData([{'item': 'tub', 'inDate': '14/02/2020', 'outDate': '21/02/2020', 'Quantity': '10 sqft', 'itemId': 'T101', 'rawMaterial': 'sheet steel'},
{'item': 'pump', 'inDate': '16/02/2020', 'outDate': '20/02/2020', 'Quantity': '10 kg', 'itemId': 'T102', 'rawMaterial': 'plastics'}, ])

  }, [])

    
  return (
    <div >
      
      <h3 className="text-center my-3">Fabrication Domain data</h3>
    <table className="table">
      
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">item</th>
            <th scope="col">itemid</th>
            <th scope="col">rawmaterial</th>
            <th scope="col">Quntity</th>
            <th scope="col">indate</th>
            <th scope="col">outdate</th>
                        
        </tr>
        </thead>

        <tbody>
          {
            
            data.map((item,i)=>{
              console.log(i)
              return(
                
              <tr>
              <th scope="row" key={i}>{i}</th>
              <td >{item.item}</td>
              <td  >{item.itemId}</td>
              <td >{item.rawMaterial}</td>
              <td >{item.Quantity}</td>
              <td >{item.inDate}</td>
              <td >{item.outDate}</td>          
              </tr>
              )
            })
          }
          
          
            
            
        </tbody>
        </table>
        </div>

  )
  
}
