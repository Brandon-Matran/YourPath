import React from 'react';

class AutomobileForm extends React.Component {
    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <h1>Create an Automobile </h1>
                            <form id="create-location-form">
                                <div className="form-floating mb-3">
                                    <input placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                                        <label htmlFor="name">Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input placeholder="Starts" required type="date" name="starts" id="starts" className="form-control"/>
                                        <label htmlFor="Starts">Starts</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input placeholder="Ends" required type="date" name="ends" id="ends" className="form-control"/>
                                        <label htmlFor="ends">Ends</label>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea className="form-control" name="description" id="description" rows="3"></textarea>
                                </div>
                                <div className="form-floating mb-3">
                                    <input placeholder="Maximum Presentations" required type="text" name="max_presentations" id="max_presentations" className="form-control"/>
                                        <label htmlFor="max_presentations">Maximum Presentations</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input placeholder="Max_Attendees" required type="text" name="max_attendees" id="max_attendees" className="form-control"/>
                                        <label htmlFor="max_attendees">Maximum Attendees</label>
                                </div>
                                <div className="mb-3">
                                    <select required name="location" id="location" className="form-select">
                                        <option value="">Choose a Location</option>
                                    </select>
                                </div>
                                <button className="btn btn-primary">Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AutomobileForm;
