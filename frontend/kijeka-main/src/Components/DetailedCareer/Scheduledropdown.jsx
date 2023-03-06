import React, { useState } from 'react'

export const Scheduledropdown = ({ selected8, setSelected8 }) => {

  const [isActive5, SetIsActive5] = useState(false)
  const option5 = [' Job category']
  return (
    <>
      <div className='dropdown w-[11rem] my-3 relative  z-[1700]' >

        <div className='pt-[0.4rem] pb-[0.2rem] flex items-center justify-between rounded-lg bg-[#ffff] focus:ring-blue-500 p-4'
          onClick={(e) => SetIsActive5(!isActive5)}>
          {selected8}
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" className='h-4 w-4 inset-x-[7rem]' xmlns="http://www.w3.org/2000/svg">
            <path d="M7.86602 11C7.48112 11.6667 6.51888 11.6667 6.13397 11L0.937821 2C0.552921 1.33333 1.03405 0.5 1.80385 0.5L12.1962 0.5C12.966 0.5 13.4471 1.33333 13.0622 2L7.86602 11Z" fill="#101010" />
          </svg>


        </div>

        {isActive5 && (
          <div className="absolute top[110px] p-[15px] my-2   bg-white shadow-stone-900 left-0 w-[100%] drop-shadow-md  dropdown-contain">





            {option5.map((option5) => (
              <div className="dropdown-item p-[10px] cursor-pointer "
                onClick={(e) => {
                  setSelected8(option5)
                  SetIsActive5(false);
                }
                }>
                {option5}
              </div>
            ))}



          </div>
        )}



      </div>
    </>

  )
}
