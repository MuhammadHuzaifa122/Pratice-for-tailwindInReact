import React from "react";
import viteLogo from "/vite.svg";

export default function Header() {
  return (
    <header className="flex justify-between px-4 md:px-8 shadow-md py-4">
      <img src={viteLogo} alt="viteLogo" />
      <ul className="flex gap-4 ">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
      </ul>
    </header>
  );
}
