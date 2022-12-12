import React from "react";
import { Link } from "react-router-dom";
import CompletedButton from "./ServiceComplete";
import DeleteButton from './ServiceDelete';
import './index.css'

class ServiceAppointmentList extends React.Component {


  state = {
    technicians: [],
    appointments: [],

  };

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };


  async componentDidMount() {
    const url = "http://localhost:8080/api/appointments/";
    const automobileUrl = "http://localhost:8100/api/automobiles/";
    const automobileResponse = await fetch(automobileUrl);
    const response = await fetch(url);
    try {
      if (response.ok && automobileResponse.ok) {
        const data = await response.json();
        const automobileData = await automobileResponse.json();
        const automobiles = automobileData.autos;

        this.setState({

        })
        const vinObj = {};
        automobiles.forEach((car) => (vinObj[car.vin] = car.vin));

        const appointments = data.appointments;


        appointments.forEach((appointment) => {
          if (appointment.vin === vinObj[appointment.vin]) {
            appointment["vinMatched"] = true;
          } else {
            appointment["vinMatched"] = false;
          }
        });



        const filtered = appointments.filter((appt) => appt.status === false);
        this.setState({
          appointments: filtered,
        });
      }
    } catch (e) {
      console.error(e);
    }
  }

  showVIP(appointment) {
    if (appointment["vinMatched"]) {
      return (
        <td>
          <img
            className="resize"
            src="https://static.vecteezy.com/system/resources/previews/004/516/138/original/abstract-luxury-vip-members-background-illustration-free-vector.jpg"
          ></img>
        </td>
      );
    }
    return <td></td>;
  }

  render() {
    return (
      <div>
      <div className="container-fluid">
        <table className="table table-striped ">
          <thead className="table-dark">
            <tr>
              <th>VIP</th>
              <th>VIN</th>
              <th>Owner</th>
              <th>Scheduled Time</th>
              <th>Technician</th>
              <th>Reason</th>
              <th>Cancel</th>
              <th>Finished</th>
            </tr>
          </thead>
          <tbody>
            {this.state.appointments.map((appointment) => {
              return (
                <tr key={appointment.id}>
                  {this.showVIP(appointment)}
                  <td>{appointment.vin}</td>
                  <td>{appointment.owner}</td>
                  <td>{appointment.scheduled_time}</td>
                  <td>{appointment.technician.name}</td>
                  <td>{appointment.reason}</td>
                  <td>
                    <form>
                      <DeleteButton appointment={appointment} />
                    </form>
                  </td>
                  <td>
                    <form>
                      <CompletedButton appointment={appointment} />
                    </form>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link
            to="/appointments/new"
            className="btn btn-outline-secondary btn-md px-2 gap-1"
          >
            Create new Appointment
          </Link>
        </div>
      </div>
      </div>
    );
  }
}

export default ServiceAppointmentList;


//===================================================================================================================================================================================================================================================
