"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
      <Link
        href={"/"}
        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <Image
          src={"https://www.locofy.ai/blog/locofylogo.svg"}
          width={100}
          height={50}
          alt="Logo"
        />
        Hello
      </Link>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"} `}>
        <Link
          className="mr-5 p-2 no-underline text-black hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out rounded-lg"
          href={"/home"}
        >
          Home
        </Link>
        <Link
          className="mr-5 p-2 no-underline text-black hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out rounded-lg "
          href={"/notes"}
        >
          Notes
        </Link>
        <Link
          className="mr-5 p-2 no-underline text-black hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out rounded-lg "
          href={"/profile"}
        >
          Profile
        </Link>
        <Link
          className="mr-5 p-2 no-underline text-black hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out rounded-lg "
          href={"/about"}
        >
          About
        </Link>
      </div>

      <Button className="inline-flex items-center border-0 py-1 px-3 m-1 " variant="contained">Log in</Button>
      <Button className="inline-flex items-center py-1 px-3 m-1 hover:bg-blue-500 hover:text-white " variant="outlined">Register</Button>

      <div className="block lg:hidden">
        {
          isOpen ? 
          <ClearIcon onClick={() => { setIsOpen(false) }} className="cursor-pointer" />
          : 
          <MenuIcon onClick={() => { setIsOpen(true) }} className="cursor-pointer" /> 
        }


      </div>


    </div>
  );
};

export default Navbar;
