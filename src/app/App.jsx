import React from 'react'
import { Routes, Route } from 'react-router'
import LoginPage from '../pages/LoginPage.jsx'
import HomePage from '../pages/HomePage.jsx'
import PostDetailPage from '../pages/PostDetailPage.jsx'
import CreatePage from '../pages/CreatePage.jsx'
import { BrowserRouter } from 'react-router'
import ProtectedRoute from '../shared/components/ProtectedRoute.jsx'
import PostsList from '../features/posts/pages/PostsListPage.jsx'
import PostsListPage from '../features/posts/pages/PostsListPage.jsx'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route
          path='/create' 
          element={<ProtectedRoute><CreatePage/></ProtectedRoute>} />
        <Route path='/posts/:id' element={<PostDetailPage/>} />
        <Route path='/posts' element={<PostsListPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
