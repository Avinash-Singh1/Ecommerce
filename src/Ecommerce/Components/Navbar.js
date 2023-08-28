import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({count}) => {
 
  return (
    <div className='flex justify-between text-xl p-2 bg-red-200 sticky top-0 z-10 '>
      <div>
      <Link to="/"><img src="discord.png" className='w-[50px]  hover:border-gray-500  hover:translate-y-2 duration-300' alt=""  /> </Link>
      </div>
      <div className="link flex space-x-4  md:mr-10">
        <Link className='navLink bg-blue-500 mx-4 my-1 rounded-sm pl-2 pr-2 flex text-center items-center  hover:border-gray-500  hover:translate-y-1 duration-300 ' to='/'>Home</Link>
        <Link className='navLink bg-blue-500 mx-4 my-1 rounded-sm pl-2 pr-2 flex text-center items-center  hover:border-gray-500  hover:translate-y-1 duration-300' to='/cart'>Cart</Link>

        <span className='cartCount hidden  md:flex text-center items-center'>
          Cart-Items: {count}
        </span>
      </div>
    </div>
  )
}

export default Navbar
