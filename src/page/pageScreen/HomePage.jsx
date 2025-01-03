import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { dataCategory } from '../../data/data';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { useCard } from '../../UseContextCardProduck';

const HomePage = () => {
  const {cart} = useCard()

  const [serch, setSerch] = useState('');
  const [selectCatagory, setSelectCatagory] = useState('All');


  const katagoriesMap = ['All', ...dataCategory.map((val) => val.judul)];

  const filteredData = dataCategory
    .filter((val) => selectCatagory === 'All' || val.judul === selectCatagory)
    .flatMap((val) =>
      val.items.filter((item) =>
        item.nama.toLowerCase().includes(serch.toLowerCase())
      )
    );

    // if(cart !== 0) return alert("card succes add to trolley")

  return (
    <div className='w-full p-5 h-[100dvh]'>
      <div className='flex relative w-full justify-between' >
          <button><AiOutlineAlignLeft/></button>
          <Link to={'/trolley'} className='w-5 h-5' ><img src="public/image copy.png" alt="" />
              <span className={`absolute -right-3 -top-2 w-5 h-5 text-xs flex items-center justify-center bg-red-500 text-white rounded-full ${cart.length === 0 && 'hidden'}`} >{cart.length}</span>
          </Link>
      </div>
      <h1 className='text-3xl flex pt-7 font-bold'>
        Delicious <br /> food for you 
      </h1>
      <div className='relative w-[90%] top-8 mx-auto'>
        <FiSearch className='absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400' size={20} />
        <input
          type='search'
          value={serch}
          placeholder='Search for food'
          onChange={(val) => setSerch(val.target.value)}
          className='w-full pl-10 pr-3 py-3 border rounded-lg outline-none'
        />
      </div>
      <div className='flex items-center gap-3 pb-3 no-scrollbar justify-between mt-14 transition-all duration-300 overflow-x-auto w-[90%] mx-auto'>
        {katagoriesMap.map((val, index) => (
          <button
            key={index}
            onClick={() => setSelectCatagory(val)}
            className={`border-b-2 px-4 py-2 border-gray-300 text-gray-500 hover:border-orange-500 hover:text-orange-500 ${
              selectCatagory === val ? 'border-orange-500 text-orange-500' : ''
            }`}
          >
            {val}
          </button>
        ))}
      </div>

      <div className='flex flex-wrap justify-center gap-10 mt-1 max-h-[470px] no-scrollbar overflow-y-auto'>
        {filteredData.map((val, index) => (
          <div
            className='bg-white mt-16 mb-2 rounded-md px-2 w-[150px] h-auto pb-3 shadow-[0_0_8px_rgba(0,0,0,0.2)] flex flex-col items-center justify-center'
            key={index}
          >
            <img src={val.gambar} className='rounded-t-full w-32 -mt-10 h-32' alt='' />
            <div className='text-xs mt-5 flex flex-col gap-3'>
              <h1 className='text-sm h-5 '>{val.nama}</h1>
              <p className='mt-3 h-5' >{val.deskripsi}</p>
              <Link to={`/detail/${val.nama}`} className='w-full mt-3 py-2 rounded-sm flex items-center justify-center text-white bg-orange-500'>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
