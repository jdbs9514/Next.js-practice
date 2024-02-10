'use client'
import React from 'react'
import { useEffect } from "react"

const User = () => {
  useEffect(() => {
    console.log('User component mounted')
  }, [])

  return (
    <div>
      <h1>User</h1>
      <p>
        Welcome to the user section of our shop.
      </p>
    </div>
  )
}

export default User