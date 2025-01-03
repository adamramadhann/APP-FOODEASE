import React, { useState } from 'react';
import TrolleyCard from '../../component/TrolleyCard';
import { useCard } from '../../UseContextCardProduck';
import { AiOutlineLeft } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const TrolleyPage = () => {
  const { cart } = useCard(); 
  const [select, setSelect] = useState([])
  const navigate = useNavigate()


  const handleNavigaetPayment = () => {
    if (select.length === 0) {
       alert('makanan belum ada yang di pilih, silahkan pilih makanan terebih dahulu !!')
    } else {
      navigate('/payment')
    }
  }

  const checkouuth = (value) => {
    setSelect((prev) => {
      if(prev.includes(value)) { 
        return prev.filter((nama) => nama !== value)
      } else  {
        return [...prev, value]
      }
    })
  }
  
 const totalHarga = cart
 .filter((val) => select.includes(val.nama))
 .reduce((total, items) => {
  const jumlah = items.quantity || 1
  return total + items.harga * jumlah
 }, 0)

 console.log(select);
 

  return (
    <div className=" h-[100dvh] p-3 -top-3 w-full relative ">
      <div className="flex gap-2 py-5 items-center">
        <Link className="flex gap-2 items-center" to={'/'}>
          <AiOutlineLeft size={25} />
          <h1>Back</h1>
        </Link>
      </div>
      <div className='px-3' >
      <h2 className="text-xl font-bold mb-3">Checkout</h2>
        <TrolleyCard onChange={checkouuth} checked={(nama) => select.includes(nama)} cart={cart} />
      </div>
      <div className='w-[95%] rounded-sm py-3 text-center mt-3 ' >
          <span className='text-lg flex w-full justify-between px-5'  >
            <h1 >Total Price: </h1>
            ${totalHarga.toFixed(2)}
          </span>
      </div>
        <button onClick={handleNavigaetPayment} className='w-[95%] rounded-lg py-3 left-1/2 translate-x-[-50%] absolute bottom-0 text-white bg-[#FA4A0C]'>
            Complate Order
        </button>
    </div>
  );
};

export default TrolleyPage;
