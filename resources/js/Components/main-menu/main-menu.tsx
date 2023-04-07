import React, {FC, Fragment, useState} from "react";
import 'react-loading-skeleton/dist/skeleton.css';
import {Dialog, Popover, Tab, Transition} from '@headlessui/react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import {classNames} from "../../utils/utils";
import {Link, usePage} from "@inertiajs/react";
import styles from './main-menu.module.css';

const MainMenu: FC = () => {
    const menu = usePage().props.mainMenu;
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white xs:order-1 lg:order-none absolute xs:top-24 sm:top-16 md:static">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25"/>
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel
                                className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pt-5 pb-2">
                                    <button
                                        type="button"
                                        className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                    </button>
                                </div>

                                {/* Links */}
                                <Tab.Group as="div" className="mt-2">
                                    <div className="border-b border-gray-200">
                                        <Tab.List className="-mb-px flex space-x-8 px-4">
                                            {menu.map((category) => category.children.length > 0 && (
                                                <Tab
                                                    key={category.id}
                                                    className={({selected}) =>
                                                        classNames(
                                                            selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                                                            'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                                                        )
                                                    }
                                                >
                                                    {category.title}
                                                </Tab>
                                            ))}
                                        </Tab.List>
                                    </div>
                                    <Tab.Panels as={Fragment}>
                                        {menu.map((category) => (
                                            <Tab.Panel key={category.id} className="space-y-10 px-4 pt-10 pb-8">

                                                    <div>
                                                        <ul
                                                            role="list"
                                                            aria-labelledby={`${category.id}-heading-mobile`}
                                                            className="mt-6 flex flex-col space-y-6"
                                                        >
                                                            {category.children.map((item) => (
                                                                <li key={item.id} className="flow-root">
                                                                    <a href={`/catalog/${item.url}`}
                                                                       className="-m-2 block p-2 text-gray-500">
                                                                        {item.title}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                            </Tab.Panel>
                                        ))}
                                    </Tab.Panels>
                                </Tab.Group>

                                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                                    {menu.map((page) => page.children.length === 0 && (
                                        <div key={page.id} className="flow-root">
                                            <a href={page.url} className="-m-2 block p-2 font-medium text-gray-900">
                                                {page.title}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            <nav aria-label="Top" className="relative">
                <div>
                    <div className="flex h-16 items-center">
                        <button
                            type="button"
                            className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                            onClick={() => setOpen(true)}
                        >
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                        </button>

                        {/* Flyout menus */}
                        <Popover.Group className="hidden lg:block lg:self-stretch w-full">
                            <div className="flex h-full space-x-8 w-full">
                                {menu.map((category) => category.children.length > 0 && (
                                    <Popover key={category.title} className="flex">
                                        {({open}) => (
                                            <>
                                                <div className="relative flex">
                                                    <Popover.Button
                                                        className={classNames(
                                                            open
                                                                ? 'border-indigo-600 text-indigo-600'
                                                                : 'border-transparent text-gray-700 hover:text-gray-800',
                                                            'relative z-10 -mb-px flex items-center border-b-2 pt-px text-base font-medium transition-colors duration-200 ease-out pl-9 pr-3.5 focus-visible:outline-none',
                                                            category.url === 'dog' ? styles.dog : '',
                                                            category.url === 'cat' ? styles.cat : '',
                                                            styles.menuItemParent
                                                        )}
                                                    >
                                                        {category.title}
                                                    </Popover.Button>
                                                </div>

                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-200"
                                                    enterFrom="opacity-0"
                                                    enterTo="opacity-100"
                                                    leave="transition ease-in duration-150"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Popover.Panel
                                                        className="absolute z-50 inset-x-0 top-full text-base text-gray-500">
                                                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                        <div className="absolute inset-0 top-1/2 bg-white shadow"
                                                             aria-hidden="true"/>

                                                        <div className="relative bg-white">
                                                            <div className="mx-auto px-2">
                                                                <div
                                                                    className="grid grid-cols-2 gap-y-10 gap-x-8 pt-4 pb-6">
                                                                    <div
                                                                        className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">

                                                                        <div>
                                                                            <Link id={`${category.url}-heading`}
                                                                                  className="font-medium text-gray-900"
                                                                                  href={`/catalog/${category.url}`}>
                                                                                {category.title}
                                                                            </Link>
                                                                            <ul
                                                                                role="list"
                                                                                aria-labelledby={`${category.url}-heading`}
                                                                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                            >
                                                                                {category.children.map((item) => (
                                                                                    <li key={item.url}
                                                                                        className="flex">
                                                                                        <Link
                                                                                            href={`/catalog/${item.url}`}
                                                                                            className="hover:text-gray-800">
                                                                                            {item.title}
                                                                                        </Link>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Popover.Panel>
                                                </Transition>
                                            </>
                                        )}
                                    </Popover>
                                ))}
                                {menu.map((page) => page.children.length === 0 && (
                                    <a
                                        key={page.id}
                                        href={page.url}
                                        className={`flex items-center text-base font-medium hover:text-gray-800 ${page.icon_class && page.icon_class.includes('last') ? `${styles.last} text-mainPurple` : 'text-gray-700'}`}
                                    >
                                        {page.title}
                                    </a>
                                ))}
                            </div>
                        </Popover.Group>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default MainMenu;
