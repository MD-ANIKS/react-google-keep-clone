import React from 'react'
import logo from '../logo.svg'

export default function Header() {
  return (
   <header>
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>React-Keep</h1>
      </div>
   </header>
  )
}
