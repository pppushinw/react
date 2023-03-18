import styled from "styled-components";

export const ModalWrapper = styled.div`
  max-width: 600px;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  background-color: grey;
  padding: 20px;
  z-index: 20;
  text-align: center;
  display: none;
`

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 150%;
  color: lightyellow;
  font-weight: bold;
`

export const ModalActive = styled(ModalWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`