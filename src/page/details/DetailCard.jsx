import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { dataCategory } from '../../data/data';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { AiOutlineLeft } from 'react-icons/ai';
import { useCard } from '../../UseContextCardProduck';
import Notification from '../../component/Notification';

const DetailCard = () => {
  const { id } = useParams();
  const { addToCard } = useCard();
  const navigate = useNavigate();
  const [bgActive, setBgActive] = useState(false)
  const [showNotification, setShowNotification] = React.useState(false);

  const dataDetail = dataCategory
    .flatMap((val) => val.items)
    .find((val) => val.nama === id);

  if (!dataDetail) {
    return (
      <div className="w-screen h-screen -mt-20 bg-black/20 flex items-center justify-center">
        <h1 className="text-xl text-white">Data IS Not Found</h1>
      </div>
    );
  }
  const handleTrolley = () => {
    addToCard(dataDetail);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
      navigate('/');
    }, 100);
  };


  const handleSaveLocalStorage = () => {

    const getAllLData = JSON.parse(localStorage.getItem('localCartheart')) || []
    const isItems = getAllLData.some((val) => val.nama === dataDetail.nama)

    if(isItems) {
      const updateHeart = getAllLData.filter((val) => val.nama !== dataDetail.nama)
      localStorage.setItem('localCartheart', JSON.stringify(updateHeart))
      setBgActive(false)
      alert('Item removed from like page')
    } else {
      const updateHeart = [...getAllLData, dataDetail]
      localStorage.setItem("localCartheart", JSON.stringify(updateHeart))
      setBgActive(true)
      alert('cart add to like page')
    }
    
  };
  

  useEffect(() => {
    const localGetItem = JSON.parse(localStorage.getItem('localCartheart')) || []
    const cekLocal = localGetItem.some((val) => val.nama === dataDetail.nama)

    setBgActive(cekLocal)
  }, [])

 

  return (
    <div className=" relative m-3 mt-5 h-[100dvh]">
      <div className="flex w-full justify-between items-center">
        <Link to={'/'}>
          <AiOutlineLeft size={25} />
        </Link>
        <button onClick={handleSaveLocalStorage} >
          <FaHeart className={`${bgActive ? 'fill-red-500' : 'fill-gray-400' }`}  size={25} />
        </button>
      </div>
      <div className="w-full  flex items-center justify-center flex-col">
        <img
          src={dataDetail.gambar}
          alt={dataDetail.nama}
          className="w-[250px] sm:w-[350px] sm:h-[350px] h-[250px] rounded-full"
        />
        <h1 className="text-3xl sm:text-5xl font-bold text-center flex mt-10">
          {dataDetail.nama}
        </h1>
        <h1 className="text-2xl sm:text-4xl font-bold mt-3 text-red-400">$ {dataDetail.harga}</h1>
       <div className='flex w-full flex-col items-start' >  
        <span className='mt-3  ' >
            <h1 className='font-semibold text-lg sm:text-2xl ' >Komposisi</h1>
            <p className="text-justify text-sm sm:text-lg text-gray-500 mt-1">{dataDetail.komposisi}</p>
          </span>
          <span className='mt-5' >
            <h1 className='font-semibold sm:text-2xl text-lg ' >Delivery Info</h1>
            <p className="text-justify text-sm sm:text-lg text-gray-500 mt-1">{dataDetail.detail}</p>
          </span>
       </div>
        <button
          className="absolute bottom-10 w-full py-3 bg-[#FA4A0C] px-5 font-semibold rounded-sm shadow-md hover:bg-green-500  focus:outline-none focus:ring focus:ring-green-400  focus:ring-opacity-75 text-white"
          onClick={handleTrolley}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default DetailCard;
