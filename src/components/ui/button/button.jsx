import React from "react";
import {StyledButton} from "./style";
export default function Button({ children }) {

  return (
      <StyledButton>
        {children}
      </StyledButton>
  );
}