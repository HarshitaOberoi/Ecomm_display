import React from 'react'

const Nav = () => {
  return (
    
      <div className='h-screen w-[25%] flex flex-col  bg-zinc-200 text-center gap-4 pt-4'>
        <h1 className='border-2 p-3 m-2 h-fit  border-blue-300 hover:bg-sky-300 hover:text-white hover:cursor-pointer'>Add new Product</h1>
        <hr  />
        <h1 >Category Filter</h1>
        <ul className='list-disc list-inside marker:text-blue-400 text-xl'>
          <li className='  p-3'>cat1</li>
          <li className='p-3'>cat2</li>
          <li className='p-3'>cat3</li>
        </ul>
      </div>
    
  )
}

export default Nav
