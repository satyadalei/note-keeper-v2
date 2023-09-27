"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, FormControlLabel } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux'
import { changeToLight, changeToDark } from "../store/lightModeReduxStore"


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 50,
  height: 28,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 22,
    height: 22,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const Navbar = () => {
  const mode = useSelector((state: any) => state.counterMode.value);
  console.log(mode);
  const dispatch = useDispatch()
  const handleLightMode = () => {
    if (mode === "light") {
      dispatch(changeToDark())
    } else {
      dispatch(changeToLight())
    }
  }

  const [isOpen, setIsOpen] = useState(false);
  const [isHooverSubMenu, setIsHooverSubMenu] = useState({
    notes: {
      isOpen: false
    },
    profile: {
      isOpen: false
    }
  });

  const resetHoverSubMenu = {
    notes: {
      isOpen: false
    },
    profile: {
      isOpen: false
    }
  };

  const handleOpenSubMenu = (subMenuItem: string) => {
    // first reset all settings
    setIsHooverSubMenu(resetHoverSubMenu);
    setIsHooverSubMenu((prev) => {
      return { ...prev, [subMenuItem]: { isOpen: true } }
    })
  }

  const handleCloseSubMenu = () => {
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

      {/* ---- Light mode :: Only in mobile screen---- */}
      <FormControlLabel
        className="block sm:hidden"
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        label=""
        onClick={() => { handleLightMode() }}
      />

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
            onMouseOver={() => { handleOpenSubMenu("notes") }}
            onMouseOut={() => { handleCloseSubMenu() }}
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
            onMouseOver={() => { handleOpenSubMenu("profile") }}
            onMouseOut={() => { handleCloseSubMenu() }}
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

        {/* -- visible only in larger than mobile version */}
        <FormControlLabel
          className="hidden sm:block"
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          label=""
          onClick={() => { handleLightMode() }}
        />

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
