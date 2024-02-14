// API Routes Handlers
import { NextResponse } from "next/server" 

// made an API since your frontend
export const GET = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return NextResponse.json({ 
    data: data
  })
}

export const POST = () => {
  return NextResponse.json({ 
    message: "Send information!" 
  })
}

export const PUT = () => {
  return NextResponse.json({ 
    message: "Update information!" 
  })
}

export const DELETE = () => {
  return NextResponse.json({ 
    message: "Remove information!" 
  })
}

