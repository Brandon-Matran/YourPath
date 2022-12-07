import React from 'react';

class TechnicianForm extends React.Component {
    
    render() {
        return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Add a technician</h1>
                <form onSubmit={this.handleSubmit} id="create-technician-form">
                <div className="form-floating mb-3">
                    <input value={this.state.name} onChange={this.handleNameChange} placeholder="name" required type="text" name="name" id="name" className="form-control" />
                    <label htmlFor="name">name</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={this.state.employee_number} onChange={this.handleEmployeeNumberChange} placeholder="Employee Number" required type="text" name="employee_number" id="employee_number" className="form-control" />
                    <label htmlFor="employee_number">Employee Number</label>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
          </div>
        </div>
        );
    }
}

export default TechnicianForm;
