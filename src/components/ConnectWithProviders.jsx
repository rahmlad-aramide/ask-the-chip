import React from "react";
import { connectData } from "../data";
import ConnectCard from "./ConnectCard";

const ConnectWithProviders = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div>
        <div className="flex flex-col items-center mb-[59px]">
          <h1 className="font-bold text-[40px] text-center max-w-[29ch] leading-[48px] mt-8 mb-4">
            Connect with service providers
          </h1>
          <h2 className="font-semibold text-[20px] max-w-[90%] text-center mb-12 opacity-[54%]">
            Get assistance from accredited service providers at discounted fee
          </h2>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-5 gap-20'>
          {connectData.map((item, index) => <ConnectCard key={index} title={item.title} text={item.text} icon={item.icon} />)}
        </div>
      </div>
    </div>
  );
};

export default ConnectWithProviders;
