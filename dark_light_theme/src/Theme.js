import React from 'react'
import { useTheme } from './Theme_Context'

export default function Theme() {

    const {isDarkMode,toggleTheme} = useTheme();

  return (
    <div>
      <label>
        <input type='checkbox' checked={isDarkMode} onChange={toggleTheme}/>
        Dark Mode
      </label>
    </div>
  )
}