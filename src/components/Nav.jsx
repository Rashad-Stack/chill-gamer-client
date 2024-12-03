import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from "keep-react";

export const Nav = () => {
  return (
    <Navbar className="dark:bg-black border-none">
      <NavbarContainer>
        <NavbarBrand>
          <img src="logo.jpg" alt="keep" className="w-10 h-10" />
        </NavbarBrand>
        <NavbarList>
          <NavbarItem>Figma</NavbarItem>
          <NavbarItem>Documentation</NavbarItem>
          <NavbarItem>Blog</NavbarItem>
          <NavbarItem active>Get Started</NavbarItem>
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
          <NavbarItem>Figma</NavbarItem>
          <NavbarItem>Documentation</NavbarItem>
          <NavbarItem>Blog</NavbarItem>
          <NavbarItem active>Get Started</NavbarItem>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};
