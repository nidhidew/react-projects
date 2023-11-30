import React, {useState} from 'react'

export default function Toggle() {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
  }
  return (
    <div>
      <label><input type='checkbox' onChange={handleToggle}></input></label>
      <p>{isToggleOn ?" On ":" Off "}</p>
    </div>
  )
}
