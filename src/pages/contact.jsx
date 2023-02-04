export default function contact() {
  return (
    <div
      className="container text-light bg-info mt-4 "
      style={{ height: "80vh" }}
    >
      <h1 className="">Please drop your details!</h1>
      <form action="/api/form" method="post">
        <div className="col g-5 align-items-center p-2">
          <div className="col-4">
            <label htmlFor="name" className="form-label">
              Name :{" "}
            </label>
            <input type="text" className="form-control " name="name" />
          </div>
          <div className="col-4">
            <label htmlFor="email" className="form-label">
              Email :{" "}
            </label>
            <input
              type="email"
              className="form-control"
              pattern="[a-z0-9]{1-20}"
              name="email"
            />
          </div>
          <div className="col-4">
            <label htmlFor="phone" className="form-label">
              Phone :{" "}
            </label>
            <input
              type="text"
              className="form-control"
              pattern="[0-9+]{13}"
              name="contact"
            />
          </div>
          <div className="col-4 my-2">
            <button className="btn btn-success">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
