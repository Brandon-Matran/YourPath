// import React, { useState, useEffect } from 'react'

// const SalesRecordForm = () => {

//     const [automobileVin, setAutomobileVin] = useState('');
//     const [salesPerson, setSalesPerson] = useState('');
//     const [customer, setCustomer] = useState('');
//     const [price, setPrice] = useState('');
//     const [autos, setAutos] = useState([])
//     const [customerNames, setCustomerNames] = useState([])
//     const [salesPeoples, setSalesPeoples] = useState([])

//     useEffect( () => {
//         const autoUrl = 'http://localhost:8100/api/automobiles/'
//         fetch (autoUrl)
//         .then(response => response.json())
//         .then(data => setAutos(data.autos))
//         .catch(e => console.error('error', e))

//     },[])

//     useEffect( () => {
//         const customerUrl = 'http://localhost:8090/api/customers/'
//         fetch (customerUrl)
//         .then(response => response.json())
//         .then(data => setCustomerNames(data.customer))
//         .catch(e => console.error('error', e))

//     },[])

//     useEffect( () => {
//         const salesPersonUrl = 'http://localhost:8090/api/sales_person/'
//         fetch (salesPersonUrl)
//         .then(response => response.json())
//         .then(data => setSalesPeoples(data.sales_person))
//         .catch(e => console.error('error', e))

//     },[])



//     const handleAutomobileChange = (event) => {
//         const value = event.target.value
//         setAutomobileVin(value)
//     }

//     const handleSalesPersonChange = (event) => {
//         const value = event.target.value
//         setSalesPerson(value)
//     }

//     const handleCustomerChange = (event) => {
//         const value = event.target.value
//         setCustomer(value)
//     }

