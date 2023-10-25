"use client";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import signupImage from "../../../images/signup.jpg";
function Signup() {
  const label = "text-black text-sm font-medium";
  const input =
    "bg-white rounded-[10px] w-full h-[2.0em] px-4 py-4 mt-1 text-black text-xs font-medium";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "student",
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
      <div className="w-1/4 pt-14">
        <Image
          src={signupImage}
          alt="signup image"
          placeholder="blur"
          sizes="100vw"
        />
        <div className="pt-14 mt-7">
          <p className="text-sm md:text-base">
            I'm Member?
            <Link href="/auth/login" className="text-blue-500 px-1">
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="w-96">
        <h1 className="text-3xl pb-4 text-center font-bold">Sign Up</h1>
        <form className="flex flex-col gap-2 ">
          <div className="flex flex-col">
            <label htmlFor="firstName" className={label}>
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`${input} border border-gray-300`}
              disabled={isSubmitting}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className={label}>
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`${input} border border-gray-300`}
              disabled={isSubmitting}
            />
          </div>
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
          <div className="flex flex-col">
            <label htmlFor="role" className={label}>
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="border border-gray-300 rounded-[10px] py-2 text-black text-lg font-medium"
              disabled={isSubmitting}
            >
              <option value="student">Student</option>
              <option value="professional">Tutor</option>
              <option value="other">Staff</option>
            </select>
          </div>
          <div className="flex flex-col">
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
              className="w-1/4 border border-zinc-500 text-white font-medium px-3 py-2 rounded-[10px] bg-blue-400 hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing Up..." : "Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
