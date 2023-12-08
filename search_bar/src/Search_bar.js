import React, { useState } from 'react'

export default function Search_bar() {
    const items = ['item1','item2','item3','item4','item5'];
    const [searchterm,setSearchterm] = useState('');
    const filteritem = items.filter((item) => 
    item.toLowerCase().includes(searchterm.toLowerCase()));
    // console.log(items);
  return (
    <div>
      <input type='text' placeholder='search...' onChange={(e) => setSearchterm(e.target.value)}/>
      <ul>
        {filteritem.map((item,index) => (
            <li key={index}>
                {item}
            </li>
        ))}
      </ul>
    </div>
  )
}
