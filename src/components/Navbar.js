import React, { useState } from 'react'
import close from '../assets/close.png'
import menu from '../assets/menu.png'

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="w-full flex py-3 justify-between items-center navbar bg-primary">
        <div className='flex flex-row'>
          <div
            className="inline-flex p-4 mt-4 text-tertiary md:bg-transparent md:p-0"
            aria-current="page"
          >
            LOGO HERE
          </div>

          <ul className="list-none sm:flex hidden p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-tertiary bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-tertiary"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-tertiary bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-tertiary"
                aria-current="page"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-tertiary  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-tertiary"
                aria-current="page"
              >
                Services
              </a>
            </li>
          </ul>
        </div>
        <div className='sm:flex hidden'>
          <button type="button" class="text-secondary bg-tertiary hover:primary  font-medium rounded-md text-sm py-2 px-3 mr-4">Sign Up</button>
          <button type="button" class="text-secondary bg-tertiary hover:primary  font-medium rounded-md text-sm py-2 px-3 mr-4">Login</button>
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } flex-col p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">

              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-tertiary bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-tertiary"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-tertiary bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-tertiary"
                  aria-current="page"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-tertiary  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-tertiary"
                  aria-current="page"
                >
                  Services
                </a>
              </li>
            </ul>

            <button type="button" class="text-secondary bg-tertiary hover:primary  font-medium rounded-md text-sm py-2 px-3 ">Sign Up</button>
            <button type="button" class="text-secondary bg-tertiary hover:primary  font-medium rounded-md text-sm py-2 px-3 my-2">Login</button>

          </div>
        </div>
      </nav>
    </>

  )
}

export default Navbar