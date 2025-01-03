  import React, { useEffect, useRef, useState } from 'react'
  import { FaCopy } from 'react-icons/fa'
  import { useNavigate } from 'react-router-dom'

  const ModalPayment = ({style, kartu, NoCard, click, harga, closeModal}) => {
    // const [ copy, setCopy ] = useState(false)
    // const handleCopy = (value) => {
    //   const textCopy = document.getElementById('copy_text').value

    //   navigator.clipboard.writeText(textCopy)
    //   .then(() => {
    //     setCopy(true)
    //     setTimeout(() => setCopy(false), 1000)
    //   }) 
    //   .catch((error) => {
    //     console.error(error)
    //     setCopy(false)
    //   })
    // }

    const inputRef = useRef(null)
    // const [closeModal, setCloseModal] = useState(false)
    const [time, setTime] = useState(1 * 10)
    const minutes = Math.floor(time / 60)
    const second = time % 60
    const formatTime = `${String(minutes).padStart(2, '0')}:${String(second).padStart(2, '0')}`
    const navigate = useNavigate()


    const handleCopy = () => {
      const inputValue = inputRef.current.value

      navigator.clipboard.writeText(inputValue)
      .then(() => {
        inputValue !== null && alert('copy succes')
      })
    }

    useEffect(() => {
      const timer = setInterval(() => {
        setTime((prev) => {
          if(prev < 0) {
            clearInterval(timer)
            closeModal()
            // alert('No Virtual Account akan hangus dalam 10 menit, terima kasih ')
            return 0
          } else {
            return prev - 1
          }
        })
      }, 1000)

      return () => clearInterval(timer)
    }, [])

    return (
      <div className={` w-full h-full  absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center  bg-black/20 ${style}`} >
          <div className='bg-white bg-gradient-to-tr from-green-500 to-green-200  relative h-[400px] px-5 w-[95%] rounded-md ' >  
              <button onClick={click} className='absolute top-3 text-lg font-bold right-3 text-red-400' >X</button> 
              <div className='grid gap-32' >
              <div className='w-full  h-[60px]' >
                <h1 className='text-center text-xl py-5 mt-3 font-bold' >Payment</h1>
              <h1 className='mb-1 text-lg font-semibold text-gray-600 ' >Metode </h1>
              <div className='w-full bg-white py-3 text-gray-500 flex items-center justify-center border-2 rounded-lg' >
                  <h1>{` ${kartu}`} </h1>
              </div>
              </div>
              <div className='w-full h-auto' >
              <h1 className='mb-1 text-lg font-semibold text-gray-600 ' >Virtual Account </h1>
              <div className='w-full bg-white  relative text-center py-3 border-2 rounded-lg' >
                  <input type="text" className=' w-auto text-gray-500 text-center' ref={inputRef} value={NoCard} readOnly id='copy_text' />
                  <FaCopy className='cursor-pointer absolute top-2 text-gray-500 right-3'  onClick={handleCopy} />
              </div>
              <div className='justify-end text-sm flex gap-2 items-center mt-3'  >
                <h1>Total Price :</h1>
                <h1 >${harga}</h1>
              </div>
              <button disabled className='py-4 text-lg mt-10 rounded-md text-red-500 w-full' >modal akan tertutup dalam {formatTime}</button>
              </div>
              </div>
          </div>  
      </div>
    )
  }

  export default ModalPayment