import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const SalesList = () =>  {
    const [sales, setSales] = useState([]);
    // const [employeeNumber, setEmployeeNumber] = useState([]);
    // const [customerName, setCustomerName ]=  useState([]);
    // const [automobileVin, setAutomobileVin] = useState([]);
    // // const [salePrice, setSalePrice] = useState("");



    useEffect(() => {
        fetch('http://localhost:8090/api/sales/')
            .then(response => response.json())
            .then(data => {
                setSales(data.sales)
            })
            .catch(e => console.log('error', e))
    }, [])


    return (
        <>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Sales Person Name</th>
                    <th>Employee Number</th>
                    <th>Customer Name</th>
                    <th>VIN</th>
                    <th>Sale Price</th>
                </tr>
            </thead>
            <tbody>
                {sales.map(sale => {
               
                    return (
                        <tr key={sale.href}>
                            <td>{sale.sales_person.name}</td>
                            <td>{sale.sales_person.employee_number}</td>
                            <td>{sale.customer.name}</td>
                            <td>{sale.automobile.vin}</td>
                            <td>{sale.sale_price}</td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
            <Link to={"/sales/new"}>Create a Sales Record</Link>
            </>
    )
}

export default SalesList
