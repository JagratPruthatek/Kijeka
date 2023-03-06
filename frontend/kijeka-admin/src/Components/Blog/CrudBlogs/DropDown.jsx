import { useState } from "react";

function DropDown() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="relative inline-block text-left">
            <div className="flex justify-center items-center">
                <button
                    type="button"
                    className="inline-flex justify-center  items-center border-[#004B95] border-[1px] w-[126px] h-[34px] rounded-[5px] gap-5 border-1  shadow-sm px-4 py-2 bg-white text-[16px] leading-[24px] tracking-[5%] font-semibold font-sans  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 text-[#004B95] "
                    id="menu-button"
                    onClick={toggleDropdown}
                    aria-expanded="true"
                    aria-haspopup="true"
                >
                    Recents
                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none">
                    <path d="M0.513105 0.680097C0.919901 0.273301 1.57945 0.273301 1.98624 0.680097L7.49968 6.19353L13.0131 0.680097C13.4199 0.2733 14.0794 0.2733 14.4862 0.680097C14.893 1.08689 14.893 1.74644 14.4862 2.15324L8.23625 8.40324C7.82945 8.81003 7.1699 8.81003 6.76311 8.40324L0.513105 2.15324C0.106309 1.74644 0.106309 1.08689 0.513105 0.680097Z" fill="#004B95" />
                </svg>
                </button>               
            </div>
            {/* add dropdown menu */}
            <div
                className={`${isOpen ? "block" : "hidden"
                    } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
            >
                <div className="py-1" role="none">
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                    >
                        Option 1
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                    >
                        Option 2
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-2"
                    >
                        Option 3
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DropDown;
