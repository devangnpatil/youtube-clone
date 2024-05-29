import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const sidebarOpen = useSelector((store) => store.app.sidebarOpen);
  if (sidebarOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>StudyIQ IAS</li>
        <li>Fireship</li>
        <li>Web Dev</li>
        <li>SpaceX</li>
      </ul>

      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Live</li>
        <li>Gaming</li>
      </ul>

      <h1 className="font-bold pt-5">More from Youtube</h1>
      <ul>
        <li>YouTube Premium</li>
        <li>YouTube Studio</li>
        <li>YouTube Music</li>
        <li>YouTube Kids</li>
      </ul>
    </div>
  );
};

export default Sidebar;
