import Logo from "../assets/best-eats-low-resolution-logo-color-on-transparent-background.png";
import React, { useState } from "react";

import {
    AiOutlineMenu,
    AiOutlineSearch,
    AiOutlineClose,
    AiFillTag,
} from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdHelp, MdFavorite } from "react-icons/md";

const Navbar = () => {
    // State
    const [nav, setNav] = useState(false);

    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            {/* Left Side */}
            <div className="flex items-center">
                <div onClick={() => setNav(!nav)} className="cursor-pointer">
                    <AiOutlineMenu size={30} />
                </div>
                <img className="h-14 px-6" src={Logo} alt="" />
                <div className="hidden lg:flex bg-gray-200 items-center rounded-full p-1 text-[14px]">
                    <p className="bg-black text-white rounded-full p-2 ">
                        Delivery
                    </p>
                    <p className="p-2">Pickup</p>
                </div>
            </div>

            {/* Search Input*/}
            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={25} />
                <input
                    type="text"
                    placeholder="Search Food"
                    className="bg-transparent p-2 w-full focus:outline-none"
                />
            </div>
            <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
                <BsFillCartFill size={20} className="mr-2" /> Cart
            </button>

            {/* Mobile Menu */}
            {/* Overlay*/}
            {nav ? (
                <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
            ) : (
                ""
            )}

            {/* Side Drawer */}
            <div
                className={
                    nav
                        ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
                        : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
                }
            >
                <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    size={30}
                    className="absolute right-4 top-4 cursor-pointer"
                />
                <h2 className="text-2xl p-4">
                    Best <span className="font-bold">Eats</span>
                </h2>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        <li className="text-xl py-4 flex items-center">
                            <TbTruckDelivery size={25} className="mr-4" />
                            Orders
                        </li>
                        <li className="text-xl py-4 flex items-center">
                            <MdFavorite size={25} className="mr-4" />
                            Favourites
                        </li>
                        <li className="text-xl py-4 flex items-center">
                            <FaWallet size={25} className="mr-4" />
                            Wallet
                        </li>
                        <li className="text-xl py-4 flex items-center">
                            <MdHelp size={25} className="mr-4" />
                            Help
                        </li>
                        <li className="text-xl py-4 flex items-center">
                            <AiFillTag size={25} className="mr-4" />
                            Promotions
                        </li>
                        <li className="text-xl py-4 flex items-center">
                            <BsFillSaveFill size={25} className="mr-4" />
                            Best Ones
                        </li>
                        <li className="text-xl py-4 flex items-center">
                            <FaUserFriends size={25} className="mr-4" />
                            Invite Friends
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
