import Logo from '../../images/sketchvine_beta_logo-3.svg';
import { Fragment, useState, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { CalendarIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Bars3Icon } from '@heroicons/react/24/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function GlobalNav(props) {
    
    const [scroll, setScroll] = useState(false);    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 80);
        });
    }, []);

    const navLinks = props.items.filter( (item, i) => (i !== 0 && i != props.items.length -1));

    const menuLinks = navLinks.map( (item, i) => {
        return (
            <a href={item.item_url} key={`menu-id-${i}`} className="global-nav-menu--desktop-link inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">{item.item_title}</a>
        );
    });

    const mobileMenuLinks = navLinks.map( (item, i) => {
        return (
            <Disclosure.Button
                as="a"
                key={`menu-id-${i}`}
                href={item.item_url}
                className="global-nav-menu--mobile-link block py-2 pl-3 pr-4 text-base font-medium text-gray-900 sm:pl-5 sm:pr-6"
              >
                {item.item_title}
            </Disclosure.Button>
        );
    });

  return (    
    <Disclosure as="nav" className={`bg-white shadow ${scroll ? 'scroll':'' }`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 bg-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-grow-0 items-center">
                    <a href="/"><Logo /></a>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                    { menuLinks }
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="relative inline-flex items-center gap-x-1.5 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    <CalendarIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                    <span className="hidden md:inline-block">Schedule a free consultation</span>
                  </button>
                </div>
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden bg-white">
            <div className="space-y-1 pb-3 pt-2">
                { mobileMenuLinks }
            </div>
          </Disclosure.Panel>
        </>
      )}      
    </Disclosure>
  )
}
