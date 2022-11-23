import { Fragment } from 'react'
import "./style.css"
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon, HeartIcon, UserIcon, Cog8ToothIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom"
import { Cartbutton } from './material-data'
import { WishLIstButton } from './material-data'

import { Searchbar } from './searchbar'
import { useState } from 'react'
import { useLayoutEffect } from 'react'
import { Wishlist } from './wishlist'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Header() {

  let [navigation, SetNavigation] = useState([
    { name: 'Home', to: "/", current: true },
    { name: 'Mens', to: "/Mens", current: false },
    { name: 'Women', to: "/Womens", current: false },
    { name: 'Childs', to: "/Childs", current: false },
    { name: 'All Items', to: "/allitmes", current: false }])

  let [gvalue, Setgvalue] = useState(0)
  useLayoutEffect(() => {
    async function doit() {

      makeitcrrent(gvalue)
    }

    doit()
  }, [navigation])


  function makeitcrrent(e) {

    Setgvalue(e)
    navigation.forEach((items) => {
      if (items.name == e.target.innerText) {

        items.current = true
      } else {

        items.current = false

      }
    })

    SetNavigation(navigation);
  }

  return (
    <>
      <Disclosure as="nav" className="  bg-yellow-900">
      {/* fixed z-50 w-full */}
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative  flex h-16 items-center  justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="logo_transparent.png"

                      alt="Shozy"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      src="logo_transparent.png"
                      alt="Shozy"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex  space-x-4">
                      {navigation.map((item) => (
                        < Link
                          onClick={makeitcrrent}
                          key={item.name}
                          to={item.to}
                          className={classNames(
                            item.current ? 'bg-gray-900  effect-btn text-white' : 'text-gray-300 effect-btn hover:bg-orange-500 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">My Wish List </span>
                  <HeartIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                  {/* <Link to={"/Wishlist"} ><WishLIstButton /></Link> */}
                  <Link to={"/cart"} > <Cartbutton  /></Link>


                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-blue-100 manuItems hover:text-orange-500' : '', 'block manuItems px-4 py-2 text-sm text-gray-700')}
                            >
                              <UserIcon className="h-6 myy w-6" aria-hidden="true" /> Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-blue-100 manuItems hover:text-orange-500' : '', 'block manuItems px-4 py-2 text-sm text-gray-700')}
                            >
                              <HeartIcon className="h-6 myy w-6" aria-hidden="true" /> My Wish List
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-blue-100 manuItems   hover:text-orange-500' : '', 'block manuItems px-4 py-2 text-sm text-gray-700')}
                            >
                              <Cog8ToothIcon className="h-6 myy w-6" aria-hidden="true" />  Settings

                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-blue-100 manuItems hover:text-orange-500' : '', 'block manuItems px-4 py-2 text-sm text-gray-700')}
                            >
                              <ArrowRightOnRectangleIcon className="h-6 myy w-6" aria-hidden="true" /> Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    // as="a"
                    onClick={makeitcrrent}
                    to={item.to}
                    className={classNames(
                      item.current ? 'bg-gray-900 effect-btn text-white' : 'text-gray-300 effect-btn hover:bg-orange-500 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}
//  https://tailwindcss.com/docs/installation