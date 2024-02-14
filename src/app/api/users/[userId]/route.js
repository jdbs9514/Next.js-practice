import { NextResponse } from "next/server"
//porcess params from the URL
//when you use a dynamic route, you can use the params object to access the dynamic route parameters
export const GET = async (request, { params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
  const data = await res.json()
  return NextResponse.json({ 
    data: data
  })
}