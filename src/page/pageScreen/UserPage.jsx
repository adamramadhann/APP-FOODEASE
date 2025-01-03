import { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const UserPage = () => {

  const [openModal, setOpenModal] = useState(false)
  const [image, setImage] = useState('')
  const [userData, setUserData] = useState({
    name: "Adam Ramadhan",
    email: "ramadhan@gmal.com",
    phone: "+62 85774798097",
    address: "No 15 uti street off ovie palace road effurun delta state",
  });


  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImage(base64String);
        localStorage.setItem("profile", base64String); 
      };
      reader.readAsDataURL(file);
    }
  };

  // Ambil data dari Local Storage saat halaman dimuat
useEffect(() => {
  const dataLocalUser = localStorage.getItem("dataUser");
  const dataLocalProfile = localStorage.getItem("profile");

  if (dataLocalUser) {
    setUserData(JSON.parse(dataLocalUser)); // Parsing JSON dan set ke state
    console.log('data user berhasil di save', dataLocalUser);
    
  }


  if (dataLocalProfile) {
    setImage(dataLocalProfile); // Set gambar dari Local Storage
    console.log("Saved image from Local Storage:", dataLocalProfile);
  }
}, []);

// Simpan data ke Local Storage setiap kali ada perubahan pada userData
useEffect(() => {
  localStorage.setItem("dataUser", JSON.stringify(userData));
}, [userData]);

  


  return (
    <div className="w-full relative bg-gradient-to-b from-green-300 to-green-50 h-[100dvh] overflow-hidden  px-5 pt-8">
      <span  >
          <Link to={'/'} className="flex items-center gap-3 mb-5" >
            <AiOutlineLeft/>
            back To Home
          </Link>
      </span>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Profile</h1>
      <div className="sm:justify-center flex w-full" >
      <div className="flex flex-col pb-10 items-center sm:max-w-[800px] bg-white rounded-lg shadow-md p-6">
        {/* Personal Details */}
        <span className="w-full flex justify-between items-center mb-6">
          <h1 className="text-lg font-semibold text-gray-700">Personal Details</h1>
          <button onClick={() => setOpenModal(true)} className="text-sm text-blue-600 hover:underline">Change</button>
        </span>

        {/* Profile Section */}
        <div className="flex gap-6 items-center">
          <div className="w-[150px]" >
          <img
            src={image || "public/image copy 5.png"}
            className="w-28 h-24 rounded-full cursor-pointer  object-cover shadow-md"
            alt="Profile"
            onClick={() => document.getElementById('fileImg').click()}
          />
          <input id="fileImg" type="file" style={{display:"none"}} accept="image/*" onChange={handleImage} />
          </div>
          <span className="flex flex-col gap-2">
            <h1 className="text-xl font-medium text-gray-800">{userData.name}</h1>
            <p className="text-sm text-gray-500">{userData.email}</p>
            <p className="text-sm text-gray-500 py-1 border-y border-gray-200">{userData.phone}</p>
            <p className="text-sm text-gray-500">
              {userData.address}
            </p>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="w-full mt-8 space-y-4">
          <Link to={'/trolley'} >
            <button className="flex w-full justify-between items-center px-4 py-4 text-gray-700 bg-gray-100 rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.2)] hover:bg-gray-200 transition">
                Checkouth <AiOutlineRight />
            </button>
          </Link>
          <button className="flex w-full text-white justify-between items-center px-4 py-4 bg-red-500 rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.2)] hover:bg-gray-200 transition">
            Log Out <AiOutlineRight />
          </button>
        </div>
      </div>
      </div>
        <div className={`w-screen h-full flex items-center justify-center left-1/2 translate-x-[-50%] absolute top-0 bg-black/50 transition-all ${openModal ? 'opacity-100 translate-y-0 duration-500 pointer-events-auto ' : 'opacity-0 pointer-events-none  translate-y-10 duration-500'}`} >
            <button className="absolute right-4 text-3xl text-red-500 font-bold top-3" onClick={() => setOpenModal(false)} >X</button>
          <div className="w-[90%] h-auto p-3 py-5 rounded-sm bg-white  " >
            <h1 className="text-center mb-5 text-xl font-bold" >Form Edit</h1>
            <form className="flex flex-col" >
                <label className="flex flex-col" htmlFor="name">
                  Name
                  <input value={userData.name} onChange={(e) => setUserData({...userData, name : e.target.value})} className="border py-1 rounded-sm outline-none" type="text" id="name" placeholder=" edit nama " />
                </label>
                <label className="flex flex-col my-4 " htmlFor="email">
                  Email
                  <input value={userData.email} onChange={(e) => setUserData({...userData, email : e.target.value})} className="border py-1 rounded-sm outline-none" type="text" id="email" placeholder=" edit email " />
                </label>
                <label className="flex flex-col mb-4" htmlFor="phone">
                  Phone
                  <input value={userData.phone} onChange={(e) => setUserData({...userData, phone : e.target.value})} className="border py-1 rounded-sm outline-none" type="text" id="phone" placeholder=" edit phone " />
                </label>
                <label className="flex flex-col" htmlFor="address">
                  Address
                  <textarea value={userData.address} onChange={(e) => setUserData({...userData, address : e.target.value})} className="h-20 border outline-none " type="text" id="address" placeholder=" edit address " />
                </label>
                <button onClick={(e) => { e.preventDefault() ; setOpenModal(false) }} className='w-full mt-5 py-2 bottom-2 rounded-sm bg-[#FA4A0C] text-white ' >Update</button>
            </form>
          </div>
        </div>
    </div>
  );
};

export default UserPage;



