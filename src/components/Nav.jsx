import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from "keep-react";
import { NavLink } from "react-router";
import ThemeSwitcher from "./ThemeSwitcher ";

export const Nav = () => {
  return (
    <Navbar className="dark:bg-secondary-500 border-none">
      <NavbarContainer>
        <NavbarBrand className="flex items-center">
          <img src="logo.jpg" alt="keep" className="w-7 h-7 md:w-8 md:h-8" />
          <span className="dark:text-white text-heading-5 font-bold hidden md:block">
            hill Gamer
          </span>
        </NavbarBrand>
        <NavbarList>
          {navItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.to}
              className={({ isActive }) =>
                `${isActive ? "font-bold" : ""} dark:text-white`
              }>
              {item.title}
            </NavLink>
          ))}
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse className="dark:bg-secondary-500">
          <NavbarItem>Figma</NavbarItem>
          <NavbarItem>Documentation</NavbarItem>
          <NavbarItem>Blog</NavbarItem>
        </NavbarCollapse>
        <ThemeSwitcher />
      </NavbarContainer>
    </Navbar>
  );
};

const navItems = [
  { title: "Home", to: "/" },
  { title: "All Reviews", to: "/reviews" },
  { title: "Game WatchList", to: "/watch-list" },
  { title: "Login", to: "/login" },
  { title: "Register", to: "/register" },
];
