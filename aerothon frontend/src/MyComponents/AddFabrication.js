import React, { useState } from 'react';

export const AddFabrication = ({  }) => {
    const [item, setitem] = useState("");
    const [itemId, setitemId] = useState("");
    const [rawMaterial, setRaw] = useState("");
    const [quantity, setquantity] = useState("");
    const [inDate, setInDate] = useState("");
    const [outDate, setOutDate] = useState("");

const addFabricationItem = (item,itemId,rawMaterial, quantity, inDate, outDate)=> {
    console.log('item,itemId,rawMaterial, quantity, inDate, outDate: ', item,itemId,rawMaterial, quantity, inDate, outDate);
    fetch('url', {
        method: 'POST',
        body: JSON.stringify({
            item:item ,
            itemId: itemId,
            rawMaterial: rawMaterial,
            Quantity: quantity,
            inDate: inDate,
            outDate: outDate,
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
        if (!item || !rawMaterial) {
            alert("item  cannot be blank");
        }
        else {
            addFabricationItem(item,itemId,rawMaterial, quantity, inDate, outDate);
            setitem("");
            setRaw("");
            setquantity("");
            setitemId('')
            setInDate('')
            setOutDate('')
        }
    }
    return (
        
        <div className="container my-3">
            <br></br>
            <h3 className="text-center my-3">Add Data for Fabrication domain</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="item" className="form-label">Item</label>
                    <input type="text" value={item} onChange={(e) => setitem(e.target.value)} className="form-control" id="item" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="item" className="form-label">Item ID</label>
                    <input type="text" value={itemId} onChange={(e) => setitemId(e.target.value)} className="form-control" id="item" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="rawMaterial" className="form-label">Raw Material</label>
                    <input type="text" value={rawMaterial} onChange={(e) => setRaw(e.target.value)} className="form-control" id="rawMaterial" />
                </div>
                <div className="mb-3">
                    <label htmlFor="rawMaterial" className="form-label">Quantity</label>
                    <input type="text" value={quantity} onChange={(e) => setquantity(e.target.value)} className="form-control" id="quantity" />
                </div>
                <div className="mb-3">
                    <label htmlFor="rawMaterial" className="form-label">In Date</label>
                    <input type="text" value={inDate} onChange={(e) => setInDate(e.target.value)} className="form-control" id="quantity" />
                </div>
                <div className="mb-3">
                    <label htmlFor="rawMaterial" className="form-label">Out Date</label>
                    <input type="text" value={outDate} onChange={(e) => setOutDate(e.target.value)} className="form-control" id="quantity" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Create</button>
            </form>
        </div>
    )
}
