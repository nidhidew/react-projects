import React, { useEffect, useState } from 'react'

export default function Api_fetch() {

  const [data,setData]=useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => res.json())
    // .then((data) => console.log(data))
    .then((json) => setData(json))
  },[])
  return (
    <div>
      {
        data? (
        <div>
          <h1>Data: {data.title}</h1>
        </div>
        ) : (
          <p>
            Loading
          </p>)
      }
    </div>
  )
}
