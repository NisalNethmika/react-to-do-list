import React from 'react'
import check_mark from '../assets/check_mark.png'
import uncheck_mark from '../assets/uncheck_mark.png'
import delete_icon from '../assets/deleteicon.png'

function Task(props) {
  return (
    <div className="listItem flex justify-between w-full items-center px-2 py-1">
        <div className='flex items-center'>
            <img src={uncheck_mark} className='w-5 cursor-pointer' alt="" />
            <p className='ml-4 text-[17px]'>
                {props.text}
            </p>
        </div>
        <div>
            <img src={delete_icon} className='h-5 cursor-pointer' alt="" />
        </div>
    </div>
  )
}

export default Task
