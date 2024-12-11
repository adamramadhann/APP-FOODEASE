import React, { useState } from 'react'
import { AiOutlineAlignLeft } from 'react-icons/ai'
import {  FaRegHeart } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { IoHomeOutline } from 'react-icons/io5'
import { MdHistory } from 'react-icons/md'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Layout = () => {

  const pathRoute= [
    {
      path : '/',
      icon : IoHomeOutline
    },
    {
      path : '/lovePage',
      icon : FaRegHeart
    },
    {
      path : '/userPage',
      icon : FiUser
    },
    {
      path : '/historyPage',
      icon : MdHistory
    },
  ]
  return (
    <div className='w-screen p-5 h-[100dvh]' >
        <div className='h-[5%] flex w-full justify-between items-center ' >
            <button>
              <AiOutlineAlignLeft size={22} />
            </button>
            <Link to={'/'} className='w-5 h-5' >
              <img src="public/image copy.png" alt="" />
            </Link>
        </div>
        <div className='w-full h-[90%] ' >
            <Outlet/>
        </div>
       <div className='w-full flex-1 flex justify-center h-5' >  
          <div className=' w-full px-5 flex items-center justify-between' >
            {
              pathRoute.map((val) => (
                <NavLink className={({isActive}) => isActive ? 'text-orange-500 scale-90 px-3 ' : 'text-gray-500 px-3 '} to={val.path} ><val.icon size={25} /></NavLink>
              ))
            }
          </div>
       </div>
    </div>
  )
}

export default Layout