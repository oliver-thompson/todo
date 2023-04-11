import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      Welcome
      <div>
        <Link to="/todos">view my to-dos</Link>
      </div>
    </div>
  )
}

export default Landing