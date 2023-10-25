"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import signupImage from "../../../images/login.jpg";

function Login() {
  const label = "text-black text-sm font-medium";
  const input =
    "bg-white rounded-[10px] w-full h-[2.0em] px-4 py-5 mt-1 text-black text-xs font-medium";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex justify-center min-h-screen mt-10 mb-4 w-full">
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 pt-2">
        <div>
          <Image
            src={signupImage}
            alt="signup image"
            placeholder="blur"
            sizes="100vw"
          />
        </div>
        <div className="pt-10 pl-4">
          <p className="text-sm md:text-base">
            I'm not a Member?
            <Link href="/auth/signup" className="text-blue-500 px-1">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <div className="w-96 md:w-64 xl:w-96 pt-6">
        <h1 className="text-3xl pb-4 text-center font-bold"> Login </h1>
        <form className="flex flex-col gap-2">
          <div className="flex flex-col">
            <label htmlFor="email" className={label}>
              Email
            </label>
            <input
              type="text"
              placeholder="name@example.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`${input} border border-gray-300`}
              disabled={isSubmitting}
            />
          </div>

          <div className="flex flex-col mt-4">
            <label htmlFor="password" className={label}>
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`${input} border border-gray-300`}
              disabled={isSubmitting}
            />
          </div>
          <div className="flex flex-col">
            <button
              type="submit"
              className="w-1/2 md:w-1/3 border border-zinc-500 text-white font-medium px-3 py-2 rounded-[10px] bg-blue-400 hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Login..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
