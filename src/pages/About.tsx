import { useState } from "react";

import { ButtonBubble } from "../components/Button";
import { useMediaQuery } from "../hooks";

import { ScrollRev } from "../utils";

import Traveler from "../../public/assets/images/traveler.png";
import Plane from "../../public/assets/images/plane.png";

import Polygon from "../../public/assets/icons/Polygon.svg";

export const About = () => {
  const [isHover, setIsHover] = useState(false);

  const tabFormat = useMediaQuery("(max-width: 1000px)");

  const ItemImg = () => {
    return (
      <ScrollRev className="containerImg" delay={1000} duration={2000}>
        <div className="wrapper">
          <img src={Plane} className="planeImg left" alt="" />
          <img className="travelerImg" src={Traveler} alt="" />
          <img src={Plane} className="planeImg right" alt="" />
        </div>
      </ScrollRev>
    );
  };

  return (
    <section className="mainAbout" id="About">
      <div className="leftContainer">
        <ScrollRev delay={500} origin={"left"} distance="100px">
          <h3>Best Destinations around the world</h3>
        </ScrollRev>
        <ScrollRev delay={1000} distance="100px">
          <h1>Travel, enjoy and live a new and full life</h1>
        </ScrollRev>
        <ScrollRev delay={1200}>
          <p>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
        </ScrollRev>
        <div className="leftContainer__button">
          <ScrollRev delay={1200}>
            <ButtonBubble text="Find out more" />
          </ScrollRev>
          <ScrollRev delay={1400}>
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

      {tabFormat ? (
        <ItemImg />
      ) : (
        <>
          <ItemImg />
        </>
      )}
    </section>
  );
};
