import { useState } from "react";

import { ButtonBubble } from "../components/Button";
import { useMediaQuery } from "../hooks";

import Traveler from "../../public/assets/images/traveler.png";
import Plane from "../../public/assets/images/plane.png";

import Polygon from "../../public/assets/icons/Polygon.svg";

export const About = () => {
  const [isHover, setIsHover] = useState(false);

  const tabFormat = useMediaQuery("(max-width: 1000px)");

  const ItemImg = () => {
    return (
      <>
        <img src={Plane} className="planeImg left" alt="" />
        <img className="travelerImg" src={Traveler} alt="" />
        <img src={Plane} className="planeImg right" alt="" />
      </>
    );
  };

  return (
    <section className="mainAbout" id="About">
      <div className="leftContainer">
        <h3>Best Destinations around the world</h3>
        <h1>Travel, enjoy and live a new and full life</h1>
        <p>
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="leftContainer__button">
          <ButtonBubble text="Find out more" />
          <div className="leftContainer__button__containerPlay">
            <button
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <img src={Polygon} alt="" />
            </button>
            <h5 className={`${isHover ? "hover" : ""} `}>Play Demo</h5>
          </div>
        </div>
      </div>

      {tabFormat ? (
        <div className="bottomContainer">
          <ItemImg />
        </div>
      ) : (
        <>
          <ItemImg />
        </>
      )}
    </section>
  );
};
