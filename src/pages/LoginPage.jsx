import React from 'react'
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div
      id="loginpage"
      className="rounded-lg login w-full h-full text-white flex flex-col justify-center items-center"
    >
      <div className="login min-w-fit px-20 py-10 w-2/5 opacity-75 backdrop-blur-2xl ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="text-3xl font-semibold ">Sign in</h1>
          <p className="text-slate-300 font-medium py-6">
            Login to manage your account
          </p>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="web@example.com"
              className="border-2 border-slate-700 rounded-lg px-5 w-4/5 outline-blue-300 outline-1 bg-slate-400/10 mb-3 h-10 pl-7 "
            />
            <img
              src="src/assets/mail.png"
              alt=""
              className="absolute h-[15px] top-4 left-2"
            />
          </div>
          <div className="password relative">
            <input
              type="password"
              placeholder="*******************"
              name="password"
              required
              className="border-2 border-slate-700 rounded-lg px-5 w-4/5 outline-blue-300 outline-1 bg-slate-400/10 mb-3 h-10 pl-7"
            />
            <img
              src="src/assets/key.png"
              alt=""
              className="absolute h-[15px] top-3 left-2"
            />
          </div>
          <div>
            <input
              type="checkbox"
              name="remember"
              required
              id="remember"
              className="mr-2"
            />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button className="w-4/5 cursor-pointer my-3 py-2 rounded-lg bg-blue-600">
            Sign in
          </button>
        </form>
      </div>

      <p className="mt-10 text-stone-500 font-medium">
        Don't have an account?{" "}
        <button className="text-blue-500">Sign up</button>{" "}
      </p>
      <Link className="text-blue-400 font-semibold">Forgot password?</Link>
    </div>
  );
}

export default LoginPage