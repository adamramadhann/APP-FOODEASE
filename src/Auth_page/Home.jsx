import React from 'react';
import manHome from '/ToyFaces_Tansparent_BG_29.png';
import womanHome from '/ToyFaces_Tansparent_BG_49-removebg-preview.png';
import topiCef from '/Group 3.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-screen h-[100dvh] relative bg-[#FF4B3A]">
      <div className='w-full justify-center flex gap-5 flex-col' >
          <div className='w-[50px] h-[50px] ml-10 mt-7 flex items-center justify-center bg-white rounded-full' > 
              <img src={topiCef} alt="" />
          </div>
          <h1 className='text-5xl text-center font-extrabold text-white ' >
            Food for <br />
            Everyone
          </h1>
      </div>
      {/* Gambar pria */}
      <img
        className="absolute z-10 w-[210px] h-[250px] bottom-[105px] right-0"
        src={manHome}
        alt="Man"
      />
      {/* Gambar wanita */}
      <img
        className="absolute w-[250px] h-[360px]  z-10 bottom-[90px]"
        src={womanHome}
        alt="Woman"
      />
      {/* Efek blur halus di atas footer */}
      <div className="absolute bottom-[90px] z-50 w-full h-[120px] bg-gradient-to-t from-[#FF4B3A] via-[#FF4B3A]/90 "></div>
      {/* Footer */}
      <div className="h-[120px] flex items-center justify-center absolute bottom-0 z-50 w-full ">
        <Link to={'/auth'} className="bg-white text-lg font-bold flex items-center justify-center text-[#FF460A] bottom-14 w-[90%] py-4 rounded-lg shadow-lg shadow-[#FF460A]">
          Get Started
        </Link>  
      </div>
    </div>
  );
};

export default Home;
