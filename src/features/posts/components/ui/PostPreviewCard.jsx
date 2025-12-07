import React from 'react'
import { Pen, PenSquareIcon, Trash2Icon } from 'lucide-react'
import { Link } from 'react-router'
const PostPreviewCard = ({post}) => {

  const date = new Date(post.createdAt); 

  const dateOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }; 

  const formattedDate = date.toLocaleDateString('es-ES', dateOptions); 
  return (
    <Link style={{cursor: "pointer"}} to={`/posts/${post._id}`}
        className='card bg-base-200 shadow-md hover:shadow-lg
         transition-all duration-300 ease-in-out
         border-t-4 border-solid border-[#FF9D00] h-40 w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)]'
    >
        <div className='card-title card-body p-5 align-bottom flex flex-row w-full items-end '>
            <div className='card-title-wrapper p-1'>
                <h3 className='font-clash card-title text-base-content text-sm'>{post.title}</h3>
                <h4 className='font-clash font-light text-sm'>
                  {formattedDate}
                </h4>
            </div>
        </div>

    </Link>
  )
}

export default PostPreviewCard
