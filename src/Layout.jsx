import React, { useEffect, useState } from 'react';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { IoHomeOutline } from 'react-icons/io5';
import { MdHistory } from 'react-icons/md';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useCard } from './UseContextCardProduck';
import Notification from './component/Notification';

const Layout = () => {
  const { cart } = useCard();
  const [notif, setNotif] = useState(false);
  const location = useLocation();

  // Path yang memiliki navigasi
  const pathRoute = [
    { path: '/', icon: IoHomeOutline },
    { path: '/lovePage', icon: FaRegHeart },
    { path: '/userPage', icon: FiUser },
    { path: '/historyPage', icon: MdHistory },
  ];

  // Cek apakah current path ada di dalam pathRoute
  const showNavigation = pathRoute.some((route) => route.path === location.pathname);

  // Handle notifikasi
  const handleNotif = () => {
    if (cart.length) {
      setNotif(true);
      setTimeout(() => {
        setNotif(false);
      }, 1000);
    } else {
      setNotif(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (cart.length > 0) {
        handleNotif();
      }
    }, 500);
  }, [cart]);

  return (
    <div className="w-screen relative h-[100dvh]">
      {/* Notifikasi */}
      {notif && <Notification />}

      {/* Bagian utama halaman */}
      <div className="w-full bg-slate-100 h-[90%]">
        <Outlet />
      </div>

      {/* Navigasi hanya ditampilkan jika path cocok */}
      {showNavigation && (
        <div className="w-full flex-1 mt-10 flex justify-center h-5">
          <div className="w-full px-5 flex items-center justify-between">
            {pathRoute.map((val) => (
              <NavLink
                key={val.path}
                className={({ isActive }) =>
                  isActive ? 'text-orange-500 scale-90 px-3' : 'text-gray-500 px-3'
                }
                to={val.path}
              >
                <val.icon size={25} />
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
