import { MouseEvent, useState } from "react";

import { useActiveSection, useMediaQuery } from "../hooks";
import { HeaderProps } from "../types";

import { navData } from "../static";

import Lazoo from "../../public/assets/images/lazoo.png";

export const BurgerNav = (props: HeaderProps) => {
  const { homepageOverflowRef } = props;

  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const activeSection = useActiveSection(homepageOverflowRef);
  const isBurgerNAv = useMediaQuery("(max-width: 950px)");

  const isActive = (id: string) => {
    if (id === "About" && !activeSection) {
      return "active";
    } else {
      return id === activeSection ? "active" : "";
    }
  };

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();

    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setIsNavbarActive(false);
  };

  const Item = (props: { name: string }) => {
    const { name } = props;

    return (
      <li>
        <a
          className={`${isActive(name)}`}
          data-scroll={name}
          href={`#${name}`}
          onClick={(e) => handleNavClick(e, name)}
        >
          <hr className="top" />
          {name}
          <hr className="bottom" />
        </a>
      </li>
    );
  };

  return (
    <div
      className={`mainNavBurger ${isNavbarActive ? "activeStyle" : ""} ${
        isBurgerNAv ? "burgerNavStyle" : ""
      } `}
    >
      <img className="blurImg" src={Lazoo} alt="" />
      <div className="containerBlur"></div>
      <div
        className="hamburgerLines"
        onClick={() => setIsNavbarActive(!isNavbarActive)}
      >
        {Array.from(Array(3)).map((_, index) => (
          <span key={index} className={`line line${index + 1}`}></span>
        ))}
      </div>
      <div className="containerItems">
        {navData.map((item, index) => (
          <Item key={index} name={item.name} />
        ))}
      </div>
    </div>
  );
};
