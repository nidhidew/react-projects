import React, { useState } from 'react'

export default function Bg_color() {

    const [backgroundColor,setBackgroundColor] = useState('brown')
    const handleClick = () => {
        const newColor = backgroundColor === 'brown' ? 'red' : 'white';
        setBackgroundColor(newColor)
    }
  return (
    <div onClick={handleClick} 
    style={{backgroundColor,cursor:'pointer'}}>
      Click me
    </div>
  )
}
