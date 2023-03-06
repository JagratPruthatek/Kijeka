import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

export default function MyDropdown2() {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center items-center text-sidebar gap-x-2">
            <img src={require("../../images/World.png")} alt="" />
            EN
            <AiOutlineCaretDown
              className=" h-6 w-6 text-sidebar"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute -right-5 mt-2 w-20 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-5 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-none text-green-600 ease-in-out text-[22px] duration-300"
                        : "text-sidebar text-[20px]"
                    } group flex w-full items-center rounded-md px-2 py-2`}
                  >
                    EN
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-none text-green-600 ease-in-out text-[22px] duration-300"
                        : "text-sidebar text-[20px]"
                    } group flex w-full items-center rounded-md px-2 py-2`}
                  >
                    IN
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-none text-green-600 ease-in-out text-[22px] duration-300"
                        : "text-sidebar text-[20px]"
                    } group flex w-full items-center rounded-md px-2 py-2`}
                  >
                    HI
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-none text-green-600 ease-in-out text-[22px] duration-300"
                        : "text-sidebar text-[20px]"
                    } group flex w-full items-center rounded-md px-2 py-2`}
                  >
                    GUJ
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
