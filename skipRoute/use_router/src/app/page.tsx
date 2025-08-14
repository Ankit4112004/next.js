"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {
const router = useRouter();
console.log("-----",router);
const navigate = (page:string)=>{
  router.push(`/${page}`)
}

  return (
    <main>
      <h1>Routing | Navigation</h1>
      <Link href='/login'>Login page</Link>
      <hr />
      <Link href='/about'>About page too</Link>
      <br />
      <button onClick={()=>router.push('/colors')}>Go to Colors tab</button>
      <br />
      <button onClick={()=>navigate("login")}>Go to login page</button>
      </main>
  )
}

export default Home
