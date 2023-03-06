import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

export default function MyDropdown1() {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center ">
            <TiArrowSortedDown
              className=" h-8 w-8 text-gray-400"
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
          <Menu.Items className="absolute -right-5 mt-2 w-60 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                    Home
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
                    Products
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
                    Image Slider
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
                    Youtube Videos
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
                    Client Logos
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
                    Review
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
                    Reach Us form
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
                    Contact Details
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
