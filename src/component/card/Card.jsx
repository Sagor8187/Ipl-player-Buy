import React from 'react'
import Cardview from './Cardview'

export default function Card({data,coin,setcoin}) {
    
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {
      data.map(item=>{
        return <Cardview coin={coin} setcoin={setcoin} item={item}  key={item.rating}></Cardview>
      })
      }

    </div>
  )
}
