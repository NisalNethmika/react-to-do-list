import React from 'react'
import check_mark from '../assets/check_mark.png'
import uncheck_mark from '../assets/uncheck_mark.png'
import delete_icon from '../assets/deleteicon.png'

function TaskList() {
  return (
    <div className="mainlist">
      <div className='bg-gray-200 flex flex-col gap-2 my-3 px-2 py-1'>
        <div className="listItem flex justify-between w-full items-center px-2 py-1">
            <div className='flex items-center'>
                <img src={uncheck_mark} className='w-5 cursor-pointer' alt="" />
                <p className='ml-4 text-[17px]'>Task 1</p>
            </div>
            <div>
                <img src={delete_icon} className='h-5 cursor-pointer' alt="" />
            </div>
        </div>
        <div className="listItem flex justify-between w-full items-center px-2 py-1">
            <div className='flex items-center'>
                <img src={uncheck_mark} className='w-5 cursor-pointer' alt="" />
                <p className='ml-4 text-[17px]'>Task 1</p>
            </div>
            <div>
                <img src={delete_icon} className='h-5 cursor-pointer' alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default TaskList
