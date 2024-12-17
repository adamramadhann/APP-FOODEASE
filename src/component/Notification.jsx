import React, { useEffect, useState } from 'react';
import { useCard } from '../UseContextCardProduck';
import { useLocation } from 'react-router-dom';

const Notification = ({ notifProps, customClass }) => {
  const { cart } = useCard();
  const [notifOff, setNotifOff] = useState(false);
  const location = useLocation();

  const hideNotif = location.pathname === '/trolley';
  const lastItem = cart?.length > 0 ? cart[cart.length - 1] : null;



  return (
    <div
      className={`flex gap-5 ${customClass} fixed w-[250px] left-1/2 translate-x-[-50%] overflow-hidden z-50 mt-3 bg-[#4EC33D] py-3 px-3 text-white rounded-md ${
        notifOff ? 'hidden' : ''
      }`}
    >
      <img
        className="w-10 left-10 absolute top-1/2 translate-y-[-50%] h-10"
        src="/image copy 4.png"
        alt="Success Logo"
      />
      <img
        className="w-10 absolute -left-2 z-10 -bottom-2 h-10"
        src="/image copy 3.png"
        alt="Logo"
      />
      <img
        className="w-10 absolute -right-2 z-10 -top-2 h-10"
        src="/image copy 3.png"
        alt="Logo"
      />
      <div className="pl-20 text-xs">
        <div className="chat-notification-title font-bold text-sm "> Trolley </div>
        <p className="chat-notification-message">Success To Uptodate !!!</p>
      </div>
    </div>
  );
};

export default Notification;
