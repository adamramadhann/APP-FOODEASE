import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LovePage = () => {
  const [localCartheart, setLocalHeartCard] = useState([]);
  const [serch, setSerch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  
  const handleSerch = localCartheart.filter((val) =>
    val.nama.toLowerCase().includes(serch.toLowerCase())
  );

  
  const handleRemoveItem = (nama) => {
    const updatedCart = localCartheart.filter((item) => item.nama !== nama); 
    setLocalHeartCard(updatedCart); 
    localStorage.setItem('localCartheart', JSON.stringify(updatedCart))
  };

  useEffect(() => {
    try {
      const saveLocalStorageCard = localStorage.getItem('localCartheart');
      if (saveLocalStorageCard) {
        setLocalHeartCard(JSON.parse(saveLocalStorageCard));
      }
      console.log('useEffect ke render try')
    } catch (error) {
      console.error('Error parsing localStorage data:', error);
      localStorage.removeItem('localCartheart');
      setLocalHeartCard([]);
      console.log('useEffect ke render catch')
    } finally {
      console.log('useEffect ke render di finally')
      setIsLoading(false)
    }

    console.log('useEffect ke render')
  }, []);

  return (
    <div className="w-full p-5 h-[100dvh] bg-gradient-to-b from-green-100 to-white">
      {isLoading ? (
        <div className="flex items-center justify-center h-full w-full">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {/* Input pencarian */}
          <input
            type="search"
            className="w-full mt-10 py-2 border-gray-400 rounded-sm border pl-3 outline-none mb-10"
            onChange={(e) => setSerch(e.target.value)}
            placeholder="Search Produk you Like"
          />
          <h1 className="text-lg font-bold mb-2">Produk You Like</h1>

          {/* Daftar produk */}
          <div className="h-[580px] relative  overflow-y-auto items-center gap-5 no-scrollbar overflow-auto">
            <div className={`w-full grid sm:flex sm:flex-wrap gap-5 grid-cols-2`}>
              {handleSerch.length > 0 ? (
                handleSerch.map((val, index) => (
                  <div key={index} className={` mt-16 max-w-[165px]  mb-20 relative ${index % 2 ? 'translate-y-10' : '-translate-y-10'} `}>
                          <button className='px-1 rounded-sm z-50 bg-red-500 text-white absolute right-1 ' onClick={() => handleRemoveItem(val.nama)} >
                          Remove
                      </button>
                    <Link className="mb-20" to={`/detail/${val.nama}`}>
                      <div
                        className={`w-[165px] top-[60px] hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg cursor-pointer bg-gradient-to-br to-green-600 from-green-300 mb-3 relative rounded-[15px] shadow-md h-[180px] flex items-center justify-center `}
                      >
                        {/* Gambar */}
                        <img
                          src={val.gambar}
                          className="w-[90%] absolute top-[-60px] left-1/2 transform h-[150px] -translate-x-1/2 rounded-full border-4 border-white"
                          alt=""
                        />

                        {/* Konten tambahan */}
                        <div className="absolute bottom-5">
                          <h3 className="text-lg text-white font-semibold">
                            $ {val.harga}
                          </h3>
                          <h3 className="text-xs text-white font-semibold">
                            {val.nama}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="w-full absolute h-full flex justify-center items-center flex-col">
                  <img src="public/feather_search.png" alt="" />
                  <p className="mt-5 text-xl font-bold">No like items yet!</p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LovePage;
