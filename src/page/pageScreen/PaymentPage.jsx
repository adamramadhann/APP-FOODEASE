import React, { useState } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { BiLogoPaypal } from 'react-icons/bi'
import { BsBank2 } from 'react-icons/bs'
import { CiCreditCard1 } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import ModalPayment from '../../component/ModalPayment'
import { useCard } from '../../UseContextCardProduck'

const PaymentPage = () => {

    const {cart} = useCard()
    
    const [cehckBoxAct, setCheckBoxAct] = useState(null)
    const [openModal, setOpenModal] = useState(false)

    const dataPayment = [
        {
            noAtm : '123-456-789-012',
            title : 'Card',
            icon :<CiCreditCard1  size={25} />
        },
        {
            noAtm : '0987-6543-210',
            title : 'Bank Account',
            icon :<BsBank2 size={25}  />
        },
        {
            noAtm : '',
            title : 'Paypal',
            icon : <BiLogoPaypal size={25} />
        },
    ]

    console.log(cart)

    const handleChackbox = (value) => {
        setCheckBoxAct(value)
    }

    const handleOnOfModal = () => {
        setOpenModal((val) => !val)
    }

  return (
    <div className='w-full relative h-[100dvh]  flex p-5 flex-col' >
        <span className='flex items-center text-lg w-full relative' >
            <Link to={-1} ><AiOutlineLeft/></Link>
            <h1 className='absolute translate-x-[-50%] left-1/2 ' >Checkout</h1>
        </span>

        <div className='grid gap-5 my-10' >
                <h1 className='text-xl font-bold' >Information</h1>
                <div className='flex w-full gap-5 justify-between items-center' >
                        <div className='' >
                                <img className='w-28 h-28' src="public/image copy 5.png" alt="" />
                        </div>
                        <div className='flex flex-col gap-1' >
                                <h1 className='text-[15px] font-bold ' > Adam Raamadhan</h1>
                                <p className=' text-[#2e2d2d] text-sm' >adamramdhan@gmail.com</p>
                                <p className=' text-[#2e2d2d] text-sm' >No 15 jln.sawah V kp.pitara kota depok</p>
                        </div>
                </div>
        </div>
        <h1 className={`text-xl font-bold ${cart.length === 0 && 'hidden'}`} >the goods you buy</h1>
        {
            cart.map((val, index) => (
                <div className='flex  mt-2 text-xs text-gray-500 justify-between' >
                    <span className='flex items-center gap-3' >
                        <h1>{index + 1}</h1>
                        <h1 className='' >{val.nama} ({val.quantity}) </h1>
                    </span>
                    <h1 className='' >${val.harga}</h1>
                </div>
            ))
        }
        <div className='grid m gap-5' >
            <h1 className='mt-10 ext-xl font-bold' >Payment Method</h1>
            <div className='flex flex-col w-full h-auto py-5 bg-white rounded-xl shadow-[0_0_12px_rgba(0,0,0,0.1)] px-5 gap-5' >
                {
                    dataPayment.map((e) => (
                        <span className={`flex items-center gap-5 ${e.title !== 'Paypal' && 'border-b pb-5 ' }`} >
                            <input  checked={cehckBoxAct === e.title} eue={e.title} onChange={() => handleChackbox(e.title)} type="radio" className='w-5 h-5 ' />
                            <span className={`w-10 text-white h-10 flex items-center rounded-md justify-center bg-[#F47B0A] p-2 `}   >
                                {e.icon}
                           </span>
                            <h3 className='text-lg' >{e.title}</h3>
                            {
                                e.noAtm && cehckBoxAct && openModal && cart &&  (
                                    cart.map((prev) => (
                                        <ModalPayment 
                                            click={handleOnOfModal} 
                                            NoCard={e.noAtm} kartu={cehckBoxAct} 
                                            style={openModal ? 'block' : 'hidden'} 
                                            harga={prev .harga}
                                            closeModal={setOpenModal}
                                        />
                                    ))
                                )
                            }
                        </span>
                    ))
                }
            </div>
        </div>
        <button onClick={() => setOpenModal(true)} className='absolute bottom-2 text-white rounded-lg py-3 left-1/2 translate-x-[-50%]  bg-[#F47B0A] w-[90%]' >Buyy</button>
    </div>
  )
}

export default PaymentPage 