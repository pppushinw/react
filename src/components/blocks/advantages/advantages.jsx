import React from "react";
import Title from "../../ui/title/title";
import AdvantagesCard from "../../ui/advantages-card/advantages-card";
import Button from "../../ui/button/button";
import { AdvantagesSection, AdvantagesWrapper, AdvantagesList } from "./style";


function Advantages({ features }) {
  return features && features.length ? (
    <AdvantagesSection>
      <AdvantagesWrapper>
        <Title as="h2">Почему фермерские продукты лучше?</Title>
        <AdvantagesList>
          {features.map((feature) => (
            <li className="advantages__item" key={feature.id}>
              <AdvantagesCard {...feature} />
            </li>
          ))}
        </AdvantagesList>
        <Button onClick={() => {console.log("123")}}>Купить</Button>
      </AdvantagesWrapper>
    </AdvantagesSection>
  ) : null;
}

export default Advantages;
