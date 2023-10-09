import { cardsData, cardsDestData } from "../static";
import { CardProps, CardDestProps } from "../types";

import Mouse from "../../public/assets/icons/mouse.svg";

export const ItemCard = (props: CardProps) => {
  const { icon, title, subtitle } = props;

  return (
    <div className="mainItemCard">
      <div className="mainItemCard__card">
        <div className="mainItemCard__card__wrapperImg">
          <img src={icon} alt="" />
        </div>
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export const ItemCardDest = (props: CardDestProps) => {
  const { image, place, price, time } = props;

  return (
    <div className="mainItemCardDest">
      <img className="cityImg" src={image} alt="" />
      <div className="mainItemCardDest__text">
        <div className="mainItemCardDest__text__top">
          <p>{place}</p>
          <p>{price}</p>
        </div>
        <div className="mainItemCardDest__text__bottom">
          <img className="mouseSvg" src={Mouse} alt="" />
          <p>{`${time} Days trip`}</p>
        </div>
      </div>
    </div>
  );
};

export const Category = () => {
  return (
    <div className="mainCategory">
      <div className="containerServices">
        <div className="containerServices__containerTitle">
          <h5 className="topSubtitle">CATEGORY</h5>
          <h1 className="topTitle">We Offer Best Services</h1>
        </div>
        <div className="containerServices__containerCardsList">
          {cardsData.map((item, index) => (
            <ItemCard
              key={index}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </div>
      <div className="containerDestinations">
        <div className="containerDestinations__containerTitle">
          <h5 className="topSubtitle">TOP SELLING</h5>
          <h1 className="topTitle">Top Destinations</h1>
        </div>
        <div className="containerDestinations__containerCardsList">
          {cardsDestData.map((item, index) => (
            <ItemCardDest
              key={index}
              image={item.image}
              place={item.place}
              price={item.price}
              time={item.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
