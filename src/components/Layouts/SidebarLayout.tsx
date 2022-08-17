import React, { useState } from "react";
import {
  AiOutlineBarChart,
  AiOutlineFlag,
  AiOutlineSetting,
  AiOutlineShop,
  AiOutlineShoppingCart,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { BiHomeCircle, BiShoppingBag, BiWalletAlt } from "react-icons/bi";
import { Link, Outlet, useLocation } from "react-router-dom";
import { logo } from "../../assets";
import { useOnClickOutside } from "../../hooks";
import { Header } from "../Header";
import { Switch } from "../Switch";

const SidebarLayout = () => {
  const { pathname } = useLocation();

  const links = [
    {
      title: "Home",
      icon: <BiHomeCircle />,
      path: "/",
      isActive: pathname === "/",
    },
    {
      title: "Products",
      icon: <AiOutlineShop />,
      path: "/products",
      isActive: pathname === "/products",
    },
    {
      title: "Blog",
      icon: <AiOutlineShoppingCart />,
      path: "/blog",
      isActive: pathname === "/blog",
    },
    {
      title: "Transactions",
      icon: <BiWalletAlt />,
      path: "/transactions",
      isActive: pathname === "/transactions",
    },
    {
      title: "Users",
      icon: <AiOutlineUsergroupAdd />,
      path: "/users",
      isActive: pathname === "/users",
    },
    {
      title: "Analysis",
      icon: <AiOutlineBarChart />,
      path: "/analysis",
      isActive: pathname === "/analysis",
    },
    {
      title: "Reports",
      icon: <AiOutlineFlag />,
      path: "/reports",
      isActive: pathname === "/reports",
    },
    {
      title: "Investment",
      icon: <BiShoppingBag />,
      path: "/investment",
      isActive: pathname === "/investment",
    },
    {
      title: "Settings",
      icon: <AiOutlineSetting />,
      path: "/settings",
      isActive: pathname === "/settings",
    },
  ];
  const [theme, setTheme] = React.useState("light");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.querySelector("body")!.classList.toggle("dark");
  };

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const sidebarRef = React.useRef(null);

  useOnClickOutside(sidebarRef, () => setShowSidebar(false));

  return (
    <div className="bg-white dark:bg-slate-800 flex min-h-screen">
      <div
        className={` ${
          !showSidebar && "hidden"
        } md:flex p-2 bg-white dark:bg-slate-800 fixed top-0 left-0 flex-col align-center h-full z-10 transition-all duration-300 w-64`}
        ref={sidebarRef}
      >
        <div className="w-full flex justify-center items-center mt-8">
          <img src={logo} alt="retro_logo" className="w-40" />
        </div>
        <div className="mt-10">
          {links.map((link, idx) => (
            <Link
              to={link.path}
              className={`relative flex flex-row items-center no-underline text-text_gray my-1 p-3 hover:dark:bg-slate-700 rounded-md hover:bg-blue_l transition-all duration-300 ${
                link.isActive &&
                "bg-blue_l font-semibold text-primary_d dark:bg-slate-700"
              }`}
              onClick={() => setShowSidebar(false)}
            >
              <div
                className={`w-1 h-5 inline-flex rounded-full mr-3 items-center  justify-center ${
                  link.isActive && "bg-primary_d"
                }`}
              />
              {link.icon}
              <span className={`block ml-2 text-sm tracking-wide truncate`}>
                {link.title}
              </span>
            </Link>
          ))}
          <div className="flex w-full justify-center mt-10">
            <Switch onChange={changeTheme} theme={theme} />
          </div>
        </div>
      </div>
      <div className="bg-background_l dark:bg-background_d rounded-lg p-5 w-full md:ml-64 md:py-5 md:px-10">
        <Header sidebarOpen={showSidebar} toggleSidebar={toggleSidebar} />
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarLayout;
