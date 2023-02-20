import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({path, title}) => {
  return (
    <Link to={`/${path}`}>
        <button className='bg-primary text-white py-2 px-4 rounded hover:scale-110 transition duration-200'>
            {title}
        </button>
    </Link>
  )
}

export default Button