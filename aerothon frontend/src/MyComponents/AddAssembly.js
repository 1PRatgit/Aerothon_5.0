import React, { useState } from 'react';

export const AddAssembly = ({  }) => {
    const [assemblyProcess, setAssemblyProcess] = useState('')
    const [processId, setProcessId] = useState('')
    const [assembyMid, setAssembyMid] = useState('')
    const [assemblyStartDate, setAssemblyStartDate] = useState('')
    const [assemblyEndDate, setassemblyEndDate   ] = useState('')


    const addAssemblyItem = (assemblyProcess,processId,assembyMid,assemblyStartDate,assemblyEndDate ) => {
        console.log('assemblyProcess,processId,assembyMid,assemblyStartDate,assemblyEndDate: ', assemblyProcess,processId,assembyMid,assemblyStartDate,assemblyEndDate);
       
        fetch('url', {
            method: 'POST',
            body: JSON.stringify({
                assemblyProcess:assemblyProcess ,
                processId: processId,
                assemblyMachineId: assembyMid,
                assemblyStartDate: assemblyStartDate,
                assemblyEndDate: assemblyEndDate,
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
        if (!assemblyProcess || !assembyMid) {
            alert("assemblyProcess  cannot be blank");
        }
        else {
            addAssemblyItem(assemblyProcess,processId,assembyMid,assemblyStartDate,assemblyEndDate);
            setAssemblyProcess('')
            setProcessId('')
            setAssembyMid('')
            setAssemblyStartDate('')
            setassemblyEndDate('')
        }
    }
    return (
        
        <div className="container my-3">
            <br></br>
            <h3 className="text-center my-3">Add Data for fabrication domain</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="item" className="form-label">Assembly Process</label>
                    <input type="text" value={assemblyProcess} onChange={(e) => setAssemblyProcess(e.target.value)} className="form-control" id="item" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="rawMaterial" className="form-label">Process ID</label>
                    <input type="text" value={processId} onChange={(e) => setProcessId(e.target.value)} className="form-control" id="rawMaterial" />
                </div>
                <div className="mb-3">
                    <label htmlFor="rawMaterial" className="form-label">Assembly Machine Id</label>
                    <input type="text" value={assembyMid} onChange={(e) => setAssembyMid(e.target.value)} className="form-control" id="quantity" />
                </div>
                <div className="mb-3">
                    <label htmlFor="rawMaterial" className="form-label">Assembly Start Date</label>
                    <input type="text" value={assemblyStartDate} onChange={(e) => setAssemblyStartDate(e.target.value)} className="form-control" id="quantity" />
                </div>
                <div className="mb-3">
                    <label htmlFor="rawMaterial" className="form-label">Assembly Machine Id</label>
                    <input type="text" value={assemblyEndDate} onChange={(e) => setassemblyEndDate(e.target.value)} className="form-control" id="quantity" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Create</button>
            </form>
        </div>
    )
}