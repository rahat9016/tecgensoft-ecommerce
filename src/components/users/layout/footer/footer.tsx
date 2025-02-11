"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
const Footer =() => {
  const pathname = usePathname()
  return (
    <footer>
      {!pathname.startsWith('/admin')  && <div></div>}
    </footer>
  )
}

export default Footer