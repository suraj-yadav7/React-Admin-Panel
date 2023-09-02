import React from "react";
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsJustify, BsSearch } from "react-icons/bs"

const Header = ({ openSidebar }) => {
  return (
    <>
      <header className="header">
        <div className="menu-icons">
          <BsJustify className="icon menuIcon" onClick={openSidebar} />
        </div>
        <div className="header-left">
          <BsSearch className="icons" />
        </div>
        <div className="header-right">
          <BsFillBellFill className="icon" />
          <BsFillEnvelopeFill className="icon" />
          <BsPersonCircle className="icon" />
        </div>
      </header>
    </>
  )
};
export default Header;