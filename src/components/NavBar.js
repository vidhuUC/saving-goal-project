import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link href="https://flowbite.com" className="flex items-center">
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-8 mr-3"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Saving App
                        </span>
                    </Link>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700 fixed bottom-0 w-full md:static md:bottom-auto">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul
                            // Align at the bottom on mobile screens
                            className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm"
                        >
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-900 dark:text-white hover:underline"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/activity"
                                    className="text-gray-900 dark:text-white hover:underline"
                                >
                                    Activity
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/transaction"
                                    className="text-gray-900 dark:text-white hover:underline"
                                >
                                    Transaction
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/profile"
                                    className="text-gray-900 dark:text-white hover:underline"
                                >
                                    Profile
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
