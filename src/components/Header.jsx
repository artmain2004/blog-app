import React from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeMode";
import { useContext } from "react";
import logo_dark from "../assets/logo-dark.png";
import { useState } from "react";

import logo from "../assets/logo.png";

import style from "../styles/Header.module.css";

const Header = () => {
  const { isDark, changeMode } = useContext(ThemeContext);
  const [menuburger, setMenuBirger] = useState(false);

  const showmenu = () => {
    setMenuBirger(!menuburger);
  };
  return (
    <>
      <div className={style.header_wrapper}>
        <Link className={style.logo_link} to="/">
          <div className={style.header_block1}>
            {isDark ? (
              <img src={logo_dark} alt="logo" className={style.logo} />
            ) : (
              <img src={logo} alt="logo" className={style.logo} />
            )}

            <p className={isDark ? style.dark_title : style.light_title}>
              Artmain<span className={style.span_title}>Blog</span>
            </p>
          </div>
        </Link>

        <div className={style.header_block2}>
          <div className={style.search_block}>
            <input type="text" className={style.input} placeholder="search" />
            <BsSearch className={style.search} />
          </div>
          <div className="dark-light-mode">
            {isDark ? (
              <CiLight onClick={changeMode} className={style.dark_mode} />
            ) : (
              <CiDark onClick={changeMode} className={style.light_mode} />
            )}
          </div>

          <div className={style.sign_in_up}>
            <Link
              className={
                isDark ? style.header_link_dark : style.header_link_light
              }
              to="/signin"
            >
              Sign in
            </Link>
            <Link
              className={
                isDark ? style.header_link_dark : style.header_link_light
              }
              to="/signup"
            >
              Sign up
            </Link>
          </div>
        </div>

        <div className={style.header_burger_wrapper}>
          <GiHamburgerMenu
            onClick={showmenu}
            className={
              isDark ? style.header_burger_dark : style.header_burger_light
            }
          />
        </div>
      </div>

      {menuburger && (
        <div
          className={
            isDark ? style.navbar_wrapper_dark : style.navbar_wrapper_light
          }
        >
          <nav className={isDark ? style.nav_dark : style.nav_light}>
            {isDark ? (
              <CiLight onClick={changeMode} className={style.nav_icon_dark} />
            ) : (
              <CiDark onClick={changeMode} className={style.nav_icon_light} />
            )}
            <Link
              to="/signin"
              className={isDark ? style.nav_link_dark : style.nav_link_light}
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className={isDark ? style.nav_link_dark : style.nav_link_light}
            >
              Sign up
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
