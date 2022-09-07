import React from "react";

function Login() {
  return (
    <div className="login w-50 border rounded mx-auto mt-5">
    <div className="display-5 text-center">Login</div>
      <form className="container p-4">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {/* <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">

        <button type="submit" className="btn btn-primary btn-lg">  Submit</button>
        </div>
        
      </form>
    </div>
  );
}

export default Login;
