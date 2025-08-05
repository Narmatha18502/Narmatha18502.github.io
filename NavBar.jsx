import React from 'react'
import Logo from '../MovieLogo.jpg'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
        <img className='w-[50px] rounded-full border-4 border-gray-500/50' src={Logo} alt="" />
        <Link to="/" className='text-blue-500 text-3xl font-bold font-serif'>Movies</Link>
        <Link to="/watchlist" className='text-blue-500 text-3xl font-bold font-serif'>WatchList</Link>
    </div>
  )
}
export default NavBar
