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
   
 
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className='flex justify-between items-center px-10'>
        <p className='font-bold text-2xl'>Available Player </p>
        <div className='flex justify-center gap-5'>
          <button className='btn bg-[#E7FE29]'>Available</button>
          <button>Selected</button>
        </div>
      </div>
      <Suspense fallback={<progress className="progress w-56"></progress>}>
        <Card data={data}></Card>

      </Suspense>
  
    </>
  )
}
