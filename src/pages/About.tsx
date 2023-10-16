import { useState } from "react";

import { ButtonBubble } from "../components/Button";
import { useMediaQuery } from "../hooks";

import { ScrollRev } from "../utils";

import Traveler from "../../public/assets/images/travelerPlane.svg";

import Polygon from "../../public/assets/icons/Polygon.svg";

export const About = () => {
  const [isHover, setIsHover] = useState(false);

  const tabFormat = useMediaQuery("(max-width: 1000px)");

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
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
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
