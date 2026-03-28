import React from "react";
import background from "../../assets/bg-shadow.png";
import image from "../../assets/banner-main.png";

export default function Hero() {
  return (
    <div
      className="bg-cover bg-center m-10 bg-black  rounded-md"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex flex-col p-10 justify-center items-center">
        <img src={image} alt="" />
        <div className="text-white ">
          <h1 className="font-bold text-3xl">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-white/50">Beyond Boundaries Beyond Limits</p>
        </div>
 
        <button className="sm:mt-2 btn border-2 border-black outline-1 outline-[#E7FE29] bg-[#E7FE29]">Claim Free Credit</button>
      </div>
    </div>
  );
}
