import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Auth_page/Home'
import AuthPage from './Auth_page/AuthPage'
import Layout from './Layout'
import HomePage from './page/HomePage'

const App = () => {

  const [isLogin, setIsLogin] = useState(false)

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
        </Route>
    </Routes>
  )
}

export default App