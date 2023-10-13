import { useState } from "react";

import { cardsPeopleData } from "../static";

export const People = () => {
  const [dotActive, setDotActive] = useState<number>(0);

  const getStyle = (index: number) => {
    if (dotActive === index) {
      return "top";
    }
    if (
      dotActive + 1 === index ||
      (dotActive === cardsPeopleData.length - 1 && index === 0)
    ) {
      return "back";
    } else {
      return "disable";
    }
  };

  const handleClick = (index: number) => {
    if (index === dotActive) {
      return;
    }
    if (dotActive === cardsPeopleData.length - 1) {
      setDotActive(0);
    } else {
      setDotActive(dotActive + 1);
    }
  };

  return (
    <div className="mainPeople">
      <div className="containerTitle">
        <h5>TESTIMONIALS</h5>
        <h1>What People Say About Us</h1>

        <div className="containerDotList">
          {cardsPeopleData.map((_, index) => (
            <span
              key={index}
              onClick={() => setDotActive(index)}
              className={`containerDot ${
                dotActive === index ? "activeStyle" : ""
              } `}
            ></span>
          ))}
        </div>
      </div>
      <div className="containerComment">
        {cardsPeopleData.map((item, index) => (
          <div
            className={`containerCardsComment ${getStyle(index)} `}
            key={index}
            onClick={() => handleClick(index)}
          >
            <div className="containerCards">
              <span>
                <img src={item.icon} alt="" />
              </span>
              <h5>{`"${item.comment}"`}</h5>
              <div className="containerBottom">
                <h4>{item.name}</h4>
                <p>{item.location}</p>
              </div>
            </div>
            {/* {item.name} */}
          </div>
        ))}
      </div>
    </div>
  );
};
