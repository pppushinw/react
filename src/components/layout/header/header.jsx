import React from "react";
import Logo from "../../ui/logo/logo";
import Nav from "../../layout/nav/nav";
import {StyledHeader} from "./style";
function Header() {
  return (
    <StyledHeader className="header">
      <Logo />
      <Nav />
    </StyledHeader>
  );
}

export default Header;
