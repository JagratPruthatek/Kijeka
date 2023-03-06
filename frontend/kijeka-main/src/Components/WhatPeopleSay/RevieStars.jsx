import React, { useState } from 'react'
import data from '../Datajson/data.json'

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"

};
const RevieStars = () => {


  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);


  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
    <>
      <div className='flex flex-row ml-2 gap-1 md:ml-3 '>
        {
          data.map((data, index) => {
            return (
              <div key={index}>
                <div className=' mt-[0.5rem]'>
                  <img
                    src={data.stars}

                  />
                  <img src={data.laststars} />
                </div>

              </div>
            )
          })}
      </div>
    </>
  )
}

export default RevieStars