import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import { ReactComponent as AboutImage } from "../../../assets/about.svg";
import { StyledAbout, StyledAboutWrapper, StyledAboutInfo, StyledAboutImageWrapper, StyledAboutText } from "./style";
import Counter from "../../ui/counter/counter";

function About() {
  return (
    <StyledAbout>
      <StyledAboutWrapper>
        <StyledAboutInfo>
          <Title size={TitleSize.BIG}>
            {" "}
            Магазин фермерских продуктов с доставкой
          </Title>
          <StyledAboutText>
            Все продукты изготавливаются под заказ. Фермеры начинают готовить
            продукты за день до отправки заказа клиентам. Именно поэтому мы
            принимаем заказы заранее и доставляем продукты максимально свежими.
            <Counter initValue={1} />
          </StyledAboutText>
        </StyledAboutInfo>
        <StyledAboutImageWrapper>
          <AboutImage alt="Картинка человека с продуктами" />
        </StyledAboutImageWrapper>
      </StyledAboutWrapper>
    </StyledAbout>
  );
}

export default About;
