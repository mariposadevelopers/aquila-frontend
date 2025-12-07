import React from 'react'
import { BookOpen } from 'lucide-react'
const ResearchCard = ({researchName, researchUrl}) => {
  return (
    <a target='_blank' href={researchUrl}>
        <div style={{cursor: "pointer"}}
            className='card bg-base-200 shadow-md hover:shadow-lg
            transition-all duration-300 ease-in-out
            border-t-4 border-solid border-[#000000] m-3 h-40'
        >
            <div className='card-title card-body p-5 align-bottom flex flex-row w-full items-end '>
                <div className='card-title-wrapper w-80 p-1'>
                    <BookOpen className='text-[#000000]'/>
                    <h3 className='font-clash card-title text-base-content text-sm'>{researchName}</h3>
                </div>
            </div> 

        </div>
    </a>
  )
}

export default ResearchCard
