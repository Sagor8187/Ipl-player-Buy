import React, { Suspense, useEffect, useState } from 'react'
import Navbar from './component/navbar/Navbar'
import Hero from './component/hero/Hero'
import Card from './component/card/Card'
import Selected from './component/card/Selected'

export default function App() {

  const [data,setdata]=useState([])

  useEffect(()=>{
    fetch('/data.json')
    .then(res => res.json())
    .then(output=>setdata(output))
    
    
  },[])
   
  const [active,setactive] = useState("available")
  const [coin,setcoin]=useState(50000)
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Hero></Hero>
      <div className='flex flex-col md:flex-row justify-between items-center px-10'>
       {active==="available"? <p className='font-bold text-2xl'>Available Player </p>: <p className='font-bold text-2xl'>Selected Playeer</p>}
        <div className='flex justify-center gap-5'>
          <button className={` ${active==="available"? "btn bg-[#E7FE29] text-black": "btn" }`} onClick={()=>{setactive("available")}}>Available</button>
          <button className={` ${active==="selected"? "btn bg-[#E7FE29] text-black": "btn" }`} onClick={()=>{setactive("selected")}}>Selected</button>
        </div>
      </div>
      <Suspense fallback={<progress className="progress w-56"></progress>}>
      {active === "available"?<Card coin={coin} setcoin={setcoin} data={data}></Card>:<Selected></Selected>}

        

      </Suspense>
  
    </>
  )
}
