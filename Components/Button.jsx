import React from 'react'
import { Link } from "react-router-dom";

const Button = ({text , link}) => {
  return (
    <button className='w-max py-3 px-6 rounded bg-primary'>
      <Link to={link} className='w-full h-full bg-transparent font-semibold text-lg'>{text}</Link>
    </button>
  )
}

export default Button