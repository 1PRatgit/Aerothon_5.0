import React, { useState } from 'react';

export const AddSubAssembly = ({  }) => {
    const [assemblyId, setAssemblyId] = useState("");
    const [itemId, setItemId] = useState("");
    const [machineId, setMachineId] = useState("");
    const [process, setProcess] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const addSubAssemblyData = (assemblyId,itemId,machineId, process,startDate,endDate  )=> {
        console.log('assemblyId,itemId,machineId, process,startDate,endDate : ', assemblyId,itemId,machineId, process,startDate,endDate );
        fetch('url', {
            method: 'POST',
            body: JSON.stringify({
                assemblyId:assemblyId ,
                processs: process,
                itemId: itemId,
                machineId: machineId,
                startDate: startDate,
                endDate: endDate,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        }).then(function (data) {
            console.log(data);
        }).catch(function (error) {
            console.warn('Something went wrong.', error);
        });
        return
    }


    const submit = (e) => {
        e.preventDefault();
        if (!assemblyId || !machineId) {
            alert("assemblyId  cannot be blank");
        }
        else {
            addSubAssemblyData(assemblyId,itemId,machineId, process,startDate,endDate);
            setAssemblyId("");
            setItemId("");
            setMachineId("");
            setProcess("");
            setStartDate("");
            setEndDate("");
        }
    }
    return (
        
        <div className="container my-3">
            <br></br>
            <h3 className="text-center my-3">Add Data for Sub Assembly domain</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="item" className="form-label">Assembyly ID</label>
                    <input type="text" value={assemblyId} onChange={(e) => setAssemblyId(e.target.value)} className="form-control" id="item" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="rawMaterial" className="form-label">Item Id</label>
                    <input type="text" value={itemId} onChange={(e) => setItemId(e.target.value)} className="form-control" id="rawMaterial" />
                </div>
                <div className="mb-3">
                    <label htmlFor="rawMaterial" className="form-label">Machine ID</label>
                    <input type="text" value={machineId} onChange={(e) => setMachineId(e.target.value)} className="form-control" id="quantity" />
                </div>
                <div className="mb-3">
                    <label htmlFor="rawMaterial" className="form-label">Process</label>
                    <input type="text" value={process} onChange={(e) => setProcess(e.target.value)} className="form-control" id="quantity" />
                </div>
                <div className="mb-3">
                    <label htmlFor="rawMaterial" className="form-label">Start Date</label>
                    <input type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="form-control" id="quantity" />
                </div>
                <div className="mb-3">
                    <label htmlFor="rawMaterial" className="form-label">End Date</label>
                    <input type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="form-control" id="quantity" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Create</button>
            </form>
        </div>
    )

    //add api below

    // const submit(e)=>{
    //     try{
    //         await axios.post(" ",{
    //             msg
    //         })
    //     }
    //     catch(e){
    //         console.log(e);
    //     }
    // }
}