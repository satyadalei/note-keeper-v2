"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHooverSubMenu, setIsHooverSubMenu] = useState({
    notes : {
      isOpen : false
    },
    profile : {
      isOpen : false
    }
  });

  const resetHoverSubMenu = {
    notes : {
      isOpen : false
    },
    profile : {
      isOpen : false
    }
  }; 

  const handleOpenSubMenu = (subMenuItem:string)=> {
    // first reset all settings
    setIsHooverSubMenu(resetHoverSubMenu);
    setIsHooverSubMenu((prev)=>{
      return {...prev, [subMenuItem] : { isOpen : true}}
    })
  }

  const handleCloseSubMenu = ()=>{
    setIsHooverSubMenu(resetHoverSubMenu);
  }

  return (
    <div className="container mx-auto flex items-center flex-wrap justify-between p-3 md:p-3 transition-all ease-in-out delay-150">
      <Link
        href={"/"}
        className="flex title-font font-medium items-center text-gray-900 mr-4 mb-4 md:mb-0"
      >
        <Image
          src={"https://www.locofy.ai/blog/locofylogo.svg"}
          width={100}
          height={50}
          alt="Logo"
        />
      </Link>


      <div className="block md:hidden">
        {isOpen ? (
          <ClearIcon
            onClick={() => {
              setIsOpen(false);
            }}
            className="cursor-pointer"
          />
        ) : (
          <MenuIcon
            onClick={() => {
              setIsOpen(true);
            }}
            className="cursor-pointer"
          />
        )}
      </div>

      {/* flex flex-wrap items-center text-base justify-center */}
      <div
        className={`w-full block flex-grow justify-between pl-0 md:pl-6 md:flex md:items-center md:w-auto lg:ml-10 ${isOpen ? "block" : "hidden"
          } `}
      >
        {/* -- Link Items */}
        <div className="flex flex-col md:flex-row " >
          <Link
            className="mr-5 mb-3 md:mb-0 p-2 no-underline text-black hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out rounded-lg"
            href={"/home"}
          >
            Home
          </Link>
          <li
            className="mr-5 mb-3 md:mb-0 p-2 no-underline relative text-black hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out rounded-lg "
            onMouseOver={()=>{handleOpenSubMenu("notes")}}
            onMouseOut={()=>{handleCloseSubMenu()}}
          >
            Notes
            {/* notes category */}
            <div className={`flex flex-col md:absolute md:bg-slate-500 ${isHooverSubMenu.notes.isOpen ? 'block' : 'hidden'}`} >
                <Link className="m-1" href={"/notes/category/1"} >Category1</Link>
                <Link className="m-1" href={"/notes/category/2"} >Category2</Link>
                <Link className="m-1" href={"/notes/category/3"} >Category3</Link>
            </div>
          </li>
          <li
            className="mr-5 mb-3 md:mb-0 p-2 no-underline text-black hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out rounded-lg relative "
            onMouseOver={()=>{handleOpenSubMenu("profile")}}
            onMouseOut={()=>{handleCloseSubMenu()}}
          >
            Profile
            {/* ---- profile sub category ----- */}
            <div className={`flex flex-col md:absolute bottom-100 md:bg-slate-500  ${isHooverSubMenu.profile.isOpen ? 'block' : 'hidden'}`} >
                <Link className="m-1" href={"/notes/category/1"} >Category1</Link>
                <Link className="m-1" href={"/notes/category/2"} >Category2</Link>
                <Link className="m-1" href={"/notes/category/3"} >Category3</Link>
            </div>
          </li>
          <Link
            className="mr-5 mb-3 md:mb-0 p-2 no-underline text-black hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out rounded-lg "
            href={"/about"}
          >
            About
          </Link>
        </div>

        {/* --- user action button---- */}
        <div>
          <Button
            className="inline-flex items-center border-0 py-1 px-3 m-1 "
            variant="contained"
          >
            Log in
          </Button>
          <Button
            className="inline-flex items-center py-1 px-3 m-1 hover:bg-blue-500 hover:text-white "
            variant="outlined"
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
