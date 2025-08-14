import Link from 'next/link'
import React, { ReactNode } from 'react'
//in each layout u need to import global.css file
import '../globals.css'

//layout page is used to have some info present on the page throughout the time
const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
      <ul>
        <li><Link href='/login'>Login</Link></li>
        <li><Link href='/login/loginadmin'>Login To Admin</Link></li>
        <li><Link href='/login/loginuser'>Login To User</Link></li>
      </ul>
      <div className="bg-red-700 p-4 w-full text-center">Content below</div>
      {children}
    </div>
  )
}

export default Layout
