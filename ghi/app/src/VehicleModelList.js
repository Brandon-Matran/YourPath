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


    render(){
    return(
        <div className="container-fluid">
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
                                    <td><img src={model.picture_url} className='img-thumbnail' width="300px" height="300px"/></td>
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

{/* <td><img src={ hat.picture_url } className='img-thumbnail' width="100px" height="100px"/></td> */}
