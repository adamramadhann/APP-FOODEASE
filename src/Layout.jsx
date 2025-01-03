import { useEffect, useState, useCallback } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { IoHomeOutline } from 'react-icons/io5';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useCard } from './UseContextCardProduck';
import Notification from './component/Notification';

const Layout = () => {
  const { cart } = useCard();
  const [notif, setNotif] = useState(false);
  const location = useLocation();

  
  const pathRoute = [
    { path: '/', icon: IoHomeOutline },
    { path: '/lovePage', icon: FaRegHeart },
    { path: '/userPage', icon: FiUser }
  ];

  
  const showNavigation = pathRoute.some((route) => route.path === location.pathname);

 
  const handleNotif = useCallback(() => {
    if (cart.length) {
      setNotif(true);
      setTimeout(() => {
        setNotif(false);
      }, 1000);
    } else {
      setNotif(false);
    }
  }, [cart.length]);

  useEffect(() => {
    setTimeout(() => {
      if (cart.length > 0) {
        handleNotif();
      }
    }, 500);
  }, [cart, handleNotif]);

  return (
    <div className="w-full relative h-[100dvh]">
      {/* Notifikasi */}
      {notif && <Notification />}

      {/* Bagian utama halaman */}
      <div className="w-full bg-slate-100 h-[90%]">
        <Outlet />
      </div>

      {/* Navigasi hanya ditampilkan jika path cocok */}
      {showNavigation && (
        <div className="w-full flex-1 bg-white mt-10 flex justify-center">
          <div className="w-full px-5 flex h-10 bg-white  items-center justify-between">
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
