import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
import API_BASE_URL from '../../../config/apiConfig';
import { useAuth } from '../../context/AuthContext';


const CreateCommentForm = ({postId, onCommentAdded}) => {

    const [content, setContent] = useState(''); 
    const {user} = useAuth(); 
    const [unidentifiedUsername, setUnidentifiedUsername] = useState(''); 
const handleSubmit = async(e) => {
        e.preventDefault(); 
        
        if (!content.trim()) {
            toast.error("El comentario no puede estar vacío.");
            return;
        }

        if (!user && !unidentifiedUsername.trim()) {
            toast.error("Por favor, ingresa tu nombre para comentar.");
            return;
        }

        const commentData = {
            content, 
            post: postId,
        };
        
        if (user) {
            commentData.user = user.id;
        } else {
            commentData.unidentifiedUsername = unidentifiedUsername;
        }


        try {
            await axios.post(
                `${API_BASE_URL}/api/comments`,
                commentData, 
                {withCredentials: true}
            ); 
            toast.success("Se creó el comentario.");
            
            setContent('');
            setUnidentifiedUsername(''); 

            if(onCommentAdded){
                onCommentAdded(); 
            }            
        } catch (error) {
            console.error("Error creating comment:", error);
            const errorMessage = error.response?.data?.error || "Error al crear el comentario. Inténtalo de nuevo.";
            toast.error(errorMessage);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="bg-[#b0b0b024] rounded-xl p-5 h-36 w-full mb-3 "
                        placeholder='Escribe un comentario...'
                    />      
                    {!user && (
                        <input
                            value={unidentifiedUsername}
                            onChange={(e) => setUnidentifiedUsername(e.target.value)}
                            className='bg-[#b0b0b024] rounded-xl p-5 h-10 w-full mb-3'
                            placeholder='¿Cuál es tu nombre?'
                            type="text"  />  
                    )}
        
                </div>
                <div className="flex justify-start mt-1">
                <button
                    type='submit'
                    className="d-flex font-clash text-lg text-white bg-orange-500 w-full p-2 rounded-xl"
                >
                    Publicar comentario
                </button>
                </div>                
            </form>
        </div>
    )
}

export default CreateCommentForm
