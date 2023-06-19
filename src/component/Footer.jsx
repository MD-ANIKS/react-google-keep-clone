import React from 'react'

export default function Footer() {

  const time = new Date().getFullYear();

  return (
    <footer>

      <p>copyright &copy; <span>{time}</span> </p>

    </footer>
  )
}
