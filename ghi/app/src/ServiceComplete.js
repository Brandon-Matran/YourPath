import { useState, useEffect } from "react";


export default function CompletedButton(props) {



  async function markAsFinished() {
    const data = props.appointment;
    const url = `http://localhost:8080/api/appointments/${data.id}/complete`;

    const request = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    await fetch(url, request)

  }
  return (
    <button
      className="btn btn-success rounded mx-auto d-block"
      onClick={markAsFinished}
    >
      Finished

    </button>
  );
}
