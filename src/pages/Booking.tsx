import { itemBooksData } from "../static";

import { ItemBooksProps } from "../types";

export const ItemText = (props: ItemBooksProps) => {
  const { icon, title, subtitle, color } = props;
  return (
    <div className="containerItemText">
      <span style={{ "--color": color } as React.CSSProperties}>
        <img src={icon} alt="" />
      </span>
      <div className="containerItemText__containerTitle">
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export const Booking = () => {
  return (
    <div className="mainBooking">
      <div className="mainBooking__containerText">
        <h4>Easy and Fast</h4>
        <h1>Book your next trip in 3 easy steps</h1>

        {itemBooksData.map((item, index) => (
          <ItemText
            key={index}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            color={item.color}
          />
        ))}
      </div>
      <div className="mainBooking__containerCards">
        <div className="mainBooking__containerCards__cards">
          <div className="mainBooking__containerCards__cards__containerImg"></div>

          <div className="mainBooking__containerCards__cards__containerText">
            <h5>Trip To Greece</h5>
            <p>14 - 29 June | by Robbin Lewis</p>
            <div className="mainBooking__containerCards__cards__containerText__iconList"></div>
            <div className="mainBooking__containerCards__cards__containerText__people">
              <p>24 people going</p>
            </div>
          </div>
        </div>
        <div className="mainBooking__containerCards__containerCardAnimation"></div>
      </div>
    </div>
  );
};
