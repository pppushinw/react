import React from "react";
import Logo from "../../ui/logo/logo";
import {FooterSection, FooterCopyright} from "./style";

function Footer() {
  return (
    <FooterSection>
      <Logo />
      <FooterCopyright>Создано 2021</FooterCopyright>
    </FooterSection>
  );
}

export default Footer;
