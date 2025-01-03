import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Auth_page/Home'
import AuthPage from './Auth_page/AuthPage'
import Layout from './Layout'
import DetailCard from './page/details/DetailCard'
import LovePage from './page/pageScreen/LovePage'
import HistoryPage from './page/pageScreen/HistoryPage'
import UserPage from './page/pageScreen/UserPage'
import HomePage from './page/pageScreen/HomePage'
import TrolleyCard from './component/TrolleyCard'
import TrolleyPage from './page/pageScreen/TrolleyPage'
import PaymentPage from './page/pageScreen/PaymentPage'

const App = () => {

  const [isLogin, setIsLogin] = useState(true)

  if(!isLogin) {
    return (
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/auth' element={<AuthPage/>} />
      </Routes>
    )
  }

  return (
    <Routes>
        <Route path='/' element={<Layout/>} >
            <Route index element={<HomePage/>} />
            <Route path='/lovePage' element={<LovePage/>} />
            <Route path='/userPage' element={<UserPage/>} />
            <Route path='/historyPage' element={<HistoryPage/>} />
            <Route path='/trolley' element={<TrolleyPage/>} />
            <Route path='/payment' element={<PaymentPage/>} />
            <Route path='/detail/:id' element={<DetailCard/>} />
        </Route>
    </Routes>
  )
}

export default App