import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { dataCategory } from '../../data/data';
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineLeft } from 'react-icons/ai';
import { useCard } from '../../UseContextCardProduck';
import Notification from '../../component/Notification';

const DetailCard = () => {
  const { id } = useParams();
  const { addToCard } = useCard();
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = React.useState(false);

  const dataDetail = dataCategory
    .flatMap((val) => val.items)
    .find((val) => val.nama === id);

  if (!dataDetail) {
    return (
      <div className="w-screen h-screen bg-black/20 flex items-center justify-center">
        <h1 className="text-xl text-white">Data IS Not Found</h1>
      </div>
    );
  }

  const handleTrolley = () => {
    addToCard(dataDetail);
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
      navigate(-1);
    }, 100);
  };

  return (
    <div className="w-screen relative h-[100dvh] p-5">
      <div className="flex w-full justify-between items-center">
        <Link to={'/'}>
          <AiOutlineLeft size={25} />
        </Link>
        <button>
          <FaRegHeart size={25} />
        </button>
      </div>
      <div className="w-full flex items-center justify-center flex-col">
        <img
          src={dataDetail.gambar}
          alt={dataDetail.nama}
          className="w-[250px] h-[250px] rounded-full"
        />
        <h1 className="text-3xl font-bold text-center flex mt-10">
          {dataDetail.nama}
        </h1>
        <h1 className="text-2xl font-bold mt-3 text-red-400">$ {dataDetail.harga}</h1>
        <p className="text-justify mt-5">{dataDetail.komposisi}</p>
        <p className="text-justify mt-5">{dataDetail.detail}</p>
        <button
          className="absolute bottom-5 w-[90%] py-3 bg-[#FA4A0C] px-5 font-semibold rounded-sm shadow-md hover:bg-green-500  focus:outline-none focus:ring focus:ring-green-400  focus:ring-opacity-75 text-white"
          onClick={handleTrolley}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default DetailCard;
