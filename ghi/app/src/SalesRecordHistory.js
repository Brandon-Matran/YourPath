// import React, { useState, useEffect } from 'react'


// const SalesRecordHistory = () => {
//     const [sales, setSales] = useState([]);


//     useEffect((id) => {
//         fetch(`http://localhost:8090/api/sales_person/${id}`)
//             .then(response => response.json())
//             .then(data => {
//                 setSales(data.sales)
//             })
//             .catch(e => console.log('error', e))
//     }, [])

//     return (
//         <>
//         <table className="table table-striped">
//             <thead>
//                 <tr>
//                     <th>Sales Person</th>
//                     <th>Customer</th>
//                     <th>VIN</th>
//                     <th>Sale Price</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {sales.map(sale => {
//                     console.log(sale)
//                     return (
//                         <tr key={sale.href}>
//                             <td>{sale.sales_person.name}</td>
//                             <td>{sale.customer.name}</td>
//                             <td>{sale.automobile.vin}</td>
//                             <td>{}</td>
//                             <td>{sale.sale_price}</td>
//                         </tr>
//                     )
//                 })}
//             </tbody>
//             </table>
//             </>
//             )


// }


// export default SalesRecordHistory


import React from 'react';


class SalesRecordHistory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            salesHistory: [],
            salesPersons: [],
            salesPerson: '',
        };

        this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this);
    }

    async handleSalesPersonChange(event) {
        const value = event.target.value;
        const personSalesUrl = `http://localhost:8090/api/sales_history/${value}`;
        const personSalesResponse = await fetch(personSalesUrl);

        if (personSalesResponse.ok) {
            const personSalesData = await personSalesResponse.json();

            this.setState({ salesHistory: [personSalesData] });

        }
    }

    async componentDidMount() {
        const salesPersonUrl = 'http://localhost:8090/api/sales_person/';
        const salesPersonResponse = await fetch(salesPersonUrl);

        if (salesPersonResponse.ok) {
            const salesPersonData = await salesPersonResponse.json();

            this.setState({ salesPersons: salesPersonData.sales_person })
        }
    }

    render() {
        return (
            <>
                   <div className="px-4 py-5 my-5 mt-0 text-center">
                    <img className="bg-white rounded shadow d-block mx-auto mb-4" alt="" width="600" />
                    <h1 className="display-5 fw-bold">Personnel Sales History</h1>

                    </div>
                <div className="mb-3 my-5">
                    <select onChange={this.handleSalesPersonChange} value={this.state.salesPerson} required id="sales_person" name="sales_person" className="form-select">
                        <option value="">Choose a sales person</option>
                        {this.state?.salesPersons?.map(salesPerson => {
                            return (
                                <option key={salesPerson.id} value={salesPerson.id}>{salesPerson.name}</option>
                            );
                        })}
                    </select>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Sales person</th>
                            <th>Customer</th>
                            <th>VIN</th>
                            <th>Sale price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.salesHistory.map(sale => {
                            console.log(sale)
                            return (
                                <tr key={sale.sales_history.id}>
                                    <td>{sale.sales_history.sales_person.name}</td>
                                    <td>{sale.sales_history.customer.name}</td>
                                    <td>{sale.sales_history.automobile.vin}</td>
                                    <td>{sale.sales_history.sale_price}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </>
        );
    }
}

export default SalesRecordHistory;
