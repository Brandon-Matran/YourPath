export default function SearchBar(props) {
    async function searched() {
      const data = props.appointment;
      const url = `http://localhost:8080/api/appointments/${data.vin}/`;

      const request = {
        method: "GET",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };

      await fetch(url, request);
    }
    //   console.log(JSON.stringify(props.appointment));

    return (
      <div class="input-group rounded">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search VIN"
          aria-describedby="search-addon"
        />
        <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search" onClick={searched}></i>
        </span>
      </div>
    );
  }
