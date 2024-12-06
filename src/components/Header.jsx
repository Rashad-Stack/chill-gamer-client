import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from "keep-react";
import { NavLink, useLocation } from "react-router";
import { auth } from "../firebase/config";
import ProfileInfo from "./ProfileInfo";
import ThemeSwitcher from "./ThemeSwitcher ";

export default function Header() {
  const { state } = useLocation();
  const user = auth?.currentUser;

  return (
    <header className="dark:bg-dark">
      <div className="container lg:max-w-7xl mx-auto max-xl:px-4">
        <Navbar className="dark:bg-dark border-none">
          <NavbarContainer>
            <NavbarBrand className="flex items-center">
              <img
                src="/logo.jpg"
                alt="keep"
                className="w-7 h-7 md:w-8 md:h-8"
              />
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
                  <NavbarItem className="!text-inherit dark:hover:!text-white">
                    {item.title}
                  </NavbarItem>
                </NavLink>
              ))}

              {user ? (
                <NavLink
                  to={`/auth/logout?from=${state?.from || "/"}`}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "font-bold text-primary-500 dark:text-primary-500"
                        : "text-gray-700 dark:text-white"
                    }`
                  }>
                  <NavbarItem className="!text-inherit dark:hover:!text-white">
                    Logout
                  </NavbarItem>
                </NavLink>
              ) : (
                <>
                  <NavLink
                    to="/auth/login"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "font-bold text-primary-500 dark:text-primary-500"
                          : "text-gray-700 dark:text-white"
                      }`
                    }>
                    <NavbarItem className="!text-inherit dark:hover:!text-white">
                      Login
                    </NavbarItem>
                  </NavLink>
                  <NavLink
                    to="/auth/register"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "font-bold text-primary-500 dark:text-primary-500"
                          : "text-gray-700 dark:text-white"
                      }`
                    }>
                    <NavbarItem className="!text-inherit dark:hover:!text-white">
                      Register
                    </NavbarItem>
                  </NavLink>
                </>
              )}
            </NavbarList>
            <div className="flex items-center gap-2">
              {user && <ProfileInfo />}
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
                  <NavbarItem className="!text-inherit dark:hover:!text-white">
                    {item.title}
                  </NavbarItem>
                </NavLink>
              ))}
              {user && (
                <>
                  {" "}
                  <NavLink
                    to="/auth/login"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "font-bold text-primary-500 dark:text-primary-500"
                          : "text-gray-700 dark:text-white"
                      }`
                    }>
                    <NavbarItem className="!text-inherit dark:hover:!text-white">
                      Login
                    </NavbarItem>
                  </NavLink>
                  <NavLink
                    to="/auth/register"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "font-bold text-primary-500 dark:text-primary-500"
                          : "text-gray-700 dark:text-white"
                      }`
                    }>
                    <NavbarItem className="!text-inherit dark:hover:!text-white">
                      Register
                    </NavbarItem>
                  </NavLink>
                </>
              )}
              {user && (
                <NavLink
                  to="/auth/logout"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "font-bold text-primary-500 dark:text-primary-500"
                        : "text-gray-700 dark:text-white"
                    }`
                  }>
                  <NavbarItem className="!text-inherit dark:hover:!text-white">
                    Logout
                  </NavbarItem>
                </NavLink>
              )}
            </NavbarCollapse>
          </NavbarContainer>
        </Navbar>
      </div>
    </header>
  );
}
const navItems = [
  { title: "Home", to: "/" },
  { title: "All Reviews", to: "/reviews" },
  { title: "Add Review", to: "/add-review" },
  { title: "My Reviews", to: "/my-reviews" },
  { title: "Game WatchList", to: "/myWatchlist" },
];
