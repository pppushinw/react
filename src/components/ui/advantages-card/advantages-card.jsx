import React from "react";
import Title, { TitleSize } from "../title/title";
import { FeatureSection, FeatureHeader, FeatureImage, FeatureOwner, FeatureText }from "./style";

function AdvantagesCard({ owner, title, text, isNegative, image }) {
  return (
    <FeatureSection isNegative={isNegative}>
      <FeatureHeader className="feature__header">
        <FeatureImage
          className="feature__image"
          src={image}
          alt={title}
          width={52}
          height={52}
        />
        <div>
          <FeatureOwner isNegative={isNegative}>
            {owner}
          </FeatureOwner>
          <Title size={TitleSize.SMALL}>{title}</Title>
        </div>
      </FeatureHeader>
      <FeatureText
        className="feature__text"
        dangerouslySetInnerHTML={{ __html: text }}
      ></FeatureText>
    </FeatureSection>
  );
}

export default AdvantagesCard;
