import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiFlag1 } from "react-icons/ci";


export default function CardView({ item ,coin,setcoin}) {
    const[selected,setselected]=useState(false)
    const handlefunc=()=>{
        setselected(true)
        setcoin(coin-item.price)
    }
  return (
    <div className=" max-w-xs bg-white rounded-xl shadow-lg overflow-hidden m-4 hover:scale-105 transform transition duration-300">
      {/* Player Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Player Name */}
      <div className="p-4">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-2 text-gray-800">
          <CgProfile className="text-blue-500" /> {item.name}
        </h2>

        {/* Country & Category */}
        <div className="flex justify-between mb-2 text-gray-600">
          <p className="flex items-center gap-1">
            <CiFlag1 className="text-red-500" /> {item.country}
          </p>
          <p>{item.category}</p>
        </div>

        {/* Hand & Price */}
        <div className="flex justify-between mb-4 text-gray-600">
          <p>{item.hand}</p>
          <p className="font-semibold text-gray-800">${item.price}</p>
        </div>

        {/* Button */}
        <button onClick={()=>handlefunc()} disabled={selected?true:false} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full transition duration-200">
          {selected?"Selected":"Chose Player"} 
        </button>
      </div>
    </div>
  );
}