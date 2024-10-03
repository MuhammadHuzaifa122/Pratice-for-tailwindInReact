import React from "react";
import viteLogo from "/vite.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between px-4 md:px-8 shadow-md py-4">
      <img src={viteLogo} alt="viteLogo" />
      <ul className="flex gap-4 ">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>
    </header>
  );
}
