import React from 'react';
import { Link } from 'react-router-dom'
import home from '../Images/home.svg'
import notification from '../Images/notification.svg'
import profile from '../Images/person_outline.svg'
import activity from '../Images/Vector.svg'
import logo from '../Images/Logo.svg'

const NavBar = () => {
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl p-4">
                    <Link href="https://flowbite.com" className="flex items-center">
                        <img
                            src={logo}
                            className="h-20 mr-3"
                            alt="saving app"
                        />
                    </Link>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700 fixed bottom-0 w-full md:static md:bottom-auto">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul
                            // Align at the bottom on mobile screens
                            className="flex flex-row font-medium mt-0 mr-6 mx-8 space-x-8 text-sm"
                        >
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-900 dark:text-white hover:underline"
                                    aria-current="page"
                                >
                                    <img src={home} alt="Home" className="h-8 mr-3" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/activity"
                                    className="text-gray-900 dark:text-white hover:underline"
                                >
                                    <img src={notification} alt="notification" className="h-8 mr-3"/>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/transaction"
                                    className="text-gray-900 dark:text-white hover:underline"
                                >
                                     <img src={activity} alt="transaction" className="h-8 mr-3"/>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/profile"
                                    className="text-gray-900 dark:text-white hover:underline"
                                >
                                     <img src={profile} alt="profile" className="h-8 mr-3" />
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
