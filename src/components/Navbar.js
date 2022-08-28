import React from 'react'

function Navbar() {
  return (
    <>
      <nav className="bg-primary border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">

        <div className="flex justify-between mx-auto">
          <div>
            <div
              className="hidden justify-between items-center w-full md:flex md:w-auto"
              id="navbar-search"
            >
              <div className="relative mt-3 md:hidden">

              </div>
              <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-tertiary bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-tertiary"
                    aria-current="page"
                  >
                    LOGO HERE
                  </a>
                </li>
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
                    className="block py-2 pr-4 pl-3 text-tertiary rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-tertiary dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-tertiary md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-tertiary rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-tertiary dark:hover:bg-gray-700 dark:hover:text-tertiary md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </a>
                </li>
              </ul>
            </div></div>
          <div>
            <div className='container flex justify-between items-center'>
              <button type="button" class="text-secondary bg-tertiary hover:primary  font-medium rounded-md text-sm py-2 px-3 mr-4">Sign Up</button>
              <button type="button" class="text-secondary bg-tertiary hover:primary  font-medium rounded-md text-sm py-2 px-3 mr-4">Login</button>
            </div>
          </div>
        </div>
      </nav>

    </>

  )
}

export default Navbar