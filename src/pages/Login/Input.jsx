import React from 'react'

const Input = ( {type, placeholder, className }) => {
  return (
    <div>
      <input type={type}
       placeholder={placeholder}
       className= {` bg-gray-100 rounded-md w-[80%] h-[30px] text-xs text-gray-50
        ${className}`}
               />
    </div>
  )
}

export default Input
