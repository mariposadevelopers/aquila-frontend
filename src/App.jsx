import React from 'react'
import { Routes, Route } from 'react-router'
import LoginPage from './pages/LoginPage.jsx'
import HomePage from './pages/HomePage.jsx'
import PostPage from './pages/PostPage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './context/AuthContext.jsx'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/posts/:id' element={<PostPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
