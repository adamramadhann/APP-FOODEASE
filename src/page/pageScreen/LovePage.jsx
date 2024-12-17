import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const LovePage = () => {

  const [localCartheart, setLocalHeartCard] = useState([])
  const [serch, setSerch] = useState('')

  const handleSerch = localCartheart.filter((val) => 
    val.nama.toLowerCase().includes(serch.toLowerCase()))

  useEffect(() => {
    try {
      const saveLocalStorageCard = localStorage.getItem('localCartheart');
      // Pastikan hanya parse jika data ada
      if (saveLocalStorageCard) {
        setLocalHeartCard(JSON.parse(saveLocalStorageCard));
      }
    } catch (error) {
      console.error('Error parsing localStorage data:', error);
      // Bersihkan data jika corrupt
      localStorage.removeItem('localCartheart');
      setLocalHeartCard([]);
    }
  }, []);

  return (
  <div className='w-full p-5 h-[100dvh' >
    <input type="serch" className='w-full mt-10 py-2 border-gray-400 rounded-sm border pl-3 outline-none mb-10 ' onChange={(val) => setSerch(val.target.value)} placeholder='Serch Produk you Like' />
    <h1 className='text-lg font-bold mb-2' >Produck Like </h1>
    <div className='h-[580px] no-scrollbar overflow-auto ' >
    <div className="w-full grid grid-cols-2 overflow-y-auto pt-16 items-center gap-5 ">
  {handleSerch.length > 0 ? (
    handleSerch.map((val, index) => (
      <Link to={`/detail/${val.nama}`} >
        <div
        key={index}
        className="w-[165px] cursor-pointer bg-gradient-to-br to-green-500 from-green-300 mb-16 relative rounded-[15px] shadow-md h-[180px] flex items-center mt-5 justify-center"
      >
        {/* Gambar */}
        <img
          src={val.gambar}
          className="w-[90%] absolute top-[-60px] left-1/2 transform h-[150px] -translate-x-1/2 rounded-full border-4 border-white"
          alt=""
        />

        {/* Konten tambahan jika diperlukan */}
        <div className="absolute bottom-5">
          <h3 className="text-sm text-white font-semibold">$ {val.harga}</h3>
          <h3 className="text-xs text-white font-semibold">{val.nama}</h3>
        </div>
        </div>
      </Link>
    ))
  ) : (
    <p>No liked items yet!</p>
  )}
    </div>
    </div>
  </div>
  )
};

export default LovePage;