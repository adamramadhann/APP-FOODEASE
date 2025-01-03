import React from 'react';
import { useCard } from '../UseContextCardProduck';

const TrolleyCard = ({ cart, checked, onChange }) => {

  const {handleKurang, handleTambah} = useCard()



  return (
    <div className="p-3 bg-gray-100 h-auto py-3 no-scrollbar overflow-y-auto rounded-lg shadow-md">
      {cart.length > 0 ? (
        cart.map((item, index) => {
          const quantity = item.quantity || 1; 
          const totalItem = (item.harga * quantity).toFixed(2); 

          return (
            <div
              key={index}
              onClick={() => onChange(item.nama)} 
              className="flex gap-3 cursor-pointer relative w-full h-auto items-center bg-white p-3 mb-2 rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.2)]"
            >
              <input 
                onChange={() => onChange(item.nama)}
                onClick={(e) => e.stopPropagation()} 
                checked={checked(item.nama)} type="checkbox"  
                className='sm:h-5 sm:mr-5 sm:w-5 ' 
              />
            <div className='flex' > 
            <img src={item.gambar} alt={item.nama} className="w-16 h-16 sm:w-28 sm:h-28 rounded-full" />
             <div  className='flex w-full justify-between'>  
                <div className="flex flex-col ml-3">
                    <span className="font-semibold text-sm">{item.nama}</span>
                    <span className="text-xs py-2 text-gray-500">Qty: {quantity}</span>
                    <div className='flex w-full justify-between items-center' >
                    <p className='text-xs' >Total Item: ${totalItem}</p>
                    </div>
                    <div className='flex w-[50px] absolute right-3 text-white bottom-1 text-lg justify-between' >
                    <button onClick={(e) => { e.stopPropagation(); handleTambah(item.nama)}} className=' text-center text-xs p-1 px-2 rounded-md bg-gray-400' >+</button>
                    <button onClick={(e) =>{e.stopPropagation();  handleKurang(item.nama)}} className='text-xs p-1 px-2 rounded-md bg-gray-400' >-</button>
                    </div>
                </div>
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
