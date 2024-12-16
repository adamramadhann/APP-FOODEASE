import React, { useEffect, useState } from 'react'
import { AiOutlineAlignLeft } from 'react-icons/ai'
import {  FaRegHeart } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { IoHomeOutline } from 'react-icons/io5'
import { MdHistory } from 'react-icons/md'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useCard } from './UseContextCardProduck'
import Notification from './component/Notification'

const Layout = () => {
  const {cart} = useCard()
  const [notif, setNotif] = useState(false)

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


  const handleNotif = () => {
    if (cart.length) {
      setNotif(true)
      setTimeout(() => {
        setNotif(false); 
      }, 1000);
    } else {
      setNotif(false); 
    }
  };

  

useEffect(() => {
  if(cart.length) {
    setTimeout(() => {
      handleNotif()
    }, 300)
  }
},[cart])


  return (
    <div className='w-screen p-5 relative h-[100dvh]' >
      <div className="absolute w-full left-1/2 translate-x-[-50%] flex justify-center items-center">
        {notif && <Notification />}
      </div>
      <div className='h-[5%] flex w-full justify-between items-center ' >
            <button>
              <AiOutlineAlignLeft size={22} />
            </button>
            <Link to={'/trolley'}className='w-5 h-5 relative ' >
              <img src="public/image copy.png" className='w-7 h-5' alt="" />
              <span className={`w-5 h-5 bg-red-500 text-xs rounded-full -top-3 -right-3 text-white absolute flex items-center justify-center ${cart.length === 0 && 'hidden'}`} >{cart.length }</span>
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