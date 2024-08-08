import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="ml-3">
        <div className="text-xl absolute right-2 top-0 cursor-pointer md:hidden z-4 p-3">
          {open ? (
            <li
              onClick={() => setOpen(!open)}
              className="h-5 md:hidden list-none mr-3 items-center"
            >
              <IoCloseSharp />
            </li>
          ) : (
            <li
              onClick={() => setOpen(!open)}
              className="h-5 md:hidden list-none mr-3 items-center"
            >
              <CiMenuBurger />
            </li>
          )}
        </div>
        <ul
          className={` flex-col justify-end gap-5 items-center md:items-center md:flex md:flex-row absolute md:static  w-full md:w-auto p-3 md:z-auto z-[-1]  transition-all duration-500 ease-in ${
            open ? "top-0 opacity-100" : "  top-[-160px] opcacity-5 "
          }  `}
        >
          <h1 className="list-none text-xl">
            <CiSearch />
          </h1>
          <h1 className="list-none text-xl">
            <AiOutlineShopping />
          </h1>

          <h1 className="list-none text-xl select-none mr-[20px]">Login</h1>
        </ul>
      </nav>
    </>
  );
}
