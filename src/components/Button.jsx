import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({path, title}) => {
  return (
    <Link to={`/${path}`}>
        <button>
            {title}
        </button>
    </Link>
  )
}

export default Button