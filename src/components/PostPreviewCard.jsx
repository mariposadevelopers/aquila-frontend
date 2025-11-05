import React from 'react'
import { Pen, PenSquareIcon, Trash2Icon } from 'lucide-react'
import { Link } from 'react-router'
const PostPreviewCard = ({post}) => {
  return (
    <Link style={{cursor: "pointer"}} to={`/posts/${post._id}`}
        className='card bg-base-200 shadow-md hover:shadow-lg
         transition-all duration-300 ease-in-out
         border-t-4 border-solid border-[#FF9D00] m-3 h-40'
    >
        <div className='card-title card-body p-5 align-bottom flex flex-row w-full items-end '>
            <div className='card-title-wrapper w-80 p-1'>
                <h3 className='font-clash card-title text-base-content text-sm'>{post.title}</h3>
            </div>
        </div> 

    </Link>
  )
}

export default PostPreviewCard
