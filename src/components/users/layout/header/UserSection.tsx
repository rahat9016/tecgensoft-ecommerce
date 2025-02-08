
import Link from 'next/link'
import React from 'react'
import { User } from 'lucide-react';

export default function UserSection() {
    console.log("changes")
  return (
    <div>
         <div className="flex items-center gap-2 ml-4 relative cursor-pointer">
          <Link href="/auth/signing" className="flex justify-start items-center ">
          <User />
            <p className="text-primary-dark text-base font-semibold ml-1">Sign in</p>
          </Link>
        </div>
    </div>
  )
}
