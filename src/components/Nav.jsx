import {
  Avatar,
  AvatarFallback,
  AvatarImage,
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
                `${
                  isActive
                    ? "font-bold text-primary-500"
                    : "text-gray-700 dark:text-white"
                }`
              }>
              <NavbarItem className="!text-inherit">{item.title}</NavbarItem>
            </NavLink>
          ))}
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${
                isActive
                  ? "font-bold text-primary-500 dark:text-primary-500"
                  : "text-gray-700 dark:text-white"
              }`
            }>
            <NavbarItem className="!text-inherit">Login</NavbarItem>
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `${
                isActive
                  ? "font-bold text-primary-500 dark:text-primary-500"
                  : "text-gray-700 dark:text-white"
              }`
            }>
            <NavbarItem className="!text-inherit">Register</NavbarItem>
          </NavLink>
        </NavbarList>
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/images/avatar/avatar-4.png" />
            <AvatarFallback className="border border-primary-500 dark:text-white">
              KR
            </AvatarFallback>
          </Avatar>
          <ThemeSwitcher />
          <NavbarCollapseBtn />
        </div>
        <NavbarCollapse className="dark:bg-secondary-500">
          {navItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.to}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "font-bold text-primary-500 dark:text-primary-500"
                    : "text-gray-700 dark:text-white"
                }`
              }>
              <NavbarItem className="!text-inherit">{item.title}</NavbarItem>
            </NavLink>
          ))}
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${
                isActive
                  ? "font-bold text-primary-500 dark:text-primary-500"
                  : "text-gray-700 dark:text-white"
              }`
            }>
            <NavbarItem className="!text-inherit">Login</NavbarItem>
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `${
                isActive
                  ? "font-bold text-primary-500 dark:text-primary-500"
                  : "text-gray-700 dark:text-white"
              }`
            }>
            <NavbarItem className="!text-inherit">Register</NavbarItem>
          </NavLink>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};

const navItems = [
  { title: "Home", to: "/" },
  { title: "All Reviews", to: "/reviews" },
  { title: "Game WatchList", to: "/watch-list" },
];
