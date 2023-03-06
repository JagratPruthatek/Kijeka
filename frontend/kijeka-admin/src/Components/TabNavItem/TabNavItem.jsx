import React from 'react'

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {

     const handleClick = () => {
          setActiveTab(id);
     };

     return (
          <li onClick={handleClick} className={"py-4 md:px-8 px-2 text-base cursor-pointer transition-all duration-300 z-10 " + (activeTab === id ? "bg-white text-kijeka-blue font-semibold" : "bg-whiteBG")}>
               {title}
          </li>
     )
}

export default TabNavItem