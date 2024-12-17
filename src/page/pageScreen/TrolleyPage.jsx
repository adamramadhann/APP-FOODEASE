import React from 'react';
import TrolleyCard from '../../component/TrolleyCard';
import { useCard } from '../../UseContextCardProduck';
import { AiOutlineLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const TrolleyPage = () => {
  const { cart } = useCard(); 


 
  console.log(cart); 

  
  const totalHarga = cart.reduce((total, item) => {
    const jumlah = item.quantity || 1; 
    return total + item.harga * jumlah; 
  }, 0);

  return (
    <div className=" h-[100dvh] p-3 -top-3 w-full relative ">
      <div className="flex gap-2 py-5 items-center">
        <Link className="flex gap-2 items-center" to={'/'}>
          <AiOutlineLeft size={25} />
          <h1>Back</h1>
        </Link>
      </div>
      
      <div className='px-3' >
       <TrolleyCard cart={cart} />
      </div>
      <button className='w-[95%] rounded-sm py-3 left-1/2 translate-x-[-50%] absolute bottom-0 text-white bg-green-500'>
        {`Total Price: $${totalHarga.toFixed(2)}`} 
      </button>
    </div>
  );
};

export default TrolleyPage;
