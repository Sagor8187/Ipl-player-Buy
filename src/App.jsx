import React, { Suspense, useEffect, useState } from 'react'
import Navbar from './component/navbar/Navbar'
import Hero from './component/hero/Hero'
import Card from './component/card/Card'

export default function App() {

  const [data,setdata]=useState([])

  useEffect(()=>{
    fetch('/data.json')
    .then(res => res.json())
    .then(output=>setdata(output))
    
    
  },[])
   
 const [active,setactive] = useState("available")
//  btn bg-[#E7FE29]
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className='flex flex-col md:flex-row justify-between items-center px-10'>
        <p className='font-bold text-2xl'>Available Player </p>
        <div className='flex justify-center gap-5'>
          <button className={` ${active==="available"? "btn bg-[#E7FE29] text-black": "btn" }`} onClick={()=>{setactive("available")}}>Available</button>
          <button className={` ${active==="selected"? "btn bg-[#E7FE29] text-black": "btn" }`} onClick={()=>{setactive("selected")}}>Selected</button>
        </div>
      </div>
      <Suspense fallback={<progress className="progress w-56"></progress>}>
        <Card data={data}></Card>

      </Suspense>
  
    </>
  )
}
