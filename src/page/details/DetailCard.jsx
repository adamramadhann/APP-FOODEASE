import React from 'react'
import { useParams } from 'react-router-dom'
import { dataCategory } from '../../data/data'

const DetailCard = () => {

  const { id } = useParams()

  const dataDetail = dataCategory
  .flatMap((val) => val.items)
  .find((val) => val.nama === id)

  if(!dataDetail) {
    return (
      <div className='w-screen h-screen bg-black/20 flex items-center justify-center' >
          <h1 className='text-xl text-white' >Data IS Not Fount</h1>
      </div>
    )
  }


  return (
    <div>
      
    </div>
  )
}

export default DetailCard