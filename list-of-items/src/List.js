import React from 'react'

export default function List() {
    const items = ['Item1','Item2','Item3']
  return (
    <div>
      <ul>
        {items.map((item,index)=>{
            return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}
