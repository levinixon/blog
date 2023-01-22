import Link from 'next/link'
import "../styles/globals.css";
import { CakeIcon } from '@heroicons/react/24/outline'

import React from 'react'

function header() {
  return (
    <header className='flex items-center justify-between space-x-2 px-10 py-5'>
        <div className=' flex item-center space-x-2'>
        <Link
          href="/"
          className="text-xl hover:underline">
          Home
        </Link>
        </div>
        <div className='flex space-x-2 text-l'>
        <Link
          href="https://www.levi-nixon.com"
          className="text-xl hover:underline">
          <CakeIcon className='h-6 w-6' />
        </Link>
        </div>
    </header>
  )
}

export default header