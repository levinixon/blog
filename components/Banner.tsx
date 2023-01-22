import React from 'react'

function Banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between px-10 py-5 mt-10'>
        <div>
            <h1 className='text-7xl font-bold'>The Blog</h1>
            <h2 className='mt-5 md:mt-2'>Welcome to the weekly blog of UK based full-stack software engineer.</h2>

        </div>
        <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
            Mental break downs trying to center a div | Resorting to Chat GPT to fetch API endpoints | What even is DevOps? | 
            And much much more
        </p>
    </div>
  )
}

export default Banner