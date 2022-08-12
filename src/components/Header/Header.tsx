import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

interface IProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Header = ({ sidebarOpen, toggleSidebar }: IProps) => {
  return (
    <div className="flex items-center w-full justify-between mb-5">
      <div
        className="md:hidden flex items-center justify-center relative p-3"
        onClick={() => toggleSidebar()}
      >
        {sidebarOpen ? (
          <AiOutlineClose className=" dark:text-white" />
        ) : (
          <AiOutlineMenu className=" dark:text-white" />
        )}
      </div>
      <div className="rounded-md py-2 px-3 bg-blue_l dark:bg-slate-800 w-2/3 flex flex-row items-center justify-between md:w-1/4">
        <input
          className="bg-transparent w-full focus:outline-none"
          placeholder="Search..."
        />
        <AiOutlineSearch className="text-slate-500 cursor-pointer " />
      </div>
      <div className="flex items-center">
        <div className="mr-3 hidden md:flex flex-col items-end">
          <p className="text-base text-slate-700 dark:text-slate-300">
            jamesbrown@example.com
          </p>
          <p className="text-slate-400 text-xs">Admin</p>
        </div>
        <img
          src="https://xsgames.co/randomusers/avatar.php?g=male"
          alt=""
          className="w-12 rounded-full h-12"
        />
      </div>
    </div>
  );
};

export default Header;
