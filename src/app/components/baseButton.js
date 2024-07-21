'use client'
import React,{useState, useEffect} from "react"
/* use for Links 
    <Link href='ref'>
     <BaseButton>go to ref</BaseButton>
    </Link>
*/
const BaseButton = ({ onClick, children, className, disabled = false, name}) => {
  
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-accent hover:bg-emerald-950 text-white mx-2 py-2 px-2 font-rajdhani${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${
        className? ` ${className}` : ``
      }`}
      disabled={disabled}
      data-cy={`button_named_${name}`}
    >
      {children}
    </button>
  )
}
export default BaseButton
