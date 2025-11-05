import React from 'react'
import { Youtube } from 'lucide-react'
const ChannelCard = ({channelName, channelUrl}) => {
  return (
    <a href={channelUrl}>
        <div style={{cursor: "pointer"}}
            className='card bg-base-200 shadow-md hover:shadow-lg
            transition-all duration-300 ease-in-out
            border-t-4 border-solid border-[#ff0000] m-3 h-40'
        >
            <div className='card-title card-body p-5 align-bottom flex flex-row w-full items-end '>
                <div className='card-title-wrapper w-80 p-1'>
                    <Youtube className='text-red-500'/>
                    <h3 className='font-clash card-title text-base-content text-sm'>{channelName}</h3>
                </div>
            </div> 

        </div>
    </a>
  )
}

export default ChannelCard
