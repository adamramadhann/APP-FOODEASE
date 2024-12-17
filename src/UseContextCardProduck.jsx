import React, { createContext, useContext, useState } from 'react'


const cardContext = createContext()
export const useCard = () => useContext(cardContext)


const UseContextCardProduck = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCard = (item) => {
        setCart((cardValue) => {
            const existingCard = cardValue.find((cartItem) => cartItem.nama === item.nama)
            if(existingCard) {
                return cardValue.map((val) => { 
                   return val.nama === item.nama 
                    ? {...val, quantity : val.quantity + 1}
                    : val
                })
            }

            return [...cardValue, {...item, quantity : 1}]
        })
    }


    const handleTambah = (value) => {
        setCart((prev) => 
            prev.map((val) => 
              val.nama === value
              ? {...val, quantity : val.quantity + 1}
              : val
            )
        )
    }

    const handleKurang = (value) => {
        setCart((prev) => 
            prev
                .map((items) => 
                    items.nama === value
                        ? {...items, quantity : items.quantity - 1}
                        : items
                )
                .filter((val) => val.quantity > 0)
        )
    }

  return (
    <cardContext.Provider value={{cart, addToCard, handleTambah, handleKurang}} >
        {children}
    </cardContext.Provider>
  )
}

export default UseContextCardProduck