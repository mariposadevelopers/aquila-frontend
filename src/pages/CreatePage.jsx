import React from 'react'
import Navbar from '../shared/components/Navbar.jsx'
import CreatePostForm from '../features/posts/components/form/CreatePostForm.jsx'

const CreatePage = () => {


  return (
    <div data-theme="light" className='min-h-screen bg-base-100' >
        <Navbar showCreatePostButton={false}/>
        <div className='font-clash create-post-title  max-w-6xl p-10 '>
            <h2 className='text-3xl font-semibold'>
               Crear nueva <span className='text-orange-500'> publicación. </span>
            </h2>
        </div>
        <CreatePostForm/>
    </div>
  )
}

export default CreatePage
