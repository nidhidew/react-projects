import React, { useState } from 'react'

export default function Pagination() {
    const items = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17'];
    const itemsPerPage = 2;

    const [currentPage,setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem,indexOfLastItem);

    console.log(currentItems);

    const pageNumber = [];
    for (let i = 1; i < Math.ceil(items.length / itemsPerPage); i++){
        pageNumber.push(i);
    }

  return (
    <div>
      <ul>
        <h2>Data</h2>
        {currentItems.map((item,index)=>{
            return <li key = {index}>{item}</li>
        })}
      </ul>
      <h5>Page Numbers(click on the numbers and see the changes on data list)</h5>
      {pageNumber.map((number)=>(
        <li key={number} onClick={() => setCurrentPage(number)}>
            {number}
        </li>
      ))}
    </div>
  )
}
