import { useState } from "react";

import { ScrollRev } from "../utils";

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
        <ScrollRev delay={500} origin={"left"} distance="300px">
          <h5>TESTIMONIALS</h5>
        </ScrollRev>
        <ScrollRev delay={500} origin={"right"} distance="300px">
          <h1>What People Say About Us</h1>
        </ScrollRev>

        <div className="containerDotList">
          {cardsPeopleData.map((_, index) => (
            <ScrollRev
              className="containerDot"
              delay={500 * (index + 1)}
              key={index}
            >
              <div
                className={`wrapper ${
                  dotActive === index ? "activeStyle" : ""
                } `}
                onClick={() => setDotActive(index)}
              ></div>
            </ScrollRev>
          ))}
        </div>
      </div>
      <ScrollRev className="containerComment" delay={2000} duration={2500}>
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
      </ScrollRev>
    </div>
  );
};
