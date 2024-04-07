export default function LoadingSpinner() {
  return (
    <div className="d-flex flex-column align-bottom m-5 p-5">
      <div className="d-flex justify-content-center">
        <div
          className="spinner-border text-success h1"
          style={{
            width: "10rem",
            height: "10rem",
          }}
          role="status"
        />
      </div>
      <div className="d-flex justify-content-center">
        <h2>Loading...</h2>
      </div>
    </div>
  );
}
