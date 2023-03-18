import React from "react";
import {StyledLogoLink, StyledLogoText} from "./style";
import { ReactComponent as LogoImage } from "../../../assets/logo.svg";

export default function Logo() {
  return (
    <StyledLogoLink href="/" className="logo__link">
      <LogoImage alt="Логотип" />
      <StyledLogoText className="logo__text">Фермерские продукты</StyledLogoText>
    </StyledLogoLink>
  );
}
