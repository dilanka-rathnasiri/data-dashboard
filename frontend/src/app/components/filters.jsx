export default function Filters({ filterValues, filterSetters }) {
  return (
    <div className="d-flex flex-row m-2">
      <div className="d-flex flex-grow-1 justify-content-start">
        <div className="input-group m-2">
          <span className="input-group-text">id</span>
          <input
            type="text"
            className="form-control"
            value={filterValues.id}
            onChange={(e) => filterSetters.setId(e.target.value)}
          />
        </div>

        <div className="input-group m-2">
          <span className="input-group-text">name</span>
          <input
            type="text"
            className="form-control"
            value={filterValues.name}
            onChange={(e) => filterSetters.setName(e.target.value)}
          />
        </div>

        <div className="input-group m-2">
          <span className="input-group-text">address</span>
          <input
            type="text"
            className="form-control"
            value={filterValues.address}
            onChange={(e) => filterSetters.setAddress(e.target.value)}
          />
        </div>

        <div className="input-group m-2">
          <span className="input-group-text">birthdate</span>
          <input
            type="text"
            className="form-control"
            value={filterValues.birthdate}
            onChange={(e) => filterSetters.setBirthdate(e.target.value)}
          />
        </div>

        <div className="input-group m-2">
          <span className="input-group-text">email</span>
          <input
            type="text"
            className="form-control"
            value={filterValues.email}
            onChange={(e) => filterSetters.setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="d-flex">
        <button className="btn btn-success m-2">
          <span className="fw-bold">download</span>
        </button>
      </div>
    </div>
  );
}
