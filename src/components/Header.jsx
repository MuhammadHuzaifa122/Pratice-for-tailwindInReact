import React from "react";
import viteLogo from "/vite.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between px-4 md:px-8 shadow-md py-4">
      <img src={viteLogo} alt="viteLogo" />
      <ul className="flex gap-4 ">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
            to="about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
            to="contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
