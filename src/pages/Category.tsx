import { cardsData, cardsDestData } from "../static";
import { CardProps, CardDestProps } from "../types";

import { ScrollRev } from "../utils";

import Mouse from "../../public/assets/icons/mouse.svg";

export const ItemCard = (props: CardProps) => {
  const { icon, title, subtitle, index } = props;

  return (
    <ScrollRev
      className="mainItemCard"
      delay={500 * (index + 1)}
      duration={1000}
    >
      <div className="mainItemCard__card">
        <div className="mainItemCard__card__wrapperImg">
          <img src={icon} alt="" />
        </div>
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </div>
    </ScrollRev>
  );
};

export const ItemCardDest = (props: CardDestProps) => {
  const { image, place, price, time, index } = props;

  return (
    <ScrollRev
      className="mainCardsMouseTracker"
      delay={500 * (index + 1)}
      origin={index % 2 === 0 ? "top" : "bottom"}
      duration={1000}
      distance="100px"
    >
      <div className="canvas">
        {Array.from(Array(25)).map((_, index) => (
          <div key={index} className={`tracker tr-${index + 1}`}></div>
        ))}

        <div id="card">
          <div className="mainItemCardDest__wrapper">
            <img className="cityImg" src={image} alt="" />
          </div>
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
      </div>
    </ScrollRev>
  );
};

export const Category = () => {
  return (
    <section className="mainCategory" id="Selling">
      <div className="containerServices">
        <div className="containerServices__containerTitle">
          <ScrollRev
            delay={500}
            origin={"left"}
            duration={1000}
            distance="300px"
          >
            <h5 className="topSubtitle">CATEGORY</h5>
          </ScrollRev>
          <ScrollRev
            delay={500}
            origin={"right"}
            duration={1000}
            distance="300px"
          >
            <h1 className="topTitle">We Offer Best Services</h1>
          </ScrollRev>
        </div>
        <div className="containerServices__containerCardsList">
          {cardsData.map((item, index) => (
            <ItemCard
              key={index}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className="containerDestinations">
        <div className="containerDestinations__containerTitle">
          <ScrollRev
            delay={500}
            origin={"left"}
            duration={1000}
            distance="300px"
          >
            <h5 className="topSubtitle">TOP SELLING</h5>
          </ScrollRev>

          <ScrollRev
            delay={500}
            origin={"right"}
            duration={1000}
            distance="300px"
          >
            <h1 className="topTitle">Top Destinations</h1>
          </ScrollRev>
        </div>
        <div className="containerDestinations__containerCardsList">
          {cardsDestData.map((item, index) => (
            <ItemCardDest
              key={index}
              index={index}
              image={item.image}
              place={item.place}
              price={item.price}
              time={item.time}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
