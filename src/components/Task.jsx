import React from 'react'
import check_mark from '../assets/check_mark.png'
import uncheck_mark from '../assets/uncheck_mark.png'
import delete_icon from '../assets/deleteicon.png'

function Task(props) {
  return (
    <div  className="listItem flex justify-between w-full items-center px-2 py-1 ">
        <div onClick={()=>(props.toggleFunction(props.id))} className='flex items-center cursor-pointer'>
            <img 
              src={props.completed ? check_mark : uncheck_mark} 
              className='w-5 cursor-pointer'  
            />
            <p className={`ml-4 text-[17px] ${props.completed ? 'line-through text-gray-500' : ''}`}>
                {props.text}
            </p>
        </div>
        <div>
            <img src={delete_icon} onClick={() => props.deleteFunction(props.id)} className='h-5 cursor-pointer' alt="" />
        </div>
    </div>
  )
}

export default Task
