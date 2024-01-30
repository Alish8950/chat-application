"use client"
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter()
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col items-stretch px-10 py-12 bg-white rounded-3xl border border-solid border-zinc-300 w-full max-w-[450px] max-md:px-5">
          <div className="text-4xl font-semibold text-secondary max-md:max-w-full">
            Login
          </div>
          <div className="mt-3 text-2xl text-secondary max-md:max-w-full">
            to get started
          </div>
          <input
            type="email"
            placeholder="Email"
            className="justify-center items-start py-4 pr-16 pl-7 mt-7 text-base bg-white rounded-xl border border-gray-200 border-solid shadow-2xl text-zinc-800 max-md:px-5 max-md:mt-10 max-md:max-w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="justify-center items-start py-4 pr-16 pl-7 mt-4 text-base bg-white rounded-xl border border-gray-200 border-solid text-stone-400 max-md:px-5 max-md:max-w-full"
          />
          <a
            href="#"
            className="self-start mt-4 text-link whitespace-nowrap max-md:ml-2.5"
          >
            Forget Password?
          </a>
          <button className="justify-center items-center px-16 py-4 mt-6 text-base text-primary bg-blue-700 rounded-xl border border-gray-200 border-solid shadow-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full" onClick={() => router.push("/Home")}>
            Login
          </button>
          <div className="self-center mt-6 text-base whitespace-nowrap text-zinc-800 max-md:mt-10">
            <span>New User? </span>
            <a href="#" className="font-semibold text-link">
              Register
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
