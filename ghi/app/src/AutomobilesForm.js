import React from 'react';

class AutomobileForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: '',
            year: '',
            vin: '',
            models: []
        };
        this.handleColorChange = this.handleColorChange.bind(this)
        this.handleYearChange = this.handleYearChange.bind(this)
        this.handleVinChange = this.handleVinChange.bind(this)
        this.handleModelChange = this.handleModelChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleColorChange (event) {
        const value = event.target.value
        this.setState({ color : value });
    }

    handleYearChange (event) {
        const value = event.target.value
        this.setState({ year : value })
    }

    handleVinChange (event) {
        const value = event.target.value
        this.setState({ vin : value })
    }

    handleModelChange (event) {
        const value = event.target.value
        this.setState({ model_id : value })
    }



    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.models

        const url = "http://localhost:8100/api/automobiles/";
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig)
        if (response.ok) {
            const newAutomobile = await response.json();

            this.setState({
                color: "",
                year: "",
                vin: "",
                models: [],
            });
        }
    }

    async componentDidMount() {
        const url = "http://localhost:8100/api/models/"
        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json()
            this.setState({ models: data.models })
        }
    }

    render() {
        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <h1>Create an Automobile </h1>
                            <form onSubmit={this.handleSubmit} id="create-location-form">
                                <div className="form-floating mb-3">
                                    <input value={this.state.color} onChange={this.handleColorChange} placeholder="color" required type="text" name="color" id="color" className="form-control" />
                                    <label htmlFor="color">Color</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input placeholder="year" value={this.state.year} onChange={this.handleYearChange} required type="text" name="year" id="year" className="form-control" />
                                    <label htmlFor="year">Year</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input value={this.state.vin} onChange={this.handleVinChange} placeholder="vin" maxLength="17" required type="text" name="vin" id="vin" className="form-control" />
                                    <label htmlFor="vin">VIN</label>
                                </div>
                                <div className="mb-3">
                                    <select required onChange={this.handleModelChange} value={this.state.model_id} name="model" id="model" className="form-select">
                                        <option value="">Choose a model</option>
                                        {this.state.models.map(model_id => {

                                            return (
                                                <option key={model_id.id} value={model_id.id}>
                                                    {model_id.name}
                                                </option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <button className="btn btn-secondary">Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AutomobileForm;
