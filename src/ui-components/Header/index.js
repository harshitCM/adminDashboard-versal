import { useRef } from "react";

import DropdownMenu from "../DropdownMenu";
import IconWrapper from "../IconWrapper";
import UserIcon from "../UserIcon";
import styles from "./Header.module.css";
// import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";

import Link from "next/link";
import { headerLoginMenuList, menuList } from "../../data";
import Image from "next/image";

const MenuList = ({ href = "", Icon = null, text = "" }) => {
  return (
    <li>
      <Link href={href} className={styles["link"]}>
        {<Icon />}
        <span>{text}</span>
      </Link>
    </li>
  );
};

const Header = ({ toggleSidebarMenu }) => {
  return (
    <section className={styles.container}>
      <div className={styles["left-items"]}>
        <ul>
          <li>
            <button
              className={styles["close-sidemenu"]}
              onClick={toggleSidebarMenu}
            >
              {/* <HiOutlineMenuAlt1 /> */}
              <AiOutlineMenu />
            </button>
          </li>
          <li>
            <Link href={"/"}>Dashboard</Link>
          </li>
          <li>
            <Link href={"/unknown"}>Users</Link>
          </li>
          {/* <li>
            <Link href={"/unknown"}>Settings</Link>
          </li> */}
        </ul>
      </div>
      <div className={styles["right-items"]}>
        <ul className={styles["header-navigations"]}>
          <li>
            <DropdownMenu label={"Login/Signup"}>
              <ul className={styles["dropdown-menu"]}>
                {headerLoginMenuList.map((menu, index) => (
                  <MenuList
                    key={index}
                    text={menu.text}
                    Icon={menu.Icon}
                    href={menu.href}
                  />
                ))}
              </ul>
            </DropdownMenu>
          </li>

          <li>
            {/* User Dropdown Menu */}
            <DropdownMenu
              label={"Dropdown 1"}
              CustomMenu={UserIcon}
              dropdownContainerStyle={
                {
                  // padding: '15px 0'
                }
              }
            >
              <ul className={styles["dropdown-menu"]}>
                {menuList.map((menu, index) => (
                  <MenuList
                    key={index}
                    text={menu.text}
                    Icon={menu.Icon}
                    href={menu.href}
                  />
                ))}
              </ul>
            </DropdownMenu>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
