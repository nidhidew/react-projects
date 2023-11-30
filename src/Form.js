import React, { useState } from 'react'

export default function Form() {

  const [input,setInput] = useState('');
  /**whatever value comes in useState('') it will be accessable to input. */
  /**whatever we enter in input field can be accessed using setInput */
  return (
    <div>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
      <p>User Input: {input}</p>
    </div>
  )
}
