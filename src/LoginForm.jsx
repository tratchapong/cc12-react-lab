import React from "react";

function LoginForm() {
  return (
    <div className="max-w-2xl mx-auto p-9 border rounded my-4">
      <form>
        <div>
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            className="w-full py-3 px-5 my-2 inline-block border border-[#ccc]"
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            className="w-full py-3 px-5 my-2 inline-block border border-[#ccc]"
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <button
            className="bg-[#04AA6D] text-white py-3 px-5 my-2 border-none cursor-pointer w-full hover:opacity-80"
            type="submit"
          >
            Login
          </button>
          <label>
            <input type="checkbox" defaultChecked name="remember" /> Remember me
          </label>
        </div>

        <div className="container">
          <button
            type="button"
            className="cancelbtn bg-[#f44336] text-white py-3 px-5 my-2 border-none cursor-pointer hover:opacity-80"
          >
            Cancel
          </button>
          <span className="float-right pt-16">
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
