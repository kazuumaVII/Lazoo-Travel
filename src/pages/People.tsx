import { useState } from "react";

export const People = () => {
  const [dotActive, setDotActive] = useState<number>(0);

  const tab = [
    {
      name: "1",
    },
    {
      name: "2",
    },
    {
      name: "3",
    },
    {
      name: "4",
    },
  ];

  console.log(tab.length, "iciiii");

  const getStyle = (index: number) => {
    if (dotActive === index) {
      return "top";
    }
    if (
      dotActive + 1 === index ||
      (dotActive === tab.length - 1 && index === 0)
    ) {
      return "back";
    }

    // if (dotActive === tab.length - 1) {
    //   // console.log("ichoch");
    // }
    else {
      return "disable";
    }
  };

  return (
    <div className="mainPeople">
      <div className="containerTitle">
        <h5>TESTIMONIALS</h5>
        <h1>What People Say About Us</h1>

        <div className="containerDotList">
          {tab.map((_, index) => (
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
        {tab.map((item, index) => (
          <span className={`${getStyle(index)} `}>{item.name}</span>
        ))}
      </div>
    </div>
  );
};
