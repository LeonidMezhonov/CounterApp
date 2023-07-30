import React from "react";
import Logo from "./logo/logo";
import { NavLink } from "react-router-dom";
import s from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.wrap}>
      <Logo />
      <div className={s.loginBtn}>
        <NavLink to="/login">LogIn</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
