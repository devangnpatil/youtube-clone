import React from "react";
import { MENU_IMAGE, YOUTUBE_LOGO, USER_ICON } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          src={MENU_IMAGE}
          alt="menu"
          className="h-8 w-8"
          onClick={toggleMenuHandler}
        />
        <img
          src={YOUTUBE_LOGO}
          alt="youtube logo"
          className="h-8 w-32 mx-2 cursor-pointer"
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
        />
        <button className="border border-gray-400 p-2 rounded-r-full text-center px-4 bg-gray-400">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img src={USER_ICON} alt="user icon" className="h-8 w-8" />
      </div>
    </div>
  );
};

export default Header;
