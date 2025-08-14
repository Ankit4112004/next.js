import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      Home <br />
      <Link href='/games'>games</Link> <br />
      <Link href='/login'>Login</Link>
    </div>
  )
}

export default Home
