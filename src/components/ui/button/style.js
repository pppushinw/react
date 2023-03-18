import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #fc9b27;
  border: none;
  color: #ffffff;
  padding: 16.5px 97.5px;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  transition-timing-function: ease-out;
  transition-duration: 0.1s;
  
  &:hover {
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
    background-color: #FC7427;
  }
  
  &:active {
    box-shadow: none;
  }
`