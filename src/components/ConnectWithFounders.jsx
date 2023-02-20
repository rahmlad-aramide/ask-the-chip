import React from "react";
import foundersImage from "../assets/images/connect.svg";

const ConnectWithFounders = () => {
  return (
    <section className="bg-[#77CBB9] min-h-screen font-OpenSans">
      <div className="mx-10 pb-10 pt-20">
        <img src={foundersImage} alt="Connect with founders" className="max-h-[50vh] w-full" />
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="max-w-[26ch] text-white opacity-[87%] font-bold text-[40px] leading-[54px] text-center mb-[30px]">
          Connect with other founders and investors
        </h1>
        <h2 className="max-w-[40ch] text-white font-semibold text-[20px] leading-[48px] mb-10">
          Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum lobortis.
        </h2>
      </div>
    </section>
  );
};

export default ConnectWithFounders;
