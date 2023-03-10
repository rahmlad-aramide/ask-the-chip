import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/ask.svg";
// import background from './../assets/images/hand-bulb.svg';

import Button from "./../components/Button";

const Register = () => {
  return (
    <div className="min-h-screen font-Inter">
      <div className="flex flex-col md:flex-row h-screen">
        <div className="w-[50%] h-screen overflow-y-auto">
          <div className="h-16">
            <Link to="/">
              <img src={logo} alt="Ask the chip" />
            </Link>
          </div>
          <div className="max-w-[600px] flex flex-col justify-center items-center ml-8 my-8">
            <div className="flex items-start w-full">
              <h1 className="font-Inter text-[32px] mb-8">Register</h1>
            </div>
            <div className="flex flex-col mb-4 w-full">
              <label htmlFor="email" className="text-[24px] mb-4">
                Email
              </label>
              <input
                className="bg-[#D9D9D921] outline-none border border-[#D9D9D9] rounded-lg py-1 px-2 w-[90%]"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="password" className="text-[24px] mb-4">
                Password
              </label>
              <input
                className="bg-[#D9D9D921] outline-none border border-[#D9D9D9] rounded-lg py-1 px-2 w-[90%]"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="account_type" className="text-[24px] mb-4">
                Select account type
              </label>
              <select className="bg-[#D9D9D921] outline-none border border-[#D9D9D9] rounded-lg py-1 px-2 w-[90%]" id="account_type" name="account_type">
                <option>Entrepreneur</option>
                <option>Investor</option>
                <option>Entrepreneur/Investor</option>
              </select>
            </div>
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="full_name" className="text-[24px] mb-4">
                Full name
              </label>
              <input
                className="bg-[#D9D9D921] outline-none border border-[#D9D9D9] rounded-lg py-1 px-2 w-[90%]"
                type="text"
                name="full_name"
                id="full_name"
                placeholder="Enter your full name"
              />
            </div>
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="phone_no" className="text-[24px] mb-4">
                Phone number
              </label>
              <input
                className="bg-[#D9D9D921] outline-none border border-[#D9D9D9] rounded-lg py-1 px-2 w-[90%]"
                type="tel"
                name="phone_no"
                id="phone_no"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="flex justify-center mt-4 mb-2">
              <p className="max-w-[41ch]">
                By clicking Agree & Join, you agree to the Askthechip{" "}
                <span className="text-tertiary underline">User agreement</span>,{" "}
                <span className="text-tertiary underline"> Privacy Policy</span>
                , and{" "}
                <span className="text-tertiary underline"> Cookie Policy.</span>
              </p>
            </div>
            <div className="flex justify-center my-2">
              <Button title="Register" path="register" />
            </div>
            <div className="flex justify-center text-tertiary -mb-2 mt-2 underline">
              <Link to="/sign-in">Sign In</Link>
            </div>
          </div>
        </div>
        <div className="w-[50%] bg-handBulb bg-right-bottom bg-no-repeat bg-cover h-screen">
          {/* <div className="w-full flex justify-end items-center">
            <img src={background} alt="People on globe" className='max-h-[80vh] w-full' />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
