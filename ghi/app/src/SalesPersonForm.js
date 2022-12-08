import React, { useState } from 'react'


const SalesPerson = () => {

    const [salesPersonName, setSalesPersonName] = useState('');
    const [employeeNumber, setEmployeeNumber] = useState('');

   const handleNameChange = (event) => {
    const value = event.target.value
    setSalesPersonName(value)
   }

   const handleEmployeeNumberChange = (event) => {
    const value = event.target.value
    setEmployeeNumber(value)
   }

   const handleSubmit = (event) => {
    event.preventDefault()

    const newEmployee = {
        'name': salesPersonName,
        'employee_number': employeeNumber
    }

    const employeeUrl = 'http://localhost:8090/api/sales_person/'
    console.log(employeeUrl)
    const fetchConfig = {
        method: 'post',
        body: JSON.stringify(newEmployee),
        headers: {
            'Content-type' : 'application/json'
        }
    }
    fetch(employeeUrl, fetchConfig)
        .then(response => response.json())
        .then(() => {
            setSalesPersonName('');
            setEmployeeNumber('');
        })
        .catch(e => console.log('error', e));
   }




    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a Customer</h1>
                    <form onSubmit={handleSubmit} id="create-bin-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} value={salesPersonName} required type="text" name="name" id="name" className="form-control" />
                            <label>Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleEmployeeNumberChange} value={employeeNumber} required type="text" name="employee_number" id="employee_number" className="form-control" />
                            <label>Employee Number</label>
                        </div>


                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}



export default SalesPerson
