import React from 'react'
import { useCard } from '../UseContextCardProduck'

const Notification = () => {
    const {cart} = useCard()

    const lastItem = cart.length > 0 ? cart[cart.length - 1] : null;

  return (
    <div className="flex gap-5 relative overflow-hidden z-50 mt-3 bg-[#4EC33D] py-3 px-8 text-white rounded-md ">
            <img className="w-10 fixed left-24 -top-2 h-10" src="public/success-removebg-preview.png"  alt="ChitChat Logo" />
            <img className="w-10 absolute -left-2 z-10 -bottom-2 h-10" src="public/image copy 3.png"  alt="ChitChat Logo" />
        <div className="pl-10 text-xs">
            <div className="chat-notification-title">Cart Trolley  succes</div>
            <p className="chat-notification-message">{lastItem.nama}</p>
        </div>
    </div>
  )
}

export default Notification