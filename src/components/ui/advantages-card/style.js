import styled from "styled-components";
import {defaultTheme} from "../../../themes/default";

export const FeatureSection = styled.section`
  padding: 20px;
  box-sizing: border-box;
  width: 540px;
  min-height: 197px;
  background-color: ${(props) => props.isNegative ? props.theme.cardBackgroundColorDanger : props.theme.cardBackgroundColor};
`

export const FeatureHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  text-align: left;
`

export const FeatureImage = styled.img`
  margin-right: 20px;
`

export const FeatureNegative = styled.div`
  background-color: #FC7427;
`

export const FeatureText = styled.p`
  margin: 0;
`

export const FeatureOwner = styled.span`
  color: #ffffff;
  padding: 2px 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  background-color: ${(props) =>
          props.isNegative
                  ? props.theme.panelBackgroundColorDanger
                  : props.theme.panelBackgroundColor};
\`
`

export const FeatureOwnerNegative = styled.span`
  background-color: #f75531;
`

