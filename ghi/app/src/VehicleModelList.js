import React from 'react'

class VehicleModelList extends React.Component {

    async componentDidMount() {
        const url = `http://localhost:8100/api/models/`
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            this.setState({models : data.models})
        }
    }



    // async delete (id) {
    //     const url = `http://localhost:8100/api/models/${id}`
    //     const fetchConfig = {
    //         method: `delete`,
    //     }
    //     const response = await  fetch(url, fetchConfig)
    //     if (response.ok) {
    //         console.log(`Automobile Deleted`)
    //         this.componentDidMount()
    //     }
    // }

    render(){
    return(
        <div className="container">
            <h1>Automobiles List</h1>
            <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Manufacturer</th>
                            <th>Picture</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state?.models?.map(model => {
                            return(
                                <tr key={model.id}>
                                    <td>{model.name}</td>
                                    <td>{model.manufacturer.name}</td>
                                    <td><img src={model.picture_url}/></td>
                              </tr>
                            )
                        })}
                    </tbody>
                </table>
        </div>
    )
}
}

export default VehicleModelList