//     const handlePriceChange = (event) => {
//         const value = event.target.value
//         setPrice(value)
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         const newSale = {
//             "automobile" : automobileVin,
//             "sales_person": salesPerson,
//             "customer": customer,
//             "sale_price": price,

//         }
//         const url = 'http://localhost:8090/api/sales/'
//         const fetchConfig = {
//             method: 'post',
//             body: JSON.stringify(newSale),
//             headers: {
//                 "Content-type" : "application/json",
//             }
//         }
//         fetch(url, fetchConfig)
//             .then(response => response.json())
//             .then(() => {
//                 setAutomobileVin("");
//                 setSalesPerson("");
//                 setCustomer("");
//                 setPrice("");
//             })
//             .catch(e => console.log("error", e))

//     }
//     console.log(salesPeoples)
//     console.log(customerNames)

//     return (
//         <div className="row">
//             <div className="offset-3 col-6">
//                 <div className="shadow p-4 mt-4">
//                     <h1>Create a Sales Record</h1>
//                     <form onSubmit={handleSubmit} id="create-bin-form">
//                         <div className="form-floating mb-3">
//                             <select onChange={handleAutomobileChange} value={automobileVin} required type="text" name="automobile" id="automobile" className="form-select" >
//                             <option value="">Choose an Automobile</option>
//                             {autos.map(auto => {
//                                 return (
//                                     <option key={auto.id} value={auto.id}>{auto.vin}</option>
//                                 )
//                             })}
//                             </select>
//                         </div>
//                         <div className="form-floating mb-3">
//                             <select onChange={handleSalesPersonChange} value={salesPerson} required type="text" name="sales_person" id="sales_person" className="form-select" >
//                             <option value="">Sales Person</option>
//                             {salesPeoples.map( salesPeople => {

//                                 return (
//                                     <option key={salesPeople.id} value={salesPeople.id}>{salesPeople.name}</option>
//                                 )
//                             })}
//                             </select>
//                         </div>
//                         <div className="form-floating mb-3">
//                             <select onChange={handleCustomerChange} value={customer} required type="text" name="customer" id="customer" className="form-select" >
//                             <option value="">Customer Name</option>
//                             {customerNames.map( customer => {
//                                 return (
//                                     <option key={customer.id} value={customer.id}>{customer.name}</option>
//                                 )
//                             })}
//                             </select>
//                         </div>
//                         <div className="form-floating mb-3">
//                             <input onChange={handlePriceChange} value={price} required type="text" name="sale_price" id="sale_price" className="form-control" />
//                             <label>Sales Price</label>
//                         </div>



//                         <button className="btn btn-primary">Create</button>
//                     </form>

//                 </div>
//             </div>
//         </div>
//     );
// }


// export default SalesRecordForm


// ============================================================================================================================================================


import React from 'react'
class SalesRecordForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            autos: [],
            salesPersons: [],
            customers: [],
            price: '',
            automobile: '',
        }
        this.handleAutomobileChange = this.handleAutomobileChange.bind(this)
        this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this)
        this.handleCustomerChange = this.handleCustomerChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };


        data.sales_person = data.salesPerson


        delete data.customers;
        delete data.autos;
        delete data.price;
        delete data.automobiles;
        delete data.salesPerson;
        delete data.salesPersons;

        const recordUrl = "http://localhost:8090/api/sales/";
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            },

        };
        const response = await fetch(recordUrl, fetchConfig)

        if (response.ok) {
            const newSale = await response.json()

            this.setState(
                {
                    autos: [],
                    salesPersons: [],
                    customers: [],
                    price: '',
                })
        }
    }

    handleAutomobileChange(event) {
        const value = event.target.value
        this.setState({ automobile : value })
    }

    handleSalesPersonChange(event) {
        const value = event.target.value
        this.setState({ salesPerson: value })

    }

    handleCustomerChange(event) {
        const value = event.target.value
        this.setState({ customer: value })
    }

    handlePriceChange(event) {
        const value = event.target.value
        this.setState({ sale_price: value })
    }


    async componentDidMount() {
        const salesPersonUrl = 'http://localhost:8090/api/sales_person/'
        const salesPersonResponse = await fetch(salesPersonUrl)


        const automobileUrl = 'http://localhost:8090/api/autoVO/'
        const automobileResponse = await fetch(automobileUrl)


        const customerUrl = 'http://localhost:8090/api/customers/'
        const customerResponse = await fetch(customerUrl)



        if (automobileResponse.ok && salesPersonResponse.ok &&  customerResponse.ok) {
            const salesPersonData = await salesPersonResponse.json();
            const customerData = await customerResponse.json();
            const automobileData = await automobileResponse.json();

            this.setState({ autos : automobileData.filter((x) => x.is_sold === false )})
            this.setState({ salesPersons: salesPersonData.sales_person })
            this.setState({ customers: customerData.customer })
        }
    }

    render() {

        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a Sales Record</h1>
                        <form id="create-bin-form" onSubmit={this.handleSubmit}>
                            <div className="form-floating mb-3">
                                <select onChange={this.handleAutomobileChange} value={this.state.automobile} required type="text" name="vin" id="vin" className="form-select" >
                                    <option value="">Choose an Automobile</option>
                                    {this.state.autos.map(automobile => {

                                        return (
                                            <option key={automobile.vin} value={automobile.vin}>{automobile.vin}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="form-floating mb-3">
                                <select onChange={this.handleSalesPersonChange} value={this.state.salesPerson} required type="text" name="sales_person" id="sales_person" className="form-select" >
                                    <option value="">Sales Person</option>
                                    {this.state.salesPersons.map(salePerson => {

                                        return (
                                            <option key={salePerson.id} value={salePerson.id}>{salePerson.name}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="form-floating mb-3">
                                <select onChange={this.handleCustomerChange} value={this.state.customer} required type="text" name="customer" id="customer" className="form-select" >
                                    <option value="">Customer Name</option>
                                    {this.state.customers.map(customer => {
                                        return (
                                            <option key={customer.id} value={customer.id}>{customer.name}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handlePriceChange} value={this.state.sale_price} required type="text" name="sale_price" id="sale_price" className="form-control" />
                                <label>Sales Price</label>
                            </div>
                            <button className="btn btn-secondary">Create</button>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}


export default SalesRecordForm

// ============================================================================================================================================================
