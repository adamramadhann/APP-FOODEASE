import React from 'react';
import { useCard } from '../UseContextCardProduck';

const TrolleyCard = ({ cart }) => {

  const {handleKurang, handleTambah} = useCard()

  return (
    <div className="p-3 bg-gray-100 h-[570px] no-scrollbar overflow-y-auto rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-3">Trolley</h2>
      {cart.length > 0 ? (
        cart.map((item, index) => {
          const quantity = item.quantity || 1; // Default ke 1 jika quantity tidak ada
          const totalItem = (item.harga * quantity).toFixed(2); // Total harga per item

          return (
            <div
              key={index}
              className="flex gap-3 items-center bg-white p-3 mb-2 rounded-lg shadow-sm"
            >
              <img src={item.gambar} alt={item.nama} className="w-16 h-16 rounded-full" />
             <div  className='flex w-full justify-between'>  
                <div className="flex flex-col ml-3">
                    <span className="font-semibold text-sm">{item.nama}</span>
                    <span className="text-xs py-2 text-gray-500">Qty: {quantity}</span>
                    <p className='text-xs' >Total Item: ${totalItem}</p>
                </div>
                <div className='flex flex-col text-lg justify-between' >
                    <button onClick={() => handleTambah(item.nama)} className='w-5 h-5 bg-slate-100' >+</button>
                    <button onClick={() => handleKurang(item.nama)} className='w-5 h-5 bg-slate-100' >-</button>
                </div>
             </div>
            </div>
          );
        })
      ) : (
        <p className="text-gray-500 text-center">Keranjang kosong</p>
      )}
    </div>
  );
};

export default TrolleyCard;
