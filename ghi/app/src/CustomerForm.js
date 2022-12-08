import React, { useState } from 'react'

const CustomerForm = () => {

    const [customerName, setCustomerName] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [customerPhoneNumber, setCustomerPhoneNumber] = useState('');


    const handleNameChange = (event) => {
        const value = event.target.value;
        setCustomerName(value)
    }

    const handleAddressChange = (event) => {
        const value = event.target.value;
        setCustomerAddress(value)
    }

    const handlePhoneChange = (event) => {
        const value = event.target.value;
        setCustomerPhoneNumber(value)
    }

    const handleSubmit = (event ) => {
        event.preventDefault();
        const newCustomer=  {
            'name': customerName,
            'address': customerAddress,
            'phone_number': customerPhoneNumber
        }
        const customerUrl = `http://localhost:8090/api/customers/`
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(newCustomer),
            headers: {
                "Content-Type" : "application/json"
            },
        };
        fetch(customerUrl, fetchConfig)
        .then(response => response.json())
        .then(() => {
            setCustomerName('');
            setCustomerAddress('');
            setCustomerPhoneNumber('');
        })
        .catch(e => console.log(`error: `, e));
    };


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a Customer</h1>
                    <form onSubmit={handleSubmit} id="create-bin-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} value={customerName} required type="text" name="name" id="name" className="form-control" />
                            <label>Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleAddressChange} value={customerAddress} required type="text" name="address" id="address" className="form-control" />
                            <label>Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handlePhoneChange} value={customerPhoneNumber} required type="text" name="phone_number" id="phone_number" className="form-control" maxLength="9"/>
                            <label>Phone Number</label>
                        </div>

                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default CustomerForm
