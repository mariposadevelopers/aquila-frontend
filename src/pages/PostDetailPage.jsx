import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import Navbar from '../shared/components/Navbar.jsx';
import { ArrowLeft, Trash, Pencil} from 'lucide-react';
import API_BASE_URL from '../config/apiConfig.js';
import CreateCommentForm from '../shared/components/form/CreateCommentForm.jsx';
import toast from 'react-hot-toast';
import Comment from '../features/comments/components/Comment.jsx';
import { useAuth } from '../shared/context/AuthContext.jsx';
const PostDetailPage = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [isEditing, setIsEditing] = useState(false); 
  const [postTitle, setPostTitle] = useState(''); 
  const [postContent, setPostContent] = useState(''); 
  const { id } = useParams();
  const {isAuthenticated} = useAuth(); 
  const handleReturnRequest = () => {
    navigate('/home');
  }

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/posts/${id}`);
      const fetchedPost = response.data; 
      setPost(fetchedPost);
      setPostTitle(fetchedPost.title);
      setPostContent(fetchedPost.content);
      
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  }

  const fetchComments = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/comments/post/${id}`)

      setComments(response.data.reverse());
    } catch (error) {
      console.error('Error fetching comments:', error)
    }
  }

  const handleDeleteRequest = async (commentId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/api/comments/${commentId}`)
      toast.success("Se borró el comentario");
      fetchComments();
    } catch (error) {
      console.error('Error fetching comments:', error)
    }
  }

  const handleEditToggle = () => {
    setIsEditing(prev => !prev);
  }

  const handleSavePostRequest = async () => {
    try {
      const updatedPostData = {
        title: postTitle,
        content: postContent,
      }; 

      await axios.put(`${API_BASE_URL}/api/posts/${id}`, updatedPostData, {withCredentials: true}); 

      setPost(prevPost => ({
        ...prevPost,
        title: postTitle,
        content: postContent,
      }));

      toast.success("Publicación actualizada correctamente");
      setIsEditing(false);

    } catch (error) {
      toast.error("Error al actualizar la publicación");
    }
  }

  const handleDeletePostRequest = async () => {
    try {
        const res = await axios.delete(`${API_BASE_URL}/api/posts/${id}`, {withCredentials: true}); 
        if (res){
          toast.success("Publicación eliminada correctamente");
          navigate("/home"); 
        }
    } catch(error) {
      toast.error("Error al eliminar la publicación. Intente de nuevo.");
    }
  }
  return (
    <div data-theme="light" className='min-h-screen bg-base-100' >
      <Navbar />

      <div className='post-content'>
        {post ? (

          <div className='mx-auto max-w-3xl p-10 rounded-xl mt-6 '>

            <ArrowLeft style={{ cursor: "pointer" }} onClick={handleReturnRequest} />
            {isAuthenticated && (
              isEditing ? (
                <div className='flex justify-end edit-actions'>
                  <button 
                    onClick={handleEditToggle}
                    className='mr-3 d-flex font-clash text-lg text-white bg-[#828282] w-1/8 px-4 rounded-xl'>
                      Cancelar
                  </button>
                  <button 
                    className='d-flex font-clash text-lg text-white bg-orange-500 w-1/8 px-4 py-1 rounded-xl'
                    onClick={handleSavePostRequest}  
                  >
                      Guardar cambios
                  </button>
                </div>

              ):(
                <div className='flex justify-end post-actions mt-4'>
                  <button 
                    className='hover:text-orange-500'
                    onClick={handleEditToggle}>
                      <Pencil className='mr-3  ' />
                  </button>
                  <button 
                    className='hover:text-orange-500'
                    onClick={handleDeletePostRequest}
                  >
                    
                    <Trash className='' />
                  </button>
                </div>                
              )
            )}

            {isEditing ? (
              <div className=''>
                <input 
                  className='post-title-edit 
                  mt-8 w-full 
                  font-clash 
                  text-4xl 
                  font-bold mb-4
                  text-orange-500
                  p-2
                  border-2 border-[#e5e4e485]
                  hover: cursor-text'
                  type="text" 
                  value={postTitle} 
                  onChange={(e) => setPostTitle(e.target.value)}
                />
                <textarea
                  className='post-content-edit
                    w-full 
                    font-clash 
                    prose 
                    p-2
                    border-2 border-[#e5e4e485]                    
                    max-w-none' 
                    type="text" 
                    value={postContent} 
                    onChange={(e) => setPostContent(e.target.value)}
                />
              </div>

            ) : (
              <div>
                <h1 className='font-clash text-4xl font-bold mb-4 mt-2 text-orange-500'>{post.title}</h1>
                <div className='font-clash prose max-w-none' dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            )}

            <div>
              <h6 className='text-2xl mt-5 pt-3 font-clash font-semibold text-black border-t border-t-[#79797988]'>Comentarios</h6>
              <div className='w-full pt-5'>
                <CreateCommentForm postId={post._id} onCommentAdded={fetchComments} />
              </div>
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <Comment key={comment.id} onDelete={handleDeleteRequest} comment={comment} />
                ))
              ) : (
                <p className="text-gray-500 mt-5">No hay nada por aquí. Sé el primero en dejar un comentario.</p>
              )}
            </div>
          </div>
        ) : (
          console.log("Loading...")
        )}
      </div>
    </div>
  )
}

export default PostDetailPage
