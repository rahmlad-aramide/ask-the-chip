import React from "react";
import Button from "./Button";

import header from './../assets/images/header.svg'

const Header = () => {
  return (
    <div className="font-Montserrat">
      <section className="flex justify-center items-center flex-col min-h-screen">        
      <div className="flex justify-center items-center flex-col my-10">
        <h1 className="font-bold text-[64px] text-center max-w-[32ch] leading-[82px] my-8 text-[#021B38]">Welcome to our Community of Entrepreneurs</h1>
        <h2 className="text-[20px] max-w-[51ch] text-center mb-8 text-[#343432]">
          And indeed the worst of my faults was a certain impatient gaiety of
          disposition, such as has made the happiness of many, but such as I
          found it hard to reconcile with.
        </h2>
        <div>
            <Button path='sign-in' title='Sign In' />
        </div>
        </div>
        <div>
          <img src={header} alt="Header" />
        </div>
      </section>
    </div>
  );
};

export default Header;
