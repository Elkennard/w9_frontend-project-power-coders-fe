import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./index.css";

export default function BurgerMenu() {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/resources">
        Resources
      </a>
      <a className="menu-item" href="/timer">
        Timer
      </a>
      <a className="menu-item" href="/wellbeing">
        Wellbeing check-in
      </a>
    </Menu>
  );
}
