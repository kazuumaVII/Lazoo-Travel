import { useEffect, useState } from "react";

import { itemBooksData } from "../static";
import { ItemBooksProps } from "../types";

import { ScrollRev } from "../utils";

import CardsBooking from "../../public/assets/images/cardsBooking.png";
import EllipseBlue from "../../public/assets/images/ellipseBlue.png";
import CitySmallCard from "../../public/assets/images/citySmallCard.png";

import Forest from "../../public/assets/icons/forest.svg";
import Heart from "../../public/assets/icons/heart.svg";
import Map from "../../public/assets/icons/map.svg";
import Building from "../../public/assets/icons/building.svg";
import Mouse from "../../public/assets/icons/mouse_2.svg";

export const ItemText = (props: ItemBooksProps) => {
  const { icon, title, subtitle, color, index } = props;
  return (
    <div className="containerItemText">
      <ScrollRev delay={900 * (index + 1)} duration={1000}>
        <span style={{ "--color": color } as React.CSSProperties}>
          <img src={icon} alt="" />
        </span>
      </ScrollRev>

      <ScrollRev
        className="containerItemText__containerTitle"
        delay={300 * (index + 1)}
        duration={1000}
        origin={"left"}
        distance="50px"
      >
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </ScrollRev>
    </div>
  );
};

export const ItemIcon = ({ icon }: { icon: string }) => {
  return (
    <span className="containerIcon">
      <img src={icon} alt="" />
    </span>
  );
};

export const Booking = () => {
  const [percentage, setPercentage] = useState(0);
  const [isHover, setIsHover] = useState(false);

  //TODO: save se bail pour plus tard
  const increasePercentage = () => {
    setPercentage((prevPercentage) => {
      if (prevPercentage + 1 <= 100) {
        return prevPercentage + 1;
      }
      return 100;
    });
  };

  const decreasePercentage = () => {
    setPercentage((prevPercentage) => {
      if (prevPercentage - 1 >= 0) {
        return prevPercentage - 1;
      }
      return 0;
    });
  };

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;

    if (isHover) {
      timer = setInterval(increasePercentage, 20);
    } else {
      timer = setInterval(decreasePercentage, 20);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isHover]);

  return (
    <section className="mainBooking" id="Destination">
      <div className="mainBooking__containerText">
        <ScrollRev delay={500} origin={"right"} distance="300px">
          <h4>EASY AND FAST</h4>
        </ScrollRev>
        <ScrollRev delay={500} origin={"left"} distance="300px">
          <h1>Book your next trip in 3 easy steps</h1>
        </ScrollRev>

        {itemBooksData.map((item, index) => (
          <ItemText
            index={index}
            key={index}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            color={item.color}
          />
        ))}
      </div>
      <ScrollRev
        className="mainBooking__containerCards"
        delay={1000}
        duration={1500}
      >
        <img className="ellipseImg" src={EllipseBlue} alt="" />
        <div className="mainBooking__containerCards__cards">
          <div className="mainBooking__containerCards__cards__containerImg">
            <img src={CardsBooking} alt="" />
          </div>

          <div className="mainBooking__containerCards__cards__containerText">
            <h5>Trip To Greece</h5>
            <p>14 - 29 June | by Robbin Lewis</p>
            <div className="mainBooking__containerCards__cards__containerText__iconList">
              <ItemIcon icon={Forest} />
              <ItemIcon icon={Map} />
              <ItemIcon icon={Mouse} />
            </div>
            <div className="mainBooking__containerCards__cards__containerText__people">
              <div className="mainBooking__containerCards__cards__containerText__people__left">
                <img src={Building} alt="" />
                <p>24 people going</p>
              </div>
              <img src={Heart} alt="" />
            </div>
          </div>
        </div>
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="mainBooking__containerCards__containerCardAnimation"
        >
          <ScrollRev
            className="wrapper"
            delay={2000}
            duration={1000}
            origin={"left"}
            distance="300px"
          >
            <img src={CitySmallCard} alt="" />
            <div className="mainBooking__containerCards__containerCardAnimation__containerText">
              <div className="mainBooking__containerCards__containerCardAnimation__containerText__title">
                <p>Ongoing</p>
                <h5>Trip to rome</h5>
              </div>
              <div className="mainBooking__containerCards__containerCardAnimation__containerText__containerProgressBar">
                <p>
                  <span>{Math.round(percentage)}%</span>
                  {isHover || percentage > 0 ? "completed" : "Hover me"}
                </p>
                <div className="mainBooking__containerCards__containerCardAnimation__containerText__containerProgressBar__progressBar">
                  <div
                    style={
                      { "--width": `${percentage}%` } as React.CSSProperties
                    }
                    className="filler lala"
                  ></div>
                </div>
              </div>
            </div>
          </ScrollRev>
        </div>
      </ScrollRev>
    </section>
  );
};
