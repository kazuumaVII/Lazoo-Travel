import { useState } from "react";

import { ButtonBubble } from "../components/Button";

import { ScrollRev } from "../utils";

import Traveler from "../../public/assets/images/travelerPlane.png";

import Polygon from "../../public/assets/icons/Polygon.svg";

export const About = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <section className="mainAbout" id="About">
      <div className="leftContainer">
        <ScrollRev delay={100} origin={"left"} distance="300px">
          <h3>Best Destinations around the world</h3>
        </ScrollRev>
        <ScrollRev delay={300} distance="200px">
          <h1>Travel, enjoy and live a new and full life</h1>
        </ScrollRev>
        <ScrollRev delay={800}>
          <p>
            Traveling is more than just moving from point A to point B. It's an
            invitation to experience new things, to encounter diverse cultures,
            and to marvel at the hidden treasures of our planet.
          </p>
        </ScrollRev>
        <div className="leftContainer__button">
          <ScrollRev delay={1000}>
            <ButtonBubble text="Find out more" />
          </ScrollRev>
          <ScrollRev delay={1000}>
            <div className="leftContainer__button__containerPlay">
              <button
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                <img src={Polygon} alt="" />
              </button>
              <h5 className={`${isHover ? "hover" : ""} `}>Play Demo</h5>
            </div>
          </ScrollRev>
        </div>
      </div>

      <ScrollRev className="containerImg" delay={500} duration={1200}>
        <div className="wrapperLol">
          <img className="travelerImg" src={Traveler} alt="" />
        </div>
      </ScrollRev>
    </section>
  );
};
