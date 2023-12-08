import React, { useState } from 'react'

export default function Color_picker() {
    const [selectedColor,setSelectedColor] = useState('#000000');
    const handleChangeColor = (e) => {
        setSelectedColor(e.target.value);
    }
  return (
    <div>
      <input type='color' onChange={handleChangeColor}/><br></br><br></br>
      <div style={{width:'100px',height:'100px',backgroundColor:selectedColor}}>

      </div>
    </div>
  )
}
